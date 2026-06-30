# Records Sensitivity Classification

> Helps you apply the right New Zealand Government security classification, endorsements, and sensitivity markings to a record, consistent with the Protective Security Requirements and the NZISM.

- **Use it for:** classifying a document, dataset, or record, deciding the correct markings and any endorsements, and sense-checking whether an existing classification is too high or too low.
- **Works well with:** any capable general-purpose AI assistant (a large language model). Most reliable when you describe the actual content and the harm that disclosure could cause.
- **Source frameworks:** New Zealand Government Security Classification System under the Protective Security Requirements (PSR), supported by the New Zealand Information Security Manual (NZISM) for handling controls. See https://www.protectivesecurity.govt.nz/ and https://nzism.gcsb.govt.nz/

## The prompt
```
You are assisting a New Zealand government agency to classify a record using the New Zealand Government Security Classification System, consistent with the Protective Security Requirements (PSR) and the NZISM.

Context you must use:
- Record to classify: [DESCRIBE THE CONTENT, ITS PURPOSE, AND WHO IT IS FOR]
- Sensitivity drivers: [WHAT IN THE RECORD IS SENSITIVE, FOR EXAMPLE PERSONAL INFORMATION, COMMERCIAL INFORMATION, POLICY ADVICE, OR NATIONAL SECURITY MATERIAL]
- Potential harm: [WHAT DAMAGE COULD RESULT FROM UNAUTHORISED DISCLOSURE, AND TO WHOM]
- Audience: [WHO NEEDS ACCESS AND WHETHER ANY ARE OUTSIDE THE NEW ZEALAND GOVERNMENT]
- Any current marking: [STATE THE EXISTING CLASSIFICATION, OR SAY NONE]

Task:
1. Recommend the lowest classification that adequately protects the record, choosing from the New Zealand Government classifications, which run from UNCLASSIFIED through the policy and privacy markings (for example IN-CONFIDENCE, SENSITIVE, RESTRICTED) up to the national-security classifications (CONFIDENTIAL, SECRET, TOP SECRET).
2. Explain the harm test you applied and why the chosen level fits, not a level higher or lower.
3. Recommend any endorsement markings that should accompany the classification, and explain what each one signals about handling or releasability.
4. Summarise the resulting handling expectations at a high level, covering storage, access, transmission, and disposal, and note where the NZISM sets the detailed controls.
5. Flag any indication that the record contains national-security material, and advise that such material must be assessed by an appropriately cleared person.

Output format:
- Recommended classification and a one-line reason.
- The harm assessment.
- Recommended endorsements with a short explanation of each.
- A high-level handling summary.
- Any escalation flags and open questions.

Rules:
- Use UK English. Use the words must, should, and may precisely.
- Classify to the lowest level that gives adequate protection. Over-classification reduces usability and should be avoided.
- Do not invent classification levels or endorsement names. If you are unsure, recommend the cautious option and refer it to a security adviser.
```

## How to use it
1. Describe the actual content and the harm that disclosure could cause, because the classification follows the harm, not the topic.
2. Be clear about whether anyone outside the New Zealand Government needs access, as this affects endorsements and releasability.
3. Review the recommendation against your agency's classification guide and security adviser's expectations.
4. Apply the markings consistently across the document, its file, and any system metadata.
5. Treat any national-security flag as a stop point and refer it to an appropriately cleared person before proceeding.

## Notes and attribution
The New Zealand Government Security Classification System sits within the Protective Security Requirements (PSR), published at https://www.protectivesecurity.govt.nz/ . The detailed information-handling controls for each classification are set out in the New Zealand Information Security Manual (NZISM), Crown copyright, published by the National Cyber Security Centre within the Government Communications Security Bureau, at https://nzism.gcsb.govt.nz/ . Record content may itself be classified, so check your tool's data-handling settings and do not paste classified material into a tool that is not approved for it. AI output must be reviewed by a qualified security practitioner. This resource is general information only and is not security or legal advice.
