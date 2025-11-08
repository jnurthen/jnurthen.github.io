# Example snippets for AccName discussions

## Issue 2623 examples

### 2623-1: Button with generated ::before marker
HTML:
```html
<button id="b1">Save</button>
<style>
  #b1::before { content: "★ "; }
</style>
```
Notes:
- Question: Should the star (generated ::before) be treated as part of the button's label (name) or as separate content?
- Manual test: Inspect platform accessibility tree (AX/IAccessible/UIA) to see how generated content appears.

### 2623-2: List with ::marker vs ::before
HTML:
```html
<ul>
  <li id="li1">Item</li>
</ul>
<style>
  li::marker { content: "• "; }
  /* compare with li::before { content: "NOTE "; } */
</style>
```
Notes:
- Observe whether markers contribute to AccName and if engines represent them separately.

### 2623-3: Heading with interactive child
HTML:
```html
<h2 id="h1">Section <a href="#x">Learn more</a></h2>
```
Notes:
- Should the heading's AccName include the link text? Is it semantically a single name or a composite?

### 2623-4: Generated content exposed as sibling text nodes (WebKit behavior)
- Demonstrate a platform where generated content appears as separate text nodes; check concatenation vs separability.

---

## Issue 2569 examples

### 2569-1: aria-label overriding content
HTML:
```html
<button aria-label="Submit Form">Do not submit</button>
```
Notes:
- If aria-label overrides content, AT will announce "Submit Form"; otherwise it may announce "Do not submit".

### 2569-2: aria-label="" to silence content
HTML:
```html
<button aria-label="">Icon-only</button>
```
Notes:
- An empty aria-label may be used to remove the computed name. Is this behavior consistent and intended?

### 2569-3: aria-labelledby pointing to element with interactive children
HTML:
```html
<div id="lab1">Title <button>more</button></div>
<input aria-labelledby="lab1" />
```
Notes:
- Does aria-labelledby include interactive child text and cause semantics confusion?

---

## How to use these snippets in meeting
- Open each snippet in a browser with developer tools and platform AT running.  
- Inspect platform accessibility APIs (AX, UIA) and note whether generated content is separate or concatenated.  
- Use these as the basis for WPTs in the tests.md file.