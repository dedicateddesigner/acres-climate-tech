
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ContactForm from "@/components/ContactForm/ContactForm";
import styles from "./contact.module.scss";

const contactDetails = [
    {
        label: "GENERAL ENQUIRIES",
        value: "info@acresclimate.tech",
        href: "mailto:info@acresclimate.tech",
    },
];

const enquiryTypes = [
    "Industry partnerships",
    "Agricultural collaborations",
    "Research and innovation",
    "Carbon removal initiatives",
];

export default function ContactPage() {
    return (
        <>
            <Header />

            <main className={styles.page}>
                {/* Contact Hero */}
                <section className={styles.hero}>
                    <div className={styles.heroContent}>
                        <span className={styles.eyebrow}>GET IN TOUCH</span>

                        <h1>
                            Let's create
                            <br />
                            <span>something meaningful.</span>
                        </h1>

                        <p>
                            Whether you're exploring a partnership, a research
                            collaboration or a new approach to climate action,
                            we'd like to hear from you.
                        </p>
                    </div>

                    <div className={styles.heroDecoration} aria-hidden="true">
                        <span />
                        <span />
                        <span />
                    </div>
                </section>

                {/* Contact Content */}
                <section className={styles.contactSection}>
                    <div className={styles.contactInfo}>
                        <span className={styles.eyebrow}>START A CONVERSATION</span>

                        <h2>
                            Different perspectives.
                            <br />
                            Shared possibilities.
                        </h2>

                        <p className={styles.intro}>
                            ACRES works at the intersection of industry,
                            agriculture and climate innovation. Tell us what
                            you're exploring, and let's start a conversation.
                        </p>

                        <div className={styles.details}>
                            {contactDetails.map((detail) => (
                                <div className={styles.detail} key={detail.label}>
                                    <span>{detail.label}</span>
                                    <a href={detail.href}>{detail.value}</a>
                                </div>
                            ))}
                        </div>

                        <div className={styles.enquiryList}>
                            <h3>Areas of interest</h3>

                            <ul>
                                {enquiryTypes.map((type) => (
                                    <li key={type}>{type}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className={styles.formPanel}>
                        <div className={styles.formHeader}>
                            <span className={styles.eyebrow}>YOUR ENQUIRY</span>
                            <h2>Tell us a little about your idea.</h2>
                            <p>
                                Fill in the details below and we'll help direct your
                                enquiry to the right conversation.
                            </p>
                        </div>

                        <ContactForm />
                    </div>
                </section>

                {/* Closing Message */}
                <section className={styles.closing}>
                    <span className={styles.eyebrow}>CARBON. NATURE. FUTURE.</span>
                    <h2>
                        The next step starts
                        <br />
                        with a conversation.
                    </h2>
                </section>
            </main>

            <Footer />
        </>
    );
}
