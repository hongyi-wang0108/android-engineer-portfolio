# Android Engineer Portfolio

Personal portfolio site for Android interview use in Japan. The site presents core project outcomes, Android strengths, and an actively developed personal app in a format that is easy for interviewers, hiring managers, and recruiters to scan.

## Stack

- Astro
- TypeScript
- Tailwind CSS
- GitHub Actions for CI

## Local development

```bash
npm install
ASTRO_TELEMETRY_DISABLED=1 npm run dev
```

Default local URL:

```text
http://127.0.0.1:4321/
```

## Build

```bash
ASTRO_TELEMETRY_DISABLED=1 npm run build
```

## Project structure

```text
src/
  components/      reusable UI
  data/            portfolio content and skill data
  layouts/         page-level layouts
  pages/           route files
  styles/          global styling
docs/
  prd/             feature product docs
  adr/             architecture decisions
  checklist/       release and QA checklists
  release-notes/   per-version summaries
```

## Working agreement

Every meaningful change should go through this order:

1. Write or update a PRD in `docs/prd/`
2. Check whether the existing component/data/layout structure is enough
3. Implement the feature on a feature branch
4. Run build and regression checks
5. Update `CHANGELOG.md` and add release notes if the change is user-facing

## Release path

- `main` is always deployable
- Feature work should use `feature/...`, `content/...`, or `fix/...` branches
- CI must pass before merge

