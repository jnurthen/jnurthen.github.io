# AccName: F2F Session Slides

## Slide 1 — Title
AccName: label vs contents
F2F Session — 1 hour
Chair: jnurthen

Objectives
- Clarify whether AccName should split "label/name" from descendant content (#2623)
- Revisit whether labels should override content and define precedence (#2569)
- Produce decisions or concrete next steps (owners, tests, timelines)

---

## Slide 2 — Agenda (60m)
0:00–0:05 Welcome & objectives  
0:05–0:30 Issue #2623: split name/label from contents (25m)  
0:30–0:32 Transition (2m)  
0:32–0:57 Issue #2569: label overrides content (25m)  
0:57–1:00 Wrap-up: decisions, owners, next steps (3m)

---

## Slide 3 — Issue #2623 (overview)
Title: Should AccName split name/label from contents (descendent text node contents)?
Problem statement:
- Current AccName concatenates descendant text and generated content.
- Some UAs/engines expose generated content as separate nodes.
- AT use cases differ (some want bullets/read markers announced; others do not).
Key decision goal for meeting:
- Agree whether spec should *conceptually and/or mechanically* split name/label from contents and how to expose separability to AT.

Options (present and discuss):
A) Keep single computed AccName; add guidance/clarity.  
B) Introduce explicit dual value (name/label vs contents) in spec and require separability in platform APIs.  
C) Hybrid: keep computed name for compatibility but require engines to expose structured parts or flags.

See concrete examples & snippets: ./snippets.md#issue-2623-examples
See test outlines: ./tests.md#tests-for-2623

---

## Slide 4 — Issue #2623: meeting questions
1. Do we want a conceptual split in the spec?  
2. Which contributions (generated content, interactive descendants, markers) belong to label vs content?  
3. Are platform APIs able to support separability for AT?  
4. What WPTs and acceptance criteria are needed?

Proposed straw poll process:
- Quick show-of-hands/chat poll for A/B/C
- If split/hybrid favored: ask for implementer volunteers to prototype

---

## Slide 5 — Issue #2569 (overview)
Title: "the age old question about whether a label should override content"
Problem statement:
- Precedence rules for aria-label, aria-labelledby, and node contents can change meaning.
- Need clear authoritative precedence and author guidance.

Key decision goal for meeting:
- Agree explicit precedence rules (or clarify current algorithm) and produce examples/author guidance.

Options:
A) Keep current algorithm, clarify with examples.  
B) Make aria-label always override contents (with defined exceptions).  
C) Write a clear precedence table with examples and exceptions.

See examples: ./snippets.md#issue-2569-examples
See test outlines: ./tests.md#tests-for-2569

---

## Slide 6 — Issue #2569: meeting questions
1. Should aria-label (and equivalents) always win? If not, when should content win?  
2. How to treat aria-labelledby, aria-label="", generated content, and interactive children?  
3. What author guidance prevents harmful overrides?

Straw poll:
- Choose A/B/C and capture blockers; if no consensus, identify required artifacts and timeline.

---

## Slide 7 — Decision capture & next steps
During or immediately after each discussion, record:
- Decision (or not), rationale, level of agreement.  
- Concrete next steps: spec editor, WPT author, implementer contact(s).  
- Timeline (recommended: prototype/PR or WPTs within 6 weeks).  
- Follow-up: schedule virtual meeting if implementer prototypes needed.

---

## Slide 8 — Links (live during meeting)
Examples & snippets: ./snippets.md  
Test outlines & WPT skeletons: ./tests.md

---

## Slide 9 — Preparation for attendees (pre-read)
- Review small example snippets (linked).  
- Implementers/AT: bring notes on current behavior and effort/risks to change.  
- Spec editors: draft minimal text edits or examples to propose.