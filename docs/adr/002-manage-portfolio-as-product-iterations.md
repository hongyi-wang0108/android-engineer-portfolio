# ADR 002: Manage the portfolio through product-style iterations

## Status

Accepted

## Context

The site will evolve over time as a portfolio used for interviews. Content, layout, interaction, and delivery quality all matter, not just raw implementation speed.

## Decision

Treat each meaningful update as a product iteration with:

- a PRD
- architecture impact review
- build and regression checks
- changelog update for user-visible changes

## Consequences

- Changes become easier to reason about
- Scope drift is reduced
- Quality gates are explicit
- Interview-facing content is less likely to regress

