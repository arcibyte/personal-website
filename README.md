<div align="center">

# My Personal Portfolio

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/tiny.svg)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

<img width="1333" height="458" alt="image" src="https://github.com/user-attachments/assets/ccff8bf5-01ec-450c-a70c-2e84a74e9f63" />

*This website was created to host my personal projects and/or open source contributions. Feel free to use and modify it as you see fit.*

</div>

## Installation

```bash
# Clone repository
git clone https://github.com/arcibyte/arcibyte_website.git

# Install dependencies
npm install

# Start development server
npm run dev

# Open on http://localhost:4321

# Build for production
npm run build
```

## Structure

```
├── public/
│   ├── fonts/
│   └── img/
├── src/
│   ├── components/
│   │   ├── Footer.astro
│   │   ├── Home.astro
│   │   ├── Navbar.astro
│   │   └── Projects.astro
│   ├── content/
│   │   ├── blog/
│   │   │   ├── en/
│   │   │   └── es/
│   │   └── config.ts
│   ├── data/
│   │   └── projects.ts
│   ├── helpers/
│   │   └── blog.ts
│   ├── i18n/
│   │   ├── logicNav.ts
│   │   ├── translate.ts
│   │   ├── ui.ts
│   │   └── utils.ts
│   ├── layouts/
│   │   ├── Layout.astro
│   │   └── PostLayout.astro
│   └── pages/
│       ├── [lang]/
│       │   ├── posts/
│       │   │   └── [slug].astro
│       │   ├── blog.astro
│       │   └── index.astro
│       └── index.astro
├── astro.config.mjs
├── tailwind.config.js
└── package.json        
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

⭐ If you liked this project, give it a star!
