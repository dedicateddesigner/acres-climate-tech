"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
    Handshake,
    Wheat,
    Factory,
    Microscope,
    BadgeCheck,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./HowWeWork.module.scss";

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        number: "01",
        title: "Farmer Engagement",
        description:
            "Onboarding and educating farming communities in target regions.",
        Icon: Handshake,
    },
    {
        number: "02",
        title: "Feedstock / Rock Sourcing",
        description:
            "Sourcing agricultural residue for biochar or silicate rock for Enhanced Rock Weathering.",
        Icon: Wheat,
    },
    {
        number: "03",
        title: "Production / Application",
        description:
            "Pyrolysis processing for biochar, or rock grinding and field application for ERW.",
        Icon: Factory,
    },
    {
        number: "04",
        title: "Monitoring, Reporting & Verification",
        description:
            "Measuring and verifying carbon sequestration outcomes.",
        Icon: Microscope,
    },
    {
        number: "05",
        title: "Carbon Credit Issuance",
        description:
            "Verified credits generated and sold, with revenue shared back to farmers.",
        Icon: BadgeCheck,
    },
];

export default function HowWeWork() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReducedMotion) return;

        const context = gsap.context(() => {
            gsap.fromTo(
                "[data-reveal='header']",
                { y: 30, autoAlpha: 0 },
                {
                    y: 0,
                    autoAlpha: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 75%",
                        once: true,
                    },
                }
            );

            gsap.fromTo(
                "[data-reveal='landscape']",
                { y: 45, autoAlpha: 0 },
                {
                    y: 0,
                    autoAlpha: 1,
                    duration: 1.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: "[data-reveal='landscape']",
                        start: "top 85%",
                        once: true,
                    },
                }
            );

            gsap.fromTo(
                "[data-reveal='step']",
                { y: 25, autoAlpha: 0 },
                {
                    y: 0,
                    autoAlpha: 1,
                    duration: 0.7,
                    stagger: 0.12,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: "[data-reveal='steps']",
                        start: "top 85%",
                        once: true,
                    },
                }
            );
        }, section);

        return () => context.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="how-we-work"
            className={styles.section}
            aria-labelledby="how-we-work-title"
        >
            <div className={styles.container}>
                <header className={styles.header} data-reveal="header">
                    <div className={styles.headingGroup}>
                        <p className={styles.eyebrow}>OUR APPROACH</p>

                        <h2 id="how-we-work-title">
                            How We
                            <br />
                            <span>Work</span>
                        </h2>
                    </div>

                    <p className={styles.intro}>
                        From working with farming communities to measuring carbon removal
                        outcomes, every stage connects climate action with agricultural
                        value.
                    </p>
                </header>

                <div className={styles.timeline} aria-hidden="true">
                    <div className={styles.timelineTrack} />

                    {steps.map((step) => (
                        <div className={styles.timelinePoint} key={step.number}>
                            {step.number}
                        </div>
                    ))}
                </div>

                <div
                    className={styles.landscape}
                    data-reveal="landscape"
                    aria-hidden="true"
                >
                    <Image
                        src="/assets/how-we-work/landscape.png"
                        alt=""
                        fill
                        priority={false}
                        sizes="(max-width: 700px) 100vw, 94vw"
                    />
                </div>

                <div className={styles.steps} data-reveal="steps">
                    {steps.map(({ number, title, description, Icon }) => (
                        <article
                            className={styles.step}
                            key={number}
                            data-reveal="step"
                        >
                            <span className={styles.stepNumber}>{number}</span>

                            <div className={styles.stepIcon} aria-hidden="true">
                                <Icon size={27} strokeWidth={1.5} />
                            </div>

                            <h3>{title}</h3>

                            <p>{description}</p>
                        </article>
                    ))}
                </div>

                <footer className={styles.footer}>
                    <span className={styles.footerAccent} />
                    <p>
                        A connected approach to carbon removal and agricultural resilience.
                    </p>
                </footer>
            </div>
        </section>
    );
}
