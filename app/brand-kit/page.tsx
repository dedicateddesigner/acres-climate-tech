import Image from "next/image";
import Link from "next/link";
import CopyButton from "../../components/BrandKit/CopyButton";
import styles from "./page.module.scss";

const contents = [
  { label: "Logo", href: "#logo" },
  { label: "Typography", href: "#typography" },
  { label: "Colour", href: "#colour" },
  { label: "Brand Language", href: "#brand-language" },
  { label: "Visual Language", href: "#visual-language" },
];

const logoVariants = [
  { label: "Primary logo", description: "Carbon Black logo on a transparent background.", src: "/assets/logo/vector/acres-logo-primary.svg", width: 200, height: 49, surface: "lightSurface" },
  { label: "White logo", description: "White logo for dark backgrounds.", src: "/assets/logo/vector/acres-logo-white.svg", width: 200, height: 49, surface: "darkSurface" },
  { label: "Basalt Grey", description: "Approved logo on Basalt Grey.", src: "/assets/logo/vector/acres-logo-on-basalt-grey.svg", width: 364, height: 107, surface: "assetSurface" },
  { label: "Carbon Black", description: "Approved logo on Carbon Black.", src: "/assets/logo/vector/acres-logo-on-carbon-black.svg", width: 364, height: 107, surface: "assetSurface" },
  { label: "Fossil Light", description: "Approved logo on Fossil Light.", src: "/assets/logo/vector/acres-logo-on-fossil-light.svg", width: 364, height: 107, surface: "assetSurface" },
  { label: "Living Green", description: "Approved logo on Living Green.", src: "/assets/logo/vector/acres-logo-on-living-green.svg", width: 364, height: 107, surface: "assetSurface" },
  { label: "Soil Brown", description: "Approved logo on Soil Brown.", src: "/assets/logo/vector/acres-logo-on-soil-brown.svg", width: 364, height: 107, surface: "assetSurface" },
];

const logoFormats = [
  { label: "SVG", extension: "svg" },
  { label: "PNG", extension: "png" },
  { label: "WebP", extension: "webp" },
];

const colours = [
  { name: "Fossil Light", hex: "#F4F5F0", className: "fossil" },
  { name: "Basalt Grey", hex: "#777A72", className: "basalt" },
  { name: "Carbon Black", hex: "#151714", className: "carbon" },
  { name: "Soil Brown", hex: "#76553D", className: "soil" },
  { name: "Living Green", hex: "#667C4C", className: "living" },
];

const visualLanguage = [
  { label: "Spiral", concept: "Deep Time", description: "Geological time and natural cycles held in continuous movement.", form: "spiral" },
  { label: "Layers", concept: "Geology", description: "Material depth expressed through strata, pressure and formation.", form: "layers" },
  { label: "Dots / Particles", concept: "Carbon", description: "Small units gathered into measurable material systems.", form: "particles" },
  { label: "Soil Strata", concept: "Soil", description: "Visible layers connecting material transformation to living ground.", form: "strata" },
  { label: "Roots / Growth", concept: "Living Land", description: "Connected systems that extend, regenerate and support life.", form: "growth" },
];

