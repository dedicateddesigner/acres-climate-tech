import Image from "next/image";
import styles from "./Background.module.scss";

export default function Background() {
  return (
    <section className={styles.section} aria-labelledby="background-title">
      <div className={styles.inner}>
        <div className={styles.introduction}>
          <p className={styles.index}>02 / Background</p>
          <h2 id="background-title">A Climate Problem — and a Livelihood Problem — That Meet in the Same Field</h2>
        </div>

        <div className={styles.body}>
          <p>Globally, the effects of climate change are no longer theoretical — they&apos;re visible in shifting monsoons, degrading soil, and volatile yields. Under the Paris Agreement, India — along with many other signatory nations — has committed to reducing the greenhouse gas intensity of its economy, with clear targets set for industry over the next several years.</p>
          <p>At the same time, farmers across India face a different but connected challenge: how to protect soil fertility and secure additional, reliable income in the face of increasing climate variability.</p>
        </div>

        <div className={styles.visualStage} aria-label="Global commitment meeting farmer reality">
          <figure className={`${styles.visual} ${styles.earthVisual}`}>
            <span className={styles.visualLabel}>GLOBAL COMMITMENT</span>
            <Image src="/assets/background/earth.webp" alt="Earth and atmospheric systems above layered land" width={839} height={985} />
          </figure>
          <figure className={`${styles.visual} ${styles.greenVisual}`}>
            <span className={styles.visualLabel}>FARMER REALITY</span>
            <Image src="/assets/background/green.webp" alt="Agricultural crops growing above living soil" width={912} height={617} />
          </figure>
          <div className={styles.soilVisual}>
            <Image src="/assets/background/soil.webp" alt="" width={2048} height={596} />
          </div>
        </div>

        <p className={styles.conclusion}>Two pressures. One shared solution.</p>
      </div>
    </section>
  );
}
