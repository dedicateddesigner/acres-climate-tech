import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";

const sections = [
  { label: "Logo", href: "#logo" },
  { label: "Typography", href: "#typography" },
  { label: "Colour", href: "#colour" },
  { label: "Brand Language", href: "#brand-language" },
  { label: "Visual Language", href: "#visual-language" },
];

export default function BrandKitPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link className={styles.logoLink} href="/" aria-label="ACRES home">
            <Image
              className={styles.logo}
              src="/acres-logo.svg"
              alt="ACRES"
              width={200}
              height={49}
              priority
            />
          </Link>
          <p className={styles.headerLabel}>Reference / 01</p>
        </div>
      </header>

      <div className={styles.content}>
        <section className={styles.introduction} aria-labelledby="page-title">
          <p className={styles.eyebrow}>ACRES BRAND KIT</p>
          <h1 id="page-title">Carbon. Nature. Future.</h1>
          <p className={styles.lede}>
            An accessible reference for the ACRES visual identity, including
            logo, typography, colour and visual language.
          </p>
        </section>

        <section className={styles.overview} aria-labelledby="overview-title">
          <p className={styles.sectionIndex}>01 / Overview</p>
          <div>
            <h2 id="overview-title">Material + Science + Agriculture</h2>
            <p>
              ACRES connects material, science and agriculture through a visual
              language that follows deep time through geology, carbon, soil and
              living land.
            </p>
            <p>
              The identity sits between a conventional agricultural company and
              an abstract Silicon Valley software company, with technology
              working within natural systems.
            </p>
          </div>
        </section>

        <nav className={styles.contents} aria-label="Brand Kit contents">
          <p className={styles.sectionIndex}>Contents</p>
          <ul>
            {sections.map((section, index) => (
              <li key={section.href}>
                <Link href={section.href}>
                  <span>0{index + 2}</span>
                  {section.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.referenceSections}>
          <section id="logo" className={styles.referenceSection} aria-labelledby="logo-title">
            <p className={styles.sectionIndex}>02 / Identity</p>
            <div>
              <h2 id="logo-title">Logo</h2>
              <p>
                The spiral represents deep geological time, natural cycles,
                transformation, continuity and movement of carbon through
                Earth&apos;s systems.
              </p>
            </div>
          </section>

          <section id="typography" className={styles.referenceSection} aria-labelledby="typography-title">
            <p className={styles.sectionIndex}>03 / Foundation</p>
            <div>
              <h2 id="typography-title">Typography</h2>
              <p>
                Headings use Sora. Body, navigation and data use Inter. Together
                they balance clarity, approachability and measurement.
              </p>
            </div>
          </section>

          <section id="colour" className={styles.referenceSection} aria-labelledby="colour-title">
            <p className={styles.sectionIndex}>04 / Foundation</p>
            <div>
              <h2 id="colour-title">Colour</h2>
              <p>
                Fossil Light forms the primary canvas. Carbon Black carries the
                main typography, while Basalt Grey, Soil Brown and Living Green
                provide controlled material accents.
              </p>
            </div>
          </section>

          <section id="brand-language" className={styles.referenceSection} aria-labelledby="brand-language-title">
            <p className={styles.sectionIndex}>05 / Expression</p>
            <div>
              <h2 id="brand-language-title">Brand Language</h2>
              <p>
                ACRES speaks through material, science and agriculture: a
                grounded language that is credible, human and connected to
                living land.
              </p>
            </div>
          </section>

          <section id="visual-language" className={styles.referenceSection} aria-labelledby="visual-language-title">
            <p className={styles.sectionIndex}>06 / Expression</p>
            <div>
              <h2 id="visual-language-title">Visual Language</h2>
              <p>
                The visual narrative moves from deep time to geology, rock,
                carbon, soil, living land and agriculture. Motion, when used,
                should communicate transformation and process.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