export default function BrandKitPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link className={styles.logoLink} href="/" aria-label="ACRES home">
            <Image className={styles.logo} src="/acres-logo.svg" alt="ACRES" width={200} height={49} priority />
          </Link>
          <p className={styles.headerLabel}>Brand Kit / 01</p>
        </div>
      </header>

      <div className={styles.content}>
        <section className={styles.introduction} aria-labelledby="page-title">
          <p className={styles.eyebrow}>ACRES BRAND KIT</p>
          <h1 id="page-title">Carbon. Nature. Future.</h1>
          <p className={styles.lede}>An accessible reference for the ACRES visual identity, including logo, typography, colour and visual language.</p>
        </section>

        <section className={styles.overview} aria-labelledby="overview-title">
          <p className={styles.sectionIndex}>01 / Overview</p>
          <div className={styles.copyColumn}>
            <h2 id="overview-title">Material + Science + Agriculture</h2>
            <p>ACRES connects material, science and agriculture through a visual language that follows Deep Time through Geology, Carbon, Soil and Living Land.</p>
            <p>The identity sits between a conventional agricultural company and an abstract Silicon Valley software company. It should feel approachable rather than futuristic, sharp, aggressive, sci-fi or overly technical.</p>
            <p className={styles.emphasis}>Technology working within natural systems.</p>
          </div>
        </section>

        <nav className={styles.contents} aria-label="Brand Kit contents">
          <p className={styles.sectionIndex}>Contents</p>
          <ol>
            {contents.map((item, index) => (
              <li key={item.href}>
                <Link href={item.href}><span>0{index + 1}</span>{item.label}</Link>
              </li>
            ))}
          </ol>
        </nav>

        <section id="logo" className={styles.section} aria-labelledby="logo-title">
          <div className={styles.sectionHeading}>
            <p className={styles.sectionIndex}>01 / Identity</p>
            <h2 id="logo-title">Logo</h2>
          </div>
          <div className={styles.sectionBody}>
            <p>The spiral represents deep geological time and natural cycles. It also represents transformation, continuity and the movement of carbon through Earth&apos;s systems.</p>
            <p>Literal leaf, tree, farm and recycling symbols are intentionally avoided. The symbol represents Nature / Earth / Deep Time / Cycles. The wordmark represents Technology / Measurement / Scale / Future. Together they express technology working within natural systems.</p>

            <div className={styles.logoGrid}>
              {logoVariants.map((variant) => (
                <figure className={styles.logoVariant} key={variant.src}>
                  <div className={`${styles.logoSurface} ${styles[variant.surface]}`}>
                    <Image src={variant.src} alt={`${variant.label} ACRES logo`} width={variant.width} height={variant.height} />
                  </div>
                  <figcaption><strong>{variant.label}</strong><span>{variant.description}</span></figcaption>
                </figure>
              ))}
            </div>

            <div className={styles.downloads}>
              <div>
                <p className={styles.subheading}>Logo downloads</p>
                <p>Approved vector and raster files for the primary logo.</p>
              </div>
              <div className={styles.downloadGroups}>
                {["primary", "white"].map((variant) => (
                  <div className={styles.downloadGroup} key={variant}>
                    <span className={styles.downloadLabel}>{variant === "primary" ? "Primary" : "White"}</span>
                    {logoFormats.map((format) => (
                      <a key={format.extension} href={`/assets/logo/${format.extension === "svg" ? "vector" : format.extension}/acres-logo-${variant}.${format.extension}`} download>{format.label}</a>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="typography" className={styles.section} aria-labelledby="typography-title">
          <div className={styles.sectionHeading}>
            <p className={styles.sectionIndex}>02 / Foundation</p>
            <h2 id="typography-title">Typography</h2>
          </div>
          <div className={styles.sectionBody}>
            <p>Headings use Sora. Body, navigation and data use Inter. The combination balances clarity, approachability and measurement.</p>
            <div className={styles.typeGrid}>
              <article className={`${styles.typeSpecimen} ${styles.soraSpecimen}`}>
                <span className={styles.specimenLabel}>Aa</span><h3>Sora</h3><p>CARBON. NATURE. FUTURE.</p><p>Material + Science + Agriculture</p>
              </article>
              <article className={`${styles.typeSpecimen} ${styles.interSpecimen}`}>
                <span className={styles.specimenLabel}>Aa</span><h3>Inter</h3><p>Carbon removal</p><p>Distributed Biochar</p><p>Enhanced Rock Weathering</p>
              </article>
            </div>
          </div>
        </section>

        <section id="colour" className={styles.section} aria-labelledby="colour-title">
          <div className={styles.sectionHeading}>
            <p className={styles.sectionIndex}>03 / Foundation</p>
            <h2 id="colour-title">Colour</h2>
          </div>
          <div className={styles.sectionBody}>
            <p>Five material references establish the ACRES colour system.</p>
            <div className={styles.colourGrid}>
              {colours.map((colour) => (
                <article className={`${styles.colourItem} ${styles[colour.className]}`} key={colour.name}>
                  <div className={styles.swatch}>
                    <span>{colour.hex}</span>
                  </div>
                  <div className={styles.colourMeta}><strong>{colour.name}</strong><CopyButton value={colour.hex} /></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="brand-language" className={styles.section} aria-labelledby="brand-language-title">
          <div className={styles.sectionHeading}>
            <p className={styles.sectionIndex}>04 / Expression</p>
            <h2 id="brand-language-title">Brand Language</h2>
          </div>
          <div className={styles.sectionBody}>
            <p className={styles.languageDisplay}>CARBON. NATURE. FUTURE.</p>
            <p className={styles.languageDisplay}>MATERIAL + SCIENCE + AGRICULTURE</p>
            <p>The identity follows the visual narrative: Deep Time → Geology → Carbon → Soil → Living Land. It is grounded rather than futuristic and approachable rather than overly technical.</p>
            <p>Technology works within natural systems. The farmer is part of the system, not simply the recipient of technology.</p>
          </div>
        </section>

        <section id="visual-language" className={styles.section} aria-labelledby="visual-language-title">
          <div className={styles.sectionHeading}>
            <p className={styles.sectionIndex}>05 / Expression</p>
            <h2 id="visual-language-title">Visual Language</h2>
          </div>
          <div className={styles.sectionBody}>
            <p>Material and process-oriented references extend the identity without literal agricultural symbols.</p>
            <div className={styles.visualGrid}>
              {visualLanguage.map((item, index) => (
                <article className={styles.visualItem} key={item.label}>
                  <div className={`${styles.visualForm} ${styles[item.form]}`} aria-hidden="true"><span /><span /><span /></div>
                  <p className={styles.visualIndex}>0{index + 1}</p>
                  <h3>{item.label} <span>→ {item.concept}</span></h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.quickReference} aria-labelledby="quick-reference-title">
          <div><p className={styles.sectionIndex}>Quick reference</p><h2 id="quick-reference-title">ACRES in brief</h2></div>
          <dl>
            <div><dt>Tagline</dt><dd>CARBON. NATURE. FUTURE.</dd></div>
            <div><dt>Brand essence</dt><dd>Material + Science + Agriculture</dd></div>
            <div><dt>Primary heading font</dt><dd>Sora</dd></div>
            <div><dt>Body / navigation / data</dt><dd>Inter</dd></div>
            <div><dt>Primary canvas</dt><dd>Fossil Light</dd></div>
            <div><dt>Primary text</dt><dd>Carbon Black</dd></div>
            <div><dt>Material accent</dt><dd>Soil Brown</dd></div>
            <div><dt>Living/action accent</dt><dd>Living Green</dd></div>
            <div><dt>Secondary neutral</dt><dd>Basalt Grey</dd></div>
          </dl>
        </section>
      </div>
    </main>
  );
}
