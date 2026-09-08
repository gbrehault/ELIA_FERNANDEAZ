"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { contactInfo } from "@/data/contact";

gsap.registerPlugin(useGSAP);

const navItems = [
  { label: "À propos", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Projets", href: "#projects" },
  { label: "Collaboration", href: "#collaboration" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, { rootMargin: "-20% 0px -60% 0px" });
    document.querySelectorAll("main > section[id]").forEach((section) => observer.observe(section));
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
      if (event.key === "Tab") {
        const focusable = [...(headerRef.current?.querySelectorAll<HTMLElement>("a, button") ?? [])]
          .filter((element) => element.getClientRects().length && !element.closest("[inert]"));
        const first = focusable[0];
        const last = focusable.at(-1);
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    const onResize = () => { if (window.innerWidth >= 1050) setIsOpen(false); };
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [isOpen]);

  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add({ reduce: "(prefers-reduced-motion: reduce)", motion: "(prefers-reduced-motion: no-preference)" }, (context) => {
      const reduced = Boolean(context.conditions?.reduce);
      if (isOpen) {
        gsap.fromTo(".mobile-menu-panel", { autoAlpha: 0, y: -12 }, {
          autoAlpha: 1, y: 0, duration: reduced ? 0 : .4, ease: "power3.out",
        });
        gsap.fromTo(".mobile-nav-item, .mobile-menu-footer", { autoAlpha: 0, y: 16 }, {
          autoAlpha: 1, y: 0, stagger: reduced ? 0 : .045,
          duration: reduced ? 0 : .45, delay: reduced ? 0 : .1, ease: "power2.out",
        });
      } else {
        gsap.to(".mobile-menu-panel", { autoAlpha: 0, y: -10, duration: reduced ? 0 : .2, ease: "power2.in" });
      }
    });
    return () => media.revert();
  }, { scope: headerRef, dependencies: [isOpen], revertOnUpdate: true });

  return (
    <header ref={headerRef} className={`site-header fixed inset-x-0 top-0 z-50 text-[#f8f5ed] transition-colors duration-300 [background:linear-gradient(180deg,rgb(25_27_23_/_40%),rgb(25_27_23_/_8%))] border-b border-white/18 [&.is-scrolled]:text-dark [&.is-scrolled]:bg-background/97 [&.is-scrolled]:bg-none [&.is-scrolled]:backdrop-blur-[16px] [&.is-scrolled]:border-line [&.menu-is-open]:text-dark [&.menu-is-open]:bg-background/97 [&.menu-is-open]:bg-none [&.menu-is-open]:backdrop-blur-[16px] [&.menu-is-open]:border-line [&.is-scrolled_.site-header-inner]:h-[76px] max-tablet:[&.is-scrolled_.site-header-inner]:h-[68px] [&_.header-cta:hover]:bg-background [&_.header-cta:hover]:text-dark [&_.header-cta:hover]:border-background [&.is-scrolled_.header-cta]:border-[#a99e8e] [&.is-scrolled_.header-cta:hover]:bg-dark [&.is-scrolled_.header-cta:hover]:text-background [&.is-scrolled_.header-cta:hover]:border-dark${isScrolled ? " is-scrolled" : ""}${isOpen ? " menu-is-open" : ""}`}>
      <div className="site-header-inner page-container h-24 flex items-center justify-between gap-7 transition-[height] duration-300 max-wide:h-[70px] max-wide:gap-[18px] max-tablet:h-[68px] mx-auto w-[92%] max-w-[1440px] max-tablet:w-[calc(100%_-_44px)]">
        <a className="header-brand flex flex-col items-center gap-[9px] [&_.wordmark]:text-[28px] [&_.wordmark]:tracking-[-.015em] max-tablet:items-start max-tablet:gap-[7px] max-tablet:[&_.wordmark]:text-[23px]" href="#hero" onClick={() => setIsOpen(false)} aria-label="Elia Fernandez — Accueil">
          <span className="wordmark font-serif text-[25px] leading-none whitespace-nowrap tracking-[-.035em] max-wide:text-[23px]">ELIA FERNANDEZ</span>
          <span className="brand-descriptor text-[8px] uppercase tracking-[.15em] opacity-75 max-tablet:text-[6px] max-tablet:tracking-[.12em]">Art direction & Wedding design</span>
        </a>
        <nav className="desktop-nav flex gap-[clamp(18px,2vw,33px)] max-wide:gap-[15px] max-nav:hidden [&_a]:relative [&_a]:text-[10px] [&_a]:font-semibold [&_a]:tracking-[.075em] [&_a]:uppercase [&_a]:whitespace-nowrap [&_a]:py-2.5 [&_a]:after:content-[''] [&_a]:after:absolute [&_a]:after:h-px [&_a]:after:bg-current [&_a]:after:inset-x-0 [&_a]:after:bottom-[5px] [&_a]:after:scale-x-0 [&_a]:after:origin-left [&_a]:after:transition-transform [&_a]:after:duration-250 [&_a:hover]:after:scale-x-100 [&_a[aria-current]]:after:scale-x-100 max-wide:[&_a]:text-[9px]" aria-label="Navigation principale">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} aria-current={activeSection === item.href.slice(1) ? "location" : undefined}>{item.label}</a>
          ))}
        </nav>
        <a className="outline-button header-cta inline-flex items-center justify-between  min-h-[46px] px-[23px] py-3 border border-current text-[10px] font-medium tracking-[.08em] uppercase leading-[1.4] hover:bg-dark hover:text-background hover:border-dark min-h-[43px] px-[19px] py-3 text-[9px] border-[#f8f5ed]/65 gap-[22px] max-wide:px-3 max-wide:text-[8px] max-nav:hidden" href="#contact">Parlons de votre projet <ArrowRight size={15} strokeWidth={1} /></a>
        <button ref={toggleRef} className="menu-toggle hidden items-center justify-end gap-2.5 min-w-[78px] h-11 text-inherit bg-transparent border-0 max-nav:flex [&>span]:text-[9px] [&>span]:tracking-[.14em] [&>span]:uppercase" type="button"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen} aria-controls="mobile-navigation"
          onClick={() => setIsOpen(!isOpen)}>
          <span>{isOpen ? "Fermer" : "Menu"}</span>
          {isOpen ? <X size={23} strokeWidth={1.2} /> : <Menu size={23} strokeWidth={1.2} />}
        </button>
      </div>
      <div className="mobile-menu-panel hidden absolute top-full inset-x-0 max-h-[calc(100svh_-_76px)] overflow-y-auto invisible opacity-0 bg-background text-dark shadow-[0_25px_30px_rgb(31_28_23_/_15%)] max-nav:block max-tablet:max-h-[calc(100svh_-_68px)]" inert={!isOpen} aria-hidden={!isOpen}>
        <nav id="mobile-navigation" className="mobile-nav w-[88%] max-w-[600px] mx-auto pt-[15px] pb-[35px] flex flex-col" aria-label="Navigation mobile">
          {navItems.map((item, index) => (
            <a className="mobile-nav-item flex items-center gap-[18px] font-serif text-[37px] leading-[1.1] py-4 border-b border-line [&>svg]:ml-auto [&>svg]:text-[#9d917f] max-tablet:text-[32px] max-tablet:py-3.5" key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
              <span className="mobile-nav-number self-start pt-1.5 font-sans text-[9px] tracking-[.1em] text-[#a99f91]">0{index + 1}</span><span>{item.label}</span><ArrowRight size={23} strokeWidth={1} />
            </a>
          ))}
          <div className="mobile-menu-footer pt-[27px] [&_.outline-button]:text-[9px] [&_p]:mt-[23px] [&_p]:text-[11px] [&_p]:text-[#a09585] [&>a:last-child]:inline-block [&>a:last-child]:text-[12px] [&>a:last-child]:text-[#827360] [&>a:last-child]:mt-[5px]">
            <a className="outline-button inline-flex items-center justify-between gap-6 min-h-[46px] px-[23px] py-3 border border-current text-[10px] font-medium tracking-[.08em] uppercase leading-[1.4] hover:bg-dark hover:text-background hover:border-dark" href="#contact" onClick={() => setIsOpen(false)}>Parlons de votre projet <ArrowRight size={16} strokeWidth={1} /></a>
            <p>Des univers sensibles. Des moments singuliers.</p>
            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          </div>
        </nav>
      </div>
      <span className="header-progress absolute inset-x-0 -bottom-px h-px bg-[#b6a487] origin-left [transform:scaleX(0)]" aria-hidden="true" />
    </header>
  );
}
