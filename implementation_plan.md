# SherCorp Website Implementation Plan

## 1. Project Setup & Initialization
- [ ] Rename existing `web` directory to `web_backup` to ensure a fresh start.
- [ ] Initialize Next.js 15 application using `create-next-app`.
  - Flags: `--typescript`, `--tailwind`, `--eslint`, `--app`, `--src-dir`, `--import-alias "@/*"`.
- [ ] Install additional dependencies:
  - `framer-motion` (Animations)
  - `lucide-react` (Icons)
  - `clsx`, `tailwind-merge` (Class management)
  - `next-themes` (Dark/Light mode)
  - `react-tsparticles`, `tsparticles` (Particle background)
  - `shadcn-ui` CLI (for components)

## 2. Design System Configuration ("Liquid Glass")
- [ ] Configure `tailwind.config.ts`:
  - Define colors for Glassmorphism (Deep charcoal, Soft zinc, Neon Green #39FF14).
  - Add custom animations (pulse, border-trace).
- [ ] Setup `globals.css`:
  - Implement base styles for Glass effects (backdrop-filter, borders).
  - Configure global typography.
- [ ] Initialize `shadcn/ui`:
  - Run init command.
  - Add necessary components (Button, Input, Textarea, Card, etc.).
- [ ] Implement `ThemeProvider` using `next-themes`.

## 3. SEO & Metadata Architecture
- [ ] Create `src/app/layout.tsx`:
  - Setup `metadata` object with title template.
  - Add `ThemeProvider` and global layout structures.
- [ ] Create `robots.txt` and `sitemap.ts` generation functions.
- [ ] Implement JSON-LD for ProfessionalService.

## 4. Components Development
- [ ] **UI Components**:
  - `GlassCard`: Reusable component with border and blur effects.
  - `NeonButton`: Button with confusing pulsing green effect.
  - `SectionHeading`: Standardized headers.
- [ ] **Layout Components**:
  - `Navbar`: Sticky, glassmorphic, active link highlighting, Theme Toggle.
  - `Footer`: 4-column layout with required links.
- [ ] **Feature Components**:
  - `HeroScroller`: Dual marquee sliders (Graphic Design & AI Solutions).
  - `ParticleBackground`: Interactive background.
  - `ServiceGrid`: 4x2 grid with "Liquid Glow" hover.
  - `TrustBar`: Logo grid with grayscale-to-color transition.
  - `Testimonials`: Bento-grid layout.
  - `ContactForm`: Glassmorphic form with validation.

## 5. Page Construction
- [ ] **Home Page (`/`)**:
  - Assemble all sections (Hero, Services, Trust, Testimonials, Contact).
- [ ] **Services Page (`/services`)**:
  - specific subsections for 8 services.
  - GEM Focus section.
  - Specific SEO metadata.

## 6. Performance & Polish
- [ ] Audit `next/image` usage (priority on LCP elements).
- [ ] Verify standard 95+ Lighthouse score (Hardware acceleration for glass effects).
- [ ] Final visual check (colors, animations, responsivness).
