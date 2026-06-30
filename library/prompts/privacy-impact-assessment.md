# Privacy Impact Assessment (PIA)

> Helps you draft or critique a Privacy Impact Assessment for a project that handles personal information, grounded in the Privacy Act 2020 and the Information Privacy Principles.

- **Use it for:** scoping a new PIA, drafting first-cut content, or stress-testing an existing PIA against the 13 Information Privacy Principles (IPPs) before it goes to your privacy officer.
- **Works well with:** any capable general-purpose AI assistant (a large language model). Useful both for drafting and for adversarial review of a draft you paste in.
- **Source frameworks:** Privacy Act 2020 and the 13 Information Privacy Principles. The Office of the Privacy Commissioner (OPC) publishes Privacy Impact Assessment guidance and tools. See https://www.privacy.org.nz/

## The prompt
```
You are assisting a New Zealand government agency to prepare a Privacy Impact Assessment (PIA) under the Privacy Act 2020 and the 13 Information Privacy Principles (IPPs).

Context you must use:
- Initiative being assessed: [DESCRIBE THE PROJECT, SYSTEM, OR PROCESS]
- Purpose: [WHY THE AGENCY IS COLLECTING OR USING PERSONAL INFORMATION]
- Personal information involved: [LIST THE TYPES OF PERSONAL INFORMATION, AND NOTE ANY SPECIAL CATEGORIES SUCH AS HEALTH OR CHILDREN'S DATA]
- People affected: [WHO THE INFORMATION IS ABOUT]
- Information flows: [HOW INFORMATION IS COLLECTED, STORED, USED, DISCLOSED, AND DISPOSED OF, AND ANY THIRD PARTIES OR OVERSEAS PARTIES INVOLVED]
- Mode: [DRAFT A NEW PIA] OR [CRITIQUE THE FOLLOWING DRAFT: PASTE DRAFT]

Task:
1. Summarise the initiative and the personal information flows in plain English.
2. Assess the initiative against each of the 13 Information Privacy Principles in turn (collection, source, transparency, manner of collection, storage and security, access, correction, accuracy, retention, use, disclosure, unique identifiers, and any cross-border disclosure considerations). For each principle, state whether it is engaged, whether the initiative appears consistent with it, and any concern.
3. Identify the key privacy risks, rate each as low, medium, or high, and explain the impact on the people affected.
4. Recommend proportionate mitigations for each risk.
5. List the open questions that a human privacy officer must resolve, and any points where legal advice should be sought.

Output format:
- A short initiative summary.
- A table mapping each IPP to: Engaged (yes or no), Assessment, Concern, Mitigation.
- A prioritised risk register.
- A list of open questions and recommended next steps.

Rules:
- Use UK English. Use the words must, should, and may precisely.
- Do not assert that the initiative is lawful or compliant. Frame conclusions as preliminary assessments for a qualified person to confirm.
- Be specific about the people affected and the real-world consequences, not just the process.
```

## How to use it
1. Complete the context placeholders as fully as you can, especially the information flows, because the quality of the assessment depends on them.
2. Choose draft mode for a first cut, or critique mode to pressure-test an existing PIA.
3. Walk through each IPP assessment with your privacy officer and correct anything that misreads the facts.
4. Use the open-questions list to drive the remaining work, including any legal or Privacy Officer sign-off.
5. Keep the final PIA as a living document and update it if the initiative changes.

## Notes and attribution
The Privacy Act 2020 and the Information Privacy Principles are New Zealand legislation. The Office of the Privacy Commissioner (OPC) publishes Privacy Impact Assessment guidance and a PIA toolkit, available at https://www.privacy.org.nz/ . Personal information pasted into any AI tool should be minimised or de-identified, and you should check the tool's data-handling settings before use. AI output must be reviewed by a qualified privacy practitioner. This resource is general information only and is not legal advice.
