import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Image
        className={styles.logo}
        src="/sis-logo.webp"
        alt="Logo Silverfish Infesting Space"
        width={150}
        height={150}
        priority
      />
    </div>
  );
}
