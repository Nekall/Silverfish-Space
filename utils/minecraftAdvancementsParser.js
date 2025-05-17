export const parseMinecraftAdvancements = (advancementsData) => {
  if (!advancementsData) {
    console.error("Invalid data format");
    return null;
  }

  const categories = {
    story: {
      name: "Story",
      description: "Main game progression",
      total: 0,
      completed: 0,
      advancements: {},
    },
    nether: {
      name: "Nether",
      description: "Nether exploration",
      total: 0,
      completed: 0,
      advancements: {},
    },
    adventure: {
      name: "Adventure",
      description: "Exploration and combat",
      total: 0,
      completed: 0,
      advancements: {},
    },
    husbandry: {
      name: "Husbandry",
      description: "Animals and farming",
      total: 0,
      completed: 0,
      advancements: {},
    },
    end: {
      name: "End",
      description: "End progression",
      total: 0,
      completed: 0,
      advancements: {},
    },
    custom: {
      name: "Custom",
      description: "Mod/datapack advancements",
      total: 0,
      completed: 0,
      advancements: {},
    },
  };

  for (const [key, value] of Object.entries(advancementsData)) {
    if (
      key === "DataVersion" ||
      key.startsWith("minecraft:recipes") ||
      key === "vanillatweaks:anti_enderman_grief" ||
      key === "vanillatweaks:root"
    ) {
      continue;
    }

    const parts = key.split(":");
    const namespace = parts[0];

    let category = "custom";
    let advancementName = key.replace(/^[^:]+:/, "");

    if (namespace === "minecraft") {
      if (advancementName.startsWith("story/")) {
        category = "story";
        advancementName = advancementName.replace("story/", "");
      } else if (advancementName.startsWith("nether/")) {
        category = "nether";
        advancementName = advancementName.replace("nether/", "");
      } else if (advancementName.startsWith("adventure/")) {
        category = "adventure";
        advancementName = advancementName.replace("adventure/", "");
      } else if (advancementName.startsWith("husbandry/")) {
        category = "husbandry";
        advancementName = advancementName.replace("husbandry/", "");
      } else if (advancementName.startsWith("end/")) {
        category = "end";
        advancementName = advancementName.replace("end/", "");
      }
    }

    const formattedName = formatAdvancementName(advancementName);

    const criteria = value.criteria || {};
    const criteriaCount = Object.keys(criteria).length;
    const isDone = value.done || false;

    let latestDate = null;
    Object.values(criteria).forEach((dateStr) => {
      const date = new Date(dateStr);
      if (!latestDate || date > latestDate) {
        latestDate = date;
      }
    });

    const advancementObj = {
      id: key,
      name: formattedName,
      done: isDone,
      criteria: {
        total: criteriaCount,
        completed: Object.keys(criteria).length,
        details: criteria,
      },
      lastUpdated: latestDate,
      formattedDate: latestDate ? formatDate(latestDate) : null,
    };

    if (isCollectionAdvancement(advancementName)) {
      const collectionTotal = getCollectionTotal(advancementName);
      advancementObj.progress = {
        completed: Object.keys(criteria).length,
        total: collectionTotal,
        percentage: calculatePercentage(
          Object.keys(criteria).length,
          collectionTotal
        ),
      };
    }

    categories[category].advancements[advancementName] = advancementObj;
    categories[category].total++;
    if (isDone) {
      categories[category].completed++;
    }
  }

  const totalAdvancements = Object.values(categories).reduce(
    (sum, cat) => sum + cat.total,
    0
  );
  const completedAdvancements = Object.values(categories).reduce(
    (sum, cat) => sum + cat.completed,
    0
  );

  const activeCategories = Object.values(categories).filter(
    (cat) => cat.total > 0
  );

  const summary = {
    totalAdvancements,
    completedAdvancements,
    percentage: calculatePercentage(completedAdvancements, totalAdvancements),
    activeCategories: activeCategories.length,
  };

  for (const category of Object.values(categories)) {
    if (category.total > 0) {
      category.percentage = calculatePercentage(
        category.completed,
        category.total
      );
    } else {
      category.percentage = 0;
    }
  }

  const recentAdvancements = [];
  for (const category of Object.values(categories)) {
    for (const advancement of Object.values(category.advancements)) {
      if (advancement.done && advancement.lastUpdated) {
        recentAdvancements.push({
          name: advancement.name,
          category: category.name,
          date: advancement.lastUpdated,
          formattedDate: advancement.formattedDate,
        });
      }
    }
  }

  recentAdvancements.sort((a, b) => b.date - a.date);

  const collections = {
    biomes: processCollection("adventuring_time", categories),
    mobs: processCollection("kill_all_mobs", categories),
    foods: processCollection("balanced_diet", categories),
    animals: processCollection("bred_all_animals", categories),
    netherBiomes: processCollection("explore_nether", categories),
  };

  return {
    summary,
    categories,
    recentAdvancements: recentAdvancements.slice(0, 5),
    collections,
  };
};

const processCollection = (advancementName, categories) => {
  let category, advObj;

  for (const [catKey, catValue] of Object.entries(categories)) {
    if (catValue.advancements[advancementName]) {
      category = catKey;
      advObj = catValue.advancements[advancementName];
      break;
    }
  }

  if (!advObj) return null;

  const items = Object.keys(advObj.criteria.details).map((key) => {
    let name = key.replace("minecraft:", "");
    return formatCollectionItemName(name);
  });

  return {
    name: advObj.name,
    completed: advObj.criteria.completed,
    total: getCollectionTotal(advancementName),
    percentage: calculatePercentage(
      advObj.criteria.completed,
      getCollectionTotal(advancementName)
    ),
    done: advObj.done,
    items: items,
  };
};

const formatCollectionItemName = (name) => {
  if (!name) return "";

  return name
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const getCollectionTotal = (advancementName) => {
  const totals = {
    balanced_diet: 40,
    adventuring_time: 54,
    kill_all_mobs: 37,
    bred_all_animals: 25,
    explore_nether: 5,
  };

  return totals[advancementName] || 0;
};

const isCollectionAdvancement = (advancementName) => {
  const collectionAdvancements = [
    "adventuring_time",
    "balanced_diet",
    "kill_all_mobs",
    "bred_all_animals",
    "explore_nether",
  ];

  return collectionAdvancements.includes(advancementName);
};

const formatAdvancementName = (name) => {
  if (!name) return "";

  const formattedName = name
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return formattedName;
};

const calculatePercentage = (completed, total) => {
  if (total === 0) return 0;
  return Math.round((completed / total) * 100);
};

const formatDate = (date) => {
  if (!date) return null;

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${day}/${month}/${year} ${hours}:${minutes}`;
};
