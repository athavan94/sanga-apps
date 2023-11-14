# SangaApps

## Angular Material install

```bash
npm install @angular/material && npx nx g @angular/material:ng-add
```

## Run unittest

```bash
nx test
```

## Run lint

```bash
nx lint
```

## Run e2e

```bash
nx e2e e2e
```

## Run all of them

```bash
nx run-many -t test lint e2e
```

## Create component

```bash
npx nx g @nx/angular:component <component-name> --directory=src/app/<component-name> --standalone --dry-run
```

_Note: Remove `--dry-run` to actually create the component_

## Create libraries

```bash
nx g @nx/angular:library shared-ui --directory=modules/shared/ui --standalone
```

## Run prettier

```bash
npx prettier . --check
```

```bash
npx prettier . --write
```
