# PRD: Update identity and current stack presentation

## 1. Background

The portfolio still contained an incorrect owner name and framed active production technologies as if they were only being learned.

## 2. Goal

Present the portfolio owner and current technical experience accurately for interview use.

## 3. Audience

- Primary: Japanese Android interviewers and hiring managers
- Secondary: Recruiters and HR

## 4. Scope

### In scope

- Update display name
- Update page titles that contain the owner name
- Replace `Currently Learning` with a current production stack framing
- Add the real GitHub repository link

### Out of scope

- LinkedIn setup
- Additional project screenshots
- Japanese copy rewrite for all sections

## 5. Entry points

- Page: home page
- Section: hero, skills, contact
- Trigger: page load and external GitHub click

## 6. Functional requirements

1. The site must display `王泓懿` as the owner name
2. The skills area must present active stack information instead of a learning-only framing
3. The contact area must link to the real GitHub repository
4. Detail page titles must use the correct owner name

## 7. Interaction details

- GitHub entry opens the repository in a new tab
- Existing home-page navigation stays unchanged

## 8. Motion and animation

No new animation is introduced in this iteration.

## 9. Abnormal and edge cases

- Old placeholder content must not remain in any visible section
- Build output must not retain old metadata strings

## 10. Data and content impact

- Update `src/data/skills.ts`
- Update hero, contact, and metadata text
- Review for identity consistency

## 11. Technical assessment

- The current component and data structure is sufficient
- No layout or framework upgrade is needed
- Only content and metadata updates are required

## 12. Test plan

- Run build
- Check home page text
- Check detail page titles
- Check GitHub link

## 13. Acceptance criteria

- Correct owner name is visible site-wide
- `Current Stack` reflects active development work
- GitHub link points to `hongyi-wang0108/eijyo_tracker`

