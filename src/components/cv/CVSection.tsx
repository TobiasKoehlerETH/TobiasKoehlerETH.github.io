/**
 * CV Section Component
 * 
 * Reusable section component with black header with rounded corners
 * Provides consistent styling for all CV sections
 * 
 * @component CVSection
 * @returns {JSX.Element} A styled CV section with header and content
 */

import React, { ReactNode } from "react"

interface CVSectionProps {
  /** Section title to display in the black header */
  title: string
  /** Content to display in the section body */
  children: ReactNode
  /** Optional CSS class for additional styling */
  className?: string
}

export const CVSection = ({ 
  title, 
  children, 
  className = "" 
}: CVSectionProps): React.ReactElement => {
  return (
    <div className={`mb-8 ${className}`}>
      {/* Black Header with small rounded corners and subtle underline animation */}
      <div className="group bg-black text-white px-4 py-2 mb-4 rounded-md">
        <h3 className="relative inline-block text-lg font-semibold">
          {title}
          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-150 group-hover:w-full" />
        </h3>
      </div>
      
      {/* Section Content */}
      <div className="px-4">
        {children}
      </div>
    </div>
  )
}