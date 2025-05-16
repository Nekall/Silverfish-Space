export const parseMinecraftStats = (rawData) => {
  const { stats } = rawData;

  if (!stats) {
    console.error("Format de données invalide");
    return null;
  }

  const customStats = stats["minecraft:custom"] || {};

  const playTimeInTicks = customStats["minecraft:play_time"] || 0;
  const playTimeInHours = Math.round((playTimeInTicks / 20 / 3600) * 10) / 10;

  const timeSinceDeathTicks = customStats["minecraft:time_since_death"] || 0;
  const timeSinceRestTicks = customStats["minecraft:time_since_rest"] || 0;

  const mainStats = {
    playTime: {
      ticks: playTimeInTicks,
      seconds: Math.round(playTimeInTicks / 20),
      minutes: Math.round(playTimeInTicks / (20 * 60)),
      hours: playTimeInHours,
    },
    deaths: customStats["minecraft:deaths"] || 0,
    jumps: customStats["minecraft:jump"] || 0,

    timeSinceDeath: {
      ticks: timeSinceDeathTicks,
      seconds: Math.round(timeSinceDeathTicks / 20),
      minutes: Math.round(timeSinceDeathTicks / (20 * 60)),
      hours: Math.round((timeSinceDeathTicks / 20 / 3600) * 10) / 10,
    },

    timeSinceRest: {
      ticks: timeSinceRestTicks,
      seconds: Math.round(timeSinceRestTicks / 20),
      minutes: Math.round(timeSinceRestTicks / (20 * 60)),
      hours: Math.round((timeSinceRestTicks / 20 / 3600) * 10) / 10,
    },

    sleepInBed: customStats["minecraft:sleep_in_bed"] || 0,

    distance: {
      walked: Math.round((customStats["minecraft:walk_one_cm"] || 0) / 100),
      sprinted: Math.round((customStats["minecraft:sprint_one_cm"] || 0) / 100),
      swum: Math.round((customStats["minecraft:swim_one_cm"] || 0) / 100),
      fallen: Math.round((customStats["minecraft:fall_one_cm"] || 0) / 100),
      climbed: Math.round((customStats["minecraft:climb_one_cm"] || 0) / 100),
      flown: Math.round((customStats["minecraft:fly_one_cm"] || 0) / 100),
      boated: Math.round((customStats["minecraft:boat_one_cm"] || 0) / 100),
      horse: Math.round((customStats["minecraft:horse_one_cm"] || 0) / 100),
      walkOnWater: Math.round(
        (customStats["minecraft:walk_on_water_one_cm"] || 0) / 100
      ),
      walkUnderWater: Math.round(
        (customStats["minecraft:walk_under_water_one_cm"] || 0) / 100
      ),
      total: Math.round(
        (customStats["minecraft:walk_one_cm"] || 0) / 100 +
          (customStats["minecraft:sprint_one_cm"] || 0) / 100 +
          (customStats["minecraft:swim_one_cm"] || 0) / 100 +
          (customStats["minecraft:fly_one_cm"] || 0) / 100 +
          (customStats["minecraft:boat_one_cm"] || 0) / 100 +
          (customStats["minecraft:horse_one_cm"] || 0) / 100
      ),
    },

    damageTaken: customStats["minecraft:damage_taken"] || 0,
    damageDealt: customStats["minecraft:damage_dealt"] || 0,
    damageBlockedByShield:
      customStats["minecraft:damage_blocked_by_shield"] || 0,
    mobKills: customStats["minecraft:mob_kills"] || 0,

    interactions: {
      craftingTable: customStats["minecraft:interact_with_crafting_table"] || 0,
      furnace: customStats["minecraft:interact_with_furnace"] || 0,
      blastFurnace: customStats["minecraft:interact_with_blast_furnace"] || 0,
      smoker: customStats["minecraft:interact_with_smoker"] || 0,
      anvil: customStats["minecraft:interact_with_anvil"] || 0,
      enchantItem: customStats["minecraft:enchant_item"] || 0,
      brewingstand: customStats["minecraft:interact_with_brewingstand"] || 0,
      beacon: customStats["minecraft:interact_with_beacon"] || 0,
      smithingTable: customStats["minecraft:interact_with_smithing_table"] || 0,
      grindstone: customStats["minecraft:interact_with_grindstone"] || 0,
      openChest: customStats["minecraft:open_chest"] || 0,
      openBarrel: customStats["minecraft:open_barrel"] || 0,
      openEnderchest: customStats["minecraft:open_enderchest"] || 0,
      openShulkerBox: customStats["minecraft:open_shulker_box"] || 0,
      fishCaught: customStats["minecraft:fish_caught"] || 0,
      talkedToVillager: customStats["minecraft:talked_to_villager"] || 0,
      tradedWithVillager: customStats["minecraft:traded_with_villager"] || 0,
      animalsBred: customStats["minecraft:animals_bred"] || 0,
    },

    totals: {
      itemsPickedUp: Object.values(stats["minecraft:picked_up"] || {}).reduce(
        (sum, val) => sum + val,
        0
      ),
      itemsDropped: Object.values(stats["minecraft:dropped"] || {}).reduce(
        (sum, val) => sum + val,
        0
      ),
      itemsBroken: Object.values(stats["minecraft:broken"] || {}).reduce(
        (sum, val) => sum + val,
        0
      ),
      itemsCrafted: Object.values(stats["minecraft:crafted"] || {}).reduce(
        (sum, val) => sum + val,
        0
      ),
      itemsUsed: Object.values(stats["minecraft:used"] || {}).reduce(
        (sum, val) => sum + val,
        0
      ),
      blocksMined: Object.values(stats["minecraft:mined"] || {}).reduce(
        (sum, val) => sum + val,
        0
      ),
      entitiesKilled: Object.values(stats["minecraft:killed"] || {}).reduce(
        (sum, val) => sum + val,
        0
      ),
    },

    topMined: getTopItems(stats["minecraft:mined"], 5),

    topCrafted: getTopItems(stats["minecraft:crafted"], 5),

    topUsed: getTopItems(stats["minecraft:used"], 5),

    topPickedUp: getTopItems(stats["minecraft:picked_up"], 5),
  };

  console.log("Stats :", mainStats);
  return mainStats;
};

const getTopItems = (categoryData, limit = 5) => {
  if (!categoryData) return [];

  return Object.entries(categoryData)
    .map(([key, value]) => ({
      name: formatItemName(key),
      value: value,
      rawName: key,
    }))
    .sort((a, b) => b.value - a.value)
    .slice(0, limit);
};

const formatItemName = (name) => {
  if (!name) return "";
  return name
    .replace("minecraft:", "")
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
