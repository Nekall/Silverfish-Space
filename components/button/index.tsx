"use client";
import Link from "next/link";

// Styles
import styles from "./styles.module.css";

interface ButtonProps {
  path: string;
  text: string;
  size: "small" | "medium" | "large";
}

const play = () => {
  const audio = new Audio("/sounds/minecraft_click.mp3");
  audio.play().catch((error) => {
    console.error("Error playing sound: ", error);
  });
};

const Button: React.FC<ButtonProps> = ({ path, text, size }) => {
  const sizeClass =
    size === "small"
      ? styles.small_size
      : size === "large"
      ? styles.large_size
      : styles.medium_size;

  return (
    <Link href={path}>
      <button onMouseDown={play} className={`${styles.button} ${sizeClass}`}>
        {text}
      </button>
    </Link>
  );
};

export default Button;
