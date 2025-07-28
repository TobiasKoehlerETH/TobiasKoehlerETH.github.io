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
import { GlowingEffect } from "@/components/ui/glowing-effect"

interface HobbiesSectionProps {
  /** Array of hobby/interest items */
  hobbies: string[]
}

export const HobbiesSection = ({ hobbies }: HobbiesSectionProps): React.ReactElement => {
  return (
    <div className="space-y-2">
      {hobbies.map((hobby, index) => (
        <div key={index} className="relative group rounded-lg p-2 -m-2 transition-all duration-300">
          <GlowingEffect disabled={false} spread={15} />
          <div className="relative z-10 flex items-start gap-2 rounded-lg p-2 -m-2 transition-all duration-300">
            <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0 transition-colors duration-300" />
            <span className="text-gray-800 text-sm group-hover:text-black transition-colors duration-300">
              {hobby}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}