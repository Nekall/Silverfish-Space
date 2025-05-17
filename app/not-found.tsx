/* eslint-disable */
"use client";

import React, { useEffect, useState, useCallback } from "react";
import Button from "@/components/button";
import styles from "./not-found.module.css";

const debounce = (func: Function, delay: number) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
};

const NotFoundPage = () => {
  const [randomNumber, setRandomNumber] = useState(404);
  const [audioPlayed, setAudioPlayed] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  const playAudio = useCallback(() => {
    if (!audioPlayed && audioRef.current) {
      audioRef.current.volume = 0.2;
      audioRef.current
        .play()
        .then(() => {
          setAudioPlayed(true);
          removeEventListeners();
        })
        .catch((error) => {
          console.error("Erreur de lecture:", error);
          if (error.name === "NotAllowedError") {
            setShowHint(true);
          }
        });
    }
  }, [audioPlayed]);

  const removeEventListeners = () => {
    window.removeEventListener("click", playAudio);
    window.removeEventListener("keydown", playAudio);
    window.removeEventListener("touchstart", playAudio);
    window.removeEventListener("mousemove", debouncedPlayAudio);
  };

  const debouncedPlayAudio = debounce(playAudio, 300);

  useEffect(() => {
    audioRef.current = new Audio("/sounds/player-dead.mp3");

    const timeout = setTimeout(() => {
      playAudio();
      setTimeout(() => setShowHint(true), 2000);
    }, 1000);

    return () => {
      clearTimeout(timeout);
      removeEventListeners();
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [playAudio]);

  useEffect(() => {
    if (!audioPlayed) {
      window.addEventListener("click", playAudio);
      window.addEventListener("keydown", playAudio);
      window.addEventListener("touchstart", playAudio);
      window.addEventListener("mousemove", debouncedPlayAudio);
    }

    return removeEventListeners;
  }, [audioPlayed, playAudio, debouncedPlayAudio]);

  return (
    <div className={styles.dead_screen}>
      <div>
        <h1>You Died!</h1>
        <p>Score: {randomNumber}</p>
      </div>
      <div>
        <Button path={"/"} text={"Respawn"} size="large" />
        <Button path={"/"} text={"Title Screen"} size="large" />
      </div>
      {!audioPlayed && showHint && (
        <div className={styles.audio_hint}>
          <p>Sound blocked by your browser</p>
          <p>Click anywhere to unlock</p>
        </div>
      )}
    </div>
  );
};

export default NotFoundPage;
