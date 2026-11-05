
import Link from "next/link";
import styles from "./ClosingSection.module.scss";
import Footer from "@/components/Footer/Footer";

const navigation = [
    { label: "Home", href: "/" },
    { label: "What We Do", href: "/#what-we-do" },
    { label: "Our Approach", href: "/#how-we-work" },
    { label: "Projects", href: "/projects" },
];

export default function ClosingSection() {
    return (
        <>
            <section className={styles.cta} id="contact">
                <div className={styles.ctaInner}>
                    <p className={styles.eyebrow}>LET'S BUILD SOMETHING THAT LASTS</p>

                    <h2>
                        Ready to turn climate action
                        <br />
                        into <span>shared value?</span>
                    </h2>

                    <p className={styles.description}>
                        We bring together industry, agriculture and climate innovation
                        to create pathways towards a more resilient future.
                    </p>

                    <div className={styles.actions}>
                        <a href="mailto:info@acresclimate.tech">
                            Start a conversation <span aria-hidden="true">↗</span>
                        </a>
                        <Link href="/projects">
                            Explore our projects <span aria-hidden="true">↗</span>
                        </Link>
                    </div>
                </div>

                <div className={styles.ctaDecoration} aria-hidden="true">
                    <span />
                    <span />
                    <span />
                </div>
            </section>
            <Footer />


        </>
    );
}
