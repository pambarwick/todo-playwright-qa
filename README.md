# Todo App – Playwright Test Suite

![Playwright Tests](https://github.com/pambarwick/todo-playwright-qa/actions/workflows/playwright.yml/badge.svg)

## Project Structure

```
todo-playwright-qa/
├── tests/todo.spec.ts       # test cases
├── pages/TodoPage.ts        # Page Object Model
└── playwright.config.ts     # Playwright configuration
```

## Getting Started

Install dependencies:

```
npm install
npx playwright install
```

## Running Tests

```
npx playwright test
```

To run with a visible browser:

```
npx playwright test --headed
```

To view the test report after running:

```
npx playwright show-report
```

## Test Coverage

Tests run across **Chromium, Firefox, and WebKit**.

### Covered

| Area | Test Cases |
|------|-----------|
| Adding todos | Single item, multiple items, item count updates |
| Completing todos | Toggle complete, checkbox state, count updates |
| Deleting todos | Item removed, footer hidden when list is empty |
| Filtering | All, Active, and Completed filter views |
| Editing | Double-click to edit, save on Enter |
| Edge cases | Blank input rejected, whitespace-only input rejected, Escape cancels edit, very long title (200 chars) |
| UI state | "Clear completed" button appears/disappears correctly, singular vs plural item count |

### Intentionally Out of Scope

| Area | Reason |
|------|--------|
| `localStorage` persistence | Covered by the TodoMVC framework itself; testing it here would duplicate framework-level tests |
| Drag and drop reordering | Not part of the core TodoMVC spec being tested |
| Accessibility (a11y) | Worthwhile addition but out of scope for this suite — would use `@axe-core/playwright` |
| Performance | No performance requirements defined for this app |
| Mobile viewports | Desktop browsers only; mobile would be a separate test run with device emulation |
| API / network layer | This is a purely client-side app with no backend |
