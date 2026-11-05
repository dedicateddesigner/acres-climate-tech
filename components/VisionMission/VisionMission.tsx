import Image from "next/image";
import { Compass, Target } from "lucide-react";
import styles from "./VisionMission.module.scss";

export default function VisionMission() {
    return (
        <section
            id="about"
            className={styles.section}
            aria-labelledby="vision-title"
        >
            <div className={styles.container}>
                <header className={styles.header}>
                    <p className={styles.eyebrow}>OUR PURPOSE</p>

                    <h2 id="vision-title">
                        A future shaped by
                        <br />
                        <span>regenerative thinking.</span>
                    </h2>
                </header>

                <div className={styles.content}>
                    <article className={styles.vision}>
                        <div className={styles.sectionLabel}>
                            <span>01</span>
                            <span className={styles.labelIcon} aria-hidden="true">
                                <Compass size={19} strokeWidth={1.6} />
                            </span>
                            <span>OUR VISION</span>
                        </div>

                        <h3>
                            A future where every farmer in India has access to
                            climate-smart tools that regenerate the land and reward
                            stewardship — while helping the country meet its net-zero
                            ambitions.
                        </h3>

                        <div className={styles.visionVisual} aria-hidden="true">
                            <Image
                                src="/assets/visual-language/spiral.svg"
                                alt=""
                                fill
                                sizes="(max-width: 700px) 80vw, 40vw"
                            />
                        </div>
                    </article>

                    <article className={styles.mission}>
                        <div className={styles.missionVisual} aria-hidden="true">
                            <Image
                                src="/assets/visual-language/Layers.svg"
                                alt=""
                                fill
                                sizes="(max-width: 700px) 80vw, 40vw"
                            />
                        </div>

                        <div className={styles.sectionLabel}>
                            <span>02</span>
                            <span className={styles.labelIcon} aria-hidden="true">
                                <Target size={19} strokeWidth={1.6} />
                            </span>
                            <span>OUR MISSION</span>
                        </div>

                        <h3>
                            To make distributed carbon removal accessible, transparent, and
                            profitable for smallholder farmers — bridging the gap between
                            global climate commitments and grassroots agricultural
                            resilience.
                        </h3>
                    </article>
                </div>

                <div className={styles.footer}>
                    <span>CARBON.</span>
                    <span>NATURE.</span>
                    <span>FUTURE.</span>
                </div>
            </div>
        </section>
    );
}
