/* eslint-disable */

"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Types
type CategoryStats = {
  total: number;
  completed: number;
  percentage?: number;
  name: string;
  description: string;
  advancements: Record<string, AdvancementItem>;
};

type AdvancementItem = {
  id: string;
  name: string;
  done: boolean;
  formattedDate: string;
};

type ParsedAdvancement = {
  summary: {
    activeCategories: number;
    completedAdvancements: number;
    percentage?: number;
    totalAdvancements: number;
  };
  categories: Record<string, CategoryStats>;
  recentAdvancements: {
    name: string;
    formattedDate: string;
    category: string;
  }[];
};

// Utils
import { parseMinecraftAdvancements } from "@/utils/minecraftAdvancementsParser";

// Data
import _Jok_ from "../../data/advancements/92a5948f-b552-46ad-b92b-1f17c7e062c2.json";
import LilNeka from "../../data/advancements/405f1f09-4c9e-49d0-992b-7bddb8d19e16.json";
import Leone_e from "../../data/advancements/9d60c4d3-b472-4420-8215-60621cabdfc1.json";
import Merionis from "../../data/advancements/bbd3df60-4062-46fe-8837-8ab02402971a.json";
import Zukku_tv from "../../data/advancements/cef4d159-40af-45bd-a594-ab839094ad2f.json";
import Bak_HatamHa from "../../data/advancements/d0c9e959-bbae-45e9-9ccb-62931f4b218d.json";
import players from "../../data/whitelist.json";

// Components
import Button from "@/components/button";

// Styles
import styles from "./page.module.css";

// Player data mapping
const PLAYER_DATA: any = {
  _Jok_,
  LilNeka,
  Leone_e,
  Merionis,
  Zukku_tv,
  Bak_HatamHa,
};

