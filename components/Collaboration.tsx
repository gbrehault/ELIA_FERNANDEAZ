import SectionTitle from "@/components/SectionTitle";
import { Aperture, ArrowRight, Camera, Flower2, Gem } from "lucide-react";
import Image from "next/image";

const collaborations = [
  { title: "Mission ponctuelle", icon: Aperture },
  { title: "Renfort créatif", icon: Flower2 },
  { title: "Shooting éditorial", icon: Camera },
  { title: "Conception complète", icon: Gem },
];

export default function Collaboration() {
  return (
    <section id="collaboration" className="collaboration relative isolate overflow-hidden text-[#ede9de] bg-[#24251e] [&_.eyebrow]:text-[#b0aa9b] [&_.section-heading_h2]:text-[clamp(40px,4.15vw,62px)] [&_.section-heading_h2]:leading-[1.18] [&_.section-heading_h2]:tracking-[-.02em] [&_.section-heading_.script]:block [&_.section-heading_.script]:mt-[9px] [&_.section-heading_.script]:mb-[7px] [&_.section-heading_.script]:text-[#d7d0c1] [&_.section-heading_.script]:text-[1.42em] [&_.outline-button]:min-w-[310px] [&_.outline-button]:text-[#d9d2c3] [&_.outline-button]:border-[#bab2a1] [&_.outline-button]:text-[9px] [&_.outline-button:hover]:bg-background [&_.outline-button:hover]:text-dark [&_.outline-button:hover]:border-background max-wide:[&_.section-heading_h2]:text-[42px] max-wide:[&_.outline-button]:min-w-0 tablet:max-compact:[&_.section-heading_h2]:text-[36px] max-tablet:[&_.section-heading]:ml-[16%] max-tablet:[&_.section-heading_h2]:text-[43px] max-tablet:[&_.outline-button]:text-[8px] max-tablet:[&_.outline-button]:px-4 max-tablet:[&_.outline-button]:gap-[18px] max-tablet:[&_.outline-button]:min-h-[45px]">
      <Image className="collaboration-image -z-3 object-cover object-left w-[66%]! saturate-[.45] opacity-72 max-tablet:w-full! max-tablet:object-[40%_center] max-tablet:opacity-40" src="/images/pivoines.jpg" alt="" fill sizes="(max-width: 700px) 100vw, 66vw" />
      <div className="collaboration-shade -z-2 absolute inset-0 [background:linear-gradient(90deg,rgb(34_35_28_/_14%),rgb(34_35_28_/_24%)_25%,#24251e_75%)] max-tablet:[background:linear-gradient(0deg,#24251e_12%,rgb(36_37_30_/_32%)_100%)]" />
      <div className="collaboration-inner page-container pt-[62px] pb-[60px] grid grid-cols-[34%_40%] justify-end gap-[4%] max-wide:grid-cols-[36%_43%] max-wide:py-[50px] tablet:max-compact:grid-cols-[42%_48%] max-tablet:block max-tablet:py-11 mx-auto w-[92%] max-w-[1440px] max-tablet:w-[calc(100%_-_44px)]">
        <div>
          <SectionTitle number="04" label="Collaborations" title={<>Votre vision.<span className="script font-calligraphic font-normal text-[#a69f93]">Mon regard.</span>Un projet unique.</>} />
          <div className="signature-stroke w-[165px] h-px mt-8 bg-[#c2b9a5] [transform:rotate(-5deg)] origin-left max-tablet:mt-[21px] max-tablet:w-[130px]" aria-hidden="true" />
        </div>
        <div className="collaboration-copy pt-[18px] [&>p]:text-[#c5c1b5] [&>p]:text-[13px] [&>p]:leading-[1.65] [&>p+p]:mt-[13px] max-wide:[&>p]:text-[12px] max-tablet:mt-[31px] max-tablet:py-0 max-tablet:px-[5px] max-tablet:[&>p]:text-[12px]">
          <p>Vous êtes une agence événementielle, wedding planner, lieu de réception ou professionnel du mariage ?</p>
          <p>J’interviens en renfort créatif sur vos projets pour imaginer, concevoir et mettre en scène des univers singuliers en accord avec votre vision et celle de vos clients.</p>
          <ul className="collaboration-types list-none grid grid-cols-4 gap-[15px] p-0 my-[33px] mx-0 [&_li]:flex [&_li]:flex-col [&_li]:items-start [&_li]:gap-[13px] [&_svg]:text-[#c2bbab] [&_svg]:size-[27px] [&_svg]:stroke-1 [&_span]:max-w-20 [&_span]:text-[9px] [&_span]:leading-[1.5] [&_span]:uppercase [&_span]:tracking-[.09em] [&_span]:text-[#c2bbae] tablet:max-compact:gap-2 tablet:max-compact:[&_span]:text-[8px] max-tablet:my-[26px] max-tablet:gap-2.5 max-tablet:[&_span]:text-[8px]">
            {collaborations.map(({ title, icon: Icon }) => (
              <li key={title}><Icon aria-hidden="true" /><span>{title}</span></li>
            ))}
          </ul>
          <a className="outline-button inline-flex items-center justify-between gap-6 min-h-[46px] px-[23px] py-3 border border-current text-[10px] font-medium tracking-[.08em] uppercase leading-[1.4] hover:bg-dark hover:text-background hover:border-dark" href="#contact">Parlons de votre prochain projet <ArrowRight size={16} strokeWidth={1} /></a>
        </div>
      </div>
    </section>
  );
}
