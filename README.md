# nz-bank-account-info-international-money-transfer

[![NPM Version][npm-image]][npm-url]
[![License: MIT][license-image]][license-url]
[![Travis CI][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]


A small JavaScript library to generate information needed for an International Money Transfer to a New Zealand bank account.

## Installation

```
npm install --save nz-bank-account-info-international-money-transfer
```

or

```
yarn add nz-bank-account-info-international-money-transfer
```

## Usage

## Development

`npm install`

`npm install jest --global`

`npm run test`

# Release

Steps to create a release `x.y.z` using [GitHub Desktop](https://desktop.github.com/).

1. Checkout `develop` branch
2. Create a new `release/x.y.z` branch
   * <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>N</kbd> 
   * Name: `release/x.y.z`
4. Open code editor and update `version` in `package.json` to `x.y.z`. Push <kbd>Ctrl</kbd> + <kbd>P</kbd>.
5. Merge changes from `release/x.y.z` into `master` and `develop`
   * Checkout `master` branch. Merge `release/x.y.z` into `master` <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>M</kbd>. Push <kbd>Ctrl</kbd> + <kbd>P</kbd>.
   * Checkout `develop` branch. Merge `release/x.y.z` into `develop` <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>M</kbd>. Push <kbd>Ctrl</kbd> + <kbd>P</kbd>.
5. Open [GitHub Releases](https://github.com/chris-pilcher/nz-bank-account-info-international-money-transfer/releases) and create release
   * Click **Draft a new release** button 
   * Type a version number for release
     * Tag version: `x.y.z`
   * Use the drop-down menu, and select the `release/x.y.z` branch
     * Target: `release/x.y.z`
   * Enter title `x.y.z`
   * Type a description for the release
   * Click **Publish release**
     * [Travis CI](https://travis-ci.org/chris-pilcher/nz-bank-account-info-international-money-transfer/) will automatically push the release package to [NPM](https://www.npmjs.com/package/nz-bank-account-info-international-money-transfer)
    
[npm-image]: https://img.shields.io/npm/v/nz-bank-account-info-international-money-transfer.svg
[npm-url]: https://www.npmjs.com/package/nz-bank-account-info-international-money-transfer
[license-image]: https://img.shields.io/badge/License-MIT-green.svg
[license-url]: https://opensource.org/licenses/MIT
[travis-image]: https://img.shields.io/travis/chris-pilcher/nz-bank-account-info-international-money-transfer/develop.svg
[travis-url]: https://travis-ci.org/chris-pilcher/nz-bank-account-info-international-money-transfer
[coveralls-image]: https://coveralls.io/repos/github/chris-pilcher/nz-bank-account-info-international-money-transfer/badge.svg?branch=develop
[coveralls-url]: https://coveralls.io/r/chris-pilcher/nz-bank-account-info-international-money-transfer
