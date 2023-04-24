import Navbar from "./Navbar";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <Navbar />
    </div>
  );
};

export default Header;
