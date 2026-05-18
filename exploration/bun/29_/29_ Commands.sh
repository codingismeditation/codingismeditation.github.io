bun init                     # initialize a new Bun project (creates package.json, bun.lockb)
bun install                  # install all deps from package.json
bun add zod                  # add latest version of a dependency
bun add zod@3.0.0            # add a specific version of a dependency
bun add zod@3.0.0            # to demonstrate: Second install (cached) will be much faster
bun add -D prettier          # add a dev-only dependency
bun add -g cowsay            # install a package globally
bun remove zod               # remove a local dependency
bun remove prettier          # remove a dev dependency
bun remove -g cowsay         # uninstall a global package
bun update                   # update all dependencies (within version ranges)
bun update typescript        # update a specific dependency
bun outdated                 # list outdated dependencies
bun publish                  # publish package to npm
bun link                     # link local package globally for development