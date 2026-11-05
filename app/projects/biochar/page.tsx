import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Button from "@/components/Button/Button";

import {
    Sprout,
    Flame,
    Layers,
    Wheat,
    Leaf,
    Recycle,
    Factory,
} from "lucide-react";

import { biocharContent } from "@/data/pathways/biochar";
import styles from "./biochar.module.scss";

const processIcons = [Wheat, Flame, Layers];
const themeIcons = [Sprout, Leaf, Recycle, Factory];

export default function BiocharPage() {
    const content = biocharContent;

    return (
        <>
            <Header />

            <main className={styles.page}>
                {/* Hero */}
                <section className={styles.hero}>
                    <div className={styles.heroContent}>
                        <span className={styles.eyebrow}>
                            {content.hero.eyebrow}
                        </span>

                        <h1>{content.hero.heading}</h1>

                        <p>{content.hero.description}</p>

                        <Button href="/contact" variant="primary">
                            {content.hero.cta}
                        </Button>
                    </div>

                    <div className={styles.heroVisual}>
                        <img
                            src={content.hero.image}
                            alt={content.hero.imageAlt}
                            className={styles.heroImage}
                        />

                        <span className={styles.imageCaption}>
                            BIOMASS · CARBON · SOIL
                        </span>
                    </div>

                    <span className={styles.heroDecoration} aria-hidden="true">
                        ACRES
                    </span>
                </section>

                {/* Understanding Biochar */}
                <section className={styles.introduction}>
                    <div className={styles.sectionLabel}>
                        <span className={styles.eyebrow}>
                            {content.introduction.eyebrow}
                        </span>
                    </div>

                    <div className={styles.introductionContent}>
                        <h2>{content.introduction.heading}</h2>
                        <p>{content.introduction.description}</p>
                    </div>

                    <div className={styles.introductionMark} aria-hidden="true">
                        <span />
                        <span />
                        <span />
                    </div>
                </section>

                {/* Biomass to Biochar */}
                <section className={styles.transformation}>
                    <div className={styles.transformationVisual}>
                        <img
                            src={content.transformation.image}
                            alt={content.transformation.imageAlt}
                            loading="lazy"
                        />
                    </div>

                    <div className={styles.transformationContent}>
                        <span className={styles.eyebrow}>
                            {content.transformation.eyebrow}
                        </span>

                        <h2>{content.transformation.heading}</h2>

                        <p>{content.transformation.description}</p>

                        <div className={styles.process}>
                            {content.transformation.steps.map((step, index) => {
                                const Icon =
                                    processIcons[index % processIcons.length];

                                return (
                                    <div
                                        className={styles.processStep}
                                        key={step.title}
                                    >
                                        <span
                                            className={styles.processIcon}
                                            aria-hidden="true"
                                        >
                                            <Icon size={22} strokeWidth={1.6} />
                                        </span>

                                        <div>
                                            <h3>{step.title}</h3>
                                            <p>{step.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <p className={styles.disclaimer}>
                            {content.transformation.note}
                        </p>
                    </div>
                </section>

                {/* Agricultural Applications */}
                <section className={styles.applications}>
                    <div className={styles.applicationsContent}>
                        <span className={styles.eyebrow}>
                            {content.applications.eyebrow}
                        </span>

                        <div className={styles.sectionFeatureIcon}>
                            <Sprout size={34} strokeWidth={1.5} />
                        </div>

                        <h2>{content.applications.heading}</h2>

                        <p>{content.applications.description}</p>
                    </div>

                    <div className={styles.applicationsVisual}>
                        <img
                            src={content.applications.image}
                            alt={content.applications.imageAlt}
                            loading="lazy"
                        />
                    </div>
                </section>

                {/* ACRES Approach */}
                <section className={styles.approach}>
                    <div className={styles.approachHeader}>
                        <span className={styles.eyebrow}>
                            {content.approach.eyebrow}
                        </span>

                        <h2>{content.approach.heading}</h2>

                        <p>{content.approach.description}</p>
                    </div>

                    <div className={styles.themeGrid}>
                        {content.approach.themes.map((theme, index) => {
                            const Icon =
                                themeIcons[index % themeIcons.length];

                            return (
                                <article
                                    className={styles.themeCard}
                                    key={theme.title}
                                >
                                    <span
                                        className={styles.themeIcon}
                                        aria-hidden="true"
                                    >
                                        <Icon size={25} strokeWidth={1.5} />
                                    </span>

                                    <h3>{theme.title}</h3>
                                    <p>{theme.description}</p>
                                </article>
                            );
                        })}
                    </div>

                    <p className={styles.disclaimer}>
                        {content.approach.note}
                    </p>
                </section>

                {/* Distributed Biochar */}
                <section className={styles.distributed}>
                    <div className={styles.distributedContent}>
                        <span className={styles.eyebrow}>
                            {content.distributed.eyebrow}
                        </span>

                        <h2>{content.distributed.heading}</h2>

                        <p>{content.distributed.description}</p>
                    </div>

                    <div className={styles.distributedGraphic} aria-hidden="true">
                        <div className={`${styles.orbit} ${styles.orbitOuter}`} />
                        <div className={`${styles.orbit} ${styles.orbitMiddle}`} />
                        <div className={`${styles.orbit} ${styles.orbitInner}`} />
                        <span className={styles.orbitCore}>
                            <Sprout size={27} strokeWidth={1.5} />
                        </span>
                    </div>
                </section>

                {/* Closing CTA */}
                <section className={styles.closing} id="biochar-contact">
                    <span className={styles.eyebrow}>BUILD WITH ACRES</span>

                    <h2>{content.closing.heading}</h2>

                    <p>{content.closing.description}</p>

                    <Button href="/contact" variant="primary">
                        {content.closing.cta}
                    </Button>
                </section>
            </main>

            <Footer />
        </>
    );
}