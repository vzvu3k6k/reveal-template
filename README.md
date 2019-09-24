This is a template for [reveal.js](https://revealjs.com/) presentation.

- Template engine: [pug](https://pugjs.org/api/getting-started.html)
- Bundler: [Webpack](https://webpack.js.org/)
- CI/CD: [GitHub Actions](https://github.com/features/actions)

# Getting Started

1. Create a new repository from this template
  - https://help.github.com/en/articles/creating-a-repository-from-a-template
2. Clone the repository
3. Run `npm install` and `npm start`
4. Open `src/slides.pug` and start writing slides.

# Build Manually

`npm build` outputs your presentation files to `./dist`.

# Setup CI/CD

This template has a workflow of GitHub Actions to publish a presentation to GitHub Pages.

1. Add a writable deploy key
2. Add a `DEPLOY_KEY` secret
3. Set `gh-pages` branch as a GitHub Pages source
