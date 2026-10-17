/**
 * CV Data Configuration
 * 
 * All CV content in one place: edit this file to update the website
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
    email: string
    github: string
    linkedin: string
  }
  experience: CVEntry[]
  education: CVEntry[]
  languages: Array<{
    language: string
    level: number
  }>
  skills: SkillGroup[]
  githubProjects: Project[]
}

export interface CVEntry {
  title: string
  organization: string
  period: string
  /** One bullet per line; a line starting with "Publication:" renders as a link */
  description?: string
  /** Highlights the entry as the current position */
  isCurrent?: boolean
  website?: string
  /** Project links shown below the description */
  links?: Array<{ title: string; url: string }>
}

export interface SkillGroup {
  area: "Hardware" | "Firmware" | "Software" | "AI"
  items: string[]
}

export interface Project {
  /** Repository name under the GitHub profile */
  name: string
  /** One short sentence */
  description: string
  /** Preview image in public/ */
  image: string
}

/** CV content rendered by CVLayout */
export const cvData: CVData = {
  personal: {
    name: "Tobias Köhler",
    title: "M.Sc. Mechanical Engineering ETH",
    profileImage: "/profile.jpg"
  },
  
  contact: {
    dateOfBirth: "17.12.1999",
    address: "8400 Winterthur, Switzerland",
    email: "tobiassskoehler@gmail.com",
    github: "github.com/TobiasKoehlerETH",
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
      links: [
        {
          title: "Sensing Materials",
          url: "https://sensorsandpower.angst-pfister.com/en/products/sensing-materials/sensing-materials/"
        }
      ]
    },
    {
      title: "Intern Development Engineer",
      organization: "Syntegon Packaging Systems AG",
      period: "04/2022 - 10/2022",
      website: "https://www.syntegon.com",
      description: "Construction with SolidWorks\nStatic simulations\nTest set-up for laser sensors\nThermal expansion measurements\nIT tool coding using VisualBasic\nData analysis and visualization"
    }
  ],
  
  education: [
    {
      title: "Master of Science Mechanical Engineering ETH",
      organization: "ETH Zurich",
      period: "09/2022 - 03/2024",
      website: "https://ethz.ch",
      description: "Multiphysics simulation, machine learning, additive manufacturing and optimization problems\nSemester thesis at startup diaxxo\nGrade 6.0 'Disinfection Mechanism of a PCR Device'\nMaster thesis at Balgrist University Hospital 'Textile Sensors for Diabetic Patients'\nPublication: https://xploreqa.ieee.org/document/10914107"
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
    { language: "Italian", level: 3 },
    { language: "French", level: 2 }
  ],
  
  skills: [
    {
      area: "Hardware",
      items: [
        "CAD design in NX and SolidWorks",
        "FEA (Finite Element Analysis)",
        "PCB design with KiCad",
        "Sensor development, testing and validation",
        "Manufacturing: turning, CNC milling, injection molding, 3D printing"
      ]
    },
    {
      area: "Firmware",
      items: [
        "MCU firmware",
        "Drivers",
        "Digital signal processing"
      ]
    },
    {
      area: "Software",
      items: [
        "Database applications",
        "Sensor software",
        "Automation tools",
        "Data analysis"
      ]
    },
    {
      area: "AI",
      items: [
        "Coding agents",
        "Hardware in the loop",
        "Custom skills and automations",
        "Automated CAD, PCB and firmware development"
      ]
    }
  ],
  

  // Public repositories, excluding balancing-game at the owner's request.
  githubProjects: [
    {
      name: "MoldMaker",
      description: "Turns a 3D part into a printable two-part silicone mold.",
      image: "/projects/MoldMaker.webp"
    },
    {
      name: "StencilPrint",
      description: "Turns PCB Gerber files into a 3D-printable solder paste stencil.",
      image: "/projects/StencilPrint.webp"
    },
    {
      name: "analog-logic",
      description: "Desktop oscilloscope and protocol decoder for the Analog Discovery 3.",
      image: "/projects/analog-logic.svg"
    },
    {
      name: "imu-fft",
      description: "Live plots, FFT and 3D orientation for a high-speed IMU sensor.",
      image: "/projects/imu-fft.svg"
    },
    {
      name: "auto-drawing",
      description: "Creates technical drawings automatically from 3D models.",
      image: "/projects/auto-drawing.svg"
    },
    {
      name: "balance-lab",
      description: "Balancing game that shows a ball on a tilting platform from live sensor data.",
      image: "/projects/balance-lab.webp"
    },
    {
      name: "mdc0x_driver",
      description: "Rust firmware that reads up to three capacitive sensors and sends the data over UART.",
      image: "/projects/mdc0x_driver.svg"
    },
    {
      name: "icm42688p_driver",
      description: "Rust firmware that streams fast accelerometer data from an IMU over UART.",
      image: "/projects/icm42688p_driver.svg"
    },
    {
      name: "kicad-automation",
      description: "Windows tools that automate common KiCad project tasks.",
      image: "/projects/kicad-automation.svg"
    },
    {
      name: "StencilSucker",
      description: "3D-printable vacuum fixture that holds a PCB stencil in place.",
      image: "/projects/StencilSucker.webp"
    },
    {
      name: "trello-ppt",
      description: "Creates a weekly PowerPoint status slide from a Trello board.",
      image: "/projects/trello-ppt.webp"
    },
    {
      name: "data-analyzer",
      description: "Explores, filters and models time-series data from CSV and Excel files.",
      image: "/projects/data-analyzer.svg"
    },
    {
      name: "free-drawing",
      description: "Generates and inspects FreeCAD technical drawings from STEP models.",
      image: "/projects/free-drawing.svg"
    },
    {
      name: "meeting-workspace",
      description: "Records meetings and creates transcripts, notes and summaries locally.",
      image: "/projects/meeting-workspace.svg"
    },
    {
      name: "skills",
      description: "Reusable skills for coding agents.",
      image: "/projects/skills.svg"
    },
    {
      name: "TobiasKoehlerETH.github.io",
      description: "Personal CV and project portfolio built with Next.js and TypeScript.",
      image: "/projects/portfolio.svg"
    }
  ]
}
