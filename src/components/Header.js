import { FiPhone } from "react-icons/fi";
import Link from "next/link";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.horizontalBar}>
        <span className={styles.spacer}></span>
        <div className={styles.redBar}>
          <FiPhone className={styles.phone} />{" "}
          <span className={styles.phone}>Phone: 812-344-9836</span>
          <span className={styles.spacer}></span>
          Contact US!
        </div>
      </div>

      <nav className={styles.nav}>
        <ul className={styles.navItems}>
          <li className={styles.navItem}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/services">Services</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about">About</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
