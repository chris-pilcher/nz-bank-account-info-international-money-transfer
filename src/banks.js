const bankMapping = {
  "01": {
    bankAddress:
      "ANZ Bank New Zealand Ltd, Floor 10, 170-186 Featherston St, Wellington 6011, New Zealand",
    bankName: "ANZ",
    SWIFT: "ANZBNZ22"
  },
  "02": {
    bankAddress: "Bank of New Zealand, Wellington, New Zealand",
    bankName: "BNZ",
    SWIFT: "BKNZNZ22",
    excludedBranches: ["1242", "1245", "1246", "1247", "1248", "1249", "1250"]
  },
  "03": {
    bankAddress:
      "Registered office, Westpac New Zealand Limited, Auckland, New Zealand",
    bankName: "Westpac",
    SWIFT: "WPACNZ2W"
  },
  "12": {
    bankAddress:
      "ASB Bank Limited, 12 Jellicoe Street, Auckland Central, Auckland 1010, New Zealand",
    bankName: "ASB",
    SWIFT: "ASBBNZ2A"
  },
  "15": {
    bankAddress:
      "TSB Centre, 120 Devon St East, New Plymouth 4310, New Zealand",
    bankName: "TSB",
    SWIFT: "TSBANZ22"
  },
  "30": {
    bankAddress:
      "The Hongkong and Shanghai Banking Corporation Limited, HSBC House, Level 9, 1 Queen Street, Auckland, New Zealand",
    bankName: "HSBC",
    SWIFT: "HSBCNZ2A"
  },
  "38": {
    bankAddress:
      "Kiwibank Limited, Ground Floor, New Zealand Post House, 7 Waterloo Quay, Wellington 6011, New Zealand",
    bankName: "Kiwibank",
    SWIFT: "KIWINZ22"
  }
};

const banks = Object.values(bankMapping);

export { bankMapping };
export default banks;
