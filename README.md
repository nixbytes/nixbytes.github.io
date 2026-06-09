# NixBytes

Portfolio Web and Blog Site. 

Security Engineer By Day and Open-Source Hacker by Night.

## Description

NixBytes is a personal blog and portfolio built using the [Hugo](https://gohugo.io/) static site generator. It showcases projects, technical deep dives, and tutorials related to security engineering, Linux, and various programming technologies.

## Project Structure

- `archetypes/`: Hugo templates for new content.
- `content/`: The core content of the site, including blog posts and documentation.
    - `posts/`: Blog articles organized by date or category.
- `docs/`: Structured technical documentation and tutorials, categorized by topics like AWS, Docker, Linux, etc.
- `resources/`: Generated assets and images used within the site.
- `themes/`: Hugo themes applied to the site (currently using `hermit-v2`).
- `config.toml`: Main configuration file for Hugo, defining site metadata, parameters, and menus.
- `deploy.sh`: Script for deploying the site.

## Technology Stack

- **Static Site Generator**: [Hugo](https://gohugo.io/)
- **Theme**: [Hermit V2](https://github.com/1bl4z3r/hermit-V2)
- **Deployment**: (Configure based on your deployment method, e.g., GitHub Pages, Netlify)

## Getting Started

### Prerequisites

Ensure you have [Hugo](https://gohugo.io/installation/) installed on your system.

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/nixbytes/nixbytes.github.io.git
   cd nixbytes.github.io
   ```

2. Initialize submodules (if any):
   ```bash
   git submodule update --init --recursive
   ```

3. Start the Hugo development server:
   ```bash
   hugo server -D
   ```

4. Open your browser and navigate to `http://localhost:1313`.

## Deployment

To deploy the site, you can use the provided `deploy.sh` script or set up a CI/CD pipeline (e.g., GitHub Actions) to build and host the static files on services like GitHub Pages.
