# Salma Eats Profile Web Design

## Goal

Build a one-page personal profile website for Salma Eats, a food reviewer with a soft pink visual identity. The site should feel personal, cute, and memorable while still making it easy for brands to evaluate past review work and contact Salma.

## Audience

- Food lovers who want friendly recommendations for cafes, desserts, and everyday dining spots.
- Brands, cafes, and restaurants checking whether Salma Eats is a good fit for review or collaboration.

## Brand Direction

The visual direction is Soft Kawaii Editorial: pastel pink as the lead color, balanced with cream, white, berry accents, and small mint or butter-yellow touches so the palette does not become one-note. The experience should feel warm and playful, but the layout must remain scannable and credible for business visitors.

Copy should use modern Indo-English. The tone should feel like a friendly creator profile, not a corporate media kit.

## Page Structure

1. Hero section with "Salma Eats", a short positioning headline, profile-style intro copy, and two calls to action: view reviewed places and contact for collaboration.
2. Profile snapshot showing Salma's niche, review personality, content style, and what followers can expect.
3. Review portfolio listing previously reviewed places. Each item should show place name, category, city or area, highlight, and a short review note.
4. Collaboration section explaining why brands can work with Salma and what formats are available.
5. Contact section with direct CTA links for email and social.

## Technical Approach

- Use the existing Next.js app router project.
- Keep TSX because the current project, shadcn setup, and UI component files are already TypeScript-based.
- Use Tailwind CSS for layout and styling.
- Use existing shadcn UI primitives where practical, especially Button.
- Use Tabler icons because the project is configured with Tabler.
- Keep the page static and data-local for now. A CMS or API would be unnecessary technical debt at this stage, but the reviewed places should be stored as an array so moving to an API later is straightforward.

## UX And Quality Requirements

- Mobile-first layout with no horizontal scrolling.
- Clear hierarchy for brand visitors: portfolio and contact must be easy to find.
- Interactive controls should have visible focus and hover states.
- Text contrast must remain readable against pastel surfaces.
- Motion should be subtle and CSS-only, respecting reduced-motion preferences.
- Avoid decorative clutter that makes the page hard to scan.

## Trade-Offs

This design favors a distinctive personal brand over a purely minimal creator resume. That adds more visual detail, but it should improve memorability and fit Salma's pink, food-focused identity. The implementation will keep the content static for delivery speed and low maintenance; the consequence is that updates require code changes until a CMS or structured backend is added later.

## Commit Message

`feat: document salma eats profile design`
