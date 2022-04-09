import styles from "./styles.module.css";

export function Hero() {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <p className={styles.heroCommunity}>Comunidade Dev</p>
        <h2>
          Projetos da
          <br />
          comunidade Codelândia
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis
          ligula, accumsan nec cursus in, eleifend sit amet dui.
        </p>
      </div>
    </section>
  );
}
