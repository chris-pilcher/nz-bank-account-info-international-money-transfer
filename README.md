# nz-bank-account-info-international-money-transfer

[![NPM Version][npm-image]][npm-url]
[![License: MIT][license-image]][license-url]
[![Travis CI][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]

A small JavaScript library to generate information needed for an international money transfer to a New Zealand bank account.

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

In Node.js (require):

```javascript
const generator = require("nz-bank-account-info-international-money-transfer");
generator.generate("01-0001-0000002-000");
```

ES6 Modules:

```javascript
import * as generator from "nz-bank-account-info-international-money-transfer";
generator.generate("01-0001-0000002-000");
```

## Sample Output

The result of running `generator.generate('01-0001-0000002-000')`:

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

## Running Tests

To run the tests locally:

```
npm install jest --global
npm install
npm run test
npm run lint
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

[npm-image]: https://img.shields.io/npm/v/nz-bank-account-info-international-money-transfer.svg
[npm-url]: https://www.npmjs.com/package/nz-bank-account-info-international-money-transfer
[license-image]: https://img.shields.io/badge/License-MIT-green.svg
[license-url]: https://opensource.org/licenses/MIT
[travis-image]: https://img.shields.io/travis/chris-pilcher/nz-bank-account-info-international-money-transfer/develop.svg
[travis-url]: https://travis-ci.org/chris-pilcher/nz-bank-account-info-international-money-transfer
[coveralls-image]: https://coveralls.io/repos/github/chris-pilcher/nz-bank-account-info-international-money-transfer/badge.svg?branch=develop
[coveralls-url]: https://coveralls.io/r/chris-pilcher/nz-bank-account-info-international-money-transfer
