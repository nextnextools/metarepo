# @nextnextools/nextools-suppress-experimental-warnings ![npm](https://flat.badgen.net/npm/v/@nextnextools/nextools-suppress-experimental-warnings)

Suppress experimental warnings in Node.js.

* https://github.com/nodejs/node/issues/30810
* https://github.com/nodejs/node/pull/36137

## Install

```sh
$ yarn add @nextnextools/nextools-suppress-experimental-warnings
```

## Usage

```sh
node --require @nextnextools/nextools-suppress-experimental-warnings --experimental-import-meta-resolve --experimental-loader @nextnextools/nextools-typescript-esm-loader ./module.ts
```
