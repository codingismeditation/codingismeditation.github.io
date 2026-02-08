```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```


```bash
mkdocs serve
```
```bash
pip freeze > requirements.txt
mkdocs build
```
```bash
mkdocs gh-deploy --force
```


```bash
git submodule deinit -f docs/kintsugi-stack-networking
rm -rf .git/modules/docs/kintsugi-stack-networking
rm -rf docs/kintsugi-stack-networking
# change at .gitmodules
git submodule add https://github.com/kintsugi-programmer/kintsugi-stack-networking docs/interview/networking
# add entry at mkdocs.yml
# nav:
#   - Home: index.md
#   - Networking: interview/networking/index.md

```