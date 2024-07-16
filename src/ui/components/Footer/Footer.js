import Container from "../Container";
import styles from "./footer.module.scss";

const Footer = ({ ...rest }) => {
  return (
    <footer className={styles.footer} {...rest}>
      <Container className={`${styles.footerContainer} ${styles.footerLegal}`}>
        <p>
          &copy; <a href="https://spacejelly.dev">Travel Bucket List</a>,{" "}
          {new Date().getFullYear()}
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
