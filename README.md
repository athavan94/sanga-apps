# SangaApps

[![Dev](https://github.com/athavan94/sanga-apps/actions/workflows/dev-pipeline.yml/badge.svg)](https://github.com/athavan94/sanga-apps/actions/workflows/dev-pipeline.yml)

[![Main](https://github.com/athavan94/sanga-apps/actions/workflows/main-pipeline.yml/badge.svg)](https://github.com/athavan94/sanga-apps/actions/workflows/main-pipeline.yml)

<details>
<summary> Installation </summary>

## Angular Material install

```bash
npm install @angular/material && npx nx g @angular/material:ng-add
```

</details>

<details>
<summary> Testing & code analyse </summary>

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

## Run prettier

```bash
npx prettier . --check
```

```bash
npx prettier . --write
```

</details>

<details>
<summary> Create commands </summary>

## Create component

```bash
npx nx g @nx/angular:component <component-name> --directory=src/app/<component-name> --standalone --dry-run
```

_Note: Remove `--dry-run` to actually create the component_

## Create libraries

```bash
nx g @nx/angular:library button --directory=libs/shared/ui/button --standalone
```

</details>
