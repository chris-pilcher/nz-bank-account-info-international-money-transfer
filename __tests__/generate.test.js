import { generate } from "../src/generate";

test.each([
  ["01-0001-0000001-000", "Error: Invalid account number 01-0001-0000001-000"], // This will fail checksum validation
  [
    "11-5000-0000003-00",
    "Error: Unknown bank (11). Known banks are ANZ (01) BNZ (02) Westpac (03) ASB (12) TSB (15) HSBC (30) Citibank (31) Kiwibank (38)"
  ] // PostBank (11) is defunct
])(
  "generate(%s) throws exception when given invalid or unknown bank account numbers",
  (accountNumber, expected) => {
    expect(() => generate(accountNumber)).toThrow(expected);
  }
);

// TODO: test cases such as: 01-902-0068389-00 + invalid codes (e.g. outside of branch range) + handle defunct banks

test.each([
  [
    "01-0001-0000002-000",
    {
      bankName: "ANZ",
      SWIFT: "ANZBNZ22",
      bankAddress:
        "ANZ Bank New Zealand Ltd, Floor 10, 170-186 Featherston St, Wellington 6011, New Zealand",
      account: "0100010000002000",
      BSB: "010001",
      sortCode: "010001",
      IBAN: "0100010000002000"
    }
  ],
  [
    "02-0001-0000002-000",
    {
      bankName: "BNZ",
      SWIFT: "BKNZNZ22",
      bankAddress: "Bank of New Zealand, Wellington, New Zealand",
      account: "0200010000002000",
      BSB: "020001",
      sortCode: "020001",
      IBAN: "0200010000002000"
    }
  ],
  [
    "03-0001-0000002-000",
    {
      bankName: "Westpac",
      SWIFT: "WPACNZ2W",
      bankAddress:
        "Registered office, Westpac New Zealand Limited, Auckland, New Zealand",
      account: "0300010000002000",
      BSB: "030001",
      sortCode: "030001",
      IBAN: "0300010000002000"
    }
  ],
  [
    "12-3000-0000004-000",
    {
      bankName: "ASB",
      SWIFT: "ASBBNZ2A",
      bankAddress:
        "ASB Bank Limited, 12 Jellicoe Street, Auckland Central, Auckland 1010, New Zealand",
      account: "1230000000004000",
      BSB: "123000",
      sortCode: "123000",
      IBAN: "1230000000004000"
    }
  ],
  [
    "15-3900-0000018-000",
    {
      bankName: "TSB",
      SWIFT: "TSBANZ22",
      bankAddress:
        "TSB Centre, 120 Devon St East, New Plymouth 4310, New Zealand",
      account: "1539000000018000",
      BSB: "153900",
      sortCode: "153900",
      IBAN: "1539000000018000"
    }
  ],
  [
    "30-2900-0000005-000",
    {
      bankName: "HSBC",
      SWIFT: "HSBCNZ2A",
      bankAddress:
        "The Hongkong and Shanghai Banking Corporation Limited, HSBC House, Level 9, 1 Queen Street, Auckland, New Zealand",
      account: "3029000000005000",
      BSB: "302900",
      sortCode: "302900",
      IBAN: "3029000000005000"
    }
  ],
  [
    "31-2800-0000001-000",
    {
      bankName: "Citibank",
      SWIFT: "CITINZ2X",
      bankAddress:
        "CitiBank, Level 7/23 Customs St E, Auckland 1010, New Zealand",
      account: "3128000000001000",
      BSB: "312800",
      sortCode: "312800",
      IBAN: "3128000000001000"
    }
  ],
  [
    "38-9000-0000001-000",
    {
      bankName: "Kiwibank",
      SWIFT: "KIWINZ22",
      bankAddress:
        "Kiwibank Limited, Ground Floor, New Zealand Post House, 7 Waterloo Quay, Wellington 6011, New Zealand",
      account: "3890000000001000",
      BSB: "389000",
      sortCode: "389000",
      IBAN: "3890000000001000"
    }
  ]
])("generate(%s) returns expected", (accountNumber, expected) => {
  expect(generate(accountNumber)).toEqual(expected);
});
