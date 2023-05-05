import Navbar from "./Navbar";
import Tagline from "./Tagline";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <Navbar />
    </div>
  );
};

export default Header;
