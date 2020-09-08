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
    },
    ru: {
        translation: {
            // Header
            "headerAbout": "О нас",
            "headerMission": "Наша миссия",
            "headerTeachers": "Наши учителя",
            "headerRecommendations": "Принцип работы",
            "headerContact": "Отзывы",

            // Hero
            "heroTitlePart1": "Академия Онлайн",
            "heroTitlePart2": "Образования",
            "heroSubtitle": "Это век знаний, стремитесь к знаниям вместе с нами!",

            // Cta
            "ctaTitle": "Записаться на бесплатное тестовое занятие",
            // Phone
            "ctaFormPhonePlaceholder": "Номер телефона",
            "ctaFormPhoneErrorRequired": "Введите номер телефона",
            "ctaFormPhoneErrorMessage": "Неправильный номер телефона",
            // Name
            "ctaFormNamePlaceholder": "Имя Фамилия",
            "ctaFormNameErrorRequired": "Введите ваше имя",
            // Note
            "ctaFormNotePlaceholder": "Класс ребенка",
            "ctaFormNoteErrorRequired": "Введите класс ребенка",
            "ctaFormNoteErrorMessage": "Неправильный класс ребенка",
            //Cta form submit
            "ctaFormSubmitBtn": "Записаться",
            // Cta slogan
            "ctaSlogan": "Вы успешно зарегистрировались на тестовое занятие!",

            // Feature tiles
            "tilesTitle": "Наши услуши",
            // TilesCardItem - Math
            "tilesCardTitleMath": "Математика",
            "tilesCardDescrMath": "Дополнительные уроки математики на казахском и русском языках.",
            // TilesCardItem - Eng
            "tilesCardTitleEng": "Английский язык",
            "tilesCardDescrEng": "Уроки английского для казахских и русских групп.",

            // Feature split
            "splitTitle": "О нас",
            //SplitItem - Mission
            "splitMissionTitle": "Наша миссия",
            "splitMissionDescr": "Мы стремимся стать явлением в сфере образования. Наши ученики не только преуспевают в школьных предметах, но и приобретают важные навыки. И мы сделаем все возможное, чтобы направить их на истинный путь познания.",
            //SplitItem - Teachers
            "splitTeachersTitle": "Наши учителя",
            "splitTeachersDescr": "Преподаватели Академии предлагают вам специальные программы по обучению математике и английскому языку. Разнообразие форматов и курсов обязательно удивит даже самого требовательного студента. Команда высококвалифицированных преподавателей, работающих в соответствии с требованиями XXI века, делает процесс обучения легким и интересным.",
            //SplitItem - Recommendations
            "splitRecommendationsTitle": "Принцип работы",
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