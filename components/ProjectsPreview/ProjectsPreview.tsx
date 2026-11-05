
import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectsPreview.module.scss";

export default function ProjectsPreview() {
    return (
        <section className={styles.section} aria-labelledby="projects-title">
            <div className={styles.container}>
                <div className={styles.header}>
                    <div>
                        <p className={styles.eyebrow}>FROM THE FIELD</p>
                        <h2 id="projects-title">
                            Climate action,
                            <br />
                            <span>taking shape.</span>
                        </h2>
                    </div>

                    <div className={styles.intro}>
                        <p>
                            Discover how carbon removal pathways can connect agricultural
                            communities, healthier soils and climate action.
                        </p>
                        <Link href="/projects" className={styles.link}>
                            Explore our projects <span aria-hidden="true">↗</span>
                        </Link>
                    </div>
                </div>

                <Link href="/projects" className={styles.feature}>
                    <div className={styles.image}>
                        <Image
                            src="/assets/what-we-do/Seedling%20in%20a%20Dynamic%20Soil%20Cross-Section.webp"
                            alt="Seedling growing through a layered soil cross-section"
                            fill
                            sizes="(max-width: 700px) 100vw, 90vw"
                        />
                    </div>

                    <div className={styles.featureContent}>
                        <span className={styles.label}>PROJECT PORTFOLIO</span>
                        <div className={styles.featureBottom}>
                            <div>
                                <h3>Building a carbon-removal ecosystem</h3>
                                <p>
                                    Project stories and field locations will be added as
                                    programme information becomes available.
                                </p>
                            </div>
                            <span className={styles.arrow} aria-hidden="true">↗</span>
                        </div>
                    </div>
                </Link>

                <p className={styles.disclaimer}>
                    Illustrative preview. Project-specific information is forthcoming.
                </p>
            </div>
        </section>
    );
}
