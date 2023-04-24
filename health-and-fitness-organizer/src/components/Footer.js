import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <span className={styles.logoContainer}>
        <FitnessCenterIcon className={styles.logo} />
      </span>
    </div>
  );
};

export default Footer;
