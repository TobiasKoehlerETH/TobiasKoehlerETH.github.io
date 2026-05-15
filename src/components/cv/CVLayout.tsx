/**
 * CV Layout Component
 * 
 * Main layout component that combines all CV sections
 * Replicates the exact structure and styling of the original German CV
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
import { CVData } from "@/data/cvData"

interface CVLayoutProps {
  /** CV data object containing all information */
  data: CVData
}

export const CVLayout = ({ data }: CVLayoutProps): React.ReactElement => {
  return (
    <div className="cv-screen min-h-screen bg-gray-50 py-8">
      <div className="cv-shell max-w-6xl mx-auto px-4">
        {/* A4-like container with white background */}
        <div className="cv-page bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="cv-content p-8">
            {/* Header Section */}
            <CVHeader
              name={data.personal.name}
              title={data.personal.title}
              profileImage={data.personal.profileImage}
              email={data.contact.email}
              linkedinHref={`https://${data.contact.linkedin}`}
            />
            
            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
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
                      projects={exp.projects}
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
                      projects={edu.projects}
                    />
                  ))}
                </CVSection>
                
              </div>
              
              {/* Right Column - Sidebar */}
              <div className="space-y-0">
                
                {/* Contact Information */}
                <div className="bg-muted p-6 rounded-lg mb-8">
                  <ContactInfo
                    dateOfBirth={data.contact.dateOfBirth}
                    address={data.contact.address}
                    mobile={data.contact.mobile}
                    email={data.contact.email}
                    github={data.contact.github}
                    linkedin={data.contact.linkedin}
                  />
                </div>
                
                {/* Languages and Skills Section */}
                <CVSection title="Languages">
                  <SkillsSection
                    languages={data.languages}
                    technicalSkills={data.technicalSkills}
                  />
                </CVSection>
                
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
