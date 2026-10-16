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
    email: string
    github: string
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
  skills: SkillGroup[]
  hobbies: string[]
  githubProjects: GitHubProject[]
}

export interface SkillGroup {
  area: "Hardware" | "Firmware" | "Software" | "AI"
  items: string[]
}

export interface GitHubProject {
  /** Repository name on GitHub */
  name: string
  /** One-line pitch */
  tagline: string
  /** Short paragraph explaining what it does */
  description: string
  category: "CAD & Fabrication" | "Instrumentation" | "Embedded" | "Tooling"
  /** Primary language as reported by GitHub */
  language: string
  tech: string[]
  /** Last push, YYYY-MM */
  updated: string
  /** Shown prominently in project showcases */
  featured?: boolean
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
    address: "8400 Winterthur, Switzerland",
    city: "",
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
    { language: "French", level: 2 },
    { language: "Italian", level: 3 }
  ],
  
  skills: [
    {
      area: "Hardware",
      items: [
        "CAD design in NX and SolidWorks",
        "FEA (Finite Element Analysis)",
        "PCB design with KiCad",
        "Sensor development, testing and validation",
        "Manufacturing: turning, CNC milling, MIG/MAG welding, 3D printing"
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
  
  hobbies: [
    "Football",
    "Fitness", 
    "Nutrition"
  ],

  githubProjects: [
    {
      name: "MoldMaker",
      tagline: "STEP part in, printable silicone mold out",
      description: "Desktop app that turns a finished part's STEP file into a two-part RTV silicone injection mold: auto-orientation, shrinkage-compensated cavity, clamping holes, gate and vents, exported as STEP.",
      category: "CAD & Fabrication",
      language: "TypeScript",
      tech: ["Tauri", "Rust", "OpenCascade", "Vite"],
      updated: "2026-09",
      featured: true
    },
    {
      name: "StencilPrint",
      tagline: "3D-printable solder stencils from Gerber files",
      description: "Turns a solder-paste Gerber and the board's Edge.Cuts outline into a board-aware, 3D-printable stencil model.",
      category: "CAD & Fabrication",
      language: "Rust",
      tech: ["Tauri", "Rust", "Gerber"],
      updated: "2026-09",
      featured: true
    },
    {
      name: "analog-logic",
      tagline: "Oscilloscope and protocol decoder for Analog Discovery 3",
      description: "Windows desktop oscilloscope that streams both analog inputs, renders min/max waveform envelopes and decodes digital protocols from the same capture.",
      category: "Instrumentation",
      language: "TypeScript",
      tech: ["Tauri 2", "Rust", "React", "uPlot", "sigrok"],
      updated: "2026-09",
      featured: true
    },
    {
      name: "imu-fft",
      tagline: "Live IMU charts with FFT and 3D orientation",
      description: "Desktop app for a high-rate ICM-42688-P UART stream: live acceleration plots, FFT peak readout and a 3D orientation model, with a simulation fallback.",
      category: "Instrumentation",
      language: "Rust",
      tech: ["Tauri 2", "Rust", "Serial", "FFT"],
      updated: "2026-05",
      featured: true
    },
    {
      name: "auto-drawing",
      tagline: "Technical drawings generated from 3D models",
      description: "Automatic drawing creation from STEP files with a browser-based editor and HTML/SVG/PDF export.",
      category: "CAD & Fabrication",
      language: "Python",
      tech: ["Python", "FastAPI", "React", "three.js"],
      updated: "2026-04"
    },
    {
      name: "balance-lab",
      tagline: "Sphere-on-platform balancing game",
      description: "Visualizes a rolling sphere on a tilting platform driven by live serial telemetry from the physical rig.",
      category: "Instrumentation",
      language: "TypeScript",
      tech: ["Electron", "React", "Three.js", "serialport"],
      updated: "2026-10"
    },
    {
      name: "mdc0x_driver",
      tagline: "Embassy driver for the MDC04 capacitive sensor",
      description: "STM32G030 firmware that configures up to three MDC04 capacitance-to-digital converters and streams samples over UART.",
      category: "Embedded",
      language: "Rust",
      tech: ["Rust", "Embassy", "STM32", "I2C"],
      updated: "2026-04"
    },
    {
      name: "icm42688p_driver",
      tagline: "High-rate ICM-42688-P FIFO streamer",
      description: "Minimal STM32G031 firmware reading accelerometer FIFO bursts and emitting a compact binary UART stream.",
      category: "Embedded",
      language: "Rust",
      tech: ["Rust", "STM32", "I2C", "UART"],
      updated: "2026-04"
    },
    {
      name: "kicad-automation",
      tagline: "Windows helpers for KiCad projects",
      description: "PowerShell utilities for renaming KiCad project sets and applying schematic styling and drawing sheets.",
      category: "Tooling",
      language: "PowerShell",
      tech: ["PowerShell", "KiCad"],
      updated: "2026-09"
    },
    {
      name: "StencilSucker",
      tagline: "Vacuum-powered PCB stencil fixture",
      description: "3D-printable stencil fixture: a vacuum compresses springs that lift the stencil cleanly once printing is done.",
      category: "CAD & Fabrication",
      language: "SolidWorks",
      tech: ["SolidWorks", "3D printing"],
      updated: "2024-09"
    },
    {
      name: "trello-ppt",
      tagline: "Trello board to weekly status slide",
      description: "Generates a PowerPoint status summary from a Trello kanban board, with completed cards and importance colours.",
      category: "Tooling",
      language: "Python",
      tech: ["Python", "Trello API", "python-pptx"],
      updated: "2026-06"
    }
  ]
}
