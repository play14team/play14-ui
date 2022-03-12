import Container from "./container";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import logo from "../../public/logo/play14_white_bg_transparent.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div>
          <h3>We believe in playfulness</h3>
          <span className={styles.logo}>
            <Image src={logo} alt="#play14" width={120} height={50} />
          </span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
