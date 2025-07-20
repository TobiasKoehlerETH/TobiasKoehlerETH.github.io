# CV Website - English Version

A professional CV website built with Next.js, TypeScript, and shadcn/ui components, translated from the original German CV with exact layout replication.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the CV website.

## 📁 Project Structure

```
src/
├── components/cv/          # CV-specific components
│   ├── CVLayout.tsx       # Main layout component
│   ├── CVHeader.tsx       # Header with name and title
│   ├── CVSection.tsx      # Reusable section wrapper
│   ├── ExperienceItem.tsx # Work/education entries
│   ├── ContactInfo.tsx    # Contact information
│   ├── SkillsSection.tsx  # Languages and technical skills
│   ├── HobbiesSection.tsx # Personal interests
│   └── index.ts          # Component exports
├── data/
│   └── cvData.ts         # CV content (EDIT HERE)
└── app/
    └── page.tsx          # Main page
```

## ✏️ Easy Editing

### To Update CV Content

Edit the file: `src/data/cvData.ts`

This file contains all the CV information in a structured format:

```typescript
export const cvData = {
  personal: {
    name: "Your Name",
    title: "Your Title",
    profileImage: "/profile.jpg"
  },
  contact: {
    dateOfBirth: "DD.MM.YYYY",
    address: "Your Address",
    // ... more contact info
  },
  experience: [
    {
      title: "Job Title",
      organization: "Company Name",
      period: "MM/YYYY - MM/YYYY",
      description: "Job description"
    }
  ],
  // ... more sections
}
```

### To Update Styling

- **Colors**: Edit the blue theme in individual components (search for `bg-blue-600`)
- **Layout**: Modify `CVLayout.tsx` for structural changes
- **Typography**: Update Tailwind classes in component files

### To Add a Profile Image

1. Place your image in the `public/` folder (e.g., `public/profile.jpg`)
2. Update the `profileImage` path in `cvData.ts`

## 🎨 Design Features

- **Exact Layout Match**: Replicates the original German CV design
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Professional Styling**: Clean, modern appearance with shadcn/ui components
- **Blue Theme**: Matches the original blue header sections
- **Print-Friendly**: A4-like layout optimized for printing

## 🛠️ Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - High-quality components
- **React Components** - Modular architecture

## 📝 Component Documentation

Each component includes:
- TypeScript interfaces for props
- JSDoc comments explaining purpose
- Professional code standards
- Easy-to-understand structure

## 🔧 Customization

### Adding New Sections

1. Create a new component in `src/components/cv/`
2. Add the section data to `cvData.ts`
3. Include it in `CVLayout.tsx`
4. Export it from `src/components/cv/index.ts`

### Changing the Theme

The website uses a blue theme (`bg-blue-600`) consistent with the original CV. To change:

1. Search for `blue-600` in component files
2. Replace with your preferred color
3. Update hover states and related colors

## 📱 Responsive Behavior

- **Desktop**: Two-column layout (main content + sidebar)
- **Tablet**: Stacked layout with preserved sections
- **Mobile**: Single column, optimized for readability

## 🖨️ Print Optimization

The layout is designed to work well when printed:
- A4-like proportions
- Proper page breaks
- High contrast for printing
- Professional formatting

---

**Easy Preview**: Just run `npm run dev` and open `http://localhost:3000` to see your changes instantly!
