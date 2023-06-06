import Link from "next/link";
import styles from "../styles/Header.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>Knox Roofing</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/services">Services </Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.ribbon}>
        <span>Contact us:</span>
        <span>123-456-7890</span>
      </div>
    </header>
  );
};

export default Header;
