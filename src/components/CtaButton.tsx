import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CtaButtonProps = {
  href?: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  variant?: "default" | "outline";
};

export function CtaButton({
  href = "/start-with-clarity",
  children = "Start With Clarity →",
  className = "",
  onClick,
  type = "button",
  disabled,
  variant = "default",
}: CtaButtonProps) {
  if (href && !onClick && type !== "submit") {
    return (
      <Link
        href={href}
        className={cn(buttonVariants({ size: "lg", variant }), className)}
      >
        {children}
      </Link>
    );
  }

  return (
    <Button
      type={type}
      size="lg"
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {children}
    </Button>
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
      className={cn(
        "inline-flex items-center gap-1 font-semibold text-foreground underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground",
        className,
      )}
    >
      {children}
    </Link>
  );
}
