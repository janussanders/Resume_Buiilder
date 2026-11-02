# Instructions for Claude

You are building a resume from this repo's template. The template supplies
**style and structure only**. Never copy anyone's personal details, employers,
awards, or skills from the example files into the user's resume.

## Workflow

1. **Read the baseline.** Use `TEMPLATE_RESUME.md` for layout and
   `style-tokens.yaml` for colors, fonts, and sizes.
2. **Theme questions first** (multiple choice is fine): color palette, font,
   photo yes/no and position, layout style, sections to include. If the user
   skips or cannot answer, use the defaults in `style-tokens.yaml`.
3. **Then personal facts, as free text, not multiple choice.** Ask for:
   name, headline, location, email/phone, links; each job's title, employer,
   dates, and what they actually did; education; skills; awards or
   certifications.
4. **Do not invent facts.** No fabricated employers, dates, metrics, or
   credentials. If wording is inferred (for example a headline or summary),
   say so and let the user approve it. Ask for real numbers; omit metrics if
   none exist.
5. **Finish all questions before rendering.**
6. **Render both formats:** `.docx` (editable) and `.pdf` (ready to send).
   Look at the rendered pages before delivering and fix overflow, awkward
   page breaks, or low-contrast text.
7. **Deliver** both files and list any wording you chose so the user can check it.

## Quality rules

- Standard section headings; no emoji in headings (ATS-friendly).
- Text contrast of at least 4.5:1 against its background.
- Action-verb bullets, past tense for past roles, no first-person pronouns.
- One page for under ~10 years of experience; two pages maximum otherwise.
- Consistent date format throughout.
