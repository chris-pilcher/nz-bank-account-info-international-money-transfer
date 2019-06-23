# nz-bank-account-info-international-money-transfer

[![NPM Version][npm-image]][npm-url]
[![License: MIT][license-image]][license-url]
[![Travis CI][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]

A small JavaScript library to generate information needed for an International Money Transfer to a New Zealand bank account.

## Getting Started

Using npm:
```
npm install --save nz-bank-account-info-international-money-transfer
```

Using yarn:
```
yarn add nz-bank-account-info-international-money-transfer
```

## Usage

In a browser: 
```javascript
// TODO
```

In Node.js (require):
```javascript
const generator = require("nz-bank-account-info-international-money-transfer");
generator.generate('01-0001-0000002-000');
```
ES6 Modules:
```javascript
import generator from 'nz-bank-account-info-international-money-transfer';
generator.generate('01-0001-0000002-000');
```

## Sample Output

```javascript
generator.generate('01-0001-0000002-000');
```

Result:
```javascript
{
   "address":"ANZ Bank New Zealand Ltd, Floor 10, 170-186 Featherston St, Wellington 6011, New Zealand",
   "beneficiaryAccount":"0100010000002000",
   "bsbSortCode":"010001",
   "iban":"0100010000002000",
   "name":"ANZ",
   "swift":"ANZBNZ22"
}
```

[Test with RunKit](https://runkit.com/npm/nz-bank-account-info-international-money-transfer)

## Development

`npm install`

`npm install jest --global`

`npm run test`

`npm run lint`

[Release Process](RELEASE-PROCESS.md)

[npm-image]: https://img.shields.io/npm/v/nz-bank-account-info-international-money-transfer.svg
[npm-url]: https://www.npmjs.com/package/nz-bank-account-info-international-money-transfer
[license-image]: https://img.shields.io/badge/License-MIT-green.svg
[license-url]: https://opensource.org/licenses/MIT
[travis-image]: https://img.shields.io/travis/chris-pilcher/nz-bank-account-info-international-money-transfer/develop.svg
[travis-url]: https://travis-ci.org/chris-pilcher/nz-bank-account-info-international-money-transfer
[coveralls-image]: https://coveralls.io/repos/github/chris-pilcher/nz-bank-account-info-international-money-transfer/badge.svg?branch=develop
[coveralls-url]: https://coveralls.io/r/chris-pilcher/nz-bank-account-info-international-money-transfer
