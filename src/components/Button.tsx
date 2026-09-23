import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-lime text-lime-fg hover:brightness-110 shadow-[0_0_0_1px_rgb(184_255_101_/_0.2)]",
  ghost:
    "border border-line bg-transparent text-fg hover:border-lime/50 hover:text-lime",
  dark: "bg-fg text-bg hover:bg-fg/90",
};

type Common = {
  variant?: keyof typeof variants;
  children: ReactNode;
  className?: string;
};

type ButtonAsButton = Common &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = Common &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant = "primary", className, children } = props;
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium tracking-wide transition-[transform,background-color,border-color,filter] duration-200 ease-out active:not-disabled:scale-[0.96]",
    variants[variant],
    className,
  );

  if ("href" in props && props.href) {
    const { href, variant: _v, className: _c, children: _ch, ...rest } = props;
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noreferrer" } : undefined)}
        {...rest}
      >
        {children}
      </a>
    );
  }

  const { variant: _v, className: _c, children: _ch, ...rest } = props as ButtonAsButton;
  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
