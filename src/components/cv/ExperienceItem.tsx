/**
 * Experience Item Component
 * 
 * Displays individual work experience or education entries with hover effects
 * 
 * @component ExperienceItem
 * @returns {React.ReactElement} A formatted experience entry
 */

import React from "react"
import { Calendar, Building, ExternalLink } from "lucide-react"

interface ExperienceItemProps {
  /** Job title or degree name */
  title: string
  /** Company name or institution */
  organization: string
  /** Start and end dates */
  period: string
  /** Optional description or details */
  description?: string
  /** Whether this is the current position */
  isCurrent?: boolean
  /** Optional website URL for the organization */
  website?: string
  /** Optional project links shown below the description */
  links?: Array<{ title: string; url: string }>
}

export const ExperienceItem = ({
  title,
  organization,
  period,
  description,
  isCurrent = false,
  website,
  links
}: ExperienceItemProps): React.ReactElement => {
  return (
    <div className={`mb-6 last:mb-0 relative p-4 -m-4 transition-all duration-150 hover:shadow-sm ${
      isCurrent
        ? 'border-l-4 border-black bg-gray-50 pl-3'
        : 'hover:bg-[#fafafa]'
    }`}>
      <div className="relative z-10">
      {/* Title and Organization */}
      <div className="mb-3">
        <div className="flex items-start gap-3 mb-2">
          <div className="flex-shrink-0 mt-2">
            <div className={`w-3 h-3 transition-all duration-300 ${
              isCurrent 
                ? 'bg-black shadow-lg' 
                : 'bg-gray-500'
            }`} />
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-gray-800 mb-1">
              {title}
            </h4>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm ml-6">
          <div className="flex items-center gap-2">
            <Calendar size={14} className="text-gray-400" />
            <span className="font-medium text-gray-600">
              {period}
            </span>
          </div>
          <span className="hidden sm:block text-gray-300">•</span>
          <div className="flex items-center gap-2">
            <Building size={14} className="text-gray-400" />
            {website ? (
              <a
                href={website}
                target="_blank"
                rel="noreferrer"
                className="font-bold text-lg text-black hover:text-gray-600 transition-colors duration-150 group relative"
              >
                {organization}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-150" />
                <ExternalLink size={14} className="inline ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
              </a>
            ) : (
              <span className="font-bold text-lg text-black">
                {organization}
              </span>
            )}
          </div>
        </div>
      </div>
      
      {/* Description */}
      {description && (
        <div className="text-gray-700 text-sm ml-6">
          <div className="space-y-2">
            {description.split('\n').map((line, index) => {
              const trimmedLine = line.trim()
              if (!trimmedLine) return null
              
              // Check if line contains a publication link
              const isPublication = trimmedLine.toLowerCase().includes('publication:')
              const urlMatch = trimmedLine.match(/(https?:\/\/[^\s]+|doi\.org\/[^\s]+)/)
              
              if (isPublication && urlMatch) {
                const beforeUrl = trimmedLine.substring(0, urlMatch.index)
                const url = urlMatch[0]
                const fullUrl = url.startsWith('doi.org') ? `https://${url}` : url
                
                return (
                  <div key={index} className="leading-relaxed">
                    {beforeUrl}
                    <a href={fullUrl} target="_blank" rel="noreferrer">
                      <span className="inline-flex items-center gap-1 text-black font-semibold hover:underline px-2 py-1 transition-all duration-200">
                        View Publication
                        <ExternalLink size={12} />
                      </span>
                    </a>
                  </div>
                )
              }
              
              return (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-gray-500 text-sm leading-relaxed">•</span>
                  <span className="leading-relaxed">
                    {trimmedLine}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Project links */}
      {links && links.length > 0 && (
        <div className="mt-2 ml-6 text-sm leading-relaxed text-gray-700">
          Projects:
          {links.map((link) => (
            <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
              <span className="inline-flex items-center gap-1 text-black font-semibold hover:underline px-2 py-1 transition-all duration-200">
                {link.title}
                <ExternalLink size={12} />
              </span>
            </a>
          ))}
        </div>
      )}
      </div>
    </div>
  )
}
