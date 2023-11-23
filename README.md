# Odds Checker

A simple npm package to check if odds are low or high.

## Installation

To use this package in your Node.js project, install it using npm:

```js
npm i odds-are-low
```

## Usage

run into the following error?

```js
ERR_PNPM_OUTDATED_LOCKFILE Cannot install with "frozen-lockfile" because pnpm-lock.yaml is not up to date with package.json
```

run the following command:
(not pretty but it works)

```js
rm node_modules
rm pnpm-lock.yaml
pnpm install
pnpm config set auto-install-peers true
```

```js
make sure to have the right actions permissions set for you actions to run by going into the setting of your repo and then into the actions tab and then into the permissions tab and then make sure that the actions permissions are set to read and write
```
