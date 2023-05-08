/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontSize: {
                xs: ["clamp(0.8rem, calc(0.68rem + 0.29vw), 1rem)", "1.2"],
                sm: ["clamp(1.00rem, calc(0.92rem + 0.39vw), 1.20rem)", "1.5"],
                base: ["clamp(1.13rem, calc(0.98rem + 0.73vw), 1.50rem)", "1.5"],
                lg: ["clamp(1.27rem, calc(1.03rem + 1.19vw), 1.88rem)", "1.5"],
                xl: ["clamp(1.42rem, calc(1.06rem + 1.80vw), 2.34rem)", "1.4"],
                "2xl": ["clamp(1.60rem, calc(1.08rem + 2.59vw), 2.73rem)", "1.2"],
                "3xl": ["clamp(1.80rem, calc(1.08rem + 3.63vw), 3.66rem)", "1.1"],
                "4xl": ["clamp(2.03rem, calc(1.03rem + 4.98vw), 4.58rem)", "1"],
                "5xl": ["clamp(2.28rem, calc(0.94rem + 6.71vw), 5.72rem)", "1"],
                "6xl": ["clamp(2.57rem, calc(0.78rem + 8.95vw), 7.15rem)", "1"],
            },
            borderRadius: {
                sq: "21%",
            },
            boxShadow: {
                box: "0 0 12px 0 rgb(0 0 0 / 0.2), 0 0 6px 0 rgb(0 0 0 / 0.2)",
            },
            maxWidth: {
                "prose-narrow": "45ch",
                "prose-wide": "80ch",
            },
            transitionProperty: {
                height: "height",
                spacing: "margin, padding",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: 0 },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },

    plugins: [
        require("daisyui"),
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),
        require("@tailwindcss/aspect-ratio"),
        require("tailwindcss-animate"),
        require("@headlessui/tailwindcss")({ prefix: "ui" }),

        function ({ addComponents }) {
            addComponents({
                ".bg-blur": {
                    position: "relative",
                    overflow: "hidden",

                    "&::before": {
                        content: `""`,
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        zIndex: "-1",
                        backdropFilter: "blur(16px) saturate(1.8)",
                        pointerEvents: "none",
                        borderRadius: "inherit"
                    },
                },
            })
        },
    ],

    daisyui: {
        styled: true,
        base: true,
        utils: true,
        logs: false,
        rtl: false,
        prefix: "",
        darkTheme: "dark",
        themes: [{ ...require("./theme") }, "dark", "light"],
    },
}
