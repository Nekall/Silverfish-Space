// Styles
import styles from "./page.module.css";

// Components
import Credits from "@/components/credits";

const Quit = () => {
  return (
    <div className={styles.quit}>
      <Credits />
    </div>
  );
};

export default Quit;
