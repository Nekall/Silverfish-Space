"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

// Components
import Button from "@/components/button";

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
          <Button path={"/players"} text={"Players"} size="large" />
          <Button path={"/achievements"} text={"Achievements"} size="large" />
          <Button path={"/statistics"} text={"Statistics"} size="large" />
          <Button path={"/informations"} text={"Informations"} size="large" />
        </div>
        <div className={styles.small_btns}>
          <Button path={"/options"} text={"Options..."} size="small" />
          <Button path={"/quit"} text={"Quit Game"} size="small" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
