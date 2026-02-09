---
title: Contributing Guide
description: Learn how to contribute to Coding Is Meditation using MkDocs and GitHub Pages. This guide covers local setup, virtual environments, MkDocs serve, gh-deploy, submodules, navigation updates, and commit conventions.
keywords:
  - contributing guide
  - mkdocs contributing
  - github pages mkdocs
  - documentation contribution guide
  - open source documentation
  - mkdocs gh-deploy
  - git submodules documentation
  - python mkdocs setup
  - technical documentation workflow
---

# Contributing Guide

Thanks for your interest in contributing! This project uses **MkDocs** for documentation and **GitHub Pages** for deployment. Please follow the steps below to ensure a smooth development and deployment process.

---

## Prerequisites

Make sure you have the following installed:

- Python **3.9+**
- `pip`
- `git`
- `mkdocs` (installed via requirements)

---

## Local Development Setup

Clone the repository and move into it:

```bash
git clone <repo-url>
cd <repo-name>
```

Create and activate a virtual environment:

```bash
python3 -m venv .venv
source .venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

---

## Running Locally

Start the MkDocs development server:

```bash
mkdocs serve
```

* Open: [http://127.0.0.1:8000](http://127.0.0.1:8000)
* Live reload is enabled
* Verify navigation, links, and formatting

---

## Development Completion Checklist

After making changes:

1. Freeze dependencies (only if dependencies changed):

```bash
pip freeze > requirements.txt
```

2. Build the site locally:

```bash
mkdocs build
```

3. Commit and push changes:

```bash
git add .
git commit -m "docs: meaningful commit message"
git push
```

---

## Deployment (GitHub Pages)

Deploy documentation using:

```bash
mkdocs gh-deploy --force
```

Then commit and sync again if needed:

```bash
git add .
git commit -m "deploy: update GitHub Pages"
git push
```

> `--force` is intentional to keep the `gh-pages` branch clean and consistent.

---

## Working With Submodules

Some documentation sections are maintained as **Git submodules**.

### Reset / Debug a Broken Submodule 

`eg:kintsugi-stack-networking`

```bash
git submodule deinit -f docs/kintsugi-stack-networking
rm -rf .git/modules/docs/kintsugi-stack-networking
rm -rf docs/kintsugi-stack-networking
```

### Add a New Submodule 

`eg:kintsugi-stack-networking`

```bash
git submodule add https://github.com/kintsugi-programmer/kintsugi-stack-networking docs/interview/networking
```

Update `.gitmodules` automatically (Git does this).

---

## MkDocs Navigation Update

After adding a submodule, update `mkdocs.yml`:

```yaml
nav:
  - Home: index.md
  - Networking: interview/networking/index.md
```

Ensure:

* `index.md` exists in the submodule path
* Paths are relative to the `docs/` directory

---

## Contribution Rules

* Keep documentation **clear, minimal, and technical**
* Prefer **Markdown (.md)** only
* Use meaningful commit messages
* Do not break existing navigation
* Test locally before pushing
* Avoid unnecessary dependency changes

---

## Commit Message Convention (Recommended)

* `docs:` documentation changes
* `fix:` corrections or broken links
* `chore:` tooling or config updates
* `deploy:` GitHub Pages updates

Example:

```bash
git commit -m "docs: add networking interview section"
```

---

## Need Help?

If something breaks or feels unclear:

* Open an issue
* Add logs or error output
* Describe what you tried

Happy contributing 🚀