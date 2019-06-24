# Release Process

Steps to create a release `x.y.z` using [GitHub Desktop](https://desktop.github.com/).

## Step 1. Update package version

- Checkout `develop` branch
- Open code editor and update `version` in `package.json` to `x.y.z`
  - Alternatively, update via npm:
    - Major: `npm version major`
    - Minor: `npm version minor`
    - Patch: `npm version patch`
- Push <kbd>Ctrl</kbd> + <kbd>P</kbd>

## Step 2. Merge changes from `develop` into `master`

- Checkout `master` branch
- Merge `develop` into `master` <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>M</kbd>
- Push <kbd>Ctrl</kbd> + <kbd>P</kbd>

## Step 3. Create Release on GitHub

- Navigate to [GitHub Releases](https://github.com/chris-pilcher/nz-bank-account-info-international-money-transfer/releases)
- Click **Draft a new release**
- Tag version: `x.y.z`
- Target: `master`
- Release title `x.y.z`
- Type a description for the release
- Click **Publish release**
  - [Travis CI](https://travis-ci.org/chris-pilcher/nz-bank-account-info-international-money-transfer/) will automatically push the release package to [NPM](https://www.npmjs.com/package/nz-bank-account-info-international-money-transfer)
