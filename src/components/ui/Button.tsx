"use client";

import Link from "next/link";

type ButtonVariant = "primary" | "ghost" | "accent-text";

type ButtonProps = {
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export default function Button({
  variant = "primary",
  href,
  onClick,
  children,
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 font-semibold text-sm transition-all duration-200 rounded-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-[#ff7302] text-white px-6 py-3 hover:bg-[#ea7617] active:scale-95",
    ghost:
      "border border-[#ff7302] text-[#ff7302] px-6 py-3 hover:bg-[#ff7302] hover:text-white active:scale-95",
    "accent-text":
      "text-[#ff7302] hover:text-[#ffa902] underline-offset-4 hover:underline px-0 py-0",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
