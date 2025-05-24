# Project Structure Guide

This rule explains the folder structure of the J.R. Outdoor Solutions website project. Use this as a reference for navigating and understanding the codebase.

## Root Directory

The root contains configuration files and the main project folders:
- @package.json: Project dependencies and npm scripts.
- @astro.config.mjs: Astro framework configuration, including integrations like sitemap and astro-icon.
- @tsconfig.json: TypeScript configuration for the project.
- @postcss.config.cjs: PostCSS configuration (likely for Autoprefixer).
- `.gitignore`: Specifies intentionally untracked files that Git should ignore.
- `README.md`: Provides an overview of the project, setup instructions, and usage guidelines.
- `LICENSE`: Contains the license information for the project.
- `CHANGELOG.md`: Tracks changes and versions of the project.

## Key Directories

### @src/

This is the main directory for the project's source code. Astro processes, optimizes, and bundles files from `src/` to create the final website.

-   **`pages/`**: Contains `.astro` files that define the routes and pages of the website.
    -   `index.astro`: Homepage.
    -   `about.astro`, `contact.astro`, `reviews.astro`, `projects.astro`: Static informational pages.
    -   `admin.astro`: Entry point for the Decap CMS admin dashboard.
    -   `blog/`: Contains `index.astro` for the blog listing and `[...post].astro` for dynamic individual blog post routes.
    -   `services/`: Contains `index.astro` for services listing and `[...service].astro` for dynamic individual service pages.
    -   `service-areas/`: Contains `index.astro` for service areas listing and `[...city].astro` for dynamic individual service area pages.
    -   `projects/`: (Currently contains static project pages like `project-1.astro`. The main `projects.astro` is in the parent `pages/` dir).
-   **`components/`**: Reusable Astro components (`.astro` files) used across various pages.
    -   `Header.astro`: Site header and navigation.
    -   `Footer.astro`: Site footer.
    -   `CTA.astro`: Call to action component.
    -   `FAQ.astro`: FAQ section component.
    -   `Landing.astro`: Component for hero/landing sections.
    -   `Services.astro`: Component to display services.
    -   `DarkModeToggle.astro`: UI for toggling dark mode.
    -   `FeaturedPost.astro`: Component to highlight a featured blog post.
    -   `TemplateComponents/`:
        -   `CSPicture.astro`: Custom component for responsive images with multiple sources, leveraging Astro's image optimization.
        -   `TableOfContents.astro`: Component to generate a table of contents.
-   **`layouts/`**: Astro components that define the UI structure shared by one or more pages.
    -   `BaseLayout.astro`: The main layout wrapping most pages, includes common elements like header, footer, and scripts. Handles preloading images.
    -   `BlogPostLayout.astro`: Specific layout for individual blog posts.
    -   `BlogRecentArticles.astro`: Layout/component for displaying recent articles.
    -   `BlogRecentArticlesWithSidebar.astro`: Similar to `BlogRecentArticles.astro` but includes a sidebar.
-   **`content/`**: Stores Markdown content collections managed by Decap CMS.
    -   `blog/`: Contains `.md` files for blog posts.
    -   `services/`: Contains `.md` files for individual service descriptions.
    -   `service-areas/`: Contains `.md` files for individual service area descriptions.
    -   `config.ts`: (As noted in README, this refers to `content.config.ts` in `src/`) Defines schemas and configurations for content collections, enabling validation and TypeScript type-safety.
-   **`assets/`**: Project assets that will be processed and optimized by Astro (e.g., images referenced in Astro components).
    -   `images/`: Contains images used within the site, including a `blog/` subdirectory for CMS-uploaded images.
-   **`styles/`**: Contains global stylesheets. This project uses LESS.
    -   Likely contains `global.less` or similar for site-wide styles and CodeStitch variable overrides.
-   **`data/`**: JSON files holding site-wide data.
    -   `client.json`: General client/site information used in `<head>`, sitemap, etc.
    -   `navData.json`: Defines the structure and links for the main navigation menu.
-   **`icons/`**: SVG files intended for use with the `astro-icon` integration.
-   **`js/`**: JavaScript files for client-side interactivity.
    -   `nav.js`: Handles navigation interactivity (e.g., mobile menu, dropdowns).
    -   Likely contains scripts for components like the FAQ toggle.
-   `env.d.ts`: TypeScript type definitions for environment variables.
-   `content.config.ts`: Defines schemas and configurations for Astro Content Collections (blog, services, service-areas).

### @public/

Contains static assets that are copied directly to the build output without processing by Astro. Ideal for files like `robots.txt`, favicons, and the Decap CMS admin configuration.

-   **`admin/`**: Configuration for Decap CMS.
    -   `config.yml`: Main configuration file for Decap CMS, defining backend, media folders, and content collections (blog, services, service-areas).
-   `assets/`: Publicly served assets that don't require Astro's optimization pipeline.
    -   `favicons/`, `fonts/`, `images/`, `svgs/`.
-   `_redirects`: Netlify redirect rules file.
-   `robots.txt`: Instructions for web crawlers.

### @scripts/

Contains utility scripts.
-   `example_prd.txt`: An example Product Requirements Document.

### @tasks/

Contains task definitions if Taskmaster (or a similar task management tool) is used for project development tracking. Files like `tasks.json` might be present.

### @.astro/

Cache and build-related files generated by Astro. Typically not manually edited.

### @.roo/

Directory for Roo Code AI specific configurations and rules, if used.

## Other Notable Files

-   `.taskmasterconfig`: Configuration file for the Taskmaster tool, if present and used.

Refer to this guide for a high-level overview of the project structure and the purpose of each key directory and file. The `README.md` in the project root provides more detailed explanations on setup, features, and extending the project. 