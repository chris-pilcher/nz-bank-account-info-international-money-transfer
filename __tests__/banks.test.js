import banks, { bankMapping } from "../src/banks";

test("banks returns array of banks from bank mapping", () => {
  expect(banks).toStrictEqual(Object.values(bankMapping));
});
