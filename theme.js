// const light = {
//     gray1: "hsl(231, 1%, 56%)",
//     gray2: "hsl(240, 2%, 68%)",
//     gray3: "hsl(240, 3%, 78%)",
//     gray4: "hsl(240, 6%, 84%)",
//     gray5: "hsl(240, 12%, 91%)",
//     gray6: "hsl(240, 24%, 96%)",
//     gray7: "hsl(240, 36%, 98%)",
// }

const dark = {
    gray1: "hsl(231, 1%, 56%)",
    gray2: "hsl(240, 1%, 39%)",
    gray3: "hsl(240, 2%, 29%)",
    gray4: "hsl(240, 3%, 23%)",
    gray5: "hsl(240, 6%, 18%)",
    gray6: "hsl(240, 12%, 12%)",
    gray7: "hsl(240, 18%, 8%)",
}

// const iosLight = {
//     gray1: 'rgb(142, 142, 147)',
//     gray2: 'rgb(174, 174, 178)',
//     gray3: 'rgb(199, 199, 204)',
//     gray4: 'rgb(209, 209, 214)',
//     gray5: 'rgb(229, 229, 234)',
//     gray6: 'rgb(242, 242, 247)',
// }

const iosDark = {
    gray1: 'rgb(142, 142, 147)',
    gray2: 'rgb(99, 99, 102)',
    gray3: 'rgb(72, 72, 74)',
    gray4: 'rgb(58, 58, 60)',
    gray5: 'rgb(44, 44, 46)',
    gray6: 'rgb(28, 28, 30)',
    gray7: 'rgb(18, 18, 20)'
}

// module.exports = {
//     next: {
//         primary:                "hsl(208, 90%, 15%)",
//         "primary-content":      "hsl(205, 99%, 47%)",
//         secondary:              "hsl(262, 67%, 22%)",
//         "secondary-content":    "hsl(266, 85%, 68%)",
//         accent:                 "hsl(302, 63%, 19%)",
//         "accent-content":       "hsl(300, 58%, 53%)",
//         neutral:                "hsl(225, 18%, 26%)",
//         "neutral-focus":        "hsl(225, 18%, 20%)",
//         "base-100":             "hsl(223, 18%, 14%)",
//         "base-200":             "hsl(223, 18%, 10%)",
//         "base-300":             "hsl(223, 18%, 6%)",
//         info:                   "hsl(170, 79%, 43%)",
//         success:                "hsl(145, 70%, 46%)",
//         warning:                "hsl(49, 88%, 49%)",
//         error:                  "hsl(346, 87%, 57%)",
//         "--border-btn":         "0px",
//         // TODO: add border radius options
//     },
// }

// neutral:                "hsl(225, 12%, 48%)",

// "base-100":             "hsl(223, 17%, 20%)",
// "base-200":             "hsl(223, 17%, 16%)",
// "base-300":             "hsl(223, 17%, 12%)",

// "base-100":             "hsl(225, 12%, 20%)",
// "base-200":             "hsl(225, 12%, 12%)",
// "base-300":             "hsl(225, 12%, 8%)",

module.exports = {
    next: {
        primary: "hsl(208, 90%, 15%)",
        "primary-content": "hsl(205, 99%, 47%)",
        secondary: "hsl(262, 67%, 22%)",
        "secondary-content": "hsl(266, 85%, 68%)",
        accent: "hsl(302, 63%, 19%)",
        "accent-content": "hsl(300, 58%, 53%)",
        neutral: dark.gray3,
        "neutral-focus": dark.gray4,
        "base-100": dark.gray5,
        "base-200": dark.gray6,
        "base-300": dark.gray7,
        info: "hsl(170, 79%, 43%)",
        success: "hsl(145, 70%, 46%)",
        warning: "hsl(49, 88%, 49%)",
        error: "hsl(346, 87%, 57%)",
        "--border-btn": "0px",
        // TODO: add border radius options
    },
}
