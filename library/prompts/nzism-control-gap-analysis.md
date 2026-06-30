# NZISM Control Gap Analysis

> Helps an analyst run a structured gap analysis of a system or service against the New Zealand Information Security Manual (NZISM) controls.

- **Use it for:** assessing how a system, service, or supplier measures up against NZISM controls before certification and accreditation, at a security review, or when scoping remediation work.
- **Works well with:** any capable general-purpose AI assistant (a large language model). Best used where you can paste in the relevant NZISM control text or your own control register.
- **Source frameworks:** New Zealand Information Security Manual (NZISM), published by the National Cyber Security Centre (NCSC) within the Government Communications Security Bureau (GCSB). See https://nzism.gcsb.govt.nz/

## The prompt
```
You are assisting an information security analyst in a New Zealand government agency to run a gap analysis against the New Zealand Information Security Manual (NZISM).

Context you must use:
- System or service under review: [DESCRIBE THE SYSTEM, ITS PURPOSE, AND WHO USES IT]
- Highest classification of information processed: [UNCLASSIFIED / IN-CONFIDENCE / SENSITIVE / RESTRICTED / CONFIDENTIAL / SECRET / TOP SECRET]
- Hosting and boundaries: [ON-PREMISES / CLOUD / HYBRID, AND KEY SYSTEM BOUNDARIES]
- NZISM control sections in scope: [LIST THE NZISM CHAPTERS OR CONTROL AREAS, FOR EXAMPLE ACCESS CONTROL, CRYPTOGRAPHY, NETWORK SECURITY, MEDIA HANDLING]
- Current control evidence: [PASTE YOUR CONTROL REGISTER, POLICIES, OR A DESCRIPTION OF WHAT IS IN PLACE TODAY]
- Reference control text: [PASTE THE RELEVANT NZISM CONTROL STATEMENTS, OR STATE THAT NONE IS PROVIDED]

Task:
1. For each control area in scope, restate the intent of the relevant NZISM control in plain English.
2. Assess the current state as one of: Met, Partially met, Not met, or Not applicable. Give a one-line justification for each assessment.
3. Where a control is Partially met or Not met, identify the specific gap and the risk it creates if left unaddressed.
4. Recommend a proportionate remediation action for each gap, and note whether it is a technical, procedural, or governance change.
5. Flag any control where the assessment depends on information you were not given, and state clearly what additional evidence is needed.

Output format:
- A table with columns: Control area, NZISM intent, Assessment, Gap, Risk, Recommended action, Owner type.
- Then a short prioritised list of the top remediation actions, ordered by risk.

Rules:
- Use UK English. Use the words must, should, and may precisely.
- Do not invent NZISM control identifiers or text. If you are unsure whether a specific control applies, say so rather than guessing.
- Keep recommendations proportionate to the classification and the risk.
```

## How to use it
1. Gather the NZISM control text for the chapters you care about from the official NZISM site, and paste the relevant statements into the reference control text placeholder.
2. Fill in the system description, classification, hosting, and your current control evidence.
3. Run the prompt, then review the assessment table with your security team and the system owner.
4. Treat anything the AI flags as needing more evidence as a follow-up action, not a finding.
5. Re-run the analysis after remediation to confirm the gaps are closed.

## Notes and attribution
The NZISM is Crown copyright, published by the National Cyber Security Centre (NCSC) within the Government Communications Security Bureau (GCSB), and is available at https://nzism.gcsb.govt.nz/ . Where you paste NZISM control text into a tool, attribute it to the NZISM and check your tool's data-handling settings, because control detail and your own evidence may be sensitive. AI output must be reviewed by a qualified security practitioner. This resource is general information only and is not legal or assurance advice.
