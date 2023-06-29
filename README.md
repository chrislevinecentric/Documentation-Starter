# MyTech Design System Documentation

```bash
git clone https://github.com/chrislevinecentric/Documentation-Starter/
cd Documentation-Starter
npm install
npm run dev
```

## 🚀 Project Structure

Inside of your project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   │   └── config.ts
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Astro looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🔗 Useful links
* [Astro Documentation](https://docs.astro.build/en/getting-started/)
* [CMS Documentation](https://github.com/delucis/astro-netlify-cms)
* [Advanced Markdown cheatsheet](https://www.markdownguide.org/extended-syntax/)

### Credit
Based on the open source [Starlight Project](https://github.com/withastro/starlight) in conjunction with the [Astro Netlify CMS Intergration](https://github.com/delucis/astro-netlify-cms).

