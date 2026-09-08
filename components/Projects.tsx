"use client";

import SectionTitle from "@/components/SectionTitle";
import { projects } from "@/data/projects";
import { ArrowRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const photographs = [
  { src: "/images/diner-mediterraneen.jpg", alt: "Une réception intimiste dans la cour d'une villa toscane" },
  { src: "/images/art-de-la-table.jpg", alt: "Roses ivoire et chandeliers dorés sur une table de réception" },
  { src: "/images/ceremonie-jardin.jpg", alt: "Une cérémonie fleurie dans un jardin méditerranéen à Ravello" },
  { src: "/images/papeterie.jpg", alt: "Papeterie de mariage, fleurs blanches et argenterie" },
];

export default function Projects() {
  const [selected, setSelected] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (selected === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [selected]);

  const closeProject = () => {
    setSelected(null);
  };

  const openProject = (index: number) => {
    setSelected(index);
    dialogRef.current?.showModal();
  };

  return (
    <section id="projects" className="projects page-container pt-7 pb-[60px] [&_.section-topline]:mb-7 [&_.section-heading_.eyebrow]:mb-[18px] max-tablet:pt-[30px] max-tablet:pb-10 max-tablet:[&_.section-heading_h2]:max-w-[345px] max-tablet:[&_.section-heading_h2]:leading-[1.12] max-tablet:[&_.section-heading_h2_.script]:inline-block max-tablet:[&_.section-heading_h2_.script]:mt-[5px] max-tablet:[&_.text-link]:mt-5 max-tablet:[&_.text-link]:text-[9px] mx-auto w-[92%] max-w-[1440px] max-tablet:w-[calc(100%_-_44px)]">
      <div className="section-topline flex items-end justify-between gap-8 max-tablet:block">
        <SectionTitle number="03" label="Univers & inspirations" title={<>Quelques histoires <span className="script font-calligraphic font-normal text-[#a69f93]">mises en scène.</span></>} />
        <a className="text-link inline-flex items-center gap-[18px] shrink-0 text-[10px] font-medium tracking-[.11em] uppercase pb-2 hover:text-[#a99a81]" href="#project-gallery">Explorer les univers <ArrowRight size={17} strokeWidth={1} /></a>
      </div>
      <div id="project-gallery" className="projects-grid grid grid-cols-[1.18fr_.71fr_1fr] grid-rows-2 gap-6 h-[clamp(540px,47.5vw,745px)] max-wide:gap-[17px] max-tablet:grid-cols-2 max-tablet:grid-rows-[385px_270px] max-tablet:h-auto max-tablet:gap-x-3.5 max-tablet:gap-y-[26px]">
        {projects.map((project, index) => (
          <article className="project-card min-w-0 min-h-0 grid grid-rows-[minmax(0,1fr)_auto] tablet:[&:nth-child(-n+2)]:row-span-2 tablet:[&:nth-child(3)]:col-start-3 tablet:[&:nth-child(3)]:row-start-1 tablet:[&:nth-child(4)]:col-start-3 tablet:[&:nth-child(4)]:row-start-2" key={project.id}>
            <button className="project-photo relative block min-h-0 w-full p-0 border-0 overflow-hidden bg-[#e8e0d4] text-left [&_img]:object-cover [&_img]:saturate-[.65] [&_img]:transition-[transform,filter] [&_img]:duration-700 hover:[&_img]:[transform:scale(1.035)] hover:[&_img]:saturate-[.85] after:content-['Découvrir_↗'] after:absolute after:bottom-[18px] after:right-[18px] after:text-white after:text-[10px] after:uppercase after:tracking-[.1em] after:bg-[#26251e]/50 after:py-[9px] after:px-[13px] after:opacity-0 after:transition-opacity after:duration-200 hover:after:opacity-100 focus-visible:after:opacity-100 max-tablet:after:hidden" type="button" onClick={() => openProject(index)} aria-label={`Découvrir l'univers ${project.title}`}>
              <Image src={photographs[index].src} alt={photographs[index].alt} fill
                sizes="(max-width: 700px) 46vw, (max-width: 1600px) 35vw, 560px" />
            </button>
            <div className="project-caption pt-[11px] [&_h3]:text-[clamp(17px,1.64vw,25px)] [&_h3]:leading-[1.05] [&_p]:mt-1 [&_p]:text-[9px] [&_p]:text-[#9b9285] [&_p]:leading-[1.4] [&_p]:tracking-[.11em] [&_p]:uppercase [&_p+p]:mt-0.5 [&_p+p]:text-[8px] [&_p+p]:tracking-[.065em] max-wide:[&_h3]:text-[17px] max-wide:[&_p]:text-[8px] max-wide:[&_p+p]:text-[7px] max-tablet:pt-[9px] max-tablet:[&_h3]:text-[18px] max-tablet:[&_h3]:leading-[1.06] max-tablet:[&_p]:text-[7px] max-tablet:[&_p]:tracking-[.04em] max-tablet:[&_p+p]:text-[7px] max-tablet:[&_p+p]:leading-[1.5]">
              <h3>{project.title}</h3>
              <p>{project.location} — {project.year}</p>
              <p>{project.services.join(" · ")}</p>
            </div>
          </article>
        ))}
      </div>
      <dialog ref={dialogRef} className="project-dialog w-[min(950px,92vw)] max-h-[90svh] border-0 p-0 bg-background text-dark m-auto backdrop:bg-[#141612]/78 backdrop:backdrop-blur-[5px]" aria-labelledby="project-dialog-title"
        onClose={closeProject}
        onClick={(event) => { if (event.target === event.currentTarget) dialogRef.current?.close(); }}>
        <button type="button" className="dialog-close absolute right-4 top-4 z-2 size-[42px] border-0 bg-background grid place-items-center" aria-label="Fermer le projet" onClick={() => dialogRef.current?.close()}>
          <X size={23} strokeWidth={1.2} />
        </button>
        {selected !== null && <>
          <div className="dialog-photo h-[min(58svh,600px)] relative [&_img]:object-cover"><Image src={photographs[selected].src} alt={photographs[selected].alt} fill sizes="(max-width: 1000px) 92vw, 950px" /></div>
          <div className="dialog-copy pt-7 px-8 pb-[34px] [&_h3]:text-[38px] [&_h3]:mb-2.5 [&>p]:text-muted [&>p]:text-[13px] [&_.text-link]:mt-6 max-tablet:p-6 max-tablet:[&_h3]:text-[31px]">
            <h3 id="project-dialog-title">{projects[selected].title}</h3>
            <p>{projects[selected].services.join(" · ")}</p>
            <a className="text-link inline-flex items-center gap-[18px] shrink-0 text-[10px] font-medium tracking-[.11em] uppercase pb-2 hover:text-[#a99a81]" href="#contact" onClick={() => dialogRef.current?.close()}>Imaginons votre projet <ArrowRight size={17} strokeWidth={1} /></a>
          </div>
        </>}
      </dialog>
    </section>
  );
}
