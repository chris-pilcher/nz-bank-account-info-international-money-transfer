const bankValidator = require("nz-bank-account-validator/lib/NZ-Bank-Account-Validator");

let bankMapping = {
  "01": {
    name: "ANZ",
    swift: "ANZBNZ22",
    address:
      "ANZ Bank New Zealand Ltd, Floor 10, 170-186 Featherston St, Wellington 6011, New Zealand"
  },
  "02": {
    name: "BNZ",
    swift: "BKNZNZ22",
    address: "Bank of New Zealand, Wellington, New Zealand"
  }, // Can also be "The Co-operative Bank" worry about this later
  "03": {
    name: "Westpac",
    swift: "WPACNZ2W",
    address: "Westpac New Zealand Limited, Auckland, New Zealand"
  }, // Can also be NZ credit union/Rabobank
  "06": {
    name: "National Bank of New Zealand",
    swift: "TODO",
    address: "[TODO]"
  }, // ?? Defunct??
  "08": { name: "National Australia Bank", swift: "TODO", address: "[TODO]" }, // ??? Who is this ?
  "10": {
    name: "Industrial and Commercial Bank of China",
    swift: "ICBKNZ2A",
    address:
      "Industrial and Commercial Bank of China Ltd, Level 22/188 Quay St, Auckland 1142, New Zealand"
  },
  "12": {
    name: "ASB",
    swift: "ASBBNZ2A",
    address:
      "ASB Bank Limited, 12 Jellicoe Street, Auckland Central, Auckland 1010, New Zealand"
  },
  "15": {
    name: "TSB",
    swift: "TSBANZ22",
    address: "TSB Centre, 120 Devon St East, New Plymouth 4310, New Zealand"
  },
  "30": {
    name: "HSBC",
    swift: "HSBCNZ2A",
    address:
      "The Hongkong and Shanghai Banking Corporation Limited, HSBC House, Level 9, 1 Queen Street, Auckland, New Zealand"
  },
  "31": {
    name: "Citibank",
    swift: "CITINZ2X",
    address: "CitiBank, Level 7/23 Customs St E, Auckland 1010, New Zealand"
  },
  "38": {
    name: "Kiwibank",
    swift: "KIWINZ22",
    address:
      "Kiwibank Limited, Ground Floor, New Zealand Post House, 7 Waterloo Quay, Wellington 6011, New Zealand"
  }
};

function generate(accountNumber) {
  // TODO: validate account number
  bankValidator.validate(accountNumber);

  const [bank, branch, account, suffix] = accountNumber.split("-"); // TODO: use bankValidator
  const bankDetails = bankMapping[bank];
  if (!bankDetails) {
    throw `Error: Unknown bank ${bank}. Known banks are ${Object.keys(
      bankMapping
    )
      .sort()
      .map(bankKey => `${bankMapping[bankKey].name} (${bankKey})`)
      .join(" ")}`;
  }

  return {
    ...bankDetails
  };
}

module.exports = generate;
