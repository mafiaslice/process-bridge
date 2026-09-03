type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
  title?: string;
};

/**
 * The supplied Process Bridge lockup is the single source of truth for the
 * header and footer. The original upload includes its black field, so it
 * remains legible wherever the logo is used.
 */
export function Logo({
  variant = "light",
  className = "h-11 w-auto",
  title = "Process Bridge",
}: LogoProps) {
  void variant;
  return <img src="/logo.png" alt={title} className={className} />;
}

export function LogoMark({
  variant = "light",
  className = "h-8 w-8",
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  void variant;
  return <img src="/logo.png" alt="" className={className} aria-hidden="true" />;
}
