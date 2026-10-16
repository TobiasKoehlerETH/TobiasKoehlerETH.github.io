/**
 * Background Boxes Component
 *
 * Square grid behind the project cards; a cell turns black under the cursor
 * and fades out again (inspired by Aceternity UI "Background Boxes").
 *
 * @component BackgroundBoxes
 * @returns {React.ReactElement} Decorative, non-interactive grid layer
 */

import React from "react"

/** Enough cells to cover the projects panel on any screen width */
const CELL_COUNT = 1400

export const BackgroundBoxes = (): React.ReactElement => (
  <div aria-hidden="true" className="absolute inset-0 grid auto-rows-[44px] grid-cols-[repeat(auto-fill,44px)] content-start">
    {Array.from({ length: CELL_COUNT }, (_, index) => (
      <div
        key={index}
        className="border-b border-r border-gray-100 transition-colors duration-1000 hover:bg-black hover:duration-0"
      />
    ))}
  </div>
)
