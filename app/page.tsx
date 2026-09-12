import Image from "next/image";
import Header from "../components/Header/Header";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <Header />

      <header className={styles.header}>
        <Image
          className={styles.logo}
          src="/acres-logo.svg"
          alt="ACRES"
          width={200}
          height={49}
          priority
        />
        <p className={styles.previewLabel}>Brand preview / 01</p>
      </header>

      <section className={styles.intro} aria-labelledby="page-title">
        <p className={styles.eyebrow}>Material + Science + Agriculture</p>
        <h1 id="page-title">ACRES Brand Foundation</h1>
        <p className={styles.supportingLine}>
          A temporary foundation for a climate-tech identity grounded in carbon,
          soil and living land.
        </p>
      </section>

      <section className={styles.identity} aria-label="ACRES identity">
        <div className={styles.taglineBlock}>
          <p className={styles.tagline}>CARBON. NATURE. FUTURE.</p>
          <p className={styles.caption}>Technology working within natural systems.</p>
        </div>

        <div className={styles.colourSystem} aria-label="ACRES colour system">
          <div className={`${styles.swatch} ${styles.fossil}`}>
            <span>Fossil Light</span>
            <span>#F4F5F0</span>
          </div>
          <div className={`${styles.swatch} ${styles.basalt}`}>
            <span>Basalt Grey</span>
            <span>#777A72</span>
          </div>
          <div className={`${styles.swatch} ${styles.carbon}`}>
            <span>Carbon Black</span>
            <span>#151714</span>
          </div>
          <div className={`${styles.swatch} ${styles.soil}`}>
            <span>Soil Brown</span>
            <span>#76553D</span>
          </div>
          <div className={`${styles.swatch} ${styles.living}`}>
            <span>Living Green</span>
            <span>#667C4C</span>
          </div>
        </div>
      </section>
    </main>
  );
}
