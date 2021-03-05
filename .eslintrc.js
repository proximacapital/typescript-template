module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "tsconfig.json",
        sourceType: "module"
    },
    plugins: [
        "@typescript-eslint",
        "@typescript-eslint/tslint",
        "eslint-plugin-import",
        "eslint-plugin-unicorn",
    ],
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier/@typescript-eslint"],
    rules: {
        "@typescript-eslint/array-type": ["error", { "default": "array" }],                                 // Prefer number[] over Array<number>
        "@typescript-eslint/dot-notation": "error",                                                         // Disallow obj["prop"] access
        "@typescript-eslint/explicit-member-accessibility": ["error", { "accessibility": "explicit" }],     // Must set private, public etc.
        "@typescript-eslint/explicit-module-boundary-types": "off",                                         // Enforce return types on exported methods
        "@typescript-eslint/member-delimiter-style": [                                                      // Require ";" after member declarations
            "error",                                                                                        // Last ";" is not required on single line
            {
                "multiline": {
                    "delimiter": "semi",
                    "requireLast": true
                },
                "singleline": {
                    "delimiter": "semi",
                    "requireLast": false
                }
            }
        ],
        "@typescript-eslint/member-ordering": [                                                             // Grouping of similar properties together 
            "error",
            {
                default: {
                    memberTypes: [
                        // private/protected members // Declare your data
                        // constructor               // Initialize your data
                        // private methods           // Manage your data
                        // public getters/setters    // Expose your data (read & write)
                        // public methods            // Expose your data (read, write & execute)

                        "signature",

                        "private-static-field",
                        "protected-static-field",

                        "private-field",
                        "protected-field",

                        "constructor",

                        "private-static-method",
                        "private-method",
                        "protected-method",

                        "public-static-field",
                        "public-field",
                        "public-static-method",
                        "public-method",
                    ],
                },
            }
        ],
        "@typescript-eslint/naming-convention": [                                                           // Define acceptable naming styles
            "error",
            {
                "selector": "interface",
                "format": ["PascalCase"],
                "prefix": ["I"]
            },
            {
                "selector": "typeAlias",
                "format": ["PascalCase"],
                "prefix": ["T", "__T"]
            },
            {
                "selector": "variableLike",
                "format": ["camelCase", "PascalCase"],
            },
            {
                "selector": "variable",
                "modifiers": ["const"],
                "format": ["camelCase", "PascalCase", "UPPER_CASE"],
            },
        ],
        "@typescript-eslint/no-empty-function": "off",                                                      // Disallow empty functions, including callbacks
        "@typescript-eslint/no-explicit-any": "off",                                                        // Disallow use of the "any" type
        "@typescript-eslint/no-inferrable-types": "off",                                                    // Disallows const lNum: number = 0;
        "@typescript-eslint/no-non-null-assertion": "off",                                                  // Disallows usage of "!" e.g: lUndefined!;
        "@typescript-eslint/no-unused-vars": ["error", { "ignoreRestSiblings": true, "varsIgnorePattern": "^__" }],     // Disallows unused vars, unless __Type;
        "@typescript-eslint/prefer-nullish-coalescing": "error",                                            // Prefer "??" over "||", so we don't do a falsy check
        "@typescript-eslint/quotes": ["error", "double", { "allowTemplateLiterals": true }],                // Use "" quotes instead of '', or ``
        "@typescript-eslint/type-annotation-spacing": "error",                                              // const foo: number, space after ":"
        "@typescript-eslint/switch-exhaustiveness-check": "error",                                          // Requires all branches to be covered or a default
        "@typescript-eslint/tslint/config": [                                                               // Legacy tslint rules, runs our semicolon rules
            "error",
            {
                "rules": {
                    "typedef": [                                                                            // Typedef not required on const lFunc = (): void => {}
                        true,
                        "arrow-call-signature",
                        "arrow-parameter",
                        "call-signature",
                        "member-variable-declaration",
                        "parameter",
                        "property-declaration",
                        "variable-declaration",
                        "variable-declaration-ignore-function"
                    ],
                    "whitespace": [
                        true,
                        "check-branch",
                        "check-decl",
                        "check-operator",
                        "check-separator",
                        "check-type",
                        "check-type-operator",
                        "check-preblock"
                    ],
                    "ordered-imports": true,
                    "semicolon": [true, "always"],
                }
            }
        ],
        "@typescript-eslint/typedef": [
            "error",
            {
                "arrayDestructuring": false,                                                                // Infer types on array destructuring
                "arrowParameter": true,
                "memberVariableDeclaration": true,
                "objectDestructuring": false,                                                               // Infer types on object destructuring
                "parameter": true,
                "propertyDeclaration": true,
                "variableDeclaration": true,
                "variableDeclarationIgnoreFunction": true
            }
        ],
        "arrow-parens": ["error", "always"],                                                                // Force parens around arrow arguments
        "brace-style": ["error", "allman", { "allowSingleLine": true }],                                    // Parenthetically correct braces
        "comma-dangle": ["error", "always-multiline"],                                                      // Force last array entry to have trailing comma
        "function-paren-newline": ["error", "multiline-arguments"],                                         // Multiline functions must have close paren on newline
        "function-call-argument-newline": ["error", "consistent"],                                          // Multiline arguments must all be on newline
        "curly": ["error", "multi-line", "consistent"],                                                     // Always use curly unless if and else are one-line
        "eol-last": "error",                                                                                // Force files to end with newline
        "max-len": ["error", { "ignorePattern": "//", "code": 120 }],                                       // Max line-length of 120 columns, ignore comments
        "newline-per-chained-call": "off",                                                                  // Force chained calls (.then) onto new lines
        "no-async-promise-executor": "error",                                                               // Only allow synchronous promise executors
        "no-console": "error",                                                                              // Disallow calls to console.log
        "no-duplicate-imports": "error",                                                                    // Imports from the same file must be merged
        "no-irregular-whitespace": "error",                                                                 // Disallow weird whitespace characters
        "no-magic-numbers": "off",  // TODO: Turn on                                                        // Disallow number literals
        "no-multiple-empty-lines": "error",                                                                 // Allow at most one empty line between code
        "no-trailing-spaces": "error",                                                                      // Strip whitespace after line ends
        "object-curly-spacing": ["error", "always"], // TODO: Test { a:0 }                                  // Requires spaces like: { a: 0 }
        "one-var": ["error", "never"],                                                                      // Requires a keyword per declaraed var
        "prefer-const": "error",                                                                            // If a var is not re-assigned, force const
        "spaced-comment": ["error", "always", { "markers": ["/"] }],                                        // Require a space after "//" like in this file
        "space-before-function-paren": ["error", "never"], "space-in-parens": ["error", "never"],           // func(x) vs func (x), we use no space
        "space-before-blocks": ["error", "always"],                                                         // Space before "{}", like func() {}
        "arrow-spacing": "error",                                                                           // Require space before and after =>, () => {}
        "keyword-spacing": "error",                                                                         // Require spaces before and after keywords (if, else)
        "import/no-default-export": "error",                                                                // Disallow default (unnamed) exports
        "key-spacing": "error",                                                                             // No space before colon in object literals
    },
};
