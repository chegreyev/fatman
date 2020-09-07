import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
    kz: {
        translation: {
            // Header
            "headerAbout": "Біз туралы",
            "headerMission": "Біздің міндетіміз",
            "headerTeachers": "Біздің ұстаздарымыз",
            "headerRecommendations": "Жұмыс принципі",
            "headerContact": "Пікірлер",

            // Hero
            "heroTitlePart1": "Онлайн Білім Беру",
            "heroTitlePart2": "Академиясы",
            "heroSubtitle": "Бұл заман — білімдінің заманы, білімге бізбен бірге ұмтыл!",

            // Cta
            "ctaTitle": "Тегін сабаққа жазылу",
            // Phone
            "ctaFormPhonePlaceholder": "Телефон нөмірі",
            "ctaFormPhoneErrorRequired": "Телефон нөмірі керек",
            "ctaFormPhoneErrorMessage": "Қате телефон нөмірі",
            // Name
            "ctaFormNamePlaceholder": "Аты-жөні",
            "ctaFormNameErrorRequired": "Аты-жөніңізді енгізіңіз",
            // Note
            "ctaFormNotePlaceholder": "Баланың сыныбы",
            "ctaFormNoteErrorRequired": "Оқу сыныбыны жазіңіз",
            "ctaFormNoteErrorMessage": "Қате оқу сыныбы",
            //Cta form submit
            "ctaFormSubmitBtn": "Тіркелу",
            // Cta slogan
            "ctaSlogan": "Сіз сынақ сабағына сәтті жазылдыңыз!",

            // Feature tiles
            "tilesTitle": "Біздің қызметтеріміз",
            // TilesCardItem - Math
            "tilesCardTitleMath": "Математика",
            "tilesCardDescrMath": "Математика пәнінен қазақ және орыс тілдерінде қосымша сабақтар.",
            // TilesCardItem - Eng
            "tilesCardTitleEng": "Ағылшын тілі",
            "tilesCardDescrEng": "Ағылшын тілінен қазақ және орыс топтырына сабақтар.",

            // Feature split
            "splitTitle": "Біз туралы",
            //SplitItem - Mission
            "splitMissionTitle": "Біздің миссиямыз",
            "splitMissionDescr": "Біз білім беру саласының Феноменіне айналуды көздейміз. Оқушыларымыз тек мектеп пәндері бойынша озып қана қоймай, маңызды дағдыларды да бойына сіңіреді. Ал біз оларды білімнің хақ жолына түсіруге бар күшімізді саламыз.",
            //SplitItem - Teachers
            "splitTeachersTitle": "Біздің ұстаздарымыз",
            "splitTeachersDescr": "Академия мұғалімдері математика және ағылшын тілін оқытуда сіздерге ерекше  бағдарламаларды ұсынады. Түрлі форматтар мен курстар тіпті ең талапшыл оқушыны да таң қалдырарлығы сөзсіз. XXI ғасыр талаптарына сай жұмыс атқаратын жоғары білікті мұғалімдер тобы оқу процесін жеңіл әрі қызықты етеді.",
            //SplitItem - Recommendations
            "splitRecommendationsTitle": "Жұмыс принципі",
            "splitRecommendationsDescr": "",
            
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "kz",

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;