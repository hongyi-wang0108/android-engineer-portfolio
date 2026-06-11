# Release Checklist

## Product

- PRD exists or was updated for this iteration
- Scope matches the PRD
- No unresolved content ambiguity remains

## Architecture

- Existing components were reused where possible
- New data fields are justified
- New abstractions are not one-off
- No unnecessary framework or dependency upgrade was introduced

## Quality

- `ASTRO_TELEMETRY_DISABLED=1 npm run build` passes
- Home page renders correctly
- Detail pages render correctly
- Mobile layout was checked
- External links were checked
- No old name, old link, or placeholder content remains
- No sensitive company information is exposed

## Release

- `CHANGELOG.md` updated if the change is user-facing
- Release note file added if the change is significant
- CI is green
- Deployment target confirmed

