# docs

Machine-readable FedRAMP documentation

> This is a **prototype** using JSON w/ JSON Schema and handlebars to make human
> readable docs.

## Initial Vibes

This prototype contains:

1. FedRAMP 20x requirements documents for KSI, MAS, and SCN formatted as JSON
   files
2. A handlebars template that renders all three files into reasonably formatted
   Markdown files that align with the initial document based versions
3. The formatted Markdown files as a result

This involved a significant amount of testing by hand.

Next up:

- creating nice indexes automatically
- creating "combined" documentation
- scaling, and switching over to this as the source of truth for released
  documents

#### Notes on initial PR from 2025-07-14

- FRMR = FedRAMP Machine Readable requirement files
- Various tools using `bun` inside the `tools` folder
  - `bun run watch` will automatically create markdown files using handlebars if
    the JSON rules or handlebars templates change
  - `bun test` will validate all the JSON files against the
    `FedRAMP.schema.json` JSON Schema
- The `markdown` folder contains outputs from
  `tools/scripts/FRMR-to-markdown.ts` (which uses the
  `templates/FRMR.markdown.template.hbs` handlebar file for generation)
- Currently this is all generated manually or via `bun run watch` (not generated
  via actions/etc.)
- I've been making a lot of manual edits to the JSON files as I test and
  discover various options for improvements/etc.

> **Why:** We originally generated JSON and combined markdown versions for
> https://www.fedramp.gov/20x/guidance/ using a combination of super janky
> Gemini prompting (_"make a JSON version of this document using each header as
> a top level object and... etc."_) and copy/pasting in google docs. This is not
> a consistently reproducible way to handle this type of task, so moving towards
> entirely consistent structures with 100% reproducible results is the right
> way.
