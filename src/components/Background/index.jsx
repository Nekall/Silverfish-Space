// Styles
import styles from "./styles.module.scss";

const Background = ({ children }) => {
  return (
    <div className={styles.__background}>
      {children}
    </div>
  )
};

export default Background;
