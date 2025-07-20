/**
 * Hobbies Section Component
 * 
 * Displays personal interests and hobbies in a simple list format
 * Maintains the clean styling consistent with the original CV
 * 
 * @component HobbiesSection
 * @returns {React.ReactElement} Hobbies section with bullet points
 */

import React from "react"

interface HobbiesSectionProps {
  /** Array of hobby/interest items */
  hobbies: string[]
}

export const HobbiesSection = ({ hobbies }: HobbiesSectionProps): React.ReactElement => {
  return (
    <div className="space-y-2">
      {hobbies.map((hobby, index) => (
        <div key={index} className="flex items-start gap-2">
          <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0" />
          <span className="text-gray-800 text-sm">
            {hobby}
          </span>
        </div>
      ))}
    </div>
  )
}