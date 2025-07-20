/**
 * Home Page - CV Website
 * 
 * Main page displaying the CV layout with English translation
 * Uses the CVLayout component with imported CV data
 * 
 * @page Home
 * @returns {JSX.Element} The complete CV website
 */

import { CVLayout } from "@/components/cv"
import { cvData } from "@/data/cvData"

export default function Home() {
  return (
    <CVLayout data={cvData} />
  )
}
