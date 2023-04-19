import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div>
        <span>Logo</span>
        <span>Health & Fitness</span>
      </div>
      <div className={styles.navLinks}>
        <span>Home</span>
        <span>Health Content</span>
        <span>To Do's</span>
        <span>Workout</span>
        <span>Meal Plan</span>
      </div>
    </div>
  );
};

export default Navbar;
