import Image from "next/image";
import Link from "next/link";
import {
    Sprout,
    Mountain,
    ArrowUpRight,
} from "lucide-react";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Button from "@/components/Button/Button";

import styles from "./projects.module.scss";

export default function ProjectsPage() {
    return (
        <>
            <Header />

            <main className={styles.page}>
                <section className={styles.intro}>
                    <div className={styles.container}>
                        <p className={styles.eyebrow}>
                            ACRES / PROJECT PORTFOLIO
                        </p>

                        <div className={styles.introGrid}>
                            <h1 className={styles.heading}>
                                Where climate action
                                <br />
                                takes <span>root.</span>
                            </h1>

                            <div className={styles.introContent}>
                                <p>
                                    Turning carbon removal into meaningful outcomes for
                                    agriculture, communities and the climate.
                                </p>

                                <p>
                                    Explore the pathways through which ACRES works to connect
                                    climate commitments with healthier, more resilient
                                    agricultural landscapes.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.featured}>
                    <div className={styles.featuredVisual}>
                        <div
                            className={styles.visualGrid}
                            aria-hidden="true"
                        />

                        <div className={styles.visualLabel}>
                            <span>FIELD SYSTEMS</span>
                            <span>CARBON · SOIL · NATURE</span>
                        </div>

                        <div className={styles.soilArtwork}>
                            <Image
                                src="/assets/what-we-do/Seedling%20in%20a%20Dynamic%20Soil%20Cross-Section.webp"
                                alt="Seedling growing through layered soil and geological material"
                                fill
                                priority
                                sizes="100vw"
                            />
                        </div>

                        <div className={styles.visualCaption}>
                            <span>FROM CARBON REMOVAL</span>
                            <span
                                className={styles.captionLine}
                                aria-hidden="true"
                            />
                            <span>TO LIVING LANDSCAPES</span>
                        </div>
                    </div>

                    <div className={styles.featuredContent}>
                        <div>
                            <p className={styles.eyebrow}>
                                PROJECT PORTFOLIO
                            </p>

                            <h2>
                                Climate solutions,
                                <br />
                                grounded in the field.
                            </h2>
                        </div>

                        <div className={styles.featuredDescription}>
                            <p>
                                ACRES brings together carbon removal pathways, agricultural
                                systems and farming communities to create long-term value
                                from climate action.
                            </p>

                            <p className={styles.placeholderNote}>
                                Project profiles and field locations will be published as
                                project information becomes available.
                            </p>
                        </div>
                    </div>
                </section>

                <section
                    className={styles.pathways}
                    id="project-pathways"
                >
                    <div className={styles.container}>
                        <div className={styles.sectionHeading}>
                            <div>
                                <p className={styles.eyebrow}>
                                    OUR APPROACH IN THE FIELD
                                </p>

                                <h2>
                                    Two pathways.
                                    <br />
                                    A shared ambition.
                                </h2>
                            </div>

                            <p>
                                Our project work is built around two nature-based carbon
                                removal pathways, each with a distinct role in agricultural
                                landscapes.
                            </p>
                        </div>

                        <div className={styles.pathwayGrid}>
                            <article className={styles.pathwayCard}>
                                <div className={styles.pathwayVisual}>
                                    <span className={styles.cardIndex}>
                                        BIOCHAR
                                    </span>

                                    <Image
                                        src="/assets/what-we-do/Distributed-Biochar.webp"
                                        alt="Illustration of distributed biochar material"
                                        fill
                                        sizes="(max-width: 700px) 100vw, 50vw"
                                    />
                                </div>

                                <div className={styles.pathwayInfo}>
                                    <div className={styles.pathwayDescription}>
                                        <p className={styles.cardEyebrow}>
                                            CARBON REMOVAL PATHWAY
                                        </p>

                                        <div className={styles.projectIcon}>
                                            <Sprout size={27} strokeWidth={1.5} />
                                        </div>

                                        <h3>Distributed Biochar</h3>

                                        <p>
                                            Working with agricultural biomass to produce and apply
                                            stable carbon-rich material that supports soil health
                                            and long-term carbon storage.
                                        </p>
                                    </div>

                                    <div className={styles.pathwayAction}>
                                        <Button
                                            href="/projects/biochar"
                                            variant="primary"
                                        >
                                            Explore Biochar
                                        </Button>
                                    </div>
                                </div>
                            </article>

                            <article className={styles.pathwayCard}>
                                <div className={styles.pathwayVisual}>
                                    <span className={styles.cardIndex}>
                                        ERW
                                    </span>

                                    <Image
                                        src="/assets/what-we-do/Enhanced-Rock-Weathering.webp"
                                        alt="Illustration of mineral rocks used in enhanced rock weathering"
                                        fill
                                        sizes="(max-width: 700px) 100vw, 50vw"
                                    />
                                </div>

                                <div className={styles.pathwayInfo}>
                                    <div className={styles.pathwayDescription}>
                                        <p className={styles.cardEyebrow}>
                                            CARBON REMOVAL PATHWAY
                                        </p>

                                        <div className={styles.projectIcon}>
                                            <Mountain size={27} strokeWidth={1.5} />
                                        </div>

                                        <h3>Enhanced Rock Weathering</h3>

                                        <p>
                                            Applying suitable silicate rock materials to
                                            agricultural land to accelerate natural weathering
                                            processes that draw down atmospheric carbon.
                                        </p>
                                    </div>

                                    <div className={styles.pathwayAction}>
                                        <Button
                                            href="/projects/enhanced-rock-weathering"
                                            variant="primary"
                                        >
                                            Explore ERW
                                        </Button>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>

                <section className={styles.upcoming}>
                    <div className={styles.container}>
                        <div className={styles.upcomingInner}>
                            <div>
                                <p className={styles.eyebrow}>
                                    FIELD NOTES / COMING SOON
                                </p>

                                <h2>
                                    The next chapter
                                    <br />
                                    starts in the field.
                                </h2>
                            </div>

                            <div className={styles.upcomingContent}>
                                <p>
                                    Project stories, locations and measured outcomes will be
                                    added as ACRES&apos; field programmes develop.
                                </p>

                                <Link
                                    href="/#contact"
                                    className={styles.contactLink}
                                >
                                    Partner with ACRES
                                    <ArrowUpRight size={17} strokeWidth={1.6} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}