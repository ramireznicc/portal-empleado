import React from "react";

export default function Button({
  variant = "primary",
  icon = null,
  iconPosition = "left",
  disabled = false,
  children,
  onClick,
  className = "",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 text-sm font-semibold rounded-full min-w-[200px] h-12 px-5 transition-all duration-200";

  const variants = {
    primary: "bg-brand-primary-dark text-white hover:bg-brand-primary-darkest",
    disabled: "bg-neutral-semilight text-white cursor-not-allowed",
    google:
      "bg-white border border-neutral-light hover:border-brand-primary-dark hover:bg-neutral-ultralight text-neutral-dark",
  };

  const iconClasses =
    "transition-transform duration-300 ease-in-out group-hover:animate-wiggle";

  return (
    <button
      onClick={onClick}
      className={`group ${baseStyles} ${
        disabled ? variants.disabled : variants[variant]
      } ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <span className={iconClasses}>{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className={iconClasses}>{icon}</span>
      )}
    </button>
  );
}
