/**
 * Skills Section Component
 * 
 * Languages with square level markers and skills grouped by area
 * 
 * @component SkillsSection
 * @returns {JSX.Element} Skills section with languages and technical abilities
 */

import React from "react"
import { Code, Globe } from "lucide-react"
import { SkillGroup } from "@/data/cvData"

interface LanguageSkill {
  /** Language name */
  language: string
  /** Proficiency level (1-5) */
  level: number
}

interface SkillsSectionProps {
  /** Array of language skills with proficiency levels */
  languages: LanguageSkill[]
  /** Skills grouped by engineering area */
  skills: SkillGroup[]
}

export const SkillsSection = ({ 
  languages, 
  skills 
}: SkillsSectionProps): React.ReactElement => {
  
  /**
   * Renders interactive proficiency dots for language skills
   * @param level - Proficiency level (1-5)
   * @returns Array of filled and empty dots with hover animations
   */
  const renderProficiencyDots = (level: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <div
        key={index}
        className={`w-3 h-3 transition-all duration-300 cursor-pointer transform hover:scale-125 ${
          index < level 
            ? 'bg-black shadow-md' 
            : 'bg-gray-300'
        }`}
        title={`Level ${index + 1}${index < level ? ' - Achieved' : ''}`}
      />
    ))
  }

  return (
    <div className="space-y-8">
      {/* Languages Section */}
      <div>
        <div className="group bg-black text-white px-4 py-2 mb-4 flex items-center gap-2">
          <Globe className="text-white" size={20} />
          <h4 className="relative inline-block text-lg font-semibold">
            Languages
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-150 group-hover:w-full" />
          </h4>
        </div>
        <div className="space-y-4">
          {languages.map((skill, index) => (
            <div 
              key={index} 
              className="relative flex items-center justify-between p-3 transition-all duration-150 hover:bg-gray-50 hover:shadow-sm"
            >
              <div className="relative z-10 flex items-center justify-between w-full p-2 -m-2">
              <span className="text-gray-800 font-medium">
                {skill.language}
              </span>
              <div className="flex gap-2">
                {renderProficiencyDots(skill.level)}
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Skills Section */}
      <div>
        <div className="group bg-black text-white px-4 py-2 mb-4 flex items-center gap-2">
          <Code className="text-white" size={20} />
          <h4 className="relative inline-block text-lg font-semibold">
            Skills
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-150 group-hover:w-full" />
          </h4>
        </div>
        <div className="space-y-5">
          {skills.map((group) => (
            <div key={group.area} className="px-3">
              <div className="mb-2 text-sm font-semibold text-gray-900">
                {group.area}
              </div>
              <ul className="space-y-1.5">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-relaxed text-gray-700">
                    <span aria-hidden="true" className="text-gray-500">-</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}