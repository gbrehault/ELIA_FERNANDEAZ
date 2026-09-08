import SectionTitle from "@/components/SectionTitle";
import { services } from "@/data/services";

export default function Expertise() {
  return (
    <section id="expertise" className="expertise page-container pt-12 pb-[65px] [&_.section-topline]:pb-[26px] [&_.section-topline]:border-b [&_.section-topline]:border-line max-tablet:pt-[42px] max-tablet:pb-7 max-tablet:[&_.section-topline]:pb-[23px] mx-auto w-[92%] max-w-[1440px] max-tablet:w-[calc(100%_-_44px)]">
      <div className="section-topline flex items-end justify-between gap-8 max-tablet:block">
        <SectionTitle number="02" label="Savoir-faire" title="Du concept au moindre détail." />
        <p className="section-note shrink-0 pb-2 text-muted text-[12px] leading-[1.65] max-wide:text-[10px] tablet:max-compact:hidden max-tablet:text-[11px] max-tablet:p-0 max-tablet:mt-5 max-tablet:max-w-[260px] max-tablet:[&_br]:hidden">Une approche globale et sensible pour<br /> imaginer des expériences uniques.</p>
      </div>
      <div className="services-grid grid grid-cols-6 pt-7 max-tablet:grid-cols-2 max-tablet:pt-0">
        {services.map((service) => (
          <article className="service px-[23px] py-0 border-l border-[#d7d0c6] first:border-l-0 first:pl-0 last:pr-0 [&_h3]:mt-4 [&_h3]:min-h-10 [&_h3]:font-sans [&_h3]:text-[13px] [&_h3]:font-medium [&_h3]:leading-[1.35] [&_h3]:tracking-[.025em] [&_p]:mt-[13px] [&_p]:text-[11px] [&_p]:leading-[1.7] [&_p]:text-[#928b80] max-wide:px-[15px] max-wide:[&_h3]:text-[11px] max-wide:[&_p]:text-[10px] tablet:max-compact:px-2.5 tablet:max-compact:[&_h3]:text-[10px] tablet:max-compact:[&_h3]:min-h-[39px] tablet:max-compact:[&_p]:text-[9px] max-tablet:py-6 max-tablet:px-[15px] max-tablet:mt-0 max-tablet:border-b max-tablet:border-line max-tablet:odd:pl-0 max-tablet:odd:border-l-0 max-tablet:even:pr-0 max-tablet:[&_h3]:text-[11px] max-tablet:[&_h3]:mt-[13px] max-tablet:[&_h3]:min-h-[31px] max-tablet:[&_p]:text-[11px] max-tablet:[&_p]:leading-[1.6] max-tablet:[&_p]:mt-2.5" key={service.id}>
            <span className="service-number block font-serif text-[48px] leading-none text-[#b5ad9f] max-wide:text-[40px] max-tablet:text-[43px]">{service.id}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
