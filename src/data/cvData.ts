/**
 * CV Data Configuration
 * 
 * Contains all the CV content translated from German to English
 * Centralized data structure for easy editing and maintenance
 * 
 * @fileoverview CV data structure with type definitions
 */

export interface CVData {
  personal: {
    name: string
    title: string
    profileImage?: string
  }
  contact: {
    dateOfBirth: string
    address: string
    city: string
    country: string
    mobile: string
    email: string
    linkedin: string
  }
  experience: Array<{
    title: string
    organization: string
    period: string
    description?: string
    isCurrent?: boolean
    website?: string
    projects?: Array<{
      name: string
      description: string
      technologies?: string[]
      link?: string
    }>
  }>
  education: Array<{
    title: string
    organization: string
    period: string
    description?: string
    website?: string
    projects?: Array<{
      name: string
      description: string
      technologies?: string[]
      link?: string
    }>
  }>
  languages: Array<{
    language: string
    level: number
  }>
  technicalSkills: string[]
  hobbies: string[]
}

/**
 * CV Data - Translated from German CV
 * Edit this object to update CV content
 */
export const cvData: CVData = {
  personal: {
    name: "Tobias Köhler",
    title: "M.Sc. Mechanical Engineer ETH",
    // Add profile image path when available
    profileImage: "/profile.jpg"
  },
  
  contact: {
    dateOfBirth: "17.12.1999",
    address: "",
    city: "8400 Winterthur",
    country: "Switzerland",
    mobile: "",
    email: "tobiaskoehler@gmail.com",
    linkedin: "www.linkedin.com/in/tkoehler-eth"
  },
  
  experience: [
    {
      title: "Sensor Development Engineer",
      organization: "Angst+Pfister",
      period: "05/2024 - today",
      isCurrent: true,
      website: "https://www.angst-pfister.com",
      description: "Development and optimization of sensor technologies\nTesting and validation of sensor performance\nPCB Design",
      projects: [
        {
          name: "Test",
          description: "Test project description",
          technologies: ["Test"]
        }
      ]
    },
    {
      title: "Intern Development Engineer",
      organization: "Syntegon Packaging Systems AG",
      period: "04/2022 - 10/2022",
      website: "https://www.syntegon.com",
      description: "Construction with SolidWorks\nStatic simulations\nTest set-up for laser sensors\nThermal expansion measurements\nIT tool coding using VisualBasic\nData analysis and visualization",
      projects: []
    }
  ],
  
  education: [
    {
      title: "Master of Science Mechanical Engineering ETH",
      organization: "ETH Zurich",
      period: "09/2022 - 03/2024",
      website: "https://ethz.ch",
      description: "Multiphysics simulation, learning, additive manufacturing and optimization problems\nSemester thesis at startup diaxxo\nGrade 6.0 'Disinfection Mechanism of a PCR Device'\nMaster thesis at Balgrist University Hospital 'Textile Sensors for Diabetic Patients'\nPublication: https://xploreqa.ieee.org/document/10914107"
    },
    {
      title: "Bachelor of Science Mechanical Engineering ETH",
      organization: "ETH Zurich", 
      period: "09/2018 - 09/2021",
      website: "https://ethz.ch",
      description: "Focus on \"Engineering for Health\"\nBachelor thesis at ARSL (Acoustic Robotics for Life Sciences and Healthcare Lab) Grade 6.0 (best)\nPublication: doi.org/10.1002/admi.202200877"
    },
    {
      title: "Matura",
      organization: "Kantonsschule Rychenberg",
      period: "08/2012 - 07/2018",
      website: "https://www.krw.ch",
      description: "Language profile (English/Italian)"
    }
  ],
  
  languages: [
    { language: "German", level: 5 },
    { language: "English", level: 4 },
    { language: "French", level: 3 },
    { language: "Italian", level: 3 }
  ],
  
  technicalSkills: [
    "CAD Design and Simulations in NX, SolidWorks, COMSOL and Ansys",
    "Programming with C++, Python, TypeScript and MATLAB",
    "Latest LLM coding agents and tools (including OpenCode with skills and subagents) across Rust, Python, TypeScript, and C++ for embedded microcontroller firmware development",
    "Manufacturing technology: Turning, CNC milling, MIG/MAG welding and additive manufacturing (3D printing)",
    "Mechatronics",
    "PCB Design with KiCad",
    "MATLAB and Simulink"
  ],
  
  hobbies: [
    "Football",
    "Fitness", 
    "Nutrition"
  ]
}
