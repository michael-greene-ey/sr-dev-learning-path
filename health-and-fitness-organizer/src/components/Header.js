import Navbar from "./Navbar";
import Tagline from "./Tagline";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Tagline />
    </div>
  );
};

export default Header;
