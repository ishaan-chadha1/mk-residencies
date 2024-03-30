import { Icon } from "@iconify/react";
import Link from "next/link";
import clsx from "clsx";

// Define ButtonVariant here, before using it in the Button component
const ButtonVariant = {
    primary: "btn--primary",
    secondary: "btn--secondary",
    outline: "btn--outline",
    black: "btn--black"
};

export const Button = ({
    children,
    icon,
    href = "",
    type = "link",
    variant = "primary",
    className = ""
}) => {
    // Now ButtonVariant is defined and can be used
    const buttonClass = clsx("btn", ButtonVariant[variant], className);

    if (type === "button" || type === "submit") {
        return (
            <button type={type} className={buttonClass}>
                {children}
                {icon && <Icon icon={icon} />}
            </button>
        );
    } else {
        return (
            <Link href={href} role="button" className={buttonClass}>
                {children}
                {icon && <Icon icon={icon} />}
            </Link>
        );
    }
};
