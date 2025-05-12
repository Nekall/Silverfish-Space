"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
          <Link href="/players">
            <button onMouseDown={play} className={styles.big_btn}>
              Players
            </button>
          </Link>
          <Link href="/achievements">
            <button onMouseDown={play} className={styles.big_btn}>
              Achievements
            </button>
          </Link>
          <Link href="/statistics">
            <button onMouseDown={play} className={styles.big_btn}>
              Statistics
            </button>
          </Link>
          <Link href="/informations">
            <button onMouseDown={play} className={styles.big_btn}>
              Informations
            </button>
          </Link>
        </div>
        <div className={styles.small_btns}>
          <Link href="/options">
            <button onMouseDown={play} className={styles.small_btn}>
              Options...
            </button>
          </Link>

          <Link href="/quit">
            <button onMouseDown={play} className={styles.small_btn}>
              Quit Game
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
