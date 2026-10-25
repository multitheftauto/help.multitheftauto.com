# Multi Theft Auto: Help

The Multi Theft Auto help site is built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build). Help articles are written as MDX files and live in `src/content/docs/`.

**Multi Theft Auto** *(MTA)* is a multiplayer modification for the Microsoft Windows version of Grand Theft Auto: San Andreas that adds online multiplayer functionality. Find out more at [Wikipedia](https://en.wikipedia.org/wiki/Multi_Theft_Auto).

## Requirements

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org) 22 LTS or later (npm is included with Node.js)

## Set up the project

Clone the repository and change into its directory:

```sh
git clone https://github.com/multitheftauto/help.multitheftauto.com.git
cd help.multitheftauto.com
```

Install the exact dependency versions recorded in `package-lock.json`:

```sh
npm ci
```

Astro is a project dependency, so you do not need to install it globally.

## Run the site locally

Start the development server:

```sh
npm run dev
```

Open the URL printed in the terminal (normally <http://localhost:4321>). The server refreshes the page as you edit files.
Press `Ctrl+C` in the terminal to stop it.

To preview the generated production site instead, build it and then start the preview server:

```sh
npm run build
npm run preview
```

## Edit help articles

Articles are under `src/content/docs/`. Their folders determine their URLs and their position in the automatically generated sidebar. For example:

- `src/content/docs/general/frequently-asked-questions.mdx` is at `/general/frequently-asked-questions/`.
- `src/content/docs/sa/trouble/cheatengine.mdx` is at `/sa/trouble/cheatengine/`.

Open the local site at the corresponding URL to preview your article. A typical article starts with YAML frontmatter containing at least a title:

```mdx
---
title: Example article
description: A short summary of this article.
---

Write the article using Markdown. You can also use JSX-style MDX components.
```

Some pages import shared Astro components from `@src/components/`. For example:

```mdx
import IconLinkCard from '@src/components/IconLinkCard.astro';

<IconLinkCard
  icon="external"
  title="Example link"
  description="More information."
  href="https://example.com"
/>
```

Use the existing articles as examples for frontmatter, Markdown, and components.
Add new articles inside the appropriate folder under `src/content/docs/`; the Starlight sidebar is configured in `astro.config.mjs`.

## Project commands

| Command | Description |
| --- | --- |
| `npm ci` | Install dependencies from the lockfile |
| `npm run dev` | Start the local development server |
| `npm run build` | Build the production site into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run astro -- --help` | Show Astro CLI help |

In VS Code, the recommended Astro extension can provide syntax highlighting and editor support for `.astro` and `.mdx` files.

## License

Copyright (c) 2026 Multi Theft Auto team and contributors.

Permission is granted to copy, distribute and/or modify this document under the terms of the [GNU Free Documentation License, Version 1.3](https://www.gnu.org/licenses/fdl-1.3.html) or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts. A copy of the [license](LICENSE.md) is included in the root directory of the repository.
