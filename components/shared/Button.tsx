import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

export default function Button({ text, iconLeft, iconRight, className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 bg-[#3178dc] hover:bg-[#2563be] text-white font-medium text-lg px-8 py-3 rounded-sm transition-colors duration-200 cursor-pointer ${className}`}
      {...props}
    >
      {iconLeft && <span className="flex items-center">{iconLeft}</span>}
      <span>{text}</span>
      {iconRight && <span className="flex items-center">{iconRight}</span>}
    </button>
  );
}