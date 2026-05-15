"use client"

/**
 * Projects Section Component
 * 
 * Displays projects for each experience entry with expandable functionality
 * Shows project name, description, and technologies used
 * 
 * @component ProjectsSection
 * @returns {JSX.Element} Projects section with expandable project details
 */

import React, { useState } from "react"
import { ChevronDown, ChevronRight, ExternalLink, Code } from "lucide-react"

interface Project {
  name: string
  description: string
  technologies?: string[]
  link?: string
}

interface ProjectsSectionProps {
  projects: Project[]
}

export const ProjectsSection = ({ projects }: ProjectsSectionProps): React.ReactElement | null => {
  const [expandedProjects, setExpandedProjects] = useState<Set<string>>(new Set())

  const toggleProject = (projectName: string) => {
    const newExpanded = new Set(expandedProjects)
    if (newExpanded.has(projectName)) {
      newExpanded.delete(projectName)
    } else {
      newExpanded.add(projectName)
    }
    setExpandedProjects(newExpanded)
  }

  if (!projects || projects.length === 0) {
    return null
  }

  return (
    <div className="mt-4 ml-6">
      <div className="flex items-center gap-2 mb-3">
        <Code size={16} className="text-gray-500" />
        <h5 className="text-sm font-semibold text-gray-700">Projects</h5>
      </div>
      <div className="space-y-3">
        {projects.map((project, index) => {
          const isExpanded = expandedProjects.has(project.name)
          
          return (
            <div key={index} className="border-l-2 border-gray-200 pl-4">
              <button
                onClick={() => toggleProject(project.name)}
                className="flex items-center gap-2 text-left w-full group hover:text-gray-700 transition-colors duration-150"
              >
                {isExpanded ? (
                  <ChevronDown size={16} className="text-gray-400 group-hover:text-gray-600 transition-colors duration-150" />
                ) : (
                  <ChevronRight size={16} className="text-gray-400 group-hover:text-gray-600 transition-colors duration-150" />
                )}
                <span className="font-medium text-gray-800 group-hover:text-gray-700">
                  {project.name}
                </span>
                {project.link && (
                  <ExternalLink size={14} className="text-gray-400 group-hover:text-gray-600 transition-colors duration-150" />
                )}
              </button>
              
              {isExpanded && (
                <div className="mt-2 ml-6 space-y-2 animate-in slide-in-from-top-2 duration-200">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-md font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  {project.link && (
                    <div className="pt-2">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-gray-700 hover:text-black hover:underline transition-colors duration-150"
                      >
                        View Project
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
