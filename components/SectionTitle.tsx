import type { ReactNode } from "react";

interface SectionTitleProps {
  number: string;
  label: string;
  title: ReactNode;
  subtitle?: string;
  className?: string;
}

export default function SectionTitle({
  number, label, title, subtitle, className = "",
}: SectionTitleProps) {
  return (
    <div className={`section-heading [&_.eyebrow]:mb-[23px] [&_h2]:text-[clamp(38px,4.12vw,64px)] [&_h2]:leading-[1.08] [&_h2]:tracking-[-.025em] [&_h2_.script]:text-[1.27em] [&_h2_.script]:leading-[.85] [&_h2_.script]:tracking-normal tablet:max-compact:[&_h2]:text-[34px] max-tablet:[&_.eyebrow]:mb-[18px] max-tablet:[&_h2]:text-[39px] ${className}`}>
      <p className="eyebrow text-[11px] font-medium uppercase tracking-[.15em] leading-[1.5] text-[#aaa398] max-tablet:text-[10px]">{number} — {label}</p>
      <h2>{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
