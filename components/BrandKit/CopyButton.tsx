"use client";

import { useState } from "react";
import styles from "./CopyButton.module.scss";

type CopyButtonProps = {
  value: string;
};

export default function CopyButton({ value }: CopyButtonProps) {
  const [status, setStatus] = useState("Copy");

  async function handleCopy() {
    if (!navigator.clipboard) {
      setStatus("Unavailable");
      window.setTimeout(() => setStatus("Copy"), 1600);
      return;
    }

    try {
      await navigator.clipboard.writeText(value);
      setStatus("Copied");
    } catch {
      setStatus("Unavailable");
    }

    window.setTimeout(() => setStatus("Copy"), 1600);
  }

  return (
    <button
      className={styles.button}
      type="button"
      onClick={handleCopy}
      aria-label={`${status === "Copy" ? "Copy" : status} colour code ${value}`}
      data-status={status.toLowerCase()}
    >
      <span className={styles.icon} aria-hidden="true" />
      <span aria-live="polite">{status === "Copy" ? "Copy colour code" : status}</span>
    </button>
  );
}
