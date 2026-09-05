# Mahfuza Maisha, Portfolio

A personal portfolio website for Mahfuza Maisha, AI/ML researcher, CS educator, and Python developer. The site documents education, professional experience, research publications, teaching record, projects, certifications, and technical skills across a set of static, linked pages.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![No build step](https://img.shields.io/badge/build-none-lightgrey?style=flat-square)

## Overview

The site is built with plain HTML, CSS, and vanilla JavaScript. There is no framework, bundler, or build step involved; every page is a standalone HTML file that shares a single stylesheet and a single script file. This keeps the project easy to host, easy to edit, and easy to review file by file.

## Features

- **Multi-page structure.** Separate pages for Home, Education & Academic Service, Experience, Research, Teaching, Projects, Certifications, Skills, Interests, Passions, and Contact, linked through a persistent sidebar.
- **Light and dark mode.** A theme toggle switches between a warm ivory light theme and a near-black dark theme, both built around the same dusty rose accent for visual consistency. The preference is saved in `localStorage` and persists across visits.
- **Responsive layout.** The sidebar collapses into a slide-out menu on smaller screens, and the hero photo repositions above the introduction text on phones and tablets instead of wrapping below it.
- **Scroll-triggered animation.** Cards, timeline entries, and skill bars fade and rise into view as the page is scrolled, implemented with the Intersection Observer API. Motion is disabled automatically for visitors with `prefers-reduced-motion` set.
- **Interactive skill bars.** Skill proficiency bars animate from zero to their target width the first time they enter the viewport.
- **Contact form.** The contact form composes a pre-filled email through a `mailto:` link, requiring no backend or third-party form service.
- **Accessible by default.** Semantic HTML, visible focus states, and reduced-motion support are built into the base styles.

## Pages

| Page | File | Description |
|---|---|---|
| Home | `index.html` | Introduction, summary statistics, and quick links to every section |
| Education & Academic Service | `education.html` | Academic history, coursework, and academic service work |
| Experience | `experience.html` | Professional roles, achievements, and responsibilities |
| Research | `research.html` | Published and under-review papers |
| Teaching | `teaching.html` | Teaching assistant appointments and research mentoring |
| Projects | `projects.html` | Selected technical projects |
| Certifications | `certifications.html` | Conference presentations, training, workshops, and competitions |
| Skills | `skills.html` | Technical and academic skill proficiencies |
| Interests | `interests.html` | Professional interests |
| Passions | `passions.html` | What the work is built around |
| Contact | `contact.html` | Contact details and open-to-work summary |

## Project Structure

```
.
├── index.html
├── education.html
├── experience.html
├── research.html
├── teaching.html
├── projects.html
├── certifications.html
├── skills.html
├── interests.html
├── passions.html
├── contact.html
├── style.css
├── script.js
└── assets/
    ├── profile-photo.jpg
    └── certs/
        └── (certificate images referenced from certifications.html)
```

## Tech Stack

- **HTML5** for markup and page structure
- **CSS3**, using custom properties (CSS variables) for the entire color system, so both themes are generated from a single set of tokens
- **Vanilla JavaScript** for the sidebar toggle, theme switching, the contact form's `mailto` behavior, and the Intersection Observer based scroll animations
- **Google Fonts**: Fraunces (serif headings), Inter (body text), and IBM Plex Mono (dates, labels, and monospace accents)

No package manager, bundler, or external JavaScript framework is used.

## Getting Started

Because this is a static site with no build step, it can be run locally with any static file server.

Clone the repository:

```bash
git clone https://github.com/<your-username>/<repository-name>.git
cd <repository-name>
```

Then serve it locally. Any of the following will work:

```bash
# Python
python3 -m http.server 8000

# Node (via npx)
npx serve .
```

Open `http://localhost:8000` in a browser and navigate from `index.html`.

Alternatively, `index.html` can be opened directly in a browser, though some browsers restrict certain features (such as local font loading or relative paths) when files are opened without a server.

## Customization

- **Colors.** All colors are defined as CSS custom properties at the top of `style.css`, inside `:root` (dark theme, the default) and `body.light` (light theme override). Changing a value there updates it across every page.
- **Content.** Each page is self-contained HTML, so text, dates, and links can be edited directly in the relevant file.
- **Certificates and images.** Certificate images live in `assets/certs/`; add a new image there and reference it from `certifications.html` following the existing markup pattern.
- **Navigation.** The sidebar markup is repeated at the top of every page. When adding or renaming a page, update the sidebar `<nav>` block consistently across all files.

## Deployment

This project is well suited to GitHub Pages, since it requires no build step.

1. Push the repository to GitHub.
2. In the repository settings, open the **Pages** section.
3. Under **Source**, select the branch to deploy (typically `main`) and the root folder.
4. Save. GitHub will publish the site at `https://<your-username>.github.io/<repository-name>/`.

The site can also be hosted on any static hosting provider, such as Netlify, Vercel, or Cloudflare Pages, by pointing the provider at the repository root.

## Browser Support

The site relies on CSS custom properties, CSS Grid and Flexbox, and the Intersection Observer API, all of which are supported in current versions of Chrome, Firefox, Safari, and Edge.

## License

All written content, images, and certificates in this repository represent the personal and academic work of Mahfuza Maisha and are not licensed for reuse. The code structure (HTML, CSS, and JavaScript) may be referenced for learning purposes; please do not republish the content as your own.

## Contact

Mahfuza Maisha

Email: maisha.mahfuza13@gmail.com

GitHub: [github.com/C221213-Maisha](https://github.com/C221213-Maisha)

LinkedIn: [linkedin.com/in/mahfuza-maisha](https://linkedin.com/in/mahfuza-maisha)
