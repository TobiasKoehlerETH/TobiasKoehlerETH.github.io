/**
 * CV Header Component
 * 
 * Displays the main header section with name, title, and profile image
 * Matches the original German CV layout with English translations
 * 
 * @component CVHeader
 * @returns {JSX.Element} The CV header section
 */

import React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { TextHoverEffect } from "@/components/ui/text-hover-effect"

interface CVHeaderProps {
  /** Full name of the person */
  name: string
  /** Professional title */
  title: string
  /** Profile image URL */
  profileImage?: string
}

export const CVHeader = ({ 
  name, 
  title, 
  profileImage 
}: CVHeaderProps): React.ReactElement => {
  return (
    <div className="mb-8 flex flex-col lg:flex-row lg:items-start lg:justify-between">
      {/* Name and Title Section */}
      <div className="mb-6 lg:mb-0">
        <div className="mb-2">
          <TextHoverEffect text={name} duration={0.5} />
        </div>
        <h2 className="text-xl text-gray-600 font-medium">
          {title}
        </h2>
      </div>
      
      {/* Profile Image */}
      <div className="flex justify-center lg:justify-end">
        <Avatar className="w-32 h-32 lg:w-40 lg:h-40">
          <AvatarImage 
            src={profileImage} 
            alt={`${name} profile picture`}
            className="object-cover"
          />
          <AvatarFallback className="text-2xl bg-primary/10 text-primary">
            {name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}