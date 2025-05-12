import Image from "next/image";

// Components
import Button from "@/components/button";

// Styles
import styles from "./page.module.css";

const Players = () => {
  const players = [
    {
      username: "LilNeka",
    },
    {
      username: "Merionis",
    },
    {
      username: "_Jok_",
    },
    {
      username: "Steve",
    },
    {
      username: "OnisukeTheNeko",
    },
  ];

  return (
    <div className={styles.players}>
      <div className={styles.title}>
        <h1>Players</h1>
      </div>
      <div className={styles.main}>
        <div className={styles.scrollable_section}>
          <ul>
            {players.map(({ username }, index) => {
              return (
                <li key={`${username}-card`} className={styles.player_card}>
                  <div className={styles.player_head}>
                    <Image
                      src={`https://mc-heads.net/avatar/${username}`}
                      alt={`Minecraft head of ${username}`}
                      width={50}
                      height={50}
                      priority
                    />
                  </div>
                  <div>
                    <div>{username}</div>
                    <div>data....</div>
                  </div>
                  <div>
                    <p>{index}/20</p>
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
