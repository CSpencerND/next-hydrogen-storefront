/** @type {import("prettier").Config} */
module.exports = {
    plugins: [require.resolve("prettier-plugin-tailwindcss")],
    tailwindConfig: "./tailwind.config.js",
    trailingComma: "es5",
    tabWidth: 4,
    semi: false,
    singleQuote: false,
    printWidth: 120,
    singleAttributePerLine: true,
}
