"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, type ReactNode } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function PageMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const select = gsap.utils.selector(root);
      gsap.timeline({ defaults: { ease: "power3.out" } })
        .from(".hero-image", { scale: 1.055, duration: 1.8 }, 0)
        .from(select(".hero-content > .eyebrow, .hero h1, .hero-description, .hero-content .outline-button"), {
          y: 25, autoAlpha: 0, stagger: .13, duration: 1, clearProps: "opacity,visibility,transform",
        }, .15)
        .from(select(".hero-bottom, .hero-side-note"), { autoAlpha: 0, duration: 1, clearProps: "opacity,visibility" }, .7);

      gsap.utils.toArray<HTMLElement>(
        select(".section-heading, .about-copy > p, .about-facts, .contact-details, .partners-quote, .footer-inner")
      ).forEach((element) => {
        gsap.from(element, {
          y: 24, autoAlpha: 0, duration: .85, ease: "power2.out",
          clearProps: "opacity,visibility,transform",
          scrollTrigger: { trigger: element, start: "top 93%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>(select(".services-grid, .projects-grid, .partners-list, .collaboration-types")).forEach((grid) => {
        gsap.from(grid.children, {
          y: 28, autoAlpha: 0, stagger: .075, duration: .85, ease: "power2.out",
          clearProps: "opacity,visibility,transform",
          scrollTrigger: { trigger: grid, start: "top 90%", once: true },
        });
      });

      gsap.from(select(".about-portrait, .about-detail"), {
        clipPath: "inset(0 0 12% 0)", autoAlpha: 0, duration: 1.2, ease: "power2.out",
        clearProps: "clipPath,opacity,visibility",
        scrollTrigger: { trigger: ".about", start: "top 87%", once: true },
      });
      gsap.from(".signature-stroke", {
        scaleX: 0, duration: 1.3, ease: "power2.out",
        scrollTrigger: { trigger: ".collaboration", start: "top 70%", once: true },
      });
      gsap.to(".header-progress", {
        scaleX: 1, ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom bottom", scrub: .25 },
      });
    });

    media.add("(min-width: 1050px) and (prefers-reduced-motion: no-preference)", () => {
      gsap.to(".hero-image", {
        yPercent: 8, ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
      });
    });
    return () => media.revert();
  }, { scope: root });

  return <div ref={root}>{children}</div>;
}
