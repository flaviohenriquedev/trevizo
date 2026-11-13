import Link from "next/link";
import { cn } from "@/lib/cn";

const variants = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  accent: "bg-accent text-white hover:bg-[#c40000]",
  outline: "border border-brand/15 bg-white text-brand hover:border-brand",
  dark: "bg-[#07115f] text-white hover:bg-brand-dark",
};

type Props = {
  href?: string;
  variant?: keyof typeof variants;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
};

export function Button({
  href,
  variant = "primary",
  className,
  children,
  type = "button",
  onClick,
  disabled,
  ariaLabel,
}: Props) {
  const classes = cn(
    "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:cursor-not-allowed disabled:opacity-60",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
