"use client"

/**
 * CV Header Component
 * 
 * Displays the main header section with name, title, and profile image
 * Matches the original German CV layout with English translations
 * 
 * @component CVHeader
 * @returns {JSX.Element} The CV header section
 */

import React, { useEffect, useState } from "react"
import Image from "next/image"
import { Download, Github, Linkedin, Mail, Moon, Sun } from "lucide-react"

interface CVHeaderProps {
  /** Full name of the person */
  name: string
  /** Professional title */
  title: string
  /** Profile image URL */
  profileImage?: string
  /** GitHub profile URL */
  githubHref?: string
  /** LinkedIn profile URL */
  linkedinHref?: string
  /** Email address */
  email?: string
}

export const CVHeader = ({ 
  name, 
  title, 
  profileImage,
  githubHref = "https://github.com/TobiasKoehlerETH",
  linkedinHref = "https://www.linkedin.com/in/tkoehler-eth",
  email
}: CVHeaderProps): React.ReactElement => {
  const [isInverted, setIsInverted] = useState(false)

  const handlePdfDownload = () => {
    window.print()
  }

  useEffect(() => {
    document.documentElement.classList.toggle("cv-inverted", isInverted)

    return () => {
      document.documentElement.classList.remove("cv-inverted")
    }
  }, [isInverted])

  return (
    <div className="mb-8 flex flex-col lg:flex-row lg:items-start lg:justify-between">
      {/* Name and Title Section */}
      <div className="mb-6 lg:mb-0">
        <h1 className="mb-2 text-4xl font-bold text-gray-900">{name}</h1>
        <h2 className="text-xl text-gray-600 font-medium">
          {title}
        </h2>
        <div className="cv-header-actions mt-3 flex flex-wrap items-center gap-1">
          <button
            type="button"
            aria-label={isInverted ? "Switch to light mode" : "Switch to dark mode"}
            title={isInverted ? "Switch to light mode" : "Switch to dark mode"}
            onClick={() => setIsInverted((current) => !current)}
            className="cv-theme-toggle inline-flex h-10 w-10 shrink-0 appearance-none items-center justify-center border-0 bg-transparent p-0 text-gray-600 transition-colors duration-150 hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
          >
            {isInverted ? (
              <Sun size={22} strokeWidth={2} aria-hidden="true" />
            ) : (
              <Moon size={22} strokeWidth={2} aria-hidden="true" />
            )}
          </button>
          <a
            href={githubHref}
            target="_blank"
            rel="noreferrer"
            aria-label="Open GitHub profile"
            title="Open GitHub profile"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center border-0 text-gray-600 transition-colors duration-150 hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
          >
            <Github size={22} strokeWidth={2} aria-hidden="true" />
          </a>
          <a
            href={linkedinHref}
            target="_blank"
            rel="noreferrer"
            aria-label="Open LinkedIn profile"
            title="Open LinkedIn profile"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center border-0 text-gray-600 transition-colors duration-150 hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
          >
            <Linkedin size={22} strokeWidth={2} aria-hidden="true" />
          </a>
          {email ? (
            <a
              href={`mailto:${email}`}
              aria-label="Send email"
              title="Send email"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center border-0 text-gray-600 transition-colors duration-150 hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
            >
              <Mail size={22} strokeWidth={2} aria-hidden="true" />
            </a>
          ) : null}
          <button
            type="button"
            aria-label="Download CV as PDF"
            title="Download CV as PDF"
            onClick={handlePdfDownload}
            className="cv-download-link inline-flex h-10 w-10 shrink-0 appearance-none bg-transparent p-0 items-center justify-center border-0 text-gray-600 transition-colors duration-150 hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
          >
            <Download size={22} strokeWidth={2} aria-hidden="true" />
          </button>
        </div>
      </div>
      
      {/* Profile Image */}
      <div className="flex justify-center lg:justify-end">
        <div className="h-32 w-32 overflow-hidden rounded-full bg-primary/10 text-primary transition-transform duration-150 hover:scale-[1.01] hover:[transform:rotate(0.3deg)] hover:ring-2 hover:ring-gray-300 lg:h-40 lg:w-40">
          {profileImage ? (
            <Image
              src={profileImage}
              alt={`${name} profile picture`}
              width={160}
              height={160}
              priority
              className="cv-profile-image h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-2xl">
            {name.split(' ').map(n => n[0]).join('')}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
