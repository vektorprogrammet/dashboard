# Vektor Dashboard

## Tools

| Use case | Official docs | Our reasoning |
| --- | --- | --- |
| Programming language: | [TypeScript](https://www.typescriptlang.org/) | [the language of the web](#typescript-language-of-the-web) |
| Component framework: | [React](https://react.dev/) | [helps us re-use code](#react-helps-us-re-use-code) |
| Build tool: | [Vite](https://vite.dev/) | [makes build configuration a problem of the past](#vite-makes-build-configuration-a-problem-of-the-past) |
| Router/Meta-framework: | [React Router v7](https://reactrouter.com/dev/guides) | [expands our app over multiple pages](#react-router-expands-our-app-over-multiple-pages) |
| Style system: | [Tailwind](https://tailwindcss.com/) | [simplifies styling and makes everything pretty](#tailwind-simplifies-styling-and-makes-everything-pretty) |
| Icon library: | [Iconify](https://iconify.design/) | [does for icons what Tailwind did for CSS](#iconify-centralises-icons-and-eliminates-the-need-for-any-more-icon-dependencies) |
| Linter, Formatter: | [Biome](https://biomejs.dev/) | [eliminates bugs pre-emptively and keeps code consistent](#biome-eliminates-bugs-preemptively-and-keeps-code-consistent) |
| Component collection: | [Shadcn/ui](https://ui.shadcn.com/) | [starts us off on the right foot](#shadcnui-starts-us-off-on-the-right-foot) |
| Headless components: | [Radix UI](https://www.radix-ui.com/) | [provides functional and accessible primitives](#radix-primitives-provides-functional-and-accessible-primitives) |
| e2e test runner | [Playwright](https://playwright.dev/) | [makes sure everything works as intended](#playwright-makes-sure-everything-works-as-intended)
| Package manager: | [pnpm](https://pnpm.io/) | [reduces the black hole that is node_modules](#pnpm-reduces-the-black-hole-that-is-node_modules) |
| All-in-one component library: | [Mantine](https://mantine.dev/) | [fills in the remaining holes](#mantine-fills-in-the-remaining-holes) |

## Workflow

### Programs needed to run project

- [node](https://nodejs.org/en)
- [pnpm](https://pnpm.io/)

### Installation

Install the required external dependencies:

```sh
pnpm install
```

### Run locally

Run the dev server:

```sh
pnpm run dev
```

### Linting and formatting

Check for linting errors and apply safe fixes:

```sh
pnpm lint
```

Check for formatting errors and apply safe fixes:

```sh
pnpm format
```

Do both in one check:

```sh
pnpm check
```

### Testing

Install required browsers for running e2e tests:

```sh
pnpm e2e:install
```

Run all tests:

```sh
pnpm e2e:test
```

Use the `ui` flag to watch the tests:

```sh
pnpm exec playwright test --ui
```

Run tests for individual browsers:

| Google Chrome | Firefox | Safari |
| --- | --- | --- |
|`pnpm e2e:test:chromium`|`pnpm e2e:test:firefox`|`pnpm e2e:test:webkit`|

Generate tests interactively:

```sh
pnpm e2e:test:generate
```

Read more in the [docs](https://playwright.dev/docs/codegen).

### Deployment

First, build your app for production:

```sh
pnpm run build
```

Then run the app in production mode:

```sh
pnpm start
```

Now you'll need to pick a host to deploy it to.

## Improve your workflow

### VSCode Profiles

Separate your settings and extensions based on the projects
you're working on or your different responsibilities with [VSCode Profiles](https://code.visualstudio.com/docs/editor/profiles)

### VSCode Extensions

Make TypeScript errors readable with [`YoavBls.pretty-ts-errors`](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors)

#### Intellisense (Autocomplete)

- Module imports: [`christian-kohler.npm-intellisense`](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense)
- Tailwind classes: [`bradlc.vscode-tailwindcss`](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- Iconify icons: [`antfu.iconify`](https://marketplace.visualstudio.com/items?itemName=antfu.iconify)

Read more about [Intellisense](https://code.visualstudio.com/docs/editor/intellisense)

#### Run unit tests in VSCode

[`vitest.explorer`](https://marketplace.visualstudio.com/items?itemName=vitest.explorer)

#### Run and record e2e tests in VSCode

[`ms-playwright.playwright`](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)

#### Format files automatically

Install the official Biome extension [`biomejs.biome`](https://marketplace.visualstudio.com/items?itemName=biomejs.biome)

Configure the VSCode workspace settings:

```jsonc
// .vscode/settings.json
{
  // Set default formatter to Biome
  "editor.defaultFormatter": "biomejs.biome",
  // Format on save
  "editor.formatOnSave": true,
  // On save:
  "editor.codeActionsOnSave": {
    // add missing imports
    "source.addMissingImports.ts": "always",
    // organise imports
    "source.organizeImports": "always"
  },
}
```

### Write HTML blazingly fast with Emmet

Emmet provides snippets and abbreviations to write HTML tags quickly.
Emmet is included by default with VSCode, so you don't need an extension!

Read about Emmet in VSCode [here](https://code.visualstudio.com/docs/editor/emmet)

### Improve your Git experience with Source Control

Source Control in VSCode provides a visual UI for interacting with Git.
Personally, this vastly improves the experience learning Git.
Once you've learned Git commands through Source Control,
then you can decide whether to memorise the commands for the terminal.

Read more about Source Control [here](https://code.visualstudio.com/docs/sourcecontrol/overview)

## Philosophy

We are a voluntary IT-group for Vektorprogrammet at NTNU.
Our team consists of people who study a variation of fields,
with widely different experiences with web development.

Vektor IT's main goal will therefore always be learning
web development in a fun way,
secondary to the maintenance of the website.

When choosing what technologies to work with we evaluate:

- What problem does this tool solve?
- Does this problem have a de facto standard solution?
  - If so, why are/aren't we choosing the standard?
- Is this tool included in the web development curriculum at NTNU?

## Decisions

### TypeScript, language of the web

TypeScript reduces runtime errors to red squiggles in your editor.\
TypeScript helps your text editor or IDE autocomplete your code with intellisense.

TypeScript was chosen as our programming language for both backend and frontend problems.\
JavaScript is the most used language on the web,
and TypeScript (for application developers) is effectively JavaScript but better (with types).

It is also the language used in NTNU's curriculum.

### React helps us re-use code

React was chosen as our component framework as it is the de facto
standard while also being included in NTNU's curriculum.

### Vite makes build configuration a problem of the past

During the 2020s Vite became the de facto standard build tool
for building applications with React.\
It solves the problem of building applications with React.\
It is included in NTNU's curriculum.\
Therefore, there is no reason to choose any other build tools.

### React Router expands our app over multiple pages

React Router was chosen as our router solution as it is widely used
and
it is included in NTNU's curriculum.

### Tailwind simplifies styling and makes everything pretty

Tailwind was chosen as our style system as it is currently
the de facto standard for styling modern web applications.
It is incredibly efficient, only bundling the classes used within the application.

It is included in NTNU's curriculum.

### Biome eliminates bugs preemptively and keeps code consistent

Biome was chosen over Prettier and ESlint because configuring ESlint
takes an ungodly amount of time.\
ESlint might have extensible configuration,
but Biome ships with great defaults and incredible performance.\
Using 1 tool for 2 problems also reduces the amount of packages we depend on, which reduces the surface area for attack and accidental bugs.

### Iconify centralises icons and eliminates the need for any more icon dependencies

Iconify provides a single component for displaying icons,
over 200,000 icons to use while shipping none of them in our app bundle.\
Icons are fetched on the client from Iconify's api when needed and
cached in local storage to reduce unnecessary network requests.

Iconify does for icons what Tailwind did for CSS.

### shadcn/ui starts us off on the right foot

shadcn/ui is not a dependency,
but a collection of copy-pastable components,
providing a great starting point for building UIs.\
shadcn/ui uses tools we already have decide to use so it fits nicely
within our "stack".

### Radix Primitives provides functional and accessible primitives

Radix Primitives is a collection of headless (unstyled) components
so commonly used within web apps they have standards for accessibility.\
Radix Primitives adhere to the
[WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/) accessibility practices.\
Radix Primitives is used in the component collection shadcn/ui provides.\
In house UI components should use Radix Primitives when possible.

### Playwright makes sure everything works as intended

Playwright does e2e testing by running all tests in the different major browsers.
This is our most important way of testing as functionality is tested in the
same environment users interact with the application in.

### pnpm reduces the black hole that is node_modules

pnpm install and manages packages globally while reducing unnecessary
merge conflicts and providing a readable lock file when they eventually do happen.
pnpm is essentially npm but better at the cost of one character

### Mantine fills in the remaining holes

Mantine provides pre-built components, hooks, form functionality,
date pickers and charts.
The hooks are the most compelling,
providing general utilities for building components.

Mantine does make it so you learn Mantine instead of React which is
a major disadvantage for why we might step away from it in the future.\
But as of now,
it provides good general use defaults until a more specialised tool is needed.
