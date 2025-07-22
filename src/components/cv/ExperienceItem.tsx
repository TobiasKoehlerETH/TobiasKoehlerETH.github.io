/**
 * Experience Item Component
 * 
 * Displays individual work experience or education entries with hover effects
 * Matches the layout and styling of the original German CV
 * 
 * @component ExperienceItem
 * @returns {React.ReactElement} A formatted experience entry
 */

import React from "react"
import { Calendar, Building, ExternalLink } from "lucide-react"
import { LinkPreview } from "@/components/ui/link-preview"

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
}

export const ExperienceItem = ({
  title,
  organization,
  period,
  description,
  isCurrent = false
}: ExperienceItemProps): React.ReactElement => {
  return (
    <div className="mb-6 last:mb-0 group hover:bg-gradient-to-r hover:from-gray-50 hover:to-transparent rounded-lg p-4 -m-4 transition-all duration-300 hover:shadow-sm border border-transparent hover:border-gray-200">
      {/* Title and Organization */}
      <div className="mb-3">
        <div className="flex items-start gap-3 mb-2">
          <div className="flex-shrink-0 mt-1">
            <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
              isCurrent 
                ? 'bg-black shadow-lg' 
                : 'bg-gray-500 group-hover:bg-gray-700'
            }`} />
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-gray-800 mb-1 group-hover:text-black transition-colors duration-300">
              {title}
              {isCurrent && (
                <span className="ml-2 text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded-full font-medium">
                  Current
                </span>
              )}
            </h4>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm ml-6">
          <div className="flex items-center gap-2">
            <Calendar size={14} className="text-gray-400 group-hover:text-gray-600 transition-colors duration-300" />
            <span className="font-medium text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
              {period}
            </span>
          </div>
          <span className="hidden sm:block text-gray-300">•</span>
          <div className="flex items-center gap-2">
            <Building size={14} className="text-gray-400 group-hover:text-gray-600 transition-colors duration-300" />
            <span className="font-bold text-lg text-black group-hover:text-gray-800 transition-colors duration-300">
              {organization}
            </span>
          </div>
        </div>
      </div>
      
      {/* Description */}
      {description && (
        <div className="text-gray-700 text-sm ml-6 group-hover:text-gray-800 transition-colors duration-300">
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
                    <LinkPreview url={fullUrl}>
                      <span className="inline-flex items-center gap-1 text-black font-semibold hover:underline hover:bg-gray-100 px-2 py-1 rounded transition-all duration-200">
                        View Publication
                        <ExternalLink size={12} />
                      </span>
                    </LinkPreview>
                  </div>
                )
              }
              
              return (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-gray-500 text-sm group-hover:text-gray-700 transition-colors duration-300">•</span>
                  <span className="leading-relaxed">
                    {trimmedLine}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}