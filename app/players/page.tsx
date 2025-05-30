/* eslint-disable */
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Utils
import { parseMinecraftStats } from "@/utils/minecraftStatsParser";

// Components
import Button from "@/components/button";

// Styles
import styles from "./page.module.css";

// Data
import _Jok_ from "../../data/stats/92a5948f-b552-46ad-b92b-1f17c7e062c2.json";
import LilNeka from "../../data/stats/405f1f09-4c9e-49d0-992b-7bddb8d19e16.json";
import Leone_e from "../../data/stats/9d60c4d3-b472-4420-8215-60621cabdfc1.json";
import Merionis from "../../data/stats/bbd3df60-4062-46fe-8837-8ab02402971a.json";
import Zukku_tv from "../../data/stats/cef4d159-40af-45bd-a594-ab839094ad2f.json";
import Bak_HatamHa from "../../data/stats/d0c9e959-bbae-45e9-9ccb-62931f4b218d.json";
import players from "../../data/whitelist.json";

const Players = () => {
  const router = useRouter();
  const [selectedPlayer, setSelectedPlayer] = useState("_Jok_");
  const dataPlayers: any = {
    _Jok_: _Jok_ as unknown as Record<string, Stats>,
    LilNeka: LilNeka as unknown as Record<string, Stats>,
    Leone_e: Leone_e as unknown as Record<string, Stats>,
    Merionis: Merionis as unknown as Record<string, Stats>,
    Zukku_tv: Zukku_tv as unknown as Record<string, Stats>,
    Bak_HatamHa: Bak_HatamHa as unknown as Record<string, Stats>,
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

  return (
    <div className={styles.players}>
      <div className={styles.title}>
        <h1>Players</h1>
      </div>
      <div className={styles.main}>
        <div className={styles.scrollable_section}>
          <ul>
            {players.map(({ name, uuid }) => {
              const dataPlayer = dataPlayers[name]
                ? parseMinecraftStats(dataPlayers[name])
                : {
                    deaths: 0,
                    timeSinceDeath: {
                      hours: 0,
                      minutes: 0,
                    },
                    timeSinceRest: {
                      hours: 0,
                      minutes: 0,
                    },
                  };

              return (
                <li
                  key={`${name}-card`}
                  className={styles.player_list}
                  title={uuid}
                >
                  <button
                    className={`${styles.player_card} ${
                      selectedPlayer === name && styles.active
                    }`}
                    onClick={() => setSelectedPlayer(name)}
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
                    <div className={styles.player_data}>
                      <div className={styles.username}>{name}</div>
                      <div>
                        <div>
                          Time since death: {dataPlayer?.timeSinceDeath.hours} h
                        </div>
                        <div>
                          Time since rest: {dataPlayer?.timeSinceRest.hours} h
                        </div>
                      </div>
                    </div>
                    <div className={styles.player_deaths}>
                      {dataPlayer?.deaths} DEATHS
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={styles.menu}>
        <Button path={"/"} text={"Back"} size="small" />
      </div>
    </div>
  );
};

export default Players;
