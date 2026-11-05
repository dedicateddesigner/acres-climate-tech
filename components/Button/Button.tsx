
import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
    children: ReactNode;
    href?: string;
    variant?: "primary" | "secondary";
    arrow?: boolean;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    target?: "_blank" | "_self";
    rel?: string;
    className?: string;
    onClick?: () => void;
};

export default function Button({
    children,
    href,
    variant = "primary",
    arrow = true,
    type = "button",
    disabled = false,
    target,
    rel,
    className = "",
    onClick,
}: ButtonProps) {
    const buttonClass = [
        styles.button,
        styles[variant],
        className,
    ]
        .filter(Boolean)
        .join(" ");

    const content = (
        <>
            <span>{children}</span>
            {arrow && <span className={styles.arrow} aria-hidden="true">↗</span>}
        </>
    );

    if (href) {
        return (
            <Link
                href={href}
                className={buttonClass}
                target={target}
                rel={rel}
                aria-disabled={disabled || undefined}
                onClick={disabled ? (event) => event.preventDefault() : onClick}
            >
                {content}
            </Link>
        );
    }

    return (
        <button
            type={type}
            className={buttonClass}
            disabled={disabled}
            onClick={onClick}
        >
            {content}
        </button>
    );
}
