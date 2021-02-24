module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
      "airbnb-base",
        "eslint:recommended",
        "plugin:vue/essential",
        "plugin:@typescript-eslint/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
      'linebreak-style': ['error', 'windows'],
      'quotes': 0
    }
};