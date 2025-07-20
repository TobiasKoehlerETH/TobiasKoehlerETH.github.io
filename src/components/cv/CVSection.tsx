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
      {/* Black Header with small rounded corners */}
      <div className="bg-black text-white px-4 py-2 mb-4 rounded-md">
        <h3 className="text-lg font-semibold">
          {title}
        </h3>
      </div>
      
      {/* Section Content */}
      <div className="px-4">
        {children}
      </div>
    </div>
  )
}