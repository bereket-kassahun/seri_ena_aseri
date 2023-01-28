import { createContext } from "react";

export const english_text = {
    home: {
        text1: `One-stop Solution for your Services`,
        text2: `Order any service, anytime from anywhere`,
        text3: `what are you looking for?`,
        text4: `FEATURED SERVICES`,
        text5: `Service Categories`,
        text6: `Join Us and Start Selling Your Services On Our Website`,
        text7: `Its free to join.`,
        text8: `Sell Your Services`,
        text9:"Book keeping",
        text10:"Auditing",
        text11:"Tax consultancy",
        text12:"Administration",
        text13:"Human resource",
        text14:"Clark",
        text15:"Aerial and satellite installers",
        text16:"Bathroom fitters and designers",
        text17:"Boiler installation",
        text18:"Builders",
        text19:"Burglar alarms",
        text20:"Carpenters",
        text21: "Explore All",
    }
}

export const amhairc_text = {
    home: {
        text1: `ለአገልግሎቶችዎ ሁነኛ  መፍትሄ`,
        text2: `ማንኛውንም አገልግሎት በማንኛውም ጊዜ ከየትኛውም ቦታ ይዘዙ`,
        text3: `የሚፈልጉት አገልግሎት  ምንድን ነው?`,
        text4: `ለየት ያሉ  አገልግሎቶች`,
        text5: `የአገልግሎት ምድቦች`,
        text6: `ይቀላቀሉን እና አገልግሎቶችዎን በድረ-ገፃችን ላይ መሸጥ ይጀምሩ`,
        text7: `ለመቀላቀል ነፃ ነው።`,
        text8: `አገልግሎቶን ይሽጡ`,
        text9: "መጽሐፍ መያዝ",
        text10: "ኦዲት ማድረግ ",
        text11: "የግብር አማካሪ",
        text12: "አስተዳደር",
        text13: "የሰው ኃይል",
        text14: "ክላርክ",
        text15: "የአየር እና የሳተላይት መጫኛዎች",
        text16: "የመታጠቢያ ቤት እቃዎች እና ዲዛይነሮች",
        text17: "የቦይለር መጫኛግንበኞች ",
        text18: "ግንበኞች",
        text19: "የዝርፊያ ማንቂያዎች",
        text20: "አናጺዎች",
        text21: "ሁሉንም ያስሱ",
    },
}

export const theme = {
    language: "english",
    text: english_text
}

export const ThemeContext = createContext(
    theme
)

