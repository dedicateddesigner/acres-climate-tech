import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Button from "@/components/Button/Button";

import {
    Mountain,
    Gem,
    Droplets,
    Sprout,
    Microscope,
    Layers,
    FlaskConical,
    Activity,
} from "lucide-react";

import { erwContent } from "@/data/pathways/enhanced-rock-weathering";
import styles from "./erw.module.scss";

const processIcons = [Mountain, Layers, Droplets];
const themeIcons = [Gem, Droplets, Sprout, Microscope];

export default function EnhancedRockWeatheringPage() {
    const content = erwContent;

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

                        <Button href="/#contact" variant="primary">
                            {content.hero.cta}
                        </Button>
                    </div>

                    <div className={styles.heroVisual}>
                        <img
                            src={content.hero.image}
                            alt={content.hero.imageAlt}
                        />

                        <span className={styles.imageCaption}>
                            GEOLOGY · MINERALS · CARBON
                        </span>
                    </div>
                </section>

                {/* Understanding ERW */}
                <section className={styles.introduction}>
                    <span className={styles.eyebrow}>
                        {content.introduction.eyebrow}
                    </span>

                    <div className={styles.introductionContent}>
                        <h2>{content.introduction.heading}</h2>
                        <p>{content.introduction.description}</p>
                    </div>

                    <div className={styles.geologyMark} aria-hidden="true">
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>
                </section>

                {/* Process */}
                <section className={styles.process}>
                    <div className={styles.processVisual}>
                        <img
                            src={content.process.image}
                            alt={content.process.imageAlt}
                            loading="lazy"
                        />
                    </div>

                    <div className={styles.processContent}>
                        <span className={styles.eyebrow}>
                            {content.process.eyebrow}
                        </span>

                        <h2>{content.process.heading}</h2>

                        <p>{content.process.description}</p>

                        <div className={styles.processSteps}>
                            {content.process.steps.map((step, index) => {
                                const Icon =
                                    processIcons[index % processIcons.length];

                                return (
                                    <article
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
                                    </article>
                                );
                            })}
                        </div>

                        <p className={styles.disclaimer}>
                            {content.process.note}
                        </p>
                    </div>
                </section>

                {/* Science */}
                <section className={styles.science}>
                    <div className={styles.scienceContent}>
                        <span className={styles.eyebrow}>
                            {content.science.eyebrow}
                        </span>

                        <h2>{content.science.heading}</h2>

                        <p>{content.science.description}</p>

                        <div className={styles.scienceIcons}>
                            <span>
                                <Mountain size={21} />
                                ROCK
                            </span>

                            <span>
                                <Droplets size={21} />
                                WATER
                            </span>

                            <span>
                                <Sprout size={21} />
                                SOIL
                            </span>
                        </div>
                    </div>

                    <div className={styles.scienceGraphic} aria-hidden="true">
                        <div className={styles.scienceRing}>
                            <span className={styles.scienceCore}>CO₂</span>
                            <span className={styles.sciencePoint}>ROCK</span>
                            <span className={styles.sciencePoint}>WATER</span>
                            <span className={styles.sciencePoint}>SOIL</span>
                        </div>
                    </div>
                </section>

                {/* Considerations */}
                <section className={styles.considerations}>
                    <div className={styles.considerationsHeader}>
                        <span className={styles.eyebrow}>
                            {content.considerations.eyebrow}
                        </span>

                        <h2>{content.considerations.heading}</h2>

                        <p>{content.considerations.description}</p>
                    </div>

                    <div className={styles.themeGrid}>
                        {content.considerations.themes.map((theme, index) => {
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
                </section>

                {/* ACRES Approach */}
                <section className={styles.approach}>
                    <span className={styles.eyebrow}>
                        {content.approach.eyebrow}
                    </span>

                    <h2>{content.approach.heading}</h2>

                    <p>{content.approach.description}</p>

                    <div className={styles.approachVisual} aria-hidden="true">
                        <span className={`${styles.layer} ${styles.layerOne}`} />
                        <span className={`${styles.layer} ${styles.layerTwo}`} />
                        <span className={`${styles.layer} ${styles.layerThree}`} />
                        <span className={`${styles.layer} ${styles.layerFour}`} />
                    </div>
                </section>

                {/* Closing CTA */}
                <section className={styles.closing}>
                    <span className={styles.eyebrow}>BUILD WITH ACRES</span>

                    <h2>{content.closing.heading}</h2>

                    <p>{content.closing.description}</p>

                    <Button href="/#contact" variant="primary">
                        {content.closing.cta}
                    </Button>
                </section>
            </main>

            <Footer />
        </>
    );
}