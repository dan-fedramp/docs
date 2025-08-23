# FedRAMP 20x Machine Readable (FRMR) Docs

This repository contains FedRAMP 20x standards, technical assistance, and other materials in both machine-readable and human-readable formats.

## FRMR Identifiers

See [IDENTIFIERS.md](./IDENTIFIERS.md) for explanations about the naming and structure of these materials.

## FRMR Materials

| Markdown | PDF | Description | Version | Published Date |
|-----------|---|-------------|---------|----------------|
| [Authorization Data Sharing Standard (ADS)](https://github.com/FedRAMP/docs/tree/main/markdown/FRMR.ADS.authorization-data-sharing.md) | [[PDF]](https://github.com/FedRAMP/docs/blob/main/pdf/FRMR.ADS.authorization-data-sharing.pdf) | Initial release of the Authorization Data Sharing Standard | 25.08A | 2025-08-24 |
| [Significant Change Notification Requirements (SCN)](https://github.com/FedRAMP/docs/tree/main/markdown/FRMR.SCN.significant-change-notifications.md) | [[PDF]](https://github.com/FedRAMP/docs/blob/main/pdf/FRMR.SCN.significant-change-notifications.pdf) | Minor non-breaking updates to align term definitions and highlighted terms across updated materials (definitions are now in FRD-ALL). | 25.06B | 2025-08-24 |
| [FedRAMP Definitions (FRD)](https://github.com/FedRAMP/docs/tree/main/markdown/FRMR.FRD.fedramp-definitions.md) | [[PDF]](https://github.com/FedRAMP/docs/blob/main/pdf/FRMR.FRD.fedramp-definitions.pdf) | Initial release of compiled FedRAMP definitions as a standalone document. | 25.08A | 2025-08-24 |
| [Minimum Assessment Standard (MAS)](https://github.com/FedRAMP/docs/tree/main/markdown/FRMR.MAS.minimum-assessment-standard.md) | [[PDF]](https://github.com/FedRAMP/docs/blob/main/pdf/FRMR.MAS.minimum-assessment-standard.pdf) | Minor non-breaking updates to align term definitions and highlighted terms across updated materials (definitions are now in FRD-ALL). | 25.06B | 2025-08-24 |
| [Key Security Indicators (KSI)](https://github.com/FedRAMP/docs/tree/main/markdown/FRMR.KSI.key-security-indicators.md) | [[PDF]](https://github.com/FedRAMP/docs/blob/main/pdf/FRMR.KSI.key-security-indicators.pdf) | Minor non-breaking updates to align term definitions and highlighted terms across updated materials (no changes to KSIs, definitions are now in FRD-ALL). | 25.05D | 2025-08-24 |
| [Key Security Indicators with Controls (KSI)](https://github.com/FedRAMP/docs/tree/main/markdown/FRMR.KSI.key-security-indicators-with-controls.md) | [[PDF]](https://github.com/FedRAMP/docs/blob/main/pdf/FRMR.KSI.key-security-indicators-with-controls.pdf) | Minor non-breaking updates to align term definitions and highlighted terms across updated materials (no changes to KSIs, definitions are now in FRD-ALL). | 25.05D | 2025-08-24 |

---

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
