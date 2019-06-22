import generate from "../src/generate";

test("throws exception when given invalid bank account number", () => {
  expect(() => {
    let accountNumberThatWillFailChecksumValidation = "01-0001-0000001-000";
    generate(accountNumberThatWillFailChecksumValidation);
  }).toThrow("Error: Invalid account number 01-0001-0000001-000");
});

// TODO: test cases such as: 01-902-0068389-00 + invalid codes (e.g. outside of branch range) + handle defunct banks

test.each([
  [
    "01-0001-0000002-000",
    {
      name: "ANZ",
      swift: "ANZBNZ22",
      address:
        "ANZ Bank New Zealand Ltd, Floor 10, 170-186 Featherston St, Wellington 6011, New Zealand",
      beneficiaryAccount: "0100010000002000",
      bsbSortCode: "010001",
      iban: "0100010000002000"
    }
  ],
  [
    "02-0001-0000002-000",
    {
      name: "BNZ",
      swift: "BKNZNZ22",
      address: "Bank of New Zealand, Wellington, New Zealand",
      beneficiaryAccount: "0200010000002000",
      bsbSortCode: "020001",
      iban: "0200010000002000"
    }
  ],
  [
    "03-0001-0000002-000",
    {
      name: "Westpac",
      swift: "WPACNZ2W",
      address:
        "Registered office, Westpac New Zealand Limited, Auckland, New Zealand",
      beneficiaryAccount: "0300010000002000",
      bsbSortCode: "030001",
      iban: "0300010000002000"
    }
  ],
  [
    "12-3000-0000004-000",
    {
      name: "ASB",
      swift: "ASBBNZ2A",
      address:
        "ASB Bank Limited, 12 Jellicoe Street, Auckland Central, Auckland 1010, New Zealand",
      beneficiaryAccount: "1230000000004000",
      bsbSortCode: "123000",
      iban: "1230000000004000"
    }
  ],
  [
    "15-3900-0000018-000",
    {
      name: "TSB",
      swift: "TSBANZ22",
      address: "TSB Centre, 120 Devon St East, New Plymouth 4310, New Zealand",
      beneficiaryAccount: "1539000000018000",
      bsbSortCode: "153900",
      iban: "1539000000018000"
    }
  ],
  [
    "30-2900-0000005-000",
    {
      name: "HSBC",
      swift: "HSBCNZ2A",
      address:
        "The Hongkong and Shanghai Banking Corporation Limited, HSBC House, Level 9, 1 Queen Street, Auckland, New Zealand",
      beneficiaryAccount: "3029000000005000",
      bsbSortCode: "302900",
      iban: "3029000000005000"
    }
  ],
  [
    "31-2800-0000001-000  ",
    {
      name: "Citibank",
      swift: "CITINZ2X",
      address: "CitiBank, Level 7/23 Customs St E, Auckland 1010, New Zealand",
      beneficiaryAccount: "3128000000001000",
      bsbSortCode: "312800",
      iban: "3128000000001000"
    }
  ],
  [
    "38-9000-0000001-000",
    {
      name: "Kiwibank",
      swift: "KIWINZ22",
      address:
        "Kiwibank Limited, Ground Floor, New Zealand Post House, 7 Waterloo Quay, Wellington 6011, New Zealand",
      beneficiaryAccount: "3890000000001000",
      bsbSortCode: "389000",
      iban: "3890000000001000"
    }
  ]
])("generate(%s) returns expected", (accountNumber, expected) => {
  expect(generate(accountNumber)).toEqual(expected);
});
