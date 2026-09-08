import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="hero relative overflow-hidden h-[clamp(620px,52vw,870px)] min-h-[580px] text-[#fffefa] isolate bg-[#615b50] [&_h1]:text-[clamp(78px,7.4vw,116px)] [&_h1]:leading-[.92] [&_h1]:tracking-[-.035em] [&_h1_.script]:block [&_h1_.script]:text-[#fffefa] [&_h1_.script]:text-[1.37em] [&_h1_.script]:leading-[.91] [&_h1_.script]:tracking-[-.025em] [&_h1_.script]:mt-[13px] [&_h1_.script]:-ml-[7px] max-tablet:h-[min(810px,96svh)] max-tablet:min-h-[640px] max-tablet:[&_h1]:text-[clamp(68px,19vw,96px)] max-tablet:[&_h1_.script]:text-[1.14em] max-tablet:[&_h1_.script]:mt-[15px] max-tablet:[&_h1_.script]:-ml-0.5" aria-labelledby="hero-title">
      <Image
        className="hero-image object-cover object-[50%_51%] saturate-[.65] brightness-[.83] -z-3 max-tablet:object-[59%_center]"
        src="/images/reception-toscane.jpg"
        alt="Une longue table de réception dressée sous les arches d'une demeure en pierre en Toscane"
        fill
        sizes="100vw"
        preload
      />
      <div className="hero-shade absolute inset-0 -z-2 [background:linear-gradient(90deg,rgb(22_24_20_/_50%)_0%,rgb(22_24_20_/_10%)_65%),linear-gradient(0deg,rgb(24_24_20_/_24%),transparent_50%)] max-tablet:[background:linear-gradient(90deg,rgb(22_24_20_/_58%),rgb(22_24_20_/_18%)),linear-gradient(0deg,rgb(22_24_20_/_28%),transparent)]" />
      <div className="hero-content w-[86%] max-w-[1350px] mx-auto relative pt-[clamp(188px,15.1vw,248px)] [&_.eyebrow]:text-[#ece8df] [&_.eyebrow]:text-[clamp(10px,.91vw,14px)] [&_.eyebrow]:tracking-[.12em] [&_.eyebrow]:mb-[25px] [&_.outline-button]:mt-7 [&_.outline-button]:text-[#f3eee4] [&_.outline-button]:border-white/72 [&_.outline-button]:min-w-[250px] [&_.outline-button:hover]:bg-background [&_.outline-button:hover]:text-dark max-tablet:w-[calc(100%_-_56px)] max-tablet:pt-[190px] max-tablet:[&_.eyebrow]:text-[8px] max-tablet:[&_.eyebrow]:tracking-[.09em] max-tablet:[&_.eyebrow]:max-w-[285px] max-tablet:[&_.eyebrow]:mb-[26px] max-tablet:[&_.eyebrow]:leading-[1.8] max-tablet:[&_.outline-button]:text-[8px] max-tablet:[&_.outline-button]:min-w-[224px] max-tablet:[&_.outline-button]:mt-6">
        <p className="eyebrow text-[11px] font-medium uppercase tracking-[.15em] leading-[1.5] text-[#aaa398] max-tablet:text-[10px]">Wedding design — Art direction — Scénographie</p>
        <h1 id="hero-title">
          Créer<span className="script font-calligraphic font-normal text-[#a69f93]">l’inoubliable</span>
        </h1>
        <p className="hero-description text-[clamp(14px,1.28vw,19px)] leading-[1.45] mt-[25px] max-w-[550px] text-[#f1eee7] max-tablet:text-[13px] max-tablet:leading-[1.6] max-tablet:max-w-[320px] max-tablet:mt-[26px]">
          Direction artistique, scénographie et création d’univers
          <br className="desktop-break max-tablet:hidden" /> pour agences et professionnels de
          l’événementiel.
        </p>
        <a className="outline-button inline-flex items-center justify-between gap-6 min-h-[46px] px-[23px] py-3 border border-current text-[10px] font-medium tracking-[.08em] uppercase leading-[1.4] hover:bg-dark hover:text-background hover:border-dark" href="#about">
          Découvrir mon univers <ArrowRight size={16} strokeWidth={1} />
        </a>
      </div>
      <p className="hero-side-note absolute right-[4%] top-[21%] [writing-mode:vertical-rl] uppercase tracking-[.22em] text-[10px] max-tablet:hidden">Des émotions — Sur mesure</p>
      <div className="hero-bottom page-container absolute bottom-[29px] left-[4%] right-[4%] flex items-end justify-between ultra:left-1/2 ultra:right-auto ultra:[transform:translateX(-50%)] max-tablet:bottom-[23px] max-tablet:left-[22px] max-tablet:right-[22px] mx-auto w-[92%] max-w-[1440px] max-tablet:w-[calc(100%_-_44px)]">
        <p className="hero-index flex items-center gap-[18px] text-[11px] tracking-[.12em] max-tablet:text-[9px] max-tablet:gap-3.5">
          <span>01 / 05</span>
          <span className="hero-index-line w-40 h-px bg-white/38 before:content-[''] before:block before:h-px before:w-8 before:bg-white max-tablet:w-[85px]" />
        </p>
        <a className="scroll-cue flex flex-col items-center gap-3 text-[10px] tracking-[.15em] uppercase [&_span]:h-[62px] [&_span]:w-px [&_span]:[background:linear-gradient(#f5f0e5_65%,rgb(245_240_229_/_30%)_65%)] max-tablet:text-[8px] max-tablet:gap-2 max-tablet:[&_span]:h-[43px]" href="#about">
          Scroll
          <span />
        </a>
      </div>
    </section>
  );
}
