"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

// styles
import styles from "./styles.module.css";

const Help = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const shouldShow = () => {
      const lastClosedDate = localStorage.getItem("[NEKA]helpLastClosed");

      if (!lastClosedDate) {
        return true;
      }

      const lastDate = new Date(lastClosedDate);
      const currentDate = new Date();

      const monthDiff =
        (currentDate.getFullYear() - lastDate.getFullYear()) * 12 +
        (currentDate.getMonth() - lastDate.getMonth());

      return monthDiff >= 1;
    };

    if (typeof window !== "undefined") {
      setIsVisible(shouldShow());
    }
  }, []);

  const handleClose = () => {
    play();
    localStorage.setItem("[NEKA]helpLastClosed", new Date().toISOString());
    setIsVisible(false);
  };

  const play = () => {
    const audio = new Audio("/sounds/minecraft_click.mp3");
    audio.volume = 0.2;
    audio.play().catch((error) => {
      console.error("Error playing sound: ", error);
    });
  };

  if (!isVisible) return null;

  return (
    <div className={styles.help}>
      <Image
        src={"/images/neka-help.png"}
        alt={`Neka help`}
        width={400}
        height={400}
        quality={100}
      />
      <button className={styles.close} onMouseDown={handleClose}>
        X
      </button>
      <p>
        A problem? A mistake?
        <br />
        Contact me on discord.
      </p>
    </div>
  );
};

export default Help;
