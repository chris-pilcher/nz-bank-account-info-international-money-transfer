import bankValidator from "nz-bank-account-validator/lib/NZ-Bank-Account-Validator";
import { bankMapping } from "./banks";

/**
 * Generates the information required for an international money transfer to the specified New Zealand bank account number.
 *
 * @param {String} accountNumber
 * @return {Object}
 */
function generate(accountNumber) {
  const isValid = bankValidator.validate(accountNumber);
  if (!isValid) {
    throw new Error(`Error: Invalid account number ${accountNumber}`);
  }

  const parts = bankValidator.getPartsObject(accountNumber);
  const [bank, branch, account, suffix] = [
    parts.id.padStart(2, "0"),
    parts.branch.padStart(4, "0"),
    parts.base.padStart(7, "0"),
    parts.suffix.padStart(3, "0")
  ];
  const bankDetails = bankMapping[bank];

  if (!bankDetails) {
    throw new Error(
      `Error: Unknown bank (${bank}). Known banks are ${Object.keys(bankMapping)
        .sort()
        .map(bankKey => `${bankMapping[bankKey].bankName} (${bankKey})`)
        .join(" ")}`
    );
  }

  return {
    ...bankDetails,
    account: `${bank}${branch}${account}${suffix}`,
    BSB: `${bank}${branch}`,
    IBAN: `${bank}${branch}${account}${suffix}`,
    sortCode: `${bank}${branch}`
  };
}

export default generate;
