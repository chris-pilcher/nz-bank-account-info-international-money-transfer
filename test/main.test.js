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

const anzTestData = {
  name: "ANZ",
  swift: "ANZBNZ22",
  address:
    "ANZ Bank New Zealand Ltd, Floor 10, 170-186 Featherston St, Wellington 6011, New Zealand"
};

test.each`
  accountNumber  | expected
  ${'01-902-0068389-00'} | ${anzTestData}
`(
  "returns $expected when given $accountNumber",
  ({ accountNumber, expected }) => {
    expect(generate(accountNumber)).toEqual(expected);
  }
);

// https://github.com/wytlytningNZ/NZ-Bank-Account-Validator/blob/master/test/library.spec.js
// https://jestjs.io/docs/en/next/api.html#testeachtable-name-fn
