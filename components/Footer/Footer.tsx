
import Link from "next/link";
import { Mail } from "lucide-react";
import styles from "./Footer.module.scss";

const navigation = [
    { label: "Home", href: "/" },
    { label: "What We Do", href: "/#what-we-do" },
    { label: "Our Approach", href: "/#how-we-work" },
    { label: "Projects", href: "/projects" },
];

function SocialIcon({ type }: { type: "linkedin" | "x" | "instagram" }) {
    if (type === "linkedin") {
        return (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.5 8.5H3.8V20h2.7V8.5ZM5.15 3.8a1.57 1.57 0 1 0 0 3.14 1.57 1.57 0 0 0 0-3.14ZM20.2 13.4c0-3.1-1.65-5.1-4.3-5.1a3.7 3.7 0 0 0-3.3 1.8V8.5H9.9V20h2.7v-6.2c0-1.6.3-3.1 2.25-3.1 1.9 0 1.92 1.8 1.92 3.2V20h2.7l.73-6.6Z" />
            </svg>
        );
    }

    if (type === "x") {
        return (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.8 5.7 22H2.5l7.3-8.4L1.8 2h6.5l4.5 6.7L18.9 2Zm-1.1 18h1.7L7.3 3.9H5.5L17.8 20Z" />
            </svg>
        );
    }

    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle
                cx="17.5"
                cy="6.8"
                r="1"
                className={styles.filledDot}
            />
        </svg>
    );
}

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerMain}>
                {/* Brand */}
                <div className={styles.brand}>
                    <Link href="/" className={styles.logo}>
                        ACRES<span>.</span>
                    </Link>

                    <p className={styles.tagline}>
                        CARBON. NATURE. FUTURE.
                    </p>

                    <p className={styles.brandDescription}>
                        Connecting climate action, agricultural resilience
                        and long-term environmental value.
                    </p>
                </div>

                {/* Explore */}
                <div className={styles.footerColumn}>
                    <h3>EXPLORE</h3>

                    <nav aria-label="Footer navigation">
                        {navigation.map((item) => (
                            <Link key={item.label} href={item.href}>
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Pathways */}
                <div className={styles.footerColumn}>
                    <h3>OUR PATHWAYS</h3>

                    <Link href="/projects/biochar">
                        Distributed Biochar
                    </Link>

                    <Link href="/projects/enhanced-rock-weathering">
                        Enhanced Rock Weathering
                    </Link>

                    <Link href="/projects">
                        Projects
                    </Link>
                </div>

                {/* Contact */}
                <div className={styles.footerColumn}>
                    <h3>GET IN TOUCH</h3>

                    <Link href="/contact">
                        Contact us
                    </Link>

                    <a
                        href="mailto:info@acresclimate.tech"
                        className={styles.emailLink}
                    >
                        <Mail
                            size={16}
                            strokeWidth={1.6}
                            aria-hidden="true"
                        />
                        <span>info@acresclimate.tech</span>
                    </a>

                    {/* Social brand icons */}
                    <div
                        className={styles.socials}
                        aria-label="ACRES social profiles"
                    >
                        <span
                            className={styles.socialIcon}
                            role="img"
                            aria-label="LinkedIn"
                        >
                            <SocialIcon type="linkedin" />
                        </span>

                        <span
                            className={styles.socialIcon}
                            role="img"
                            aria-label="X"
                        >
                            <SocialIcon type="x" />
                        </span>

                        <span
                            className={styles.socialIcon}
                            role="img"
                            aria-label="Instagram"
                        >
                            <SocialIcon type="instagram" />
                        </span>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className={styles.footerBottom}>
                <p>
                    © {new Date().getFullYear()} ACRES. All rights reserved.
                </p>

                <p>CARBON. NATURE. FUTURE.</p>
            </div>
        </footer>
    );
}
