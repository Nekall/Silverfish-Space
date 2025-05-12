// Components
import Button from "@/components/button";

// Styles
import styles from "./page.module.css";

const Options = () => {
  return (
    <div className={styles.options}>
      <div className={styles.title}>
        <h1>Options</h1>
      </div>
      <div className={styles.main}>
        <div className={styles.scrollable_section}></div>
      </div>
      <div className={styles.menu}>
        <Button path={"/"} text={"Done"} size="medium" />
      </div>
    </div>
  );
};

export default Options;
