# @yukiniro/eslint-config

[![npm](https://img.shields.io/npm/v/@yukiniro/eslint-config)](https://npmjs.com/package/@yukiniro/eslint-confi)

## Usage

### Install

You should have install `eslint`.

```bash
pnpm add @yukiniro/eslint-config -D
```

or

```bash
npm i @yukiniro/eslint-config -D
```

### Config `.eslintrc`

```json
{
  "extends": [
    "@yukiniro/eslint-config"
  ]
}
```

### Add script for package.json

```json
{
  "scripts": {
    lint: "eslint ."
  }
}
```
