"use client"

/**
 * CV Tabs Component
 *
 * Switches the page body between the CV grid and a GitHub projects overview.
 * Printing always outputs the CV tab.
 *
 * @component CVTabs
 * @returns {React.ReactElement} Tab bar plus the active view
 */

import React, { useState } from "react"
import Image from "next/image"
import { ArrowUpRight, Github } from "lucide-react"
import { GitHubProject } from "@/data/cvData"
import { BackgroundBoxes } from "./BackgroundBoxes"

interface CVTabsProps {
  /** The CV content shown in the first tab */
  cv: React.ReactNode
  /** Curated GitHub repositories */
  projects: GitHubProject[]
  /** GitHub profile URL, used for repository links */
  githubUrl: string
}

const ProjectCard = ({ project, href }: { project: GitHubProject; href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="group flex h-full flex-col border border-gray-200 bg-white transition-all duration-150 hover:border-black hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
  >
    <div className="relative aspect-[16/10] overflow-hidden border-b border-gray-200 bg-gray-100">
      <Image
        src={project.image}
        alt={`${project.name} preview`}
        fill
        sizes="(min-width: 1024px) 340px, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition duration-300 group-hover:scale-[1.02]"
      />
    </div>
    <div className="p-5">
      <div className="flex items-start justify-between gap-3">
        <h4 className="text-lg font-semibold text-gray-900">{project.name}</h4>
        <ArrowUpRight size={16} className="mt-1.5 shrink-0 text-gray-400 transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black" />
      </div>
      <p className="mt-1 text-sm leading-snug text-gray-600">{project.description}</p>
    </div>
  </a>
)

export const CVTabs = ({ cv, projects, githubUrl }: CVTabsProps): React.ReactElement => {
  const [tab, setTab] = useState<"cv" | "projects">("cv")

  const tabClass = (active: boolean) =>
    `flex items-center gap-2 px-5 py-2.5 text-sm font-semibold transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30 ${
      active ? "bg-black text-white" : "text-gray-600 hover:text-black"
    }`

  return (
    <>
      <div role="tablist" className="cv-tabs mb-8 flex border-b-2 border-black print:hidden">
        <button type="button" role="tab" aria-selected={tab === "cv"} onClick={() => setTab("cv")} className={tabClass(tab === "cv")}>
          CV
        </button>
        <button type="button" role="tab" aria-selected={tab === "projects"} onClick={() => setTab("projects")} className={tabClass(tab === "projects")}>
          Projects
        </button>
      </div>

      {/* CV stays in the DOM so printing always outputs it */}
      <div className={tab === "cv" ? "" : "hidden print:block"}>{cv}</div>

      <div className={tab === "projects" ? "relative -mx-8 -mb-8 overflow-hidden px-8 pb-8 animate-in fade-in duration-200 print:hidden" : "hidden"}>
        <BackgroundBoxes />
        <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} href={`${githubUrl}/${project.name}`} />
          ))}
        </div>
        <div className="relative mt-6 flex justify-end">
          <a href={githubUrl} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors duration-150 hover:text-black">
            <Github size={16} />
            All repositories on GitHub
            <ArrowUpRight size={14} className="transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </>
  )
}
