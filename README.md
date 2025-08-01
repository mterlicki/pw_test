# Playwright End-to-End Testing Project

This project uses [Playwright](https://playwright.dev/) for browser automation and end-to-end testing in TypeScript. It includes smoke tests for a demo bank application.

## Prerequisites

- Node.js 14 or higher
- npm or yarn

## Installation

```bash
# Install dependencies
npm install
```

## Getting Started

Run tests using one of the following commands:

```bash
# Run all tests
npm run test

# Run tests in UI mode
npm run test:ui

# Run tests for a specific browser
npx playwright test --project=chromium

# Debug tests
npx playwright test --debug
```

## Project Structure

```
├── e2e_tests/           # End-to-end test files
│   └── example.spec.ts  # Demo bank smoke tests
├── playwright.config.ts # Playwright configuration
└── README.md           # Project documentation
```

## Test Coverage

The project includes smoke tests for the demo bank application (https://demo-bank.vercel.app/):

- Landing page load verification
- Login form validation
- Password field security checks

## Documentation

For more information about Playwright and its capabilities, see:
- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)
- [API Reference](https://playwright.dev/docs/api/class-test)
