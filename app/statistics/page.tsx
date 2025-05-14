"use client";
import { useState } from "react";
import Image from "next/image";

// Components
import Button from "@/components/button";

// Styles
import styles from "./page.module.css";

// Utils
import { parseMinecraftStats } from "@/utils/minecraftStatsParser";

// Data
import _Jok_ from "../../data/stats/92a5948f-b552-46ad-b92b-1f17c7e062c2.json";
import LilNeka from "../../data/stats/405f1f09-4c9e-49d0-992b-7bddb8d19e16.json";
import Leone_e from "../../data/stats/9d60c4d3-b472-4420-8215-60621cabdfc1.json";
import Merionis from "../../data/stats/bbd3df60-4062-46fe-8837-8ab02402971a.json";
import Zukku_tv from "../../data/stats/cef4d159-40af-45bd-a594-ab839094ad2f.json";
import Bak_HatamHa from "../../data/stats/d0c9e959-bbae-45e9-9ccb-62931f4b218d.json";
import players from "../../data/whitelist.json";

// Types
type Stats = {};

const Statistics = () => {
  const dataPlayers = {
    _Jok_: _Jok_ as unknown as Record<string, Stats>,
    LilNeka: LilNeka as unknown as Record<string, Stats>,
    Leone_e: Leone_e as unknown as Record<string, Stats>,
    Merionis: Merionis as unknown as Record<string, Stats>,
    Zukku_tv: Zukku_tv as unknown as Record<string, Stats>,
    Bak_HatamHa: Bak_HatamHa as unknown as Record<string, Stats>,
  };

  const [selectedStats, setSelectedStats] = useState();
  const [error, setError] = useState(false);

  const selectPlayer = (username: any) => {
    console.info("selectPlayer");
    // todo select data via username
    if (dataPlayers[username]) {
      setSelectedStats(parseMinecraftStats(dataPlayers[username]));
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className={styles.statistics}>
      <div className={styles.title}>
        <h1>Statistics</h1>
      </div>
      <div className={styles.main}>
        <div className={styles.scrollable_section}>
          <div>
            <ul>
              {players.map(({ name, uuid }, index) => {
                return (
                  <li
                    key={`${name}-card`}
                    className={styles.player_card}
                    onClick={() => selectPlayer(name)}
                  >
                    <div className={styles.player_head}>
                      <Image
                        src={`https://mc-heads.net/avatar/${name}`}
                        alt={`Minecraft head of ${name}`}
                        width={50}
                        height={50}
                        priority
                      />
                    </div>
                    <p>{name}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.stats}>
            {selectedStats &&
              (error ? (
                <div>Data not found</div>
              ) : (
                <div>
                  LilNeka : {selectedStats && ~~selectedStats?.playTime.hours}h
                  playTime | {selectedStats?.deaths} deaths
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className={styles.menu}>
        <Button path={"/"} text={"Back"} size="small" />
      </div>
    </div>
  );
};

export default Statistics;
