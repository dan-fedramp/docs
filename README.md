# FedRAMP 20x Machine Readable (FRMR) Docs

This is a prototype for reproducible, consistent FedRAMP docs and related
materials maintained in JSON. This prototype includes:

- JSON files for FedRAMP 20x materials 
- A handlebars template to create consistent markdown docs from FRMR JSON
- JSON Schema validation (WIP)
- Human readable markdown outputs 
- Bun scripts for testing and generating docs

## FRMR Markdown Files

| Materials                                                                                                     | Description                                                                                                                           | Version | Effective Date(s)                                            |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------ |
| [Key Security Indicators (KSI)](./markdown/FRMR.KSI.key-security-indicators.md)                               | Initial release of Key Security Indicators                                                                                            | 25.05A  | 2025-06-16 (20xP1)                                           |
| [Minimum Assessment Standard (MAS)](./markdown/FRMR.MAS.minimum-assessment-standard.md)                       | Minor non-breaking updates for clarity and formatting; renamed to Minimum Assessment Standard; reframed FRR-MAS-01; added FRD-MAS-06. | 25.06A  | 2025-06-16 (20xP1)<br><br> 2025-07-30 (R5.MAS.B1, tentative) |
| [Significant Change Notification Requirements (SCN)](./markdown/FRMR.SCN.significant-change-notifications.md) | Initial release of Significant Change Notification Requirements (includes Technical Assistance)                                       | 25.06A  | 2025-06-16 (20xP1)<br><br> 2025-07-07 (R5.SCN.B1, tentative) |

## Next Steps

- Auto-generate indexes and combined docs
- Make JSON the source of truth for all releases
- Add GitHub actions for automation

## Folders

- `FRMR.*.json` — Requirement files
- `templates/` — Handlebars templates
- `markdown/` — Generated docs in markdown format
- `tools/` — Scripts and tests (bun / node)

## Testing

1. **Install Bun:** [https://bun.sh](https://bun.sh)

2. **Install dependencies:**

   ```sh
   cd tools
   bun install
   ```

3. **Validate JSON:**

   ```sh
   bun test
   ```

4. **Generate Markdown:**
   ```sh
   bun run watch
   ```
   (watches for changes and regenerates markdown)
