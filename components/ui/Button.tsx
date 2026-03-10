import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex h-12 items-center justify-center rounded-2xl px-5 text-sm font-semibold transition";

  const variants = {
    primary:
      "bg-[#22c55e] text-white shadow-[0_10px_30px_rgba(34,197,94,0.24)] hover:-translate-y-[1px] hover:bg-[#16a34a]",
    secondary:
      "border border-slate-200 bg-white text-slate-900 hover:border-slate-300 hover:bg-slate-50",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}