
## Manpower Supply Company Website

### Design Direction
- **Palette**: Navy Trust — deep navy (#0f1b3d) primary, teal accents (#2d8a9e), light backgrounds (#e8edf3), white
- **Typography**: Space Grotesk headings + DM Sans body — modern, professional, highly readable
- **Layout**: Hero-grid homepage with full-width sections, zigzag content blocks
- **Animations**: Framer Motion for scroll reveals, hover micro-interactions, smooth page transitions
- **Border radius**: 12px for cards, 8px for buttons — modern but not overly rounded

### Pages & Components

**1. Home Page**
- Full-width hero with background image overlay, bold headline, dual CTA buttons ("Get a Quote" / "Browse Workers")
- Services section: 3 cards (Skilled / Semi-Skilled / Unskilled) with icons and descriptions
- "Why Choose Us" section with icon grid (4-6 differentiators)
- Stats counter section (animated count-up): Workers Deployed, Years Experience, Projects Completed, Client Satisfaction %
- Testimonials carousel with client photos and quotes
- CTA banner ("Ready to Build Your Workforce?")

**2. About Page**
- Company story with side-by-side image/text
- Mission & Vision cards
- 10+ Years Experience highlight with timeline
- Team section with photo cards and roles

**3. Careers Page**
- Worker category filter (Skilled / Semi-Skilled / Unskilled)
- Job listing cards with location, type, and "Apply" button
- Application form modal with validation (name, email, phone, resume upload, category, message)

**4. Contact Page**
- Contact form with validation (name, email, phone, subject, message)
- Company info sidebar (address, phone, email, hours)
- Embedded Google Maps placeholder
- Social media links

**Shared Components**
- Sticky header with logo, nav links, active state, and mobile hamburger menu
- Footer with 4-column layout: About, Quick Links, Services, Contact + social icons
- Scroll-to-top button
- Loading skeletons for dynamic content areas
- Scroll reveal animations on all sections

### Technical Approach
- React Router for multi-page navigation
- Framer Motion for animations
- React Hook Form + Zod for form validation
- Lazy-loaded pages with React.lazy + Suspense
- Feature-based folder structure (components, pages, hooks, lib)
- Semantic HTML with ARIA labels throughout
- SEO meta tags, OG tags, and JSON-LD structured data in index.html
- PWA: Simple manifest.json for installability (no service worker in dev/preview per Lovable constraints — will work in production)
- Mobile-first responsive design with Tailwind breakpoints
- Placeholder company name: "ManpowerPro" with tagline "Powering Your Workforce"
