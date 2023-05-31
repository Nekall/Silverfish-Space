// Assets
import silverfish from "../../assets/images/silverfish-transformed.png"

// Components
import AtroposCmp from "../AtroposCmp"

// Styles
import styles from "./styles.module.scss";

const HomeBanner = () => {
  return (
    <div className={styles.__home_banner}>
      <AtroposCmp>
        <div className={styles.__silverfish_box}>
          <img className={styles.__silverfish} src={silverfish} alt="silverfish" />
          <img className={styles.__silverfish} src={silverfish} alt="silverfish" />
          <img className={styles.__silverfish} src={silverfish} alt="silverfish" />
        </div>
      </AtroposCmp>
    </div>
  )
};

export default HomeBanner;
