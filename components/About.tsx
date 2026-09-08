import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import eliaPortrait from "@/app/assests/IMG_0763.jpg";

export default function About() {
  return (
    <section id="about" className="about bg-[#f2eee7]">
      <div className="about-inner page-container grid grid-cols-[34.5%_1fr_17%] gap-[4.2%] items-stretch max-wide:grid-cols-[33%_1fr_17%] max-wide:gap-[3.8%] tablet:max-compact:grid-cols-[33%_1fr_15%] tablet:max-compact:gap-[3.5%] max-tablet:grid-cols-1 max-tablet:gap-0 max-tablet:pt-[30px] mx-auto w-[92%] max-w-[1440px] max-tablet:w-[calc(100%_-_44px)]">
        <div className="about-portrait relative min-h-0 [&_img]:object-cover [&_img]:object-[center_57%] [&_img]:saturate-50 max-tablet:h-[410px] max-tablet:max-h-[115vw]">
          <Image
            src={eliaPortrait}
            alt="Elia Fernandez au bord de la mer au coucher du soleil"
            fill
            sizes="(max-width: 700px) 100vw, 31vw"
            placeholder="blur"
          />
        </div>
        <div className="about-copy pt-[clamp(45px,4.4vw,76px)] pb-[23px] [&_.section-heading_.eyebrow]:mb-[29px] [&_.section-heading_h2]:text-[clamp(34px,3.85vw,60px)] [&_.section-heading_h2]:leading-[1.02] [&_h2_.script]:block [&_h2_.script]:mt-[9px] [&>p:not(.signature):not(.muted)]:mt-[23px] [&>p:not(.signature):not(.muted)]:text-[clamp(12px,1.1vw,16px)] [&>p:not(.signature):not(.muted)]:leading-[1.6] [&>p:not(.signature):not(.muted)]:text-[#716d65] [&>p.muted]:text-[#928b80] [&>p.muted]:mt-4 [&>p.muted]:text-[clamp(11px,1.02vw,15px)] [&_.signature]:mt-6 [&_.signature]:text-[clamp(35px,3.8vw,58px)] [&_.signature]:text-[#a39b8e] [&_.signature]:leading-[1.25] max-wide:pt-9 max-wide:[&_.section-heading_h2]:text-[39px] max-wide:[&_.section-heading_.eyebrow]:mb-5 max-wide:[&>p:not(.signature):not(.muted)]:mt-4 tablet:max-compact:[&_.section-heading_h2]:text-[32px] tablet:max-compact:[&>p:not(.signature):not(.muted)]:text-[11px] tablet:max-compact:[&>p.muted]:text-[10px] max-tablet:pt-[35px] max-tablet:px-[5px] max-tablet:pb-[25px] max-tablet:[&_.section-heading_h2]:text-[43px] max-tablet:[&_.section-heading_.eyebrow]:mb-[22px] max-tablet:[&>p:not(.signature):not(.muted)]:text-[13px] max-tablet:[&>p:not(.signature):not(.muted)]:mt-[22px] max-tablet:[&>p:not(.signature):not(.muted)]:max-w-[460px] max-tablet:[&>p.muted]:text-[12px] max-tablet:[&>p.muted]:mt-[15px] max-tablet:[&_.signature]:text-[45px] max-tablet:[&_.signature]:mt-[21px]">
          <SectionTitle
            number="01"
            label="À propos"
            title={
              <>
                Imaginer des univers
                <br />
                qui racontent<span className="script font-calligraphic font-normal text-[#a69f93]">une histoire.</span>
              </>
            }
          />
          <p>
            Je crée des univers sur mesure, du concept initial jusqu’à la mise
            en scène finale. Chaque projet est pensé pour raconter une histoire
            cohérente, sensible et mémorable.
          </p>
          <p className="muted">
            Spécialisée en direction artistique et scénographie événementielle,
            j’accompagne agences, wedding planners et professionnels du mariage
            dans la conception esthétique de leurs univers.
          </p>
          <p className="signature font-calligraphic font-normal">Elia Fernandez</p>
        </div>
        <aside className="about-aside py-[clamp(38px,3.8vw,60px)] max-wide:py-[34px] max-tablet:grid max-tablet:grid-cols-[100px_1fr] max-tablet:gap-[27px] max-tablet:items-center max-tablet:pt-0 max-tablet:px-[5px] max-tablet:pb-[34px]" aria-label="Le studio">
          <div className="about-detail relative aspect-[.83] [&_img]:object-cover [&_img]:saturate-[.65] max-tablet:aspect-[.85]">
            <Image
              src="/images/details-floraux.jpg"
              alt="Roses blanches et bougies, détails d'une table de réception"
              fill
              sizes="(max-width: 700px) 30vw, 16vw"
            />
          </div>
          <div className="about-facts mt-[42px] border-l border-[#d9d1c6] pl-6 grid gap-6 text-[#8f887c] text-[11px] leading-[1.6] tracking-[.045em] uppercase max-wide:pl-[15px] max-wide:text-[9px] max-wide:gap-5 max-wide:mt-[30px] tablet:max-compact:text-[8px] tablet:max-compact:pl-[9px] max-tablet:mt-0 max-tablet:pl-5 max-tablet:gap-2.5 max-tablet:text-[9px] max-tablet:[&_br]:hidden">
            <p>Basée en France</p>
            <p>
              Disponible partout
              <br />
              en France
            </p>
            <p>Collaborations B2B</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
