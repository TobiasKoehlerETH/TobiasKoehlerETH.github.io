/**
 * Skills Section Component
 * 
 * Displays language skills with interactive dot indicators and technical skills with animations
 * Replicates the exact layout from the original German CV with enhanced interactivity
 * 
 * @component SkillsSection
 * @returns {JSX.Element} Skills section with languages and technical abilities
 */

import React from "react"
import { Code, Globe, Wrench } from "lucide-react"

interface LanguageSkill {
  /** Language name */
  language: string
  /** Proficiency level (1-5) */
  level: number
}

interface SkillsSectionProps {
  /** Array of language skills with proficiency levels */
  languages: LanguageSkill[]
  /** Array of technical skills/tools */
  technicalSkills: string[]
}

export const SkillsSection = ({ 
  languages, 
  technicalSkills 
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
        className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer transform hover:scale-125 ${
          index < level 
            ? 'bg-black shadow-md' 
            : 'bg-gray-300'
        }`}
        title={`Level ${index + 1}${index < level ? ' - Achieved' : ''}`}
      />
    ))
  }

  /**
   * Gets appropriate icon for technical skill based on content
   */
  const getSkillIcon = (skill: string) => {
    const skillLower = skill.toLowerCase()
    if (skillLower.includes('programming') || skillLower.includes('matlab') || skillLower.includes('python') || skillLower.includes('c++')) {
      return Code
    }
    if (skillLower.includes('cad') || skillLower.includes('manufacturing') || skillLower.includes('mechatronics')) {
      return Wrench
    }
    return Code // Default icon
  }

  return (
    <div className="space-y-8">
      {/* Languages Section */}
      <div>
        <div className="group bg-black text-white px-4 py-2 mb-4 rounded-md flex items-center gap-2">
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
              className="relative flex items-center justify-between p-3 rounded-lg transition-all duration-150 hover:bg-gray-50 hover:shadow-sm"
            >
              <div className="relative z-10 flex items-center justify-between w-full rounded-lg p-2 -m-2">
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
        <div className="group bg-black text-white px-4 py-2 mb-4 rounded-md flex items-center gap-2">
          <Code className="text-white" size={20} />
          <h4 className="relative inline-block text-lg font-semibold">
            Special Skills
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-150 group-hover:w-full" />
          </h4>
        </div>
        <div className="space-y-3">
          {technicalSkills.map((skill, index) => {
            const IconComponent = getSkillIcon(skill)
            return (
              <div 
                key={index} 
                className="relative flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-all duration-150 hover:bg-gray-50 hover:shadow-sm"
              >
                <div className="relative z-10 flex items-start gap-3 w-full rounded-lg p-2 -m-2">
                <div className="flex-shrink-0 mt-0.5">
                  <IconComponent 
                    size={16} 
                    className="text-gray-600" 
                  />
                </div>
                <span className="text-gray-800 text-sm leading-relaxed">
                  {skill}
                </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}