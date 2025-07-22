/**
 * Contact Information Component
 * 
 * Displays personal contact details with interactive links and icons
 * Matches the sidebar layout from the original CV design
 * 
 * @component ContactInfo
 * @returns {React.ReactElement} Contact information section
 */

import React from "react"
import { 
  Calendar, 
  MapPin, 
  Building2, 
  Phone, 
  Mail, 
  Linkedin,
  ExternalLink
} from "lucide-react"
import { LinkPreview } from "@/components/ui/link-preview"

interface ContactInfoProps {
  /** Date of birth */
  dateOfBirth: string
  /** Physical address */
  address: string
  /** City and postal code */
  city: string
  /** Country */
  country: string
  /** Phone number */
  mobile: string
  /** Email address */
  email: string
  /** LinkedIn profile URL */
  linkedin: string
}

export const ContactInfo = ({
  dateOfBirth,
  address,
  city,
  country,
  mobile,
  email,
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
      icon: Building2, 
      label: "City", 
      value: city,
      isClickable: false
    },
    { 
      icon: MapPin, 
      label: "Country", 
      value: country,
      isClickable: false
    },
    { 
      icon: Phone, 
      label: "Mobile", 
      value: mobile,
      href: `tel:${mobile}`,
      isClickable: true
    },
    { 
      icon: Mail, 
      label: "E-Mail", 
      value: email,
      href: `mailto:${email}`,
      isClickable: true
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
        <div className={`flex-shrink-0 mt-0.5 transition-colors duration-200 ${
          item.isClickable 
            ? 'text-gray-700 group-hover:text-black' 
            : 'text-gray-500'
        }`}>
          <Icon size={16} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-sm font-semibold text-gray-800 mb-1">
            {item.label}
          </div>
          <div className={`text-sm break-words transition-colors duration-200 ${
            item.isClickable 
              ? 'text-gray-700 group-hover:text-black group-hover:underline' 
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
          <div key={index} className="block hover:bg-gray-100 rounded-lg p-2 -m-2 transition-colors duration-200">
            <LinkPreview url={item.href}>
              {content}
            </LinkPreview>
          </div>
        )
      } else {
        return (
          <a
            key={index}
            href={item.href}
            className="block hover:bg-gray-100 rounded-lg p-2 -m-2 transition-colors duration-200"
          >
            {content}
          </a>
        )
      }
    }

    return (
      <div key={index} className="p-2 -m-2">
        {content}
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