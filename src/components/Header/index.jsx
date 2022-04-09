import styles from "./styles.module.css";
import Logo from "../../assets/images/logo.svg";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <a href="#"><img src={Logo} alt="Logotipo da Codelandia" /></a>
        <nav className={styles.navigationContainer}>
          <ul className={styles.navigationContent}>
            <li>
              <a href="#">Meu Github</a>
            </li>
            <li>
              <a className={styles.communityButton} href="#">Entrar na comunidade</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
