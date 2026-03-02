import Image from "next/image"
import Link from "next/link"

interface ProjectDetail {
  title: string
  subtitle: string
  description: string
  image: string
  technologies: string[]
}

const projectDetails: ProjectDetail[] = [
  {
    title: "Embedded Sensor Firmware Platform",
    subtitle: "Low-power microcontroller architecture",
    description:
      "Designed a modular firmware stack for sensor data acquisition, filtering, and telemetry on microcontrollers. The project focused on reliability, deterministic timing, and maintainable architecture for rapid iteration.",
    image: "/profile.jpg",
    technologies: ["C++", "Rust", "SPI", "I2C", "FreeRTOS"],
  },
  {
    title: "AI-assisted Device Tooling",
    subtitle: "Developer workflow automation",
    description:
      "Created an AI-assisted development workflow using modern LLM coding agents and structured skills/subagents to accelerate implementation, testing, and refactoring across embedded and application codebases.",
    image: "/globe.svg",
    technologies: ["Python", "TypeScript", "OpenCode", "CI/CD", "Testing"],
  },
  {
    title: "Industrial Test Bench Integration",
    subtitle: "Hardware-in-the-loop validation",
    description:
      "Implemented a test-bench integration pipeline to validate firmware behavior under thermal and electrical edge cases. Built automated reporting for key metrics and pass/fail thresholds.",
    image: "/window.svg",
    technologies: ["C++", "Python", "Data Analysis", "HIL", "CAN"],
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Project Portfolio</h1>
            <p className="mt-2 text-gray-600">Detailed projects with visuals and technical context.</p>
          </div>
          <Link
            href="/"
            className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
          >
            Back to CV
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectDetails.map((project) => (
            <article key={project.title} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
              <div className="relative h-52 w-full bg-gray-100">
                <Image src={project.image} alt={project.title} fill className="object-cover p-4" />
              </div>

              <div className="space-y-3 p-5">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{project.title}</h2>
                  <p className="text-sm font-medium text-gray-500">{project.subtitle}</p>
                </div>

                <p className="text-sm leading-relaxed text-gray-700">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
