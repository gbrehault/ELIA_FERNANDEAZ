import SectionTitle from "@/components/SectionTitle";
import { contactInfo } from "@/data/contact";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="contact border-t border-[#eeebe5] pt-[60px] pb-[62px] max-tablet:pt-[37px] max-tablet:pb-10">
      <div className="contact-grid page-container grid grid-cols-[1fr_1.1fr] gap-[11%] max-wide:gap-[5%] max-tablet:block mx-auto w-[92%] max-w-[1440px] max-tablet:w-[calc(100%_-_44px)]">
        <div className="contact-title [&_.section-heading_h2]:text-[clamp(40px,3.8vw,60px)] [&_.section-heading_h2]:leading-[1.14] [&_.section-heading_.script]:text-[1.25em] max-tablet:[&_.section-heading_h2]:text-[40px]">
          <SectionTitle
            number="05"
            label="Contact"
            title={
              <>
                Créons quelque chose
                <br />
                de beau <span className="script font-calligraphic font-normal text-[#a69f93]">ensemble.</span>
              </>
            }
          />
          <p className="contact-availability mt-[34px] text-[#928a7d] text-[12px] max-w-[365px] leading-[1.75] max-tablet:mt-6">{contactInfo.description}</p>
        </div>
        <address className="contact-details grid grid-cols-[1.25fr_1fr] content-start gap-y-[35px] gap-x-[34px] pl-9 mt-[35px] border-l border-line not-italic [&_.eyebrow]:text-[10px] [&_.eyebrow]:mb-3.5 [&_.contact-name]:font-serif [&_.contact-name]:text-[24px] [&_.contact-name]:leading-[1.1] [&_.contact-name]:text-[#5a554c] [&_p]:text-[#91897c] [&_p]:text-[12px] [&_p]:leading-[1.7] [&_.social-links]:col-span-full [&_.social-links]:pt-[5px] max-wide:pl-6 max-wide:gap-y-7 max-wide:gap-x-5 max-tablet:mt-[31px] max-tablet:pt-[26px] max-tablet:px-0 max-tablet:pb-0 max-tablet:border-l-0 max-tablet:border-t max-tablet:gap-y-[25px] max-tablet:gap-x-[15px] max-tablet:[&_.eyebrow]:text-[9px] max-tablet:[&_.eyebrow]:mb-2.5 max-tablet:[&_.contact-name]:text-[21px] max-tablet:[&_p]:text-[11px]">
          <div>
            <p className="eyebrow text-[11px] font-medium uppercase tracking-[.15em] leading-[1.5] text-[#aaa398] max-tablet:text-[10px]">Le studio</p>
            <p className="contact-name">{contactInfo.name}</p>
            <p>{contactInfo.tagline}</p>
          </div>
          <div>
            <p className="eyebrow text-[11px] font-medium uppercase tracking-[.15em] leading-[1.5] text-[#aaa398] max-tablet:text-[10px]">Ici & ailleurs</p>
            <p>
              {contactInfo.country}
              <br />
              {contactInfo.availability}
            </p>
          </div>
          <div className="contact-direct col-span-full">
            <p className="eyebrow text-[11px] font-medium uppercase tracking-[.15em] leading-[1.5] text-[#aaa398] max-tablet:text-[10px]">Échangeons sur votre projet</p>
            <a className="contact-email inline-block font-serif text-[clamp(23px,2.6vw,40px)] leading-[1.3] border-b border-[#c6bdae] pb-[5px] hover:text-[#ac9471] max-tablet:text-[clamp(25px,7.5vw,38px)]" href={`mailto:${contactInfo.email}`}>
              elia.fernandez@gmail.com
            </a>
            <a
              className="contact-phone block w-fit mt-[13px] text-[14px] text-[#8c8273] hover:text-[#ac9471] max-tablet:text-[13px]"
              href={`tel:${contactInfo.phone.replaceAll(" ", "")}`}
            >
              {contactInfo.phone}
            </a>
          </div>
          <div className="social-links flex gap-6 flex-wrap items-center [&_a]:inline-flex [&_a]:items-center [&_a]:gap-1 [&_a]:text-[11px] [&_a]:text-[#8d867a] [&_a:hover]:text-dark max-tablet:gap-[23px]">
            {[
              ["Instagram", contactInfo.instagram],
              ["LinkedIn", contactInfo.linkedin],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {label}
                <ArrowUpRight size={12} strokeWidth={1} aria-hidden="true" />
              </a>
            ))}
          </div>
        </address>
      </div>
    </section>
  );
}
