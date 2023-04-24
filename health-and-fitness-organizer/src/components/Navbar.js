import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logoAndName}>
        <span className={styles.logoContainer}>
          <FitnessCenterIcon className={styles.logo} />
        </span>
        <span className={styles.coName}>Health & Fitness</span>
      </div>
      <div className={styles.navLinks}>
        <span className={styles.links}>HOME</span>
        <span className={styles.links}>HEALTH CONTENT</span>
        <span className={styles.links}>TO DO's</span>
        <span className={styles.links}>WORKOUT</span>
        <span className={styles.links}>MEAL PLAN</span>
      </div>
      <div className={styles.searchNavInput}>
        <input></input>
        <SearchIcon className={styles.searchIcon} />
      </div>
    </div>
  );
};

export default Navbar;
