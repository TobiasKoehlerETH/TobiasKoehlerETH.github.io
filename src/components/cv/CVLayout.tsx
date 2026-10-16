/**
 * CV Layout Component
 * 
 * Main layout component that combines all CV sections
 * Header, CV / Projects tabs, and the two-column CV grid on an A4-like sheet
 * Uses responsive design for mobile and desktop viewing
 * 
 * @component CVLayout
 * @returns {React.ReactElement} Complete CV layout
 */

import React from "react"

import { CVHeader } from "./CVHeader"
import { CVSection } from "./CVSection"
import { ExperienceItem } from "./ExperienceItem"
import { ContactInfo } from "./ContactInfo"
import { SkillsSection } from "./SkillsSection"
import { CVTabs } from "./CVTabs"
import { CVData } from "@/data/cvData"

interface CVLayoutProps {
  /** CV data object containing all information */
  data: CVData
}

export const CVLayout = ({ data }: CVLayoutProps): React.ReactElement => {
  const grid = (
    <div className="cv-main-grid grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      {/* Left Column - Main Content */}
      <div className="lg:col-span-2 space-y-0">
        
        {/* Professional Experience Section */}
        <CVSection title="Professional Experience">
          {data.experience.map((exp, index) => (
            <ExperienceItem
              key={index}
              title={exp.title}
              organization={exp.organization}
              period={exp.period}
              description={exp.description}
              isCurrent={exp.isCurrent}
              website={exp.website}
              links={exp.links}
            />
          ))}
        </CVSection>
        
        {/* Education Section */}
        <CVSection title="Education">
          {data.education.map((edu, index) => (
            <ExperienceItem
              key={index}
              title={edu.title}
              organization={edu.organization}
              period={edu.period}
              description={edu.description}
              website={edu.website}
            />
          ))}
        </CVSection>
        
      </div>
      
      {/* Right Column - Sidebar */}
      <div className="space-y-0">
        
        {/* Contact Information */}
        <div className="bg-muted p-6 mb-8">
          <ContactInfo
            dateOfBirth={data.contact.dateOfBirth}
            address={data.contact.address}
            email={data.contact.email}
            github={data.contact.github}
            linkedin={data.contact.linkedin}
          />
        </div>
        
        {/* Languages and Skills Section (renders its own headers) */}
        <div className="mb-8">
          <SkillsSection
            languages={data.languages}
            skills={data.skills}
          />
        </div>
        
      </div>
      
    </div>
  )

  return (
    <div className="cv-screen min-h-screen bg-gray-50 py-8">
      <div className="cv-shell max-w-6xl mx-auto px-4">
        {/* A4-like container with white background */}
        <div className="cv-page bg-white shadow-lg overflow-hidden">
          <div className="cv-content p-8">
            {/* Header Section */}
            <CVHeader
              name={data.personal.name}
              title={data.personal.title}
              profileImage={data.personal.profileImage}
              email={data.contact.email}
              linkedinHref={`https://${data.contact.linkedin}`}
            />
            
            {/* CV / Projects tabs around the main content grid */}
            <CVTabs
              cv={grid}
              projects={data.githubProjects}
              githubUrl={`https://${data.contact.github}`}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
