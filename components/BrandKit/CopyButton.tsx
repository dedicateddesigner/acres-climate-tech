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
    <button className={styles.button} type="button" onClick={handleCopy}>
      <span className={styles.value}>{value}</span>
      <span aria-live="polite">{status}</span>
    </button>
  );
}
