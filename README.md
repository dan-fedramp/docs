# FedRAMP 20x Machine Readable (FRMR) Docs

This is a prototype for reproducible, consistent FedRAMP docs and related
materials maintained in JSON. This prototype includes:

- JSON files for FedRAMP 20x materials 
- A handlebars template to create consistent markdown docs from FRMR JSON
- JSON Schema validation (WIP)
- Human readable markdown outputs 
- Bun scripts for testing and generating docs

## FRMR Requirements Files

| Materials                                                                                                     | Description                                                                                                                           | Version | Effective Date(s)                                            | PDF                                                                                  |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| [Key Security Indicators (KSI)](./markdown/FRMR.KSI.key-security-indicators.md)                               | Initial release of Key Security Indicators from 25.05; the previous 25.05A release contained errors during conversion to JSON that are fixed in this release, the KSIs should now be identical to the original 25.05 paper release of the KSIs released on 2025-05-30. FRR-KSI-AY rules were converted to FRR-KSI rules, but otherwise unchanged.                                                                                            | 25.05B  | 2025-06-18 (20xP1)                                           | [PDF](./pdf/FRMR.KSI.key-security-indicators.pdf)                                    |
| [Minimum Assessment Standard (MAS)](./markdown/FRMR.MAS.minimum-assessment-standard.md)                       | Minor non-breaking updates for clarity and formatting; renamed to Minimum Assessment Standard; reframed FRR-MAS-01; added FRD-MAS-06. | 25.06A  | 2025-06-17 (20xP1)<br><br> 2025-07-30 (R5.MAS.B1, tentative) | [PDF](./pdf/FRMR.MAS.minimum-assessment-standard.pdf)                                |
| [Significant Change Notification Requirements (SCN)](./markdown/FRMR.SCN.significant-change-notifications.md) | Initial release of Significant Change Notification Requirements (includes Technical Assistance)                                       | 25.06A  | 2025-06-17 (20xP1)<br><br> 2025-07-07 (R5.SCN.B1, tentative) | [PDF](./pdf/FRMR.SCN.significant-change-notifications.pdf)                           |
| [Combined 20x Low Pilot Requirements](./markdown/FRMR.LOW.20x-low-pilot.md)                                 | Combined FedRAMP 20x Low Requirements (including KSI hotfix to original 25.05 release)                                                 | 25.06B  | 2025-06-18 (20xP1)                                            | [PDF](./pdf/FRMR.LOW.20x-low-pilot.pdf)                                              |

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

## Conversion to PDF

Manually using md-to-pdf for now.
