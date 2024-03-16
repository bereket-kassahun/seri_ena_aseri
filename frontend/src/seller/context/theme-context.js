import { createContext } from "react";

export const english_text = {
    home: {
        dashboard: "Dashboard",
        add_service: "Add Service",
        services: "Services",
        profile: "Profile ",
        logout: "Logout",
    },
    add_service: {
        createService: "Create Service",
        basic: {
            text0: 'Birr',
            text1: '39/Year',
            text2: 'Basic Service',
            text3: 'For services that take minimal space when displayed to clients',
            text4: 'Title',
            text5: 'Full Name',
            text6: 'rating',
            text7: 'Shown in List Format',
        },
        standard: {
            text1: 'Birr59/Year',
            text2: 'Standard Service',
            text3: 'For services that will be displayed in a card format to clients',
            text4: 'Title',
            text5: 'Full Name',
            text6: 'Header Image',
            text7: 'Overview',
            text8: 'Shown in a card format',
            text9: 'Shown at top',
        },
        premium: {
            text1: 'Birr79/Year',
            text2: 'Premium Service',
            text3: 'For services that will be displayed in a card form and have detail pages',
            text4: 'Title',
            text5: 'Full Name',
            text6: 'Header Image',
            text7: 'Overview',
            text8: 'Shown in a card format',
            text9: 'Shown at top',
            text10: 'Contains a detail page',
        }
    },

}

export const amhairc_text = {
    home: {
        dashboard: "Dashboard",
        add_service: "አገልግሎት ጨምር",
        services: "አገልግሎቶች",
        profile: "መገለጫ",
        logout: "ውጣ ",
    },
    add_service: {
        basic: {
            text0: 'ብር',
            text1: 'በዓመት 39',
            text2: 'መሰረታዊ አገልግሎት',
            text3: 'ለደንበኞች ሲታዩ አነስተኛ ቦታ ለሚወስዱ አገልግሎቶች',
            text4: 'ርዕስ',
            text5: 'ሙሉ ስም',
            text6: 'ደረጃ መስጠት',
            text7: 'በዝርዝር  ይታያል',
        },
        standard: {
            text1: 'በዓመት 59 ብር',
            text2: 'መደበኛ አገልግሎት',
            text3: 'በካርድ ቅርጸት ለደንበኞች ለሚታዩ አገልግሎቶች',
            text4: 'ርዕስ',
            text5: 'ሙሉ ስም',
            text6: 'የራስጌ ምስል',
            text7: 'አጠቃላይ እይታ',
            text8: 'በካርድ ቅርጸት ይታያል',
            text9: 'ከላይ ይታያል',
        },
        premium: {
            text1: 'በዓመት 79 ብር',
            text2: 'የፕሪሚየም አገልግሎት',
            text3: 'በካርድ ቅጽ ላይ ለሚታዩ እና ዝርዝር ገፆች ላሏቸው አገልግሎቶች',
            text4: 'ርዕስ',
            text5: 'ሙሉ ስም',
            text6: 'የራስጌ ምስል',
            text7: 'አጠቃላይ እይታ',
            text8: 'በካርድ ቅርጸት ይታያል',
            text9: 'ከላይ ይታያል',
            text10: 'ዝርዝር ገጽ ይዟል',
        }
    },
}

export const theme = {
    language: "english",
    text: english_text
}

export const SellerContext = createContext(
    theme
)

