/**
 * Contact Information Component
 * 
 * Displays personal contact details with interactive links and icons
 * 
 * @component ContactInfo
 * @returns {React.ReactElement} Contact information section
 */

import React from "react"
import { 
  Calendar, 
  MapPin, 
  Mail, 
  Github,
  Linkedin,
  ExternalLink
} from "lucide-react"

interface ContactInfoProps {
  /** Date of birth */
  dateOfBirth: string
  /** Physical address */
  address: string
  /** Email address */
  email: string
  /** GitHub profile URL */
  github: string
  /** LinkedIn profile URL */
  linkedin: string
}

export const ContactInfo = ({
  dateOfBirth,
  address,
  email,
  github,
  linkedin
}: ContactInfoProps): React.ReactElement => {
  
  /**
   * Contact information items with icons, labels, values, and optional links
   */
  const contactItems = [
    { 
      icon: Calendar, 
      label: "Date of Birth", 
      value: dateOfBirth,
      isClickable: false
    },
    { 
      icon: MapPin, 
      label: "Address", 
      value: address,
      isClickable: false
    },
    { 
      icon: Mail, 
      label: "E-Mail", 
      value: email,
      href: `mailto:${email}`,
      isClickable: true
    },
    { 
      icon: Github, 
      label: "GitHub", 
      value: github,
      href: `https://${github}`,
      isClickable: true,
      external: true
    },
    { 
      icon: Linkedin, 
      label: "LinkedIn", 
      value: linkedin,
      href: `https://${linkedin}`,
      isClickable: true,
      external: true
    }
  ]

  const ContactItem = ({ item, index }: { item: typeof contactItems[0], index: number }) => {
    const Icon = item.icon
    
    const content = (
      <div className="flex items-start space-x-3 group">
        <div className={`flex-shrink-0 mt-0.5 ${
          item.isClickable 
            ? 'text-gray-700' 
            : 'text-gray-500'
        }`}>
          <Icon size={16} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-sm font-semibold text-gray-800 mb-1">
            {item.label}
          </div>
          <div className={`text-sm break-words ${
            item.isClickable 
              ? 'text-gray-700' 
              : 'text-gray-600'
          }`}>
            {item.value}
            {item.external && (
              <ExternalLink size={12} className="inline ml-1 opacity-70" />
            )}
          </div>
        </div>
      </div>
    )

    if (item.isClickable && item.href) {
      if (item.external) {
        return (
          <div key={index} className="relative block p-2 -m-2 transition-all duration-150 hover:bg-gray-50 hover:shadow-sm">
            <div className="relative z-10 p-1 -m-1">
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className={
                  "relative block text-gray-800 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/50 after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-current after:transition-[width] after:duration-150 hover:after:w-full"
                }
              >
                {content}
              </a>
            </div>
          </div>
        )
      } else {
        return (
          <div key={index} className="relative p-2 -m-2 transition-all duration-150 hover:bg-gray-50 hover:shadow-sm">
            <a
              href={item.href}
              className="relative z-10 block p-1 -m-1 text-gray-800 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/50 after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-current after:transition-[width] after:duration-150 hover:after:w-full"
            >
              {content}
            </a>
          </div>
        )
      }
    }

    return (
      <div key={index} className="relative p-2 -m-2 transition-all duration-150 hover:bg-gray-50 hover:shadow-sm">
        <div className="relative z-10 p-1 -m-1">
          {content}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-2">
      {contactItems.map((item, index) => (
        <ContactItem key={index} item={item} index={index} />
      ))}
    </div>
  )
}
