/* eslint-disable */

"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

// Components
import Button from "@/components/button";

// Styles
import styles from "./page.module.css";

const Informations = () => {
  const router = useRouter();

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
    <div className={styles.informations}>
      <div className={styles.title}>
        <h1>Informations</h1>
      </div>
      <div className={styles.main}>
        <div className={styles.scrollable_section}>
          <h2>General Info</h2>
          <p>Minecraft Edition: Java Edition</p>
          <p>Server Version: 1.21.5</p>
          <p>Server Type: Vanilla (no mods, no plugins)</p>
          <p>Whitelist: Enabled – invitation only</p>
          <p>Location: France</p>
          <h2>Access & Rules</h2>
          <p>This is a private server reserved for invited players only.</p>
          <p>
            Access is managed through a whitelist – only whitelisted usernames
            can join.
          </p>
          <p>Basic rules:</p>
          <ul>
            <li>Be respectful</li>
            <li>No griefing</li>
            <li>No cheats</li>
            <li>Play fair and have fun!</li>
          </ul>
          <h2>Gameplay Info</h2>
          <p>Survival mode</p>
          <p>No commands/cheats</p>
          <p>Friendly community</p>
          <p>Long-term world with no resets planned</p>
          <p>Simple, pure Minecraft experience</p>
        </div>
      </div>
      <div className={styles.menu}>
        <Button path={"/"} text={"Back"} size="small" />
      </div>
    </div>
  );
};

export default Informations;
