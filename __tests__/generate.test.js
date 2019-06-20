const generate = require("../src/generate");

test("throws exception when given invalid bank account number", () => {
  expect(() => {
    generate("44-1234-0012345-00");
  }).toThrow();
});

test("does not throw exception when given unknown bank account", () => {
  expect(() => {
    generate("01-902-0068389-00");
  }).not.toThrow();
});

// TODO: test cases such as: 01-902-0068389-00 + invalid codes (e.g. outside of branch range) + handle defunct banks

test.each([
  [
    "01-0001-0000001-000",
    {
      name: "ANZ",
      swift: "ANZBNZ22",
      address:
        "ANZ Bank New Zealand Ltd, Floor 10, 170-186 Featherston St, Wellington 6011, New Zealand",
      beneficiaryAccount: "01-0001-0000001-000",
      bsbSortCode: "01-0001",
      iban: "01-0001-0000001-000"
    }
  ],
  [
    "02-0001-0000001-000",
    {
      name: "BNZ",
      swift: "BKNZNZ22",
      address: "Bank of New Zealand, Wellington, New Zealand",
      beneficiaryAccount: "02-0001-0000001-000",
      bsbSortCode: "02-0001",
      iban: "02-0001-0000001-000"
    }
  ],
  [
    "03-0001-0000001-000",
    {
      name: "Westpac",
      swift: "WPACNZ2W",
      address: "Westpac New Zealand Limited, Auckland, New Zealand",
      beneficiaryAccount: "03-0001-0000001-000",
      bsbSortCode: "03-0001",
      iban: "03-0001-0000001-000"
    }
  ],
  [
    "10-5165-0000001-000",
    {
      name: "Industrial and Commercial Bank of China",
      swift: "ICBKNZ2A",
      address:
        "Industrial and Commercial Bank of China Ltd, Level 22/188 Quay St, Auckland 1142, New Zealand",
      beneficiaryAccount: "10-5165-0000001-000",
      bsbSortCode: "10-5165",
      iban: "10-5165-0000001-000"
    }
  ],
  [
    "12-3000-0000001-000",
    {
      name: "ASB",
      swift: "ASBBNZ2A",
      address:
        "ASB Bank Limited, 12 Jellicoe Street, Auckland Central, Auckland 1010, New Zealand",
      beneficiaryAccount: "12-3000-0000001-000",
      bsbSortCode: "12-3000",
      iban: "12-3000-0000001-000"
    }
  ],
  [
    "15-3900-0000001-000",
    {
      name: "TSB",
      swift: "TSBANZ22",
      address: "TSB Centre, 120 Devon St East, New Plymouth 4310, New Zealand",
      beneficiaryAccount: "15-3900-0000001-000",
      bsbSortCode: "15-3900",
      iban: "15-3900-0000001-000"
    }
  ],
  [
    "30-2900-0000001-000",
    {
      name: "HSBC",
      swift: "HSBCNZ2A",
      address:
        "The Hongkong and Shanghai Banking Corporation Limited, HSBC House, Level 9, 1 Queen Street, Auckland, New Zealand",
      beneficiaryAccount: "30-2900-0000001-000",
      bsbSortCode: "30-2900",
      iban: "30-2900-0000001-000"
    }
  ],
  [
    "31-2800-0000001-000",
    {
      name: "Citibank",
      swift: "CITINZ2X",
      address: "CitiBank, Level 7/23 Customs St E, Auckland 1010, New Zealand",
      beneficiaryAccount: "31-2800-0000001-000",
      bsbSortCode: "31-2800",
      iban: "31-2800-0000001-000"
    }
  ],
  [
    "38-9000-0000001-000",
    {
      name: "Kiwibank",
      swift: "KIWINZ22",
      address:
        "Kiwibank Limited, Ground Floor, New Zealand Post House, 7 Waterloo Quay, Wellington 6011, New Zealand",
      beneficiaryAccount: "38-9000-0000001-000",
      bsbSortCode: "38-9000",
      iban: "38-9000-0000001-000"
    }
  ]
])("generate(%s) returns expected", (accountNumber, expected) => {
  expect(generate(accountNumber)).toEqual(expected);
});

// https://github.com/wytlytningNZ/NZ-Bank-Account-Validator/blob/master/test/library.spec.js
// https://jestjs.io/docs/en/next/api.html#testeachtable-name-fn
