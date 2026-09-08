export default function Partners() {
  return (
    <section className="partners page-container grid grid-cols-[3fr_1fr] gap-[7%] pt-11 pb-12 [&_.eyebrow]:text-[#9a9286] [&_.eyebrow]:text-[10px] max-wide:gap-[5%] tablet:max-compact:grid-cols-[2.7fr_1fr] tablet:max-compact:gap-[4%] max-tablet:block max-tablet:py-[33px] mx-auto w-[92%] max-w-[1440px] max-tablet:w-[calc(100%_-_44px)]" aria-label="Une approche collaborative">
      <div>
        <p className="eyebrow text-[11px] font-medium uppercase tracking-[.15em] leading-[1.5] text-[#aaa398] max-tablet:text-[10px]">Des rencontres, de belles histoires</p>
        <div className="partners-list flex items-center justify-between gap-6 mt-9 [&_p]:font-serif [&_p]:text-[20px] [&_p]:leading-[.95] [&_p]:uppercase [&_p]:text-[#6d685e] max-wide:gap-3.5 max-wide:[&_p]:text-[16px] tablet:max-compact:gap-2.5 tablet:max-compact:[&_p]:text-[13px] max-tablet:flex-wrap max-tablet:justify-start max-tablet:gap-6 max-tablet:mt-6 max-tablet:[&_p]:text-[18px]">
          <p>Agences<br />créatives</p>
          <p>Wedding<br />planners</p>
          <p>Lieux<br />d’exception</p>
          <p>Artisans<br />du beau</p>
          <p>Talents<br />floraux</p>
        </div>
      </div>
      <blockquote className="partners-quote relative text-[#6d685e] text-[12px] leading-[1.7] pl-6 before:content-['“'] before:absolute before:-left-[5px] before:-top-[13px] before:font-serif before:text-[#b1a898] before:text-[45px] [&_footer]:mt-[17px] [&_footer]:pt-3 [&_footer]:border-t [&_footer]:border-line [&_footer]:text-[10px] [&_footer]:text-[#a1988c] max-wide:text-[10px] max-tablet:border-t max-tablet:border-line max-tablet:mt-[30px] max-tablet:pt-[23px] max-tablet:text-[12px] max-tablet:before:top-3 max-tablet:[&_footer]:border-0 max-tablet:[&_footer]:mt-3 max-tablet:[&_footer]:pt-0">
        Une même sensibilité, des regards qui se rencontrent et l’envie de créer, ensemble, quelque chose d’unique.
        <footer>Elia Fernandez<br />Direction artistique & scénographie</footer>
      </blockquote>
    </section>
  );
}
