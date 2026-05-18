# AGENTS.md — codingismeditation.github.io

MkDocs static site (Material theme), deployed via GitHub Pages.  
Python venv at `.venv/`; deps in `requirements.txt`.

## Quick start

```bash
git clone --recurse-submodules git@github-personal:codingismeditation/codingismeditation.github.io.git
python3 -m venv .venv && source .venv/bin/activate && pip install -r requirements.txt
mkdocs serve     # http://127.0.0.1:8000
mkdocs build     # output → site/
mkdocs gh-deploy --force   # deploy to GitHub Pages (--force is intentional)
```

## Content architecture

Most documentation lives in **git submodules** (currently deinitialized on disk; tracked in HEAD).  
Each submodule is an independent repo under `kintsugi-programmer/`:

| Submodule path | Repo |
|---|---|---|
| `docs/exploration/fastapi/` | `kintsugi-stack-fastapi` (code project, not a doc tree) |

After adding/updating a submodule, update the `nav:` section in `mkdocs.yml`.

In-repo markdown files (`docs/about.md`, `docs/contributing.md`, `docs/index.md`) are standalone.

## Markdown style

- After each heading, insert a blank line before the next content
- Before and after each list, insert a blank line to separate it from adjacent content

## Build notes

- Social card plugin reads `layouts/background.png` + `layouts/custom.yml`; enable with `debug: true`
- `.cache/plugin/` stores generated social cards and git-committer data (not committed)
- `mkdocs gh-deploy --force` is intentional to keep `gh-pages` branch clean
- Commit prefix convention: `docs:`, `fix:`, `chore:`, `deploy:`

## What is NOT in this repo

- No CI/CD workflows, tests, linters, formatters, or typecheckers
- No JavaScript bundling or frontend build step
- No `opencode.json` or `opencode.jsonc`
