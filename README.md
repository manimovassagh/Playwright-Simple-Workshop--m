### Prerequisites

- Node.js >= 18
- npm
### Contact

For questions, reach out via GitHub Issues or email: example@example.com
### Future Improvements

- Add more test scenarios
- Integrate CI/CD workflows
### Acknowledgements

Thanks to the Playwright team and contributors for their amazing work!
### License

MIT
### Contributing

Feel free to open issues or submit pull requests to improve this workshop!
### How to Run Tests

Run all tests with:

```
npx playwright test
```
### Project Goals

- Demonstrate Playwright basics
- Show best practices for testing
- Provide hands-on examples
### Useful Links

- [Playwright Docs](https://playwright.dev/docs/intro)
- [Playwright GitHub](https://github.com/microsoft/playwright)
### Troubleshooting

If you encounter issues, try running:

```
npx playwright doctor
```
> "Quality is not an act, it is a habit." – Aristotle
### Environment Example

Create a `.env` file with your secrets:

```
API_KEY=your_api_key_here
```
## Playwright Simple Workshop

This project demonstrates Playwright testing with practical examples and best practices.
# 🎭 Playwright Demo Suite

This project contains **sample Playwright tests** in **TypeScript**, showcasing the **core functionality** of the framework.  
The goal is to demonstrate Playwright to **beginners** with simple, focused examples.

---

## 🚀 Setup

1. Initialize a new Node project:

```bash
npm init -y
```

2. Install Playwright test runner:

```bash
npm i -D @playwright/test
```

3. Install browsers (Chromium, Firefox, WebKit):

```bash
npx playwright install
```

---

## ▶️ Running the tests

Run all tests:

```bash
npx playwright test
```

Run a single test:

```bash
npx playwright test tests/01_basic_navigation.spec.ts
```

Run with UI mode (interactive):

```bash
npx playwright test --ui
```

Generate and open HTML report:

```bash
npx playwright show-report
```

---

## 📂 Test files overview

| File | What it shows |
|------|---------------|
| **01_basic_navigation.spec.ts** | Navigation, title/text assertions, click, screenshot |
| **02_locators_and_autowait.spec.ts** | Smart locators (`getByRole`, `getByLabel`, etc.), auto-waiting |
| **03_user_interactions.spec.ts** | Click, type, hover, keyboard, drag & drop |
| **04_assertions_states.spec.ts** | Visibility, enabled/disabled, checked, attributes |
| **05_network_mocking.spec.ts** | Intercepting and mocking API responses |
| **06_file_upload_download.spec.ts** | Uploading files, capturing downloads |
| **07_dialogs_and_frames.spec.ts** | Handling dialogs (alert/confirm) and iframes |
| **08_accessibility_aria.spec.ts** | Role/ARIA locators for accessibility testing |
| **09_api_testing.spec.ts** | API testing using the built-in `request` fixture |
| **10_mobile_emulation.spec.ts** | Mobile viewport & device emulation |
| **11_tracing_and_attachments.spec.ts** | Traces, screenshots, and report attachments |
| **12_storage_state_login_pattern.spec.ts** | Re-using storage state for login flows |

---

## 🌟 Tips for Beginners

- **No sleeps needed** → Playwright auto-waits until elements are ready.  
- **Smart locators** → Use roles (`getByRole`), labels, placeholders for stable selectors.  
- **Cross-browser** → Chromium, Firefox, and WebKit run out-of-the-box.  
- **Rich debugging** → Screenshots, videos, and trace viewer are built-in.  
- **Not just UI** → You can test APIs directly with the `request` fixture.  

---

## 📊 Reports & Traces

- After a run, open the HTML report:

```bash
npx playwright show-report
```

- If a test fails, Playwright automatically captures:
  - Screenshots
  - Videos
  - Traces (step-by-step replay in the browser)

---

## 📚 Learn more

- [Playwright Docs](https://playwright.dev/docs/intro)  
- [Getting Started Guide](https://playwright.dev/docs/intro#first-test)  
- [Playwright Test Runner](https://playwright.dev/docs/test-intro)  

---

🎉 You’re ready to explore Playwright’s features step by step!