const Advancements = () => {
  const router = useRouter();
  const [selectedPlayer, setSelectedPlayer] = useState("_Jok_");
  const [selectedAdvancements, setSelectedAdvancements] =
    useState<ParsedAdvancement | null>(null);
  const [selectedCat, setSelectedCat] = useState("");
  const [error, setError] = useState(false);

  const handlePlayerSelect = (username: string) => {
    setSelectedPlayer(username);
    setSelectedCat("");

    if (PLAYER_DATA[username]) {
      setSelectedAdvancements(
        parseMinecraftAdvancements(PLAYER_DATA[username])
      );
      setError(false);
    } else {
      setSelectedAdvancements(null);
      setError(true);
    }
  };

  useEffect(() => {
    if (selectedPlayer && PLAYER_DATA[selectedPlayer]) {
      const advancements: any = parseMinecraftAdvancements(
        PLAYER_DATA[selectedPlayer]
      );
      setSelectedAdvancements(advancements);
      setError(false);
    } else {
      setError(true);
    }
  }, [selectedPlayer]);

  const play = () => {
    const audio = new Audio("/sounds/minecraft_click.mp3");
    audio.volume = 0.2;
    audio.play().catch((error) => {
      console.error("Error playing sound: ", error);
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        router.push("/");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const categories = [
    { id: "adventure", title: "Adventure" },
    { id: "husbandry", title: "Husbandry" },
    { id: "story", title: "Minecraft" },
    { id: "nether", title: "Nether" },
    { id: "end", title: "The End" },
  ];

  return (
    <div className={styles.advancements}>
      <div className={styles.title}>
        <h1>Advancements</h1>
      </div>

      <div className={styles.main}>
        <div className={styles.scrollable_sections}>
          <div className={styles.players}>
            <ul>
              {players.map(({ name, uuid }) => (
                <li
                  key={`${name}-card`}
                  className={styles.player_list}
                  title={uuid}
                >
                  <button
                    onClick={() => handlePlayerSelect(name)}
                    className={`${styles.player_card} ${
                      selectedPlayer === name ? styles.active : ""
                    }`}
                  >
                    <div className={styles.player_head}>
                      <Image
                        src={`https://mineskin.eu/helm/${name}/100.png`}
                        alt={`Minecraft head of ${name}`}
                        width={65}
                        height={65}
                        priority
                        quality={100}
                      />
                    </div>
                    <p>{name}</p>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.stats_section}>
            {selectedAdvancements ? (
              <>
                <div className={styles.selected_player}>
                  <div className={styles.avatar}>
                    <Image
                      src={`https://mineskin.eu/helm/${selectedPlayer}/100.png`}
                      alt={`Minecraft head of ${selectedPlayer}`}
                      width={75}
                      height={75}
                      priority
                      quality={100}
                    />
                  </div>
                  <div className={styles.username}>
                    <p>{selectedPlayer}</p>
                  </div>
                </div>

                <div className={styles.stats}>
                  <div className={styles.menu_advancements}>
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        className={`${styles.cat_btn} ${
                          selectedCat === category.id ? styles.cat_active : ""
                        }`}
                        title={category.title}
                        onClick={() => {
                          setSelectedCat(category.id);
                        }}
                        onMouseDown={() => {
                          play();
                        }}
                        aria-label={`Select ${category.title} category`}
                      />
                    ))}
                  </div>

                  {selectedCat ? (
                    <div className={styles.display_stats}>
                      <h2
                        title={
                          selectedAdvancements.categories[selectedCat]
                            .description
                        }
                      >
                        {selectedAdvancements.categories[selectedCat].name}
                      </h2>

                      <table className={styles.stats_table}>
                        <tbody>
                          <tr>
                            <th>Total</th>
                            <td>
                              {
                                selectedAdvancements.categories[selectedCat]
                                  .total
                              }
                            </td>
                          </tr>
                          <tr>
                            <th>Completed</th>
                            <td>
                              {
                                selectedAdvancements.categories[selectedCat]
                                  .completed
                              }
                            </td>
                          </tr>
                          <tr>
                            <th>Percentage</th>
                            <td>
                              {
                                selectedAdvancements.categories[selectedCat]
                                  .percentage
                              }
                              %
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <table className={styles.achievements_table}>
                        <tbody>
                          {Object.keys(
                            selectedAdvancements.categories[selectedCat]
                              .advancements
                          ).map((advKey) => {
                            const adv =
                              selectedAdvancements.categories[selectedCat]
                                .advancements[advKey];

                            const advId = adv.id
                              .split(":")[1]
                              .replace("/", "-");
                            return (
                              <tr key={adv.id}>
                                <td className={styles.status_icon}>
                                  {adv.done ? (
                                    <span
                                      className={styles.unlock}
                                      aria-label="Unlocked"
                                    >
                                      <Image
                                        src={`/icons/invicons/${advId}.png`}
                                        alt={advId}
                                        width={35}
                                        height={35}
                                        quality={100}
                                      />
                                    </span>
                                  ) : (
                                    <span
                                      className={styles.lock}
                                      aria-label="Locked"
                                    >
                                      <Image
                                        src={`/icons/invicons/${advId}.png`}
                                        alt={advId}
                                        width={35}
                                        height={35}
                                        quality={100}
                                      />
                                    </span>
                                  )}
                                </td>
                                <th>{adv.name}</th>
                                <td>{adv.formattedDate}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className={styles.summary_view}>
                      <h2>Summary</h2>
                      <table className={styles.summary_table}>
                        <tbody>
                          <tr>
                            <th>Active Categories</th>
                            <td>
                              {selectedAdvancements.summary.activeCategories}
                            </td>
                          </tr>
                          <tr>
                            <th>Completed Advancements</th>
                            <td>
                              {
                                selectedAdvancements.summary
                                  .completedAdvancements
                              }
                            </td>
                          </tr>
                          <tr>
                            <th>Completion Percentage</th>
                            <td>{selectedAdvancements.summary.percentage}%</td>
                          </tr>
                          <tr>
                            <th>Total Advancements</th>
                            <td>
                              {selectedAdvancements.summary.totalAdvancements}
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <h3>Recent Advancements</h3>
                      <table className={styles.recent_table}>
                        <tbody>
                          {selectedAdvancements.recentAdvancements.map(
                            ({ name, formattedDate, category }) => (
                              <tr key={`${name}-${formattedDate}`}>
                                <td>{name}</td>
                                <td>({category})</td>
                                <td>{formattedDate}</td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </>
            ) : error ? (
              <div className={styles.error_message}>
                <p>Could not load advancements for this player.</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div className={styles.menu}>
        <Button path={"/"} text={"Back"} size="small" />
      </div>
    </div>
  );
};

export default Advancements;
