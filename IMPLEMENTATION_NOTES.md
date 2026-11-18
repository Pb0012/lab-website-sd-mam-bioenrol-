# Homepage redesign notes

## What changed
- Replaced the unreliable external hero image with a locally bundled laboratory image at `public/images/algal-photobioreactor-hero.png`.
- Rebalanced the hero so the heading and description have a tighter measure and the image is visually prominent.
- Introduced a subtle glass / soft-gradient visual language: translucent white panels, gentle shadows, rounded corners and mint/emerald highlights.
- Added the Principal Investigator section directly after the mission section.
- Redesigned the navigation so desktop links appear from the `lg` breakpoint and secondary destinations sit under More.
- Kept the research areas, featured project, announcements, facilities and join-us sections.

## Principal Investigator profile
Edit `components/sections/PISpotlight.tsx`:
- `professor.name`
- `professor.designation`
- `professor.qualification`
- `professor.email`
- `professor.scholar`
- `professor.orcid`

Replace `public/images/faculty-placeholder.svg` with the approved faculty portrait (or update the `professor.portrait` path in the component). Replace the biography and research-interest list with the professor's verified details. The current UI intentionally uses visible placeholders because the actual faculty details were not supplied; no fake faculty identity or achievements have been added.

## Run locally
```bash
npm install
npm run dev
```
