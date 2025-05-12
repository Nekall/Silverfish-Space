import Image from "next/image";

// Data
import players from "../../data/whitelist.json";

// Components
import Button from "@/components/button";

// Styles
import styles from "./page.module.css";

const Players = () => {
  console.log(players);

  return (
    <div className={styles.players}>
      <div className={styles.title}>
        <h1>Players</h1>
      </div>
      <div className={styles.main}>
        <div className={styles.scrollable_section}>
          <ul>
            {players.map(({ name, uuid }, index) => {
              return (
                <li key={`${name}-card`} className={styles.player_card}>
                  <div className={styles.player_head}>
                    <Image
                      src={`https://mc-heads.net/avatar/${name}`}
                      alt={`Minecraft head of ${name}`}
                      width={50}
                      height={50}
                      priority
                    />
                  </div>
                  <div>
                    <div>{name}</div>
                    <div>{uuid}</div>
                  </div>
                  <div>
                    <p>{index + 1}</p>
                  </div>
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
