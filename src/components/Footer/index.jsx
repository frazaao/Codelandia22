import styles from "./styles.module.css";
import Logo from "../../assets/images/logo-reduzida.svg";

export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <img src={Logo} alt="Logomarca reduzida Codelandia" />
        <div>
          <span>© 2022 - Matheus Paula Frazão</span>
          <span>Codelândia</span>
        </div>
      </div>
    </footer>
  );
}
