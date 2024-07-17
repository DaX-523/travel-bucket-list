import Link from "next/link";
import { FaGithub } from "react-icons/fa";

import styles from "./Header.module.scss";
import Container from "../Container";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <p className={styles.headerTitle}>
          <Link href="/">Travel Bucket List</Link>
        </p>
        <ul className={styles.headerLinks}>
          <li>
            <a
              href="https://github.com/DaX-523/travel-bucket-list"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
