import Link from "next/link";
import { AnchorHTMLAttributes, ReactNode } from "react";

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  text: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

export default function ButtonLink({ href, text, iconLeft, iconRight, className = "", ...props }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`w-fit inline-flex items-center justify-center gap-2 bg-[#3178dc] hover:bg-[#2563be] text-white font-medium text-lg px-8 py-3 rounded-sm transition-colors duration-200 text-center no-underline decoration-transparent ${className}`}
      {...props}
    >
      {iconLeft && <span className="flex items-center">{iconLeft}</span>}
      <span>{text}</span>
      {iconRight && <span className="flex items-center">{iconRight}</span>}
    </Link>
  );
}