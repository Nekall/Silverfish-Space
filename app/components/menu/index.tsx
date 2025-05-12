"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

// Styles
import styles from "./styles.module.css";

const Menu = () => {
  const yellowWords = [
    "Mékéskisspacici ?!!",
    "Cactus",
    "C Roblox ?",
    "Carré",
    "Minecraft",
  ];

  const [randomYellowWord, setRandomYellowWord] = useState<string | null>(null);

  useEffect(() => {
    setRandomYellowWord(
      yellowWords[Math.floor(Math.random() * yellowWords.length)]
    );
  }, [yellowWords]);

  const play = () => {
    const audio = new Audio("/sounds/minecraft_click.mp3");
    audio.play().catch((error) => {
      console.error("Error playing sound: ", error);
    });
  };

  return (
    <div className={styles.menu}>
      <div className={styles.screentitle}>
        <Image
          src="/images/sis_mc_style.png"
          alt="Silverfish Infesting Space Minecraft version"
          width={600}
          height={400}
          priority
        />

        <p className={styles.yellow_word}>{randomYellowWord}</p>
      </div>

      <div className={styles.btns}>
        <div className={styles.big_btns}>
          <button onMouseDown={play} className={styles.big_btn}>
            Players
          </button>
          <button onMouseDown={play} className={styles.big_btn}>
            Achievements
          </button>
          <button onMouseDown={play} className={styles.big_btn}>
            Statistics
          </button>
          <button onMouseDown={play} className={styles.big_btn}>
            Informations
          </button>
        </div>
        <div className={styles.small_btns}>
          <button onMouseDown={play} className={styles.small_btn}>
            Options...
          </button>
          <button onMouseDown={play} className={styles.small_btn}>
            Quit Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
