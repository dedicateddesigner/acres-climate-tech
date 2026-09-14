import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>CARBON / NATURE / FUTURE</p>
          <h1 id="hero-title">Turning Carbon Into a New Source of Value for Indian Agriculture</h1>
          <p className={styles.supportingCopy}>
            ACRES helps industries meet climate commitments and farmers build resilient, income-generating soil through Distributed Biochar and Enhanced Rock Weathering.
          </p>
          <div className={styles.actions}>
            <Link className={styles.primaryAction} href="/#contact">Partner With Us</Link>
            <Link className={styles.secondaryAction} href="/#impact">See Our Impact</Link>
          </div>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <div className={styles.visualFrame}>
            <Image className={styles.spiral} src="/assets/visual-language/spiral.svg" alt="" width={134} height={126} priority />
            <Image className={styles.layers} src="/assets/visual-language/Layers.svg" alt="" width={183} height={121} priority />
            <Image className={styles.particles} src="/assets/visual-language/Particles.svg" alt="" width={149} height={128} priority />
            <div className={styles.axis} />
            <p className={styles.visualLabel}>DEEP TIME / GEOLOGY / CARBON</p>
          </div>
        </div>
      </div>
    </section>
  );
}
