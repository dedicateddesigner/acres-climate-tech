import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.scss";

const navigationItems = [
  { label: "What We Do", href: "/#what-we-do" },
  { label: "Our Approach", href: "/#our-approach" },
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/#about" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.logoLink} href="/" aria-label="ACRES home">
          <Image
            className={styles.logo}
            src="/acres-logo.svg"
            alt="ACRES"
            width={200}
            height={49}
            priority
          />
        </Link>

        <nav className={styles.navigation} aria-label="Primary navigation">
          <ul className={styles.navigationList}>
            {navigationItems.map((item) => (
              <li key={item.label}>
                <Link className={styles.navigationLink} href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link className={styles.cta} href="/#contact">
          Partner With Us
        </Link>
      </div>
    </header>
  );
}
