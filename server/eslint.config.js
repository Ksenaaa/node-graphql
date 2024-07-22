import globals from "globals";
import pluginJs from "@eslint/js";

export default [
    {
        languageOptions: {
            globals: {
                ...globals.node,
            },
            ecmaVersion: 2021,
            sourceType: "module",
        },
        rules: {
            "no-console": "warn",
            "no-unused-vars": "warn",
        },
    },
    pluginJs.configs.recommended,
];
