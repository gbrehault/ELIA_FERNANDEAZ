import { contactInfo } from "@/data/contact";

export default function Footer() {
  return (
    <footer className="site-footer pb-[42px] max-tablet:pb-[26px]">
      <div className="footer-inner page-container border-t border-[#d5cfc4] pt-[31px] max-tablet:pt-[25px] mx-auto w-[92%] max-w-[1440px] max-tablet:w-[calc(100%_-_44px)]">
        <div className="footer-top grid grid-cols-[1fr_1.25fr_1fr] gap-7 items-center [&>.social-links]:justify-end max-wide:[&_.social-links]:gap-[15px] max-tablet:grid-cols-1 max-tablet:gap-[23px] max-tablet:[&>.social-links]:justify-start max-tablet:[&>.social-links]:hidden">
          <div className="footer-brand [&_.wordmark]:text-[26px] [&_p]:text-[#a69e91] [&_p]:text-[10px] [&_p]:mt-[5px] max-tablet:[&_.wordmark]:text-[25px]">
            <a
              className="wordmark font-serif text-[25px] leading-none whitespace-nowrap tracking-[-.035em] max-wide:text-[23px]"
              href="#hero"
            >
              {contactInfo.name}
            </a>
            <p>{contactInfo.tagline}</p>
          </div>
          <nav
            className="footer-nav flex items-center justify-center gap-[30px] [&_a]:text-[#948b7e] [&_a]:text-[11px] max-wide:gap-[18px] max-tablet:justify-start max-tablet:gap-[26px] max-tablet:flex-wrap max-tablet:[&_a]:text-[10px]"
            aria-label="Navigation de pied de page"
          >
            <a href="#about">À propos</a>
            <a href="#expertise">Expertise</a>
            <a href="#projects">Projets</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="social-links flex gap-6 flex-wrap items-center [&_a]:inline-flex [&_a]:items-center [&_a]:gap-1 [&_a]:text-[11px] [&_a]:text-[#8d867a] [&_a:hover]:text-dark max-tablet:gap-[23px]">
            <a
              href={contactInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="footer-bottom grid grid-cols-[1fr_1.25fr_1fr] gap-7 items-center mt-[35px] text-[#aba397] text-[10px] [&_.footer-note]:text-center max-tablet:grid-cols-1 max-tablet:gap-3 max-tablet:mt-7 max-tablet:text-[9px] max-tablet:[&_.footer-note]:text-left">
          <p>
            © {new Date().getFullYear()} Elia Fernandez. Tous droits réservés.
            Design & website{" "}
            <a
              href="https://brhcrea.fr"
              target="blank"
              rel="noopener noreferrer"
            >
              AGENCE BRHCREA
            </a>
          </p>
          <p className="footer-note">Wedding Design & Art Direction — France</p>
          <p className="footer-signature text-right font-calligraphic text-[31px] leading-none max-tablet:text-left max-tablet:text-[28px] max-tablet:mt-1">
            Designed with intention.
          </p>
        </div>
      </div>
    </footer>
  );
}
