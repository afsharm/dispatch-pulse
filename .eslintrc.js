module.exports = {
  "plugins": ["jest"],
  "env": {
    "node": true,
    "es2020": true,
    "jest/globals": true
  },
  "extends": ["eslint:recommended", "plugin:jest/recommended"],
  "rules": {
    "no-multiple-empty-lines": "warn",
    "no-var": "error",
    "prefer-const": "error"
  }
};
