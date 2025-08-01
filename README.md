# Playwright End-to-End Testing Project

This project uses [Playwright](https://playwright.dev/) for browser automation and end-to-end testing in TypeScript.

## Getting Started

- Run all tests:
  ```sh
  npx playwright test
  ```
- Run tests in UI mode:
  ```sh
  npx playwright test --ui
  ```
- Run tests for a specific browser:
  ```sh
  npx playwright test --project=chromium
  ```
- Debug tests:
  ```sh
  npx playwright test --debug
  ```

## Project Structure
- `e2e_tests/` - Example end-to-end tests
- `tests-examples/` - Demo app tests
- `playwright.config.ts` - Playwright configuration

## Documentation
See [Playwright Docs](https://playwright.dev/docs/intro) for more info.
