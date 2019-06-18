const generate = require("../src/main");

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

test.each([["01-902-0068389-00", { name: "ANZ", swift: "ANZBNZ22", address: "ANZ Bank New Zealand Ltd, Floor 10, 170-186 Featherston St, Wellington 6011, New Zealand", beneficiaryAccount: "01-902-0068389-00", bsbSortCode: "01-902", iban: "01-902-0068389-00"}],
                ["12-3000-0000001-000", { name: "ASB", swift: "ASBBNZ2A", address: "ASB Bank Limited, 12 Jellicoe Street, Auckland Central, Auckland 1010, New Zealand", beneficiaryAccount: "12-3000-0000001-000", bsbSortCode: "12-3000", iban: "12-3000-0000001-000"}]])(
  'generate(%s) returns expected', (accountNumber, expected) => {
    expect(generate(accountNumber)).toEqual(expected);
  }
);

// https://github.com/wytlytningNZ/NZ-Bank-Account-Validator/blob/master/test/library.spec.js
// https://jestjs.io/docs/en/next/api.html#testeachtable-name-fn
