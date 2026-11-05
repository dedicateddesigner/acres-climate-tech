"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./EnhancedRockWeathering.module.scss";

const processSteps = [
    {
        number: "01",
        title: "Rock",
        description: "Certain silicate rocks, such as basalt, naturally absorb CO₂ as they weather.",
    },
    {
        number: "02",
        title: "Crushing",
        description: "The rock is ground into fine particles to accelerate the natural process.",
    },
    {
        number: "03",
        title: "Field application",
        description: "The mineral particles are spread over agricultural soil.",
    },
    {
        number: "04",
        title: "Weathering reaction",
        description: "As the particles weather, they draw down atmospheric CO₂.",
    },
    {
        number: "05",
        title: "CO₂ drawdown",
        description: "The process converts carbon into stable minerals while releasing beneficial nutrients into the soil.",
    },
];

export default function EnhancedRockWeathering() {
    const sectionRef = useRef<HTMLElement>(null);
    const rockRef = useRef<HTMLDivElement>(null);
    const soilRef = useRef<HTMLDivElement>(null);
    const particleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const section = sectionRef.current;
        const rock = rockRef.current;
        const soil = soilRef.current;
        const particles = particleRef.current;

        if (!section || !rock || !soil || !particles) return;

        const media = gsap.matchMedia();

        media.add("(min-width: 1001px)", () => {
            const context = gsap.context(() => {
                gsap.to(rock, {
                    y: -55,
                    rotate: 3,
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1,
                    },
                });

                gsap.to(particles, {
                    y: -90,
                    x: -18,
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1.3,
                    },
                });

                gsap.fromTo(
                    soil,
                    { y: 65, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        ease: "none",
                        scrollTrigger: {
                            trigger: soil,
                            start: "top 85%",
                            end: "top 35%",
                            scrub: 1,
                        },
                    }
                );
            }, section);

            return () => context.revert();
        });

        return () => media.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="enhanced-rock-weathering"
            className={styles.section}
            aria-labelledby="erw-title"
        >
            <div className={styles.container}>
                <header className={styles.intro}>
                    <div className={styles.headingBlock}>
                        <p className={styles.eyebrow}>02 / CARBON REMOVAL PATHWAY</p>

                        <h2 id="erw-title" className={styles.title}>
                            What is
                            <br />
                            <span>Enhanced Rock</span>
                            <br />
                            Weathering?
                        </h2>
                    </div>

                    <div className={styles.introCopy}>
                        <p>
                            Enhanced Rock Weathering accelerates a natural geological
                            process. Certain silicate rocks — like basalt — naturally absorb
                            CO₂ from the atmosphere as they weather, a process that normally
                            takes thousands of years.
                        </p>

                        <p>
                            By grinding these rocks into fine particles and spreading them on
                            agricultural soil, ERW speeds up this reaction dramatically.
                        </p>
                    </div>
                </header>

                <div className={styles.materialScene}>
                    <div className={styles.sceneMeta}>
                        <span>GEOLOGY / MINERAL WEATHERING</span>
                        <span>01 — 05</span>
                    </div>

                    <div className={styles.sceneVisual}>
                        <div
                            ref={particleRef}
                            className={styles.particleLayer}
                            aria-hidden="true"
                        />

                        <div ref={rockRef} className={styles.rockVisual}>
                            <Image
                                src="/assets/what-we-do/Enhanced-Rock-Weathering.webp"
                                alt="Basalt and mineral rock fragments"
                                fill
                                priority={false}
                                sizes="(max-width: 1000px) 100vw, 65vw"
                                style={{ objectFit: "contain" }}
                            />
                        </div>

                        <div
                            ref={soilRef}
                            className={styles.soilVisual}
                            aria-hidden="true"
                        >
                            <Image
                                src="/assets/what-we-do/Seedling%20in%20a%20Dynamic%20Soil%20Cross-Section.webp"
                                alt=""
                                fill
                                sizes="(max-width: 1000px) 100vw, 65vw"
                                style={{ objectFit: "contain" }}
                            />
                        </div>

                        <span className={styles.sceneCaption}>
                            FROM SILICATE ROCK TO AGRICULTURAL SOIL
                        </span>
                    </div>
                </div>

                <div className={styles.process}>
                    <div className={styles.processHeading}>
                        <div>
                            <p className={styles.eyebrow}>THE GEOLOGICAL PROCESS</p>
                            <h3>Accelerating what nature already does.</h3>
                        </div>

                        <p className={styles.processLead}>
                            A natural process, brought into the agricultural landscape.
                        </p>
                    </div>

                    <div className={styles.steps}>
                        {processSteps.map((step, index) => (
                            <article className={styles.step} key={step.number}>
                                <span className={styles.stepNumber}>{step.number}</span>

                                <div className={styles.stepBody}>
                                    <h4>{step.title}</h4>
                                    <p>{step.description}</p>
                                </div>

                                {index !== processSteps.length - 1 && (
                                    <span className={styles.stepConnector} aria-hidden="true">
                                        →
                                    </span>
                                )}
                            </article>
                        ))}
                    </div>
                </div>

                <div className={styles.outcome}>
                    <div className={styles.outcomeLabel}>
                        <span className={styles.eyebrow}>THE OUTCOME</span>
                        <span className={styles.outcomeLine} />
                    </div>

                    <div className={styles.outcomeContent}>
                        <h3>
                            Carbon drawdown.
                            <br />
                            <span>Minerals returned to the soil.</span>
                        </h3>

                        <p>
                            As the rock particles weather, they draw down atmospheric CO₂ and
                            convert it into stable minerals, while also releasing beneficial
                            nutrients into the soil — improving fertility as a byproduct of
                            carbon removal.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}