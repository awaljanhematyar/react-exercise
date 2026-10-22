# React Practice Collection

A learning repository by Awal Jan Hematyar. Each exercise is an independent app focused on a React concept. These practice projects complement the complete case studies on my [GitHub profile](https://github.com/awaljanhematyar) and [portfolio](https://hematyar-professional-portfolio.vercel.app/).

## Exercise index

| Folder | Focus |
| --- | --- |
| [01basicreact](01basicreact/) | Initial React setup and component practice |
| [01basicreact/01basicvite](01basicreact/01basicvite/) | Vite-based React starter |
| [02counter](02counter/) | Counter and state updates |
| [03tailwendprops](03tailwendprops/) | Props and Tailwind practice |
| [04bgchanger](04bgchanger/) | State-driven background changes |
| [05passwordgenerotor](05passwordgenerotor/) | Password generator exercise |
| [06currencyconverter/6currencyconverter](06currencyconverter/6currencyconverter/) | Currency converter exercise |
| [08minicontext](08minicontext/) | Context practice |
| [09themeswitcher](09themeswitcher/) | Theme switching |
| [10contextwithlocal](10contextwithlocal/) | Context and browser persistence |
| [react-router-project](react-router-project/) | Routing practice |
| [customReact](customReact/) | React rendering concept exploration |

Folder names are preserved so existing paths continue to work.

## Run an exercise

This repository is not one application. Its root package.json has no dev or build script. Install and run commands from the selected exercise directory.

Example using the counter:

```sh
git clone https://github.com/awaljanhematyar/react-exercise.git
cd react-exercise/02counter
npm ci
npm run dev
```

Open the address printed by Vite. With this exercise selected, `npm run build`, `npm run preview` and `npm run lint` are available in its package.json.

Use a Node.js version compatible with the selected project. Check its package.json and local README because scripts and tooling differ between exercises. Legacy Create React App and standalone experiments do not share the Vite command set.

## Reading guide

1. Pick one exercise and read its package.json.
2. Start with the app entry point and main component.
3. Follow the state, props or context into the rendered UI.
4. Make one change and verify its behavior locally.

These are learning exercises. No production-readiness, security, accessibility certification or new runtime test results are claimed by this index.

## Author

[Awal Jan Hematyar](https://github.com/awaljanhematyar), Front-End Developer | React Developer.

[Explore complete portfolio projects](https://hematyar-professional-portfolio.vercel.app/)
