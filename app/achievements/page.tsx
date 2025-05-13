"use client";
import { useState, useEffect } from "react";

// Types
type Achievement = {
  done: boolean;
};

type CategoryStats = {
  total: number;
  completed: number;
  percentage: string;
};

type PlayerStats = {
  total: number;
  completed: number;
  percentage: string;
  categories: Record<string, CategoryStats>;
};

type PlayersStats = Record<string, PlayerStats>;

// Data
import _Jok_ from "../../data/advancements/92a5948f-b552-46ad-b92b-1f17c7e062c2.json";
import LilNeka from "../../data/advancements/405f1f09-4c9e-49d0-992b-7bddb8d19e16.json";
import Leone_e from "../../data/advancements/9d60c4d3-b472-4420-8215-60621cabdfc1.json";
import Merionis from "../../data/advancements/bbd3df60-4062-46fe-8837-8ab02402971a.json";
import Zukku_tv from "../../data/advancements/cef4d159-40af-45bd-a594-ab839094ad2f.json";
import Bak_HatamHa from "../../data/advancements/d0c9e959-bbae-45e9-9ccb-62931f4b218d.json";

// Components
import Button from "@/components/button";

// Styles
import styles from "./page.module.css";

const Achievements = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [playersStats, setPlayersStats] = useState<PlayersStats>({});

  const dataPlayers = {
    _Jok_: _Jok_ as unknown as Record<string, Achievement>,
    LilNeka: LilNeka as unknown as Record<string, Achievement>,
    Leone_e: Leone_e as unknown as Record<string, Achievement>,
    Merionis: Merionis as unknown as Record<string, Achievement>,
    Zukku_tv: Zukku_tv as unknown as Record<string, Achievement>,
    Bak_HatamHa: Bak_HatamHa as unknown as Record<string, Achievement>,
  };

  const calculateStats = (data: Record<string, Achievement>): PlayerStats => {
    const stats: PlayerStats = {
      total: 122,
      completed: 0,
      percentage: "0",
      categories: {},
    };

    const ignoredCategories = [
      "minecraft:recipes",
      "vanillatweaks:anti_enderman_grief",
      "vanillatweaks:root",
    ];

    Object.entries(data).forEach(([key, achievement]) => {
      const category = key.split("/")[0];

      if (ignoredCategories.includes(category)) return;

      if (!stats.categories[category]) {
        stats.categories[category] = {
          total: 0,
          completed: 0,
          percentage: "0",
        };
      }

      stats.categories[category].total++;

      if (achievement.done) {
        stats.completed++;
        stats.categories[category].completed++;
      }
    });

    stats.percentage = ((stats.completed / stats.total) * 100).toFixed(2);

    Object.keys(stats.categories).forEach((category) => {
      const cat = stats.categories[category];
      cat.percentage = ((cat.completed / cat.total) * 100).toFixed(2);
    });

    return stats;
  };

  useEffect(() => {
    const parseAchievements = async () => {
      try {
        const playersData: PlayersStats = {};

        Object.entries(dataPlayers).forEach(([playerName, playerData]) => {
          playersData[playerName] = calculateStats(playerData);
        });

        setPlayersStats(playersData);
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    };

    parseAchievements();
  }, []);

  return (
    <div className={styles.achievements}>
      <div className={styles.title}>
        <h1>Achievements</h1>
      </div>
      <div className={styles.main}>
        {loading ? (
          <div className={styles.scrollable_section}>Loading...</div>
        ) : (
          <div className={styles.scrollable_section}>
            {Object.entries(playersStats).map(([playerName, playerStats]) => (
              <div key={playerName}>
                <h4>{playerName}</h4>
                <p>
                  Completed: {playerStats.completed}/{playerStats.total} |{" "}
                  {playerStats.percentage}%
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={styles.menu}>
        <Button path={"/"} text={"Back"} size="small" />
      </div>
    </div>
  );
};

export default Achievements;
