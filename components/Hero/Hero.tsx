
import Link from "next/link";
import styles from "./Hero.module.scss";

const geologicalLayers = [
  "M1 16.16C41.35 15.94 41.35 -1.61 88.03 1.33C132.62 4.15 147.7 27.86 180.85 26.21",
  "M2.12 30.11C34.14 28.76 38.64 16.61 80.05 17.96S133.82 54.19 182.2 49.01",
  "M1.83 46.61C33.85 45.26 34.15 35.29 65.43 35.96C106.84 36.85 113.13 75.79 181.76 59.36",
  "M1.83 73.91C56.21 65.36 76.57 99.31 107.81 101.06C150.71 103.46 145.31 91.16 181.01 90.46",
  "M1.3 99.64C37.3 97.62 74.65 120.56 105.92 119.89C148.22 118.99 146.19 109.77 181 106.77",
  "M3.33 62.21C33.7 61.16 33.4 54.61 57.21 55.61C99.31 57.39 94.86 90.41 162.36 75.56C168.57 74.19 174.62 73.2 181.6 73.99",
];

const carbonParticles = [
  { x: 30.04, y: 47.36, r: 7.09 },
  { x: 76.05, y: 50.62, r: 5.4 },
  { x: 114.19, y: 92.36, r: 7.09 },
  { x: 109.46, y: 44.44, r: 7.76 },
  { x: 80.89, y: 5.06, r: 5.06 },
  { x: 54.9, y: 24.3, r: 4.5 },
  { x: 15.97, y: 20.7, r: 4.05 },
  { x: 3.94, y: 74.36, r: 3.94 },
  { x: 37.12, y: 81, r: 5.85 },
  { x: 65.7, y: 76.05, r: 4.5 },
  { x: 87.07, y: 84.6, r: 3.6 },
  { x: 110.59, y: 68.29, r: 2.59 },
  { x: 142.99, y: 41.29, r: 3.71 },
  { x: 142.99, y: 70.76, r: 4.84 },
  { x: 145.91, y: 97.99, r: 3.49 },
  { x: 115.09, y: 124.99, r: 3.26 },
  { x: 86.51, y: 117.56, r: 4.16 },
  { x: 56.36, y: 110.36, r: 5.06 },
  { x: 10.24, y: 114.64, r: 4.39 },
];

function GeologicalArtwork() {
  return (
    <div className={styles.visualFrame}>
      <svg
        className={styles.spiralSvg}
        viewBox="0 0 134.08 125.15"
        aria-hidden="true"
      >
        <path
          className={styles.spiralPath}
          d="M72.6 65.65c-3.48-.93-8.44-.69-9.4 3.5-.98 3.76.18 8.23 3.44 10.59 9.73 6.78 21.05-.47 24.21-10.72 4.39-16.9-8.73-28.98-25.46-26.18-16.97 3.34-29.1 23.36-21.91 39.67 4.86 12.04 17.49 20.48 30.52 20.24 22.32.31 41.56-20.9 38.51-43.12-.72-5.39-2.53-10.68-5.13-15.45-4.35-8.16-11.41-14.97-19.82-18.83-1.43-.53-3.12-1.35-4.58-1.74-5.2-1.61-10.77-2.27-16.19-2.05-22.24.93-41.34 19.59-45.12 41.16-1.48 8.64-.16 17.69 2.47 26.01 7.2 22.78 27.4 34.76 50.72 34.36 22.73.51 43.65-12.34 52.3-33.57 6.56-16.15 7.97-35.58-.36-51.37C116.6 18.65 96.29 4.26 74.37 1.63 52.12-.54 29.91 10.51 16.17 27.79 7.49 38.56 1.85 51.93 1.15 65.81c-.2 8.28.59 16.74 2.52 24.8 3.21 13.5 10.3 24.28 20.39 33.67.47.42-.24 1.19-.71.71-3.17-3.14-6.39-6.32-9.14-9.9C3.23 101.28-.33 83.07.02 65.76 1.65 33.38 28.93 4.65 60.97.55c18.08-2.65 36.42 4.44 50.18 16 10.36 8.67 18.62 20.35 21.69 33.65 4.31 22.01-2.6 47.05-20.09 61.71-14.06 11.86-33.63 15.02-51.37 11.7-18.36-3.1-33.49-16.54-38.98-34.3-2.75-8.64-4.11-17.89-2.59-26.92 4.74-27.05 31.28-47.79 58.84-42.03 1.18.1 3.82.98 4.99 1.26.98.22 2.27.84 3.22 1.19 7.49 2.89 13.91 8.23 18.77 14.55 4.7 6.46 8.01 14.03 9.08 21.99 3.23 23.61-16.95 45.96-40.67 45.74-24.44.5-44.09-26.35-30.78-48.51 7.14-12.44 21.43-19.93 35.57-15.29 14.7 4.16 19.93 22.74 11.44 34.87-3.08 4.36-7.71 7.94-13.11 8.76-6.55.75-14.41-2.27-16.38-9.11-2.54-9.41 3.14-15.26 12.61-12.77 1.77.51 1 3.15-.77 2.62Z"
        />
      </svg>

      <svg
        className={styles.layersSvg}
        viewBox="0 0 183.2 120.9"
        aria-hidden="true"
      >
        {geologicalLayers.map((path, index) => (
          <path
            key={index}
            className={styles.layerPath}
            d={path}
            style={{ "--layer-index": index } as React.CSSProperties}
          />
        ))}
      </svg>

      <svg
        className={styles.particlesSvg}
        viewBox="0 0 149.4 128.25"
        aria-hidden="true"
      >
        {carbonParticles.map((particle, index) => (
          <circle
            key={index}
            className={styles.particle}
            cx={particle.x}
            cy={particle.y}
            r={particle.r}
            style={{ "--particle-index": index } as React.CSSProperties}
          />
        ))}
      </svg>

      <div className={styles.axis} />
      <p className={styles.visualLabel}>
        DEEP TIME / GEOLOGY / CARBON
      </p>
    </div>
  );
}

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>CARBON / NATURE / FUTURE</p>
          <h1 id="hero-title">
            Turning Carbon Into a New Source of Value for Indian Agriculture
          </h1>
          <p className={styles.supportingCopy}>
            ACRES helps industries meet climate commitments and farmers build
            resilient, income-generating soil through Distributed Biochar and
            Enhanced Rock Weathering.
          </p>
          <div className={styles.actions}>
            <Link className={styles.primaryAction} href="/#contact">
              Partner With Us
            </Link>
            <Link className={styles.secondaryAction} href="/#impact">
              See Our Impact
            </Link>
          </div>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <GeologicalArtwork />
        </div>
      </div>
    </section>
  );
}
