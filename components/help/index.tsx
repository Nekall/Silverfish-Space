"use client";
import { useState } from "react";
import Image from "next/image";

// styles
import styles from "./styles.module.css";

const Help = () => {
  const [close, setClose] = useState(false);

  if (close) return;

  //Save choise in localstorage
  // Add animation
  // -- perso
  // -- buble

  return (
    <div className={styles.help}>
      <Image
        src={"/images/neka-help.png"}
        alt={`Neka help`}
        width={400}
        height={400}
      />
      <button className={styles.close} onClick={() => setClose(true)}>
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
