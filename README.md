# Resume_Buiilder

A style template you hand to Claude to build a polished, personalized resume
as both **.docx** and **.pdf**. The files here define the look and feel; Claude
asks you for your own details and fills them in.

## How to use it

1. Open a Claude chat and paste this repo's URL.
2. Ask: *"Build me a resume based on this template, following
   `CLAUDE_INSTRUCTIONS.md`."*
3. Answer Claude's questions: theme choices first, then your experience.
4. Download the finished `.docx` (editable) and `.pdf` (ready to send).

## What's in the repo

| File | Purpose |
|------|---------|
| `CLAUDE_INSTRUCTIONS.md` | The workflow Claude should follow (question order, defaults, outputs) |
| `style-tokens.yaml` | Colors, fonts, sizes, section order, in one place |
| `TEMPLATE_RESUME.md` | **Baseline layout** with obvious placeholder content |
| `modern-resume-doc-styled.md` | Original styled example (author's own content) |
| `modern-tech-resume.tsx` | Original React/Tailwind web version of the same design |
| `Janus_Sanders_Resume*.md` | Original example resumes (author's own content) |

Start from `TEMPLATE_RESUME.md` and `style-tokens.yaml`. The files with a
person's name are examples of finished output, not content to reuse.

## Defaults

If you skip a design question, Claude uses the template: blue palette,
Calibri, no photo, banner summary, boxed skill columns, timeline-style
experience, one page.

## Notes

- Section headings use standard names (Skills, Experience, Education) so
  applicant tracking systems parse them reliably.
- A photo is optional and off by default for US-style resumes.
- Never commit real personal data to a public fork; keep your details in the
  chat or in a private file.
