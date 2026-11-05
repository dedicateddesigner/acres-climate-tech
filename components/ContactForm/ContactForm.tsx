
"use client";

import { FormEvent, useState } from "react";
import styles from "./ContactForm.module.scss";

export default function ContactForm() {
    const [status, setStatus] = useState("");

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const form = event.currentTarget;
        const data = new FormData(form);

        const name = String(data.get("name") || "");
        const email = String(data.get("email") || "");
        const organisation = String(data.get("organisation") || "");
        const enquiry = String(data.get("enquiry") || "");
        const message = String(data.get("message") || "");

        const subject = `Website enquiry: ${enquiry}`;

        const body = [
            `Name: ${name}`,
            `Email: ${email}`,
            `Organisation: ${organisation || "Not provided"}`,
            `Enquiry type: ${enquiry}`,
            "",
            "Message:",
            message,
        ].join("\n");

        const mailto = `mailto:info@acresclimate.tech?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;

        window.location.href = mailto;
        setStatus("Your email application should open with your enquiry prepared.");
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.fieldRow}>
                <div className={styles.field}>
                    <label htmlFor="name">Your name *</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        autoComplete="name"
                        required
                    />
                </div>

                <div className={styles.field}>
                    <label htmlFor="email">Work email *</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="name@company.com"
                        autoComplete="email"
                        required
                    />
                </div>
            </div>

            <div className={styles.field}>
                <label htmlFor="organisation">Organisation</label>
                <input
                    id="organisation"
                    name="organisation"
                    type="text"
                    placeholder="Company or organisation name"
                    autoComplete="organization"
                />
            </div>

            <div className={styles.field}>
                <label htmlFor="enquiry">What would you like to discuss? *</label>
                <select id="enquiry" name="enquiry" required defaultValue="">
                    <option value="" disabled>
                        Select an enquiry type
                    </option>
                    <option value="Industry partnership">Industry partnership</option>
                    <option value="Agricultural partnership">Agricultural partnership</option>
                    <option value="Research collaboration">Research collaboration</option>
                    <option value="Carbon removal">Carbon removal</option>
                    <option value="General enquiry">General enquiry</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <div className={styles.field}>
                <label htmlFor="message">Your message *</label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us a little about your enquiry..."
                    required
                />
            </div>

            <button type="submit" className={styles.submit}>
                Prepare your enquiry <span aria-hidden="true">↗</span>
            </button>

            <p className={styles.privacy}>
                Your email application will open with the details you provided.
                You can review and send the message from there.
            </p>

            {status && (
                <p className={styles.status} role="status">
                    {status}
                </p>
            )}
        </form>
    );
}
