# Test outlines and WPT skeletons

This document lists test cases to convert into WPTs or minimal reference tests.

## Tests for 2623 (split name/label from contents)

Test: 2623-1: ::before contribution to computed name
- Purpose: Determine whether ::before content contributes to the AccName and whether it is exposed as separate nodes or concatenated.
- Markup: use snippet 2623-1
- Expected outcomes (current spec baseline):
  - Engines may concatenate generated content; some expose as separate nodes.
- Acceptance criteria:
  - WPT asserts presence in computed name string and, where applicable, presence of structured representation.
- Notes:
  - Add allowed-variants if behavior is platform-dependent; goal is to document existing behavior and motivate spec/implementation alignment.

Test: 2623-2: Heading with interactive child
- Purpose: Understand whether heading AccName includes interactive child's text.
- Markup: snippet 2623-3
- Expected outcomes:
  - Define expected AccName under each proposed option (A/B/C).

## Tests for 2569 (label precedence)

Test: 2569-1: aria-label overrides content
- Purpose: Verify precedence of aria-label vs content text.
- Markup: snippet 2569-1
- Expected:
  - If aria-label wins: computed name == "Submit Form"
- Acceptance criteria:
  - WPT asserts computed name; if multiple acceptable outcomes exist during phase 1, mark as document-variance.

Test: 2569-2: aria-label empty string silences name
- Purpose: Verify effect of aria-label="".
- Markup: snippet 2569-2
- Expected:
  - If spec defines aria-label="" as empty computed name, test asserts empty name.

## WPT skeleton example
- Filename: accessibility/accname/2623-1.html
- Description block with purpose and references to issues (#2623)
- HTML snippet embedded
- Script to call computeAccessibleName (or platform-specific helper) and assert expected string(s)
- Tags: spec link, issue reference

## Priorities & recommended first tests
1. 2623-1 (::before & ::marker) — document generated content behaviors.
2. 2569-1 (aria-label override) — clarify precedence.
3. 2623-3 (headings with interactive children) — usability impact.