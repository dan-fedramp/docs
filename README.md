# FedRAMP 20x Machine Readable (FRMR) Docs

This repository contains FedRAMP 20x standards, technical assistance, and other materials in both machine-readable and human-readable formats.

## FRMR Identifiers

See [IDENTIFIERS.md](./IDENTIFIERS.md) for explanations about the naming and structure of these materials.

## FRMR Materials

| Markdown | PDF | Description | Version | Published Date |
|-----------|---|-------------|---------|----------------|
| [Vulnerability Detection and Response Standard (VDR)](https://github.com/FedRAMP/docs/tree/main/markdown/FRMR.VDR.vulnerability-detection-and-response.md) | [[PDF]](https://github.com/FedRAMP/docs/blob/main/pdf/FRMR.VDR.vulnerability-detection-and-response.pdf) | This update moves the remediation table from FRR-VDR-TF-HI-07 to FRR-VDR-TF-HI-08, adds a clarification on application to Rev5, and fixes a few minor typos. No actual breaking/modifying changes were made to content. | 25.09B | 2025-09-11 |
| [FedRAMP Definitions (FRD)](https://github.com/FedRAMP/docs/tree/main/markdown/FRMR.FRD.fedramp-definitions.md) | [[PDF]](https://github.com/FedRAMP/docs/blob/main/pdf/FRMR.FRD.fedramp-definitions.pdf) | Added FRD-ALL-18 through FRD-ALL-39 aligned with the Vulnerability Detection and Response standard. | 25.09A | 2025-09-10 |
| [Authorization Data Sharing Standard (ADS)](https://github.com/FedRAMP/docs/tree/main/markdown/FRMR.ADS.authorization-data-sharing.md) | [[PDF]](https://github.com/FedRAMP/docs/blob/main/pdf/FRMR.ADS.authorization-data-sharing.pdf) | Initial release of the Authorization Data Sharing Standard | 25.08A | 2025-08-24 |
| [Significant Change Notification Requirements (SCN)](https://github.com/FedRAMP/docs/tree/main/markdown/FRMR.SCN.significant-change-notifications.md) | [[PDF]](https://github.com/FedRAMP/docs/blob/main/pdf/FRMR.SCN.significant-change-notifications.pdf) | Minor non-breaking updates to align term definitions and highlighted terms across updated materials (definitions are now in FRD-ALL). | 25.06B | 2025-08-24 |
| [Minimum Assessment Standard (MAS)](https://github.com/FedRAMP/docs/tree/main/markdown/FRMR.MAS.minimum-assessment-standard.md) | [[PDF]](https://github.com/FedRAMP/docs/blob/main/pdf/FRMR.MAS.minimum-assessment-standard.pdf) | Minor non-breaking updates to align term definitions and highlighted terms across updated materials (definitions are now in FRD-ALL). | 25.06B | 2025-08-24 |
| [Key Security Indicators (KSI)](https://github.com/FedRAMP/docs/tree/main/markdown/FRMR.KSI.key-security-indicators.md) | [[PDF]](https://github.com/FedRAMP/docs/blob/main/pdf/FRMR.KSI.key-security-indicators.pdf) | Minor non-breaking updates to align term definitions and highlighted terms across updated materials (no changes to KSIs, definitions are now in FRD-ALL). | 25.05D | 2025-08-24 |
---

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

### Things you can do include:

> If changes are made, all of these things need to be run manually at the moment, in the following order:

**Validate JSON:**

```sh
bun test
```

**Create Combined JSON files**

```sh
bun run scripts/combine-frmr-json.ts
```

 **Generate Markdown:**

```sh
bun run watch
```
(watches for changes and regenerates markdown)

**Generate Updated TOC:**

```sh
bun run scripts/generate-table-of-docs.ts
```
(copy/paste to README.md)

**Conversion to PDF:**

```sh
cd markdown
../tools/scripts/update-pdfs.sh
```