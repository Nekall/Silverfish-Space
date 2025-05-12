// Components
import Button from "@/components/button";

// Styles
import styles from "./page.module.css";

const Achievements = () => {
  return (
    <div className={styles.achievements}>
      <div className={styles.title}>
        <h1>Achievements</h1>
      </div>
      <div className={styles.main}>
        <div className={styles.scrollable_section}></div>
      </div>
      <div className={styles.menu}>
        <Button path={"/"} text={"Back"} size="small" />
      </div>
    </div>
  );
};

export default Achievements;
