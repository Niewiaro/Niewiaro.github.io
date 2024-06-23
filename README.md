# Vite GitHub Pages Deployment

This repository demonstrates how to deploy a Vite project to GitHub Pages using the `gh-pages` branch. Follow the instructions below to set up and deploy your Vite project.

## Table of Contents
1. [Configuration](#configuration)
2. [Deployment Instructions](#deployment-instructions)
3. [Badges](#badges)

## Configuration

1. Open your `vite.config.js` file.
2. In the `export default defineConfig` section, add the `base` property.

```javascript
// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/your_repo_name/', // Replace 'your_repo_name' with your repository name
  // Leave it empty if it is your profile website
  // base: '',
  // Other configurations...
})
```

## Deployment Instructions

1. In your project root directory, run the following command to build the project:

```bash
npm run build
```

2. Add the `dist` folder to git:

```bash
git add dist -f
```

3. Commit the changes:

```bash
git commit -m "adding dist"
```

4. Push the `dist` folder to the `gh-pages` branch using git subtree:

```bash
git subtree push --prefix dist origin gh-pages
```

## Badges

![Vue.js](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![HTML](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)

Follow these instructions to successfully deploy your Vite project to GitHub Pages. If you encounter any issues, please refer to the [Vite documentation](https://vitejs.dev/guide/static-deploy.html) for additional guidance.
