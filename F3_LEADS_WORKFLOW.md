# F3 Leads Workflow Setup

## Goal
Maintain a master sponsorship prospect spreadsheet seeded from the provided workbook, then add 25 new qualified prospects per day.

## Seed file prepared
- `f3_polo_campaign_leads_seed.csv`
- Contains all 200 existing leads
- Added columns:
  - `Lead Score`
  - `Subject Line`
  - `Message`

## Intended Google Sheet structure
Columns:
1. Category
2. Company
3. Key Contact
4. Phone
5. Email
6. Contact Strategy
7. Lead Score
8. Subject Line
9. Message

## Daily addition rule
Each day, append 25 new prospects that match:
- premium or near-premium brand positioning
- sufficient size/budget for sponsorship or hospitality
- plausible fit for F3 Polo audience and hospitality use case
- real likelihood of buying sponsorship, not just broad category similarity

## Qualification guidance for future scoring
Score on a 0-100 scale using:
- Brand fit to premium lifestyle/sport audience
- Likely sponsorship budget
- Hospitality/client hosting relevance
- Local AU/NZ decision-making likelihood
- Evidence of sponsorship activity
- Category fit with current F3 offer

## Blocker
A real Google Drive spreadsheet has not yet been created from this session because no Google Sheets/Drive API credentials or local integration were available in the workspace runtime.

## Next action once credentials exist
1. Create Google Sheet named `F3 Polo Campaign Leads`
2. Import `f3_polo_campaign_leads_seed.csv`
3. Freeze header row
4. Optionally add filters
5. Set up daily job to append 25 new leads

## Notes
- The current setup is ready for import.
- The enrichment columns are present but intentionally blank for now.
- No new prospect research has been started yet.
