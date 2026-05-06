# Todo App – Playwright Test Suite

![Playwright Tests](https://github.com/pambarwick/todo-playwright-qa/actions/workflows/playwright.yml/badge.svg)

## Project Structure

```
todo-playwright-qa/
├── tests/todo.spec.ts       # test cases
├── pages/TodoPage.ts        # Page Object Model
├── playwright.config.ts     # Playwright configuration
└── NOTES.md                 # test notes
```


## Getting Started

Install dependencies:

```
npm install
npx playwright install chromium
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


