const light = {
    gray1: "hsl(231, 1%, 56%)",
    gray2: "hsl(240, 2%, 68%)",
    gray3: "hsl(240, 3%, 78%)",
    gray4: "hsl(240, 6%, 84%)",
    gray5: "hsl(240, 12%, 91%)",
    gray6: "hsl(240, 24%, 96%)",
}

const dark = {
    gray1: "hsl(231, 2%, 56%)",
    gray2: "hsl(240, 2%, 44%)",
    gray3: "hsl(240, 4%, 32%)",
    gray4: "hsl(240, 6%, 26%)",
    gray5: "hsl(240, 8%, 20%)",
    gray6: "hsl(240, 12%, 14%)",
    gray7: "hsl(240, 18%, 8%)",
}

const iosLight = {
    gray1: "rgb(108, 108, 112)",
    gray2: "rgb(142, 142, 147)",
    gray3: "rgb(174, 174, 178)",
    gray4: "rgb(188, 188, 192)",
    gray5: "rgb(216, 216, 220)",
    gray6: "rgb(229, 229, 234)",
    gray7: "rgb(240, 240, 244)",
}

const iosColors = {
    red: "hsl(357, 100%, 42%)",
    orange: "hsl(19, 100%, 39%)",
    yellow: "hsl(30, 100%, 35%)",
    green: "hsl(136, 59%, 34%)",
    mint: "hsl(175, 83%, 28%)",
    teal: "hsl(193, 100%, 30%)",
    cyan: "hsl(203, 100%, 32%)",
    blue: "hsl(226, 100%, 43%)",
    indigo: "hsl(243, 52%, 42%)",
    purple: "hsl(297, 43%, 47%)",
    pink: "hsl(339, 87%, 44%)",
}

const iosContrast = {
    red: "hsl(357, 100%, 82%)",
    orange: "hsl(19, 100%, 69%)",
    yellow: "hsl(30, 100%, 65%)",
    green: "hsl(136, 59%, 74%)",
    mint: "hsl(175, 83%, 68%)",
    teal: "hsl(193, 100%, 70%)",
    cyan: "hsl(203, 100%, 72%)",
    blue: "hsl(226, 100%, 73%)",
    indigo: "hsl(243, 52%, 72%)",
    purple: "hsl(297, 43%, 67%)",
    pink: "hsl(339, 87%, 74%)",
}

// const iosDark = {
//     gray1: 'rgb(174, 174, 178)',
//     gray2: 'rgb(124, 124, 128)', // 50
//     gray3: 'rgb(84, 84, 86)',    // 40
//     gray4: 'rgb(68, 68, 70)',    // 16
//     gray5: 'rgb(54, 54, 56)',    // 14
//     gray6: 'rgb(36, 36, 38)',    // 18
//     gray7: 'rgb(20, 20, 22)'     // 16
// }

module.exports = {
    nextDark: {
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
        "--glass-blur": "16px",
        // "--glass-opacity": "60%"
        // TODO: add border radius options
    },

    nextLight: {
        primary: iosContrast.blue,
        "primary-content": iosColors.blue,

        secondary: iosContrast.purple,
        "secondary-content": iosColors.purple,

        accent: iosContrast.pink,
        "accent-content": iosColors.pink,

        neutral: iosLight.gray3,
        "neutral-focus": iosLight.gray4,
        "base-100": iosLight.gray7,
        "base-200": iosLight.gray6,
        "base-300": iosLight.gray5,

        info: iosColors.teal,
        success: iosColors.green,
        warning: iosColors.yellow,
        error: iosColors.red,
        "--border-btn": "0px",
        // TODO: add border radius options
    },
}

// module.exports = {
//     nextDark: {
//         primary: "hsl(208, 90%, 15%)",
//         "primary-content": "hsl(205, 99%, 47%)",
//         secondary: "hsl(262, 67%, 22%)",
//         "secondary-content": "hsl(266, 85%, 68%)",
//         accent: "hsl(302, 63%, 19%)",
//         "accent-content": "hsl(300, 58%, 53%)",
//         neutral: dark.gray3,
//         "neutral-focus": dark.gray4,
//         "base-100": dark.gray5,
//         "base-200": dark.gray6,
//         "base-300": dark.gray7,
//         info: "hsl(170, 79%, 43%)",
//         success: "hsl(145, 70%, 46%)",
//         warning: "hsl(49, 88%, 49%)",
//         error: "hsl(346, 87%, 57%)",
//         "--border-btn": "0px",
//         // TODO: add border radius options
//     },

//     nextLight: {
//         /**
//          *  TODO: look at apples human interface guidlines for light mode
//          *  Consider the accessible variants
//          */
//         "primary-content": "hsl(208, 90%, 35%)",
//         primary: "hsl(205, 99%, 47%)",
//         "secondary-content": "hsl(262, 67%, 42%)",
//         secondary: "hsl(266, 85%, 68%)",
//         "accent-content": "hsl(302, 63%, 39%)",
//         accent: "hsl(300, 58%, 53%)",
//         "neutral-focus": light.gray2,
//         neutral: light.gray3,
//         "base-100": light.gray4,
//         "base-200": light.gray5,
//         "base-300": light.gray6,
//         info: "hsl(170, 99%, 23%)",
//         success: "hsl(145, 70%, 46%)",
//         warning: "hsl(49, 88%, 49%)",
//         error: "hsl(346, 87%, 57%)",
//         "--border-btn": "0px",
//         // TODO: add border radius options
//     },
// }
