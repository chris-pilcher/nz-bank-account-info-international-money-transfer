import bankValidator from "nz-bank-account-validator/lib/NZ-Bank-Account-Validator";

const bankMapping = {
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
    address:
      "Registered office, Westpac New Zealand Limited, Auckland, New Zealand"
  }, // Can also be NZ credit union/Rabobank
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

/**
 * Generates the information required for an international money transfer to the specified New Zealand bank account number.
 *
 * @param {String} accountNumber
 * @return {Object}
 */
export function generate(accountNumber) {
  const isValid = bankValidator.validate(accountNumber);
  if (!isValid) {
    throw new Error(`Error: Invalid account number ${accountNumber}`);
  }

  const parts = bankValidator.getPartsObject(accountNumber);
  const bankDetails = bankMapping[parts.id];

  if (!bankDetails) {
    throw new Error(
      `Error: Unknown bank (${parts.id}). Known banks are ${Object.keys(
        bankMapping
      )
        .sort()
        .map(bankKey => `${bankMapping[bankKey].name} (${bankKey})`)
        .join(" ")}`
    );
  }

  return {
    ...bankDetails,
    beneficiaryAccount: `${parts.id}${parts.branch}${parts.base}${parts.suffix}`,
    bsbSortCode: `${parts.id}${parts.branch}`,
    iban: `${parts.id}${parts.branch}${parts.base}${parts.suffix}`
  };
}
