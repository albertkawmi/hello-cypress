# hello-cypress

Trying out the end-to-end testing tool, Cypress: https://cypress.io

It uses this simple counter app http://kawmi.co/hello-cypress

Clone the repo and install packages:

```
git clone https://github.com/albertkawmi/hello-cypress.git
cd hello-cypress
npm install
```

To open Cypress UI: `npm run cy:open`

To run the tests on command line (e.g. for CI): `npm test`

## Using `cypress-testing-library` syntax

[Cypress Testing Library](https://github.com/testing-library/cypress-testing-library) encourages [writing tests that are not coupled to implementation details](https://kentcdodds.com/blog/testing-implementation-details), like the HTML element IDs. These tests are also closer to the way a user would interact with the app.
