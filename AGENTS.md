# AGENTS.md — codingismeditation.github.io

MkDocs static site (Material theme), deployed via GitHub Pages.  
Python venv at `.venv/`; deps in `requirements.txt`.

## Quick start

```bash
git clone --recurse-submodules git@github-personal:codingismeditation/codingismeditation.github.io.git
python3 -m venv .venv && source .venv/bin/activate && pip install -r requirements.txt
mkdocs serve --dev-addr 0.0.0.0:6001   # port 6000 blocked by Chrome
mkdocs build
mkdocs gh-deploy --force                # --force keeps gh-pages branch clean
```

## Git setup

User config is required before any commit:
```bash
git config user.name "kintsugi-programmer"
git config user.email "siddhant.bali.work@gmail.com"
```

## Content architecture

Three active submodules under `kintsugi-programmer/`:

| Path | Repo | Section type |
|---|---|---|
| `docs/exploration/fastapi/` | `kintsugi-stack-fastapi` | Single-page section in Explorations |
| `docs/exploration/bun/` | `kintsugi-stack-bun` | Single-page section in Explorations |
| `docs/tech-current-affairs/` | `tech-current-affairs` | Top-level section with sub-pages |

Two distinct content patterns:
- **Explorations**: One `index.md` per submodule, referenced directly in nav
- **Tech Current Affairs**: `index.md` lists articles; each article is a separate markdown file (`<date>-<slug>.md`); nav has sub-entries

After adding/updating a submodule, update:
1. `mkdocs.yml` nav section
2. `docs/index.md` (home page)
3. Section overview page (e.g., `docs/exploration/index.md`)

## Submodule workflow

Submodules use HTTPS URLs in `.gitmodules` but some repos (e.g., `kintsugi-stack-bun`) require SSH for push. Check the submodule's remote and switch if needed:

```bash
git remote set-url origin git@github-personal:kintsugi-programmer/<repo>.git
```

Commit pattern for submodule changes:
```bash
# Inside submodule
git add -A && git commit -m "<prefix>: <message>"
git push origin HEAD:main   # use HEAD:main when in detached HEAD

# Back in main repo
git add <submodule-path> && git commit -m "fix: update submodule pointer"
git push origin main && mkdocs gh-deploy --force
```

Submodules often end up in detached HEAD; always use `git push origin HEAD:main`.

## Nav structure

Nav in `mkdocs.yml` has two top-level groups:
- **Explorations** — section with Overview/ FastAPI/ Bun sub-pages
- **Tech Current Affairs** — section with Overview and article sub-pages

Other nav items: Home, About, Contributing.

## Build notes

- Social card plugin: custom layout at `layouts/custom.yml`, background at `layouts/background.png`; `debug: true` keeps card generation visible
- `.cache/plugin/` stores generated social cards and committer data (not committed)
- `site/` is build output (not committed, in `.gitignore`)
- Mermaid diagrams supported via `pymdownx.superfences` custom fence
- Two plugins disabled/commented out in `mkdocs.yml` but active in `.git/config`: `git-committers` (commented) and `git-revision-date-localized` (active)
- No CI/CD, tests, linters, formatters, or typecheckers

## Commit prefix convention

`docs:`, `fix:`, `chore:`, `deploy:`, `feat:`

## Repo-specific markdown style

- Blank line after each heading before the next content
- Blank line before and after each list to separate from adjacent content

## Stale submodules (deinitialized, not in tree)

These exist in `.git/config` but have no directory or gitlink entry:
`docs/backend-art`, `docs/interview/dbms`, `docs/interview/networking`, `docs/interview/sql-ds`

## Settings

- VSCode project settings in `settings.json` — enables MkDocs Material YAML schema validation
- Custom footer template in `overrides/main.html`
