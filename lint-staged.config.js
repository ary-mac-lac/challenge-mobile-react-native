module.exports = {
  '*.{ts,json,md}': ['prettier --write'],
  '*.{js,ts,tsx}': ["eslint '*/**/*.{js,ts,tsx}' --fix"],
}
