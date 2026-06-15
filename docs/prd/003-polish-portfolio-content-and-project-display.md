# PRD: Polish portfolio content and project display

## 1. Background

After the first public deployment, several portfolio sections needed clearer positioning for interview use. Some labels were ambiguous, some skills were outdated, and the personal project needed space for future Google Play and app screenshot assets.

## 2. Goal

Improve the homepage and project detail content so that Android experience, multi-device development, business impact, and personal project readiness are clearer.

## 3. Audience

- Japanese Android interviewers
- Engineering leads
- Recruiters reviewing the portfolio quickly

## 4. Scope

### In scope

- Update homepage hero stats
- Add Personal Projects navigation
- Reorder core projects
- Improve network optimization metrics
- Improve TV A/B test card metrics
- Update skill descriptions
- Add pastel skill chips consistently
- Update GitHub contact link
- Add Google Play and app screenshot placeholders for the personal project
- Improve IMSDK detail wording and flow diagram label

### Out of scope

- Real Google Play URL
- Real app screenshots
- Full Japanese copy proofreading

## 5. Entry points

- Home page hero card
- Header navigation
- Core Projects
- Personal Projects
- Skills
- Contact
- IMSDK detail page
- Personal project detail page

## 6. Functional requirements

1. Experience should show `3.5Y`
2. Ambiguous `JP Interview` text should be replaced with a clearer multi-device signal
3. Core strength should mention TV, Pad, and smart devices
4. Network optimization should appear as the second core project
5. TV A/B test card should prioritize card click-rate impact
6. Personal Projects should be directly reachable from header navigation
7. GitHub contact should link to the profile page
8. Skill chips should use consistent pastel styling
9. Personal project detail should have Google Play and screenshot placeholders
10. IMSDK detail should emphasize troubleshooting flow and ownership, not only investigation speed

## 7. Interaction details

- Header Personal link scrolls to the Personal Projects section
- GitHub link opens the GitHub profile in a new tab
- Google Play placeholder is non-clickable until a real store URL exists

## 8. Animation

No new animation is introduced.

## 9. Abnormal and edge cases

- If Google Play URL is not ready, show `公開準備中`
- If app screenshots are not ready, show explicit placeholders
- Use the same cost-saving figures as the resume when the user has confirmed they are suitable for interview materials
- Avoid exposing additional internal company data beyond resume-safe figures

## 10. Data and content impact

- Update `src/data/projects.ts`
- Update `src/data/skills.ts`
- Update homepage content in `src/pages/index.astro`
- Update project detail layout for app links and screenshots

## 11. Technical assessment

The current data-driven project model is sufficient, but it needs optional fields for app links and screenshot placeholders. No framework or dependency change is needed.

## 12. Test plan

- Run Astro build
- Check homepage project order
- Check Personal Projects anchor
- Check personal project detail page
- Check IMSDK detail page labels and wording
- Check GitHub profile link

## 13. Acceptance criteria

- Build passes
- Homepage no longer shows ambiguous `JP Interview`
- Skills no longer include weak or outdated descriptions
- Network and TV project metrics are clearer
- Personal project has future-ready store and image sections
