import Link from "next/link";

type CtaButtonProps = {
  href?: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
};

const classes =
  "inline-flex items-center justify-center gap-2 rounded-[2px] bg-yellow px-5 py-3 text-[15px] font-semibold tracking-tight text-ink transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow disabled:cursor-not-allowed disabled:opacity-60";

export function CtaButton({
  href = "/start-with-clarity",
  children = "Start With Clarity →",
  className = "",
  onClick,
  type = "button",
  disabled,
}: CtaButtonProps) {
  if (href && !onClick && type !== "submit") {
    return (
      <Link href={href} className={`${classes} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${classes} ${className}`}
    >
      {children}
    </button>
  );
}

export function TextLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-1 font-semibold text-yellow underline-offset-4 transition-colors hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow ${className}`}
    >
      {children}
    </Link>
  );
}
