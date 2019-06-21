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
2. Open code editor and update `version` in `package.json` to `x.y.z`. Push <kbd>Ctrl</kbd> + <kbd>P</kbd>.
3. Merge changes from `develop` into `master`. 
   * Checkout `master` branch. Merge `develop` into `master` <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>M</kbd>. Push <kbd>Ctrl</kbd> + <kbd>P</kbd>.
4. Create Release
   * Navigate to [GitHub Releases](https://github.com/chris-pilcher/nz-bank-account-info-international-money-transfer/releases)
   * Click **Draft a new release** button 
   * Type a version number for release
     * Tag version: `x.y.z`
   * Use the drop-down menu, and select the `master` branch
     * Target: `master`
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
