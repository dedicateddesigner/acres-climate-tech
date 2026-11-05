"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Biochar.module.scss";

export default function Biochar() {
    const sectionRef = useRef<HTMLElement>(null);
    const visualRef = useRef<HTMLDivElement>(null);
    const biocharRef = useRef<HTMLDivElement>(null);
    const soilRef = useRef<HTMLDivElement>(null);
    const particlesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const section = sectionRef.current;
        const visual = visualRef.current;
        const biochar = biocharRef.current;
        const soil = soilRef.current;
        const particles = particlesRef.current;

        if (!section || !visual || !biochar || !soil || !particles) return;

        const mm = gsap.matchMedia();

        mm.add("(min-width: 1001px)", () => {
            const ctx = gsap.context(() => {
                // Subtle movement of the visual layers as the section scrolls.
                gsap.to(biochar, {
                    y: -65,
                    rotate: -4,
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1,
                    },
                });

                gsap.to(particles, {
                    y: -110,
                    x: 24,
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1.3,
                    },
                });

                // Reveal the soil cross-section as the final process step enters.
                gsap.fromTo(
                    soil,
                    { opacity: 0, y: 70 },
                    {
                        opacity: 1,
                        y: 0,
                        ease: "none",
                        scrollTrigger: {
                            trigger: "#biochar-soil-step",
                            start: "top 75%",
                            end: "top 25%",
                            scrub: 1,
                        },
                    }
                );

                // A restrained entrance for the main visual.
                gsap.fromTo(
                    visual,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: visual,
                            start: "top 85%",
                            once: true,
                        },
                    }
                );
            }, section);

            return () => ctx.revert();
        });

        return () => mm.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="biochar"
            className={styles.section}
            aria-labelledby="biochar-title"
        >
            <div className={styles.container}>
                {/* Introduction */}
                <div className={styles.intro}>
                    <div className={styles.introHeading}>
                        <p className={styles.eyebrow}>01 / CARBON REMOVAL PATHWAY</p>

                        <h2 id="biochar-title" className={styles.title}>
                            What is <span>Biochar?</span>
                        </h2>
                    </div>

                    <div className={styles.introCopy}>
                        <p>
                            Biochar is a stable, carbon-rich material produced by heating
                            organic matter — such as crop residue or agricultural waste — in
                            a low-oxygen environment through a process called pyrolysis.
                        </p>

                        <p>
                            Instead of that biomass decomposing or being burned (both of
                            which release carbon back into the atmosphere), pyrolysis locks
                            the carbon into a solid form that can remain stable in soil for
                            hundreds to thousands of years.
                        </p>
                    </div>
                </div>

                {/* Transformation process */}
                <div className={styles.process}>
                    <div className={styles.processHeader}>
                        <p className={styles.eyebrow}>THE TRANSFORMATION</p>
                        <p className={styles.processIntro}>
                            From agricultural residue to a stable form of carbon.
                        </p>
                    </div>

                    <div className={styles.processFlow}>
                        <article className={styles.processStep}>
                            <span className={styles.stepIndex}>01</span>
                            <h3>Biomass</h3>
                            <p>
                                Organic matter, including crop residue and agricultural waste.
                            </p>
                        </article>

                        <div className={styles.processArrow} aria-hidden="true">
                            →
                        </div>

                        <article className={styles.processStep}>
                            <span className={styles.stepIndex}>02</span>
                            <h3>Pyrolysis</h3>
                            <p>
                                Heating organic matter in a low-oxygen environment.
                            </p>
                        </article>

                        <div className={styles.processArrow} aria-hidden="true">
                            →
                        </div>

                        <article className={styles.processStep}>
                            <span className={styles.stepIndex}>03</span>
                            <h3>Biochar</h3>
                            <p>
                                A stable, carbon-rich material ready for soil application.
                            </p>
                        </article>
                    </div>
                </div>

                {/* Parallax material experience */}
                <div className={styles.experience}>
                    <div className={styles.experienceCopy}>
                        <p className={styles.eyebrow}>FROM MATERIAL TO SOIL</p>

                        <h3>
                            Carbon that
                            <br />
                            becomes part
                            <br />
                            of the land.
                        </h3>

                        <p>
                            When applied to farmland, biochar does more than store carbon. It
                            improves soil structure, boosts water retention, supports
                            beneficial soil microbes, and can improve long-term yields —
                            making it a rare solution that benefits the climate and the
                            farmer at the same time.
                        </p>

                        <div className={styles.storySteps}>
                            <article className={styles.storyStep}>
                                <span>01</span>
                                <div>
                                    <h4>Stable carbon</h4>
                                    <p>
                                        Pyrolysis converts organic matter into a stable,
                                        carbon-rich material.
                                    </p>
                                </div>
                            </article>

                            <article className={styles.storyStep}>
                                <span>02</span>
                                <div>
                                    <h4>Soil application</h4>
                                    <p>
                                        Biochar is applied to farmland and becomes part of the soil
                                        environment.
                                    </p>
                                </div>
                            </article>

                            <article
                                id="biochar-soil-step"
                                className={styles.storyStep}
                            >
                                <span>03</span>
                                <div>
                                    <h4>Carbon locked</h4>
                                    <p>
                                        The carbon is stored in a stable form within the soil.
                                    </p>
                                </div>
                            </article>
                        </div>
                    </div>

                    <div ref={visualRef} className={styles.visualColumn}>
                        <div className={styles.visualPanel}>
                            <div
                                ref={particlesRef}
                                className={styles.particles}
                                aria-hidden="true"
                            />

                            <div ref={biocharRef} className={styles.biocharVisual}>
                                <Image
                                    src="/assets/what-we-do/Distributed-Biochar.webp"
                                    alt="Biochar fragments"
                                    fill
                                    sizes="(max-width: 1000px) 100vw, 45vw"
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
                                    sizes="(max-width: 1000px) 100vw, 45vw"
                                    style={{ objectFit: "contain" }}
                                />
                            </div>

                            <span className={styles.visualLabel}>
                                BIOCHAR / SOIL SYSTEM
                            </span>
                        </div>
                    </div>
                </div>

                {/* Closing statement */}
                <div className={styles.conclusion}>
                    <p className={styles.eyebrow}>BIOCHAR</p>
                    <h3>
                        Biomass <span>→</span> Pyrolysis <span>→</span> Biochar{" "}
                        <span>→</span> Soil Application <span>→</span> Carbon Locked
                    </h3>
                </div>
            </div>
        </section>
    );
}