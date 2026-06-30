# Public Records Act Retention and Disposal Reasoning

> Helps you reason through how long records should be kept and how they may lawfully be disposed of under the Public Records Act 2005.

- **Use it for:** working out the likely retention and disposal position for a class of records, mapping records to a disposal authority, or preparing a question for your records manager or the Chief Archivist.
- **Works well with:** any capable general-purpose AI assistant (a large language model). Most useful when you paste in the relevant disposal authority class descriptions.
- **Source frameworks:** Public Records Act 2005, general and agency-specific disposal authorities, and the statutory role of the Chief Archivist. Archives New Zealand is the lead agency. See https://www.archives.govt.nz/

## The prompt
```
You are assisting a New Zealand public office or local authority to reason about records retention and disposal under the Public Records Act 2005.

Context you must use:
- Records in question: [DESCRIBE THE RECORDS, THEIR FORMAT, AND THE BUSINESS ACTIVITY THAT CREATED THEM]
- Business value: [WHY THE AGENCY CREATED OR HOLDS THESE RECORDS, AND WHO RELIES ON THEM]
- Any current sentencing: [STATE THE DISPOSAL AUTHORITY AND CLASS THAT MAY APPLY, OR SAY NONE IDENTIFIED]
- Relevant disposal authority text: [PASTE THE CLASS DESCRIPTIONS FROM THE APPLICABLE GENERAL DISPOSAL AUTHORITY OR AGENCY DISPOSAL AUTHORITY, OR SAY NONE PROVIDED]
- Sensitivities: [NOTE ANY LEGAL HOLD, LITIGATION, INQUIRY, PRIVACY, OR ONGOING PUBLIC INTEREST]

Task:
1. Restate the records and the business activity in plain English, and identify the likely record class or classes.
2. Where disposal authority text is provided, map the records to the most plausible class and state the retention period and disposal action (for example retain as archive, destroy after a set period, or transfer to Archives New Zealand).
3. Explain the reasoning, including any triggers that start a retention clock.
4. Identify reasons the records may need to be kept longer, such as a legal hold, an active inquiry, or continuing business or accountability value.
5. List what a records manager must confirm before any disposal proceeds, and flag any case where authorisation from the Chief Archivist may be required.

Output format:
- A short records summary.
- A table with columns: Likely class, Retention period, Disposal action, Trigger, Reasoning, Confidence.
- A list of conditions that must be satisfied before disposal, and any points to refer to the records manager or the Chief Archivist.

Rules:
- Use UK English. Use the words must, should, and may precisely.
- Disposal of public records must be authorised. Never recommend destruction as a settled conclusion. Frame every disposal action as subject to a valid disposal authority and human authorisation.
- Do not invent disposal authority numbers or class identifiers. If none is provided, say the sentencing must be confirmed against the applicable authority.
```

## How to use it
1. Describe the records and the activity that created them as precisely as you can, since classification drives the retention outcome.
2. Paste in the class descriptions from the disposal authority that applies to your agency, where you have them.
3. Note any legal hold or ongoing public interest, because these override routine disposal.
4. Review the mapping with your records manager and confirm the sentencing against the actual disposal authority.
5. Do not destroy any record on the strength of AI output alone. Disposal must follow your authorised process.

## Notes and attribution
The Public Records Act 2005 is New Zealand legislation. Disposal authorities and guidance are published by Archives New Zealand, the home of the Chief Archivist, at https://www.archives.govt.nz/ . Record class descriptions and any case detail may be sensitive, so check your tool's data-handling settings before pasting them in. AI output must be reviewed by a qualified records or information management practitioner. This resource is general information only and is not legal advice.
