import styles from "./Background.module.scss";

const asset = (name: string) => `/assets/background/${encodeURIComponent(name)}`;

export default function Background() {
  return (
    <section className={styles.section} aria-labelledby="background-title">
      <div className={styles.inner}>
        <h2 id="background-title" className={styles.headline}>
          A Climate Problem — and a Livelihood Problem — That Meet in the Same Field
        </h2>

        <div className={styles.textGrid}>
          <div className={styles.column}>
            <span className={styles.columnLabel}>Global Commitment</span>
            <p>Globally, the effects of climate change are no longer theoretical — they&apos;re visible in shifting monsoons, degrading soil, and volatile yields. Under the Paris Agreement, India — along with many other signatory nations — has committed to reducing the greenhouse gas intensity of its economy, with clear targets set for industry over the next several years.</p>
          </div>

          <div className={styles.divider} aria-hidden="true">
            <span className={styles.dividerMarker} />
          </div>

          <div className={styles.column}>
            <span className={styles.columnLabel}>Farmer Reality</span>
            <p>At the same time, farmers across India face a different but connected challenge: how to protect soil fertility and secure additional, reliable income in the face of increasing climate variability.</p>
          </div>
        </div>

        <p className={styles.sameField}>Same Field</p>
      </div>

      <div className={styles.visualStage}>
        <picture>
          <source media="(min-width: 1440px)" srcSet={asset("Climate Problem-1440p.webp")} />
          <source media="(min-width: 1024px)" srcSet={asset("Climate Problem-1024p.webp")} />
          <img
            className={styles.artwork}
            src={asset("Climate Problem-768p.webp")}
            alt=""
            width={1040}
            height={941}
            loading="lazy"
          />
        </picture>
      </div>

      <div className={styles.inner}>
        <p className={styles.conclusion}>Two pressures. One shared solution.</p>
      </div>
    </section>
  );
}
