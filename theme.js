const nextLight = {
    gray1: "#889096",
    gray2: "#C1C8CD",
    gray3: "#D7DBDF",
    gray4: "#DFE3E6",
    gray5: "#E6E8EB",
    gray6: "#ECEEF0",
    gray7: "#F1F3F5",
}

const nextDark = {
    gray1: "#697177",
    gray2: "#4C5155",
    gray3: "#3A3F42",
    gray4: "#313538",
    gray5: "#2B2F31",
    gray6: "#26292B",
    gray7: "#16181A",
}

const zinc = {
    z50: "rgb(250, 250, 250)",
    z100: "rgb(244, 244, 245)",
    z200: "rgb(228, 228, 231)",
    z300: "rgb(212, 212, 216)",
    z400: "rgb(161, 161, 170)",
    z500: "rgb(113, 113, 122)",
    z600: "rgb(82, 82, 91)",
    z700: "rgb(63, 63, 70)",
    z800: "rgb(39, 39, 42)",
    z900: "rgb(24, 24, 27)",
    z950: "rgb(9, 9, 11)",
}

const iosDark = {
    gray1: "rgb(174, 174, 178)",
    gray2: "rgb(124, 124, 128)", // 50
    gray3: "rgb(84, 84, 86)", // 40
    gray4: "rgb(68, 68, 70)", // 16
    gray5: "rgb(54, 54, 56)", // 14
    gray6: "rgb(36, 36, 38)", // 18
    gray7: "rgb(20, 20, 22)", // 16
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

module.exports = {
    nextDark: {
        primary: "hsl(208, 90%, 15%)",
        "primary-content": "hsl(205, 99%, 47%)",
        secondary: "hsl(262, 67%, 22%)",
        "secondary-content": "hsl(266, 85%, 68%)",
        accent: "hsl(302, 63%, 19%)",
        "accent-content": "hsl(300, 58%, 53%)",

        neutral: zinc.z600,
        "neutral-focus": zinc.z500,
        "base-100": zinc.z700,
        "base-200": zinc.z800,
        "base-300": "#000000",

        info: "hsl(170, 79%, 43%)",
        success: "hsl(145, 70%, 46%)",
        warning: "hsl(49, 88%, 49%)",
        error: "hsl(346, 87%, 57%)",
        "--border-btn": "0px",
        "--glass-blur": "16px",
        "--glass-opacity": "22.36%"
        // TODO: add border radius options
    },

    nextLight: {
        primary: iosContrast.blue,
        "primary-content": iosColors.blue,

        secondary: iosContrast.purple,
        "secondary-content": iosColors.purple,

        accent: iosContrast.pink,
        "accent-content": iosColors.pink,

        neutral: zinc.z500,
        "neutral-focus": zinc.z400,
        "base-100": zinc.z100,
        "base-200": zinc.z200,
        "base-300": zinc.z300,

        // neutral: zinc.z500,
        // "neutral-focus": zinc.z400,
        // "base-100": zinc.z300,
        // "base-200": zinc.z200,
        // "base-300": zinc.z100,

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
