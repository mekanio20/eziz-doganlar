import { createI18n } from "vue-i18n";

const messages = {
  TM: {
    links: {
      home: "Baş sahypa",
      about: "Biz barada",
      works: "Biziň işlerimiz",
      services: "Hyzmatlarymyz",
      contact: "Habarlaşmak",
    },
    common: {
      title: "1994-nji ýyldan bäri ösen gurluşyk çözgütleri",
      allVisible: "ÄHLI IŞLERIMIZI GÖRMEK",
      allVisibleServices: "ÄHLI HYZMATLARY GÖRMEK",
      ourServices: "Biziň Hyzmatlarymyz",
      next: "dowamy",
      send: "UGRATMAK",
      readMore: "Görmek",
    },
    hero: {
      title1: "1994-nji ýyldan bäri ösen gurluşyk çözgütleri",
      title2:
        "Biz Öz ukybymyzy we tejribämizi siziň taslamalaryňyza bagyşlaýarys",
      title3: "TÜRKMENISTAN BOÝUNÇA #1 GURLUŞYK KÄRHANASY",
      title4:
        "Innowasion Çözgütler Bilen Berk Gurluşyk — Geljegi Bilelikde Gurýarys.",
    },
    about: {
      title1: "Biz Iň Ýokary Hilli We Ygtybarly",
      title2: "Serişdeleri Ulanýarys",
      title3:
        "Her bir gurluşyk tapgyrynda berk hil gözegçiligi bilen seçilen serişdeler taslamalaryň uzak ömürli bolmagyny üpjün edýär. Gurluşykda ulanýan serişdelerimiz taslamalaryň uzak ömürli bolmagyny üpjün edýär.",
      title4: "gurluşyk işleri bilen meşgullanýan kompaniýadyr",
      title5: "kompaniýa",
      title6: "gurluşyk işleriniň ýerine ýetirilmegine ünsi jemleýär. Biziň",
      title7: "kompaniýamyz 1994-nji ýylda Türkmenistanda döredildi,",
      title8: "häzirki wagtda",
      title9: "tutuş ýurduň çäginde işlerini dowam etdirýär.",
    },
    missions: {
      title1: "Biziň",
      title2: "Missiýamyz",
      title3:
        'Müşderi kanagatlylygyna, tygşytly we ykdysady çözgütlerine esaslanyp, "Eziz Doganlar" daşky gurşawa, medeni gymmatlyklara, adam saglygyna we howpsuzlygyna, psihososial zerurlyklara we döwriň talaplaryna laýyk gelýän ýaşaýşly, durnukly jaý we binalary ýokary hilli saklap hödürlemegi maksat edinýär. Islegiňiz boýunça başga terjime ýa-da düşündiriş gerek bolsa, ýazyň!',
      title4:
        "Ol innowasion çözgütleri hödürleýän pudagyň öňdebaryjy we marka kompaniýalarynyň biri bolmagy maksat edinýär.",
    },
    projects: {
      title1: "Her Taslama — Ynamyň We",
      title2: "Hilimiziň Subutnamasy",
      title3: "MAGLUMAT",
      title4: "Goşmaça maglumatlar",
      title5: "Iş beriji",
      title6: "Taslamanyň görnüşi",
      title7: "Jemi gurluşyk meýdany",
      title8: "Umumy içki meýdan",
      title9: "Meňzeş işlerimiz",
    },
    advantages: {
      title1: "Biziň Üstünliklerimiziň Görkezijisi",
      title2: "Tejribämiz",
      title3: "Ýerine ýetiren işlerimiz",
      title4: "Işgärlerimiz",
      title5: "Dowam edýän işlerimiz",
      title6: "2025-nji ýylda ýerine ýetiren işlerimiz",
      title7: "Uly işlerimiz",
    },
    features: {
      title1: "Uly maksatlara eltyän ýol —",
      title2: "gymmatlyklaryмyz bilen başlaýar",
    },
    footer: {
      title1:
        "Innowasion Çözgütler Bilen Berk Gurluşyk — Geljegi Bilelikde Gurýarys.",
      title2: "Nawigasiýa",
      title3: "Salgymyz",
      title4: "Ýazmak üçin",
      title5: "Jaň etmek",
      title6: "Ähli hukuklar goragly.",
    },
  },
  EN: {
    links: {
      home: "Home",
      about: "About Us",
      works: "Our Works",
      services: "Our Services",
      contact: "Contact",
    },
    common: {
      title: "Advanced Construction Solutions Since 1994",
      allVisible: "VIEW ALL OUR WORKS",
      allVisibleServices: "VIEW ALL SERVICES",
      ourServices: "Our Services",
      next: "next",
      send: "SEND",
      readMore: "Read More"
    },
    hero: {
      title1: "Advanced Construction Solutions Since 1994",
      title2: "We dedicate our skills and experience to your projects",
      title3: "No.1 Construction Company in Turkmenistan",
      title4: "Reliable Construction with Innovative Solutions — Building the Future Together.",
    },
    about: {
      title1: "We Are High Quality and Reliable",
      title2: "Using Proven Materials",
      title3: "At every stage of construction, carefully selected materials with strict quality control are used to ensure the long-term durability of projects. Our materials guarantee the longevity of the constructions.",
      title4: "a company engaged in construction works",
      title5: "company",
      title6: "focuses on delivering construction projects. Our",
      title7: "company was established in 1994 in Turkmenistan,",
      title8: "and currently",
      title9: "operates across the entire country.",
    },
    missions: {
      title1: "Our",
      title2: "Mission",
      title3: "Based on customer satisfaction and economical, efficient solutions, \"Eziz Doganlar\" aims to offer livable and sustainable housing and building solutions that comply with the environment, cultural values, human health and safety, psychosocial needs, and the necessities of the time without compromising quality. If you need another translation or explanation, please write!",
      title4: "It aims to become one of the leading and brand companies in the industry offering innovative solutions."
    },
    projects: {
      title1: "Every Project — A Proof of",
      title2: "Our Trust and Quality",
      title3: "INFORMATION",
      title4: "Additional Information",
      title5: "Employer",
      title6: "Project Type",
      title7: "Total Construction Area",
      title8: "Total Indoor Area",
      title9: "Similar Projects",
    },
    advantages: {
      title1: "Indicators of Our Advantages",
      title2: "Our Experience",
      title3: "Completed Works",
      title4: "Our Staff",
      title5: "Ongoing Projects",
      title6: "Works Completed in 2025",
      title7: "Major Projects",
    },
    features: {
      title1: "The Path to Great Goals —",
      title2: "Begins with Our Values",
    },
    footer: {
      title1: "Reliable Construction with Innovative Solutions — Building the Future Together.",
      title2: "Navigation",
      title3: "Our Address",
      title4: "Write to Us",
      title5: "Call Us",
      title6: "All rights reserved.",
    }
  },  
  RU: {
    links: {
      home: "Главная",
      about: "О нас",
      works: "Наши работы",
      services: "Наши услуги",
      contact: "Контакты",
    },
    common: {
      title: "Развивающиеся строительные решения с 1994 года",
      allVisible: "ПОСМОТРЕТЬ ВСЕ НАШИ РАБОТЫ",
      allVisibleServices: "ПОСМОТРЕТЬ ВСЕ УСЛУГИ",
      ourServices: "Наши услуги",
      next: "далее",
      send: "ОТПРАВИТЬ",
      readMore: "Подробнее",
    },
    hero: {
      title1: "Развивающиеся строительные решения с 1994 года",
      title2: "Мы посвящаем свои знания и опыт вашим проектам",
      title3: "Строительная компания №1 в Туркменистане",
      title4:
        "Надежное строительство с инновационными решениями — строим будущее вместе.",
    },
    about: {
      title1: "Мы — высококачественные и надежные",
      title2: "Используем проверенные материалы",
      title3:
        "На каждом этапе строительства применяются тщательно отобранные материалы с жестким контролем качества, обеспечивающие долговечность проектов. Используемые материалы гарантируют долгий срок службы.",
      title4: "компания, занимающаяся строительными работами",
      title5: "компания",
      title6: "фокусируется на выполнении строительных работ. Наша",
      title7: "компания была основана в 1994 году в Туркменистане,",
      title8: "в настоящее время",
      title9: "продолжает работу по всей стране.",
    },
    missions: {
      title1: "Наша",
      title2: "Миссия",
      title3:
        "Основываясь на удовлетворенности клиентов, экономичных и рациональных решениях, «Eziz Doganlar» стремится предоставлять жилые и устойчивые решения в строительстве, соответствующие окружающей среде, культурным ценностям, здоровью и безопасности людей, психосоциальным потребностям и требованиям времени, при этом не уступая в качестве. Если нужна другая версия перевода или объяснение, пишите!",
      title4:
        "Она стремится стать одной из ведущих и брендовых компаний в отрасли, предлагающих инновационные решения.",
    },
    projects: {
      title1: "Каждый проект — подтверждение",
      title2: "нашего доверия и качества",
      title3: "ИНФОРМАЦИЯ",
      title4: "Дополнительная информация",
      title5: "Работодатель",
      title6: "Тип проекта",
      title7: "Общая площадь строительства",
      title8: "Общая внутренняя площадь",
      title9: "Похожие наши проекты",
    },
    advantages: {
      title1: "Показатели наших преимуществ",
      title2: "Наш опыт",
      title3: "Выполненные работы",
      title4: "Наши сотрудники",
      title5: "Текущие проекты",
      title6: "Работы, выполненные в 2025 году",
      title7: "Крупные проекты",
    },
    features: {
      title1: "Путь к большим целям —",
      title2: "начинается с наших ценностей",
    },
    footer: {
      title1:
        "Надежное строительство с инновационными решениями — строим будущее вместе.",
      title2: "Навигация",
      title3: "Наш адрес",
      title4: "Написать нам",
      title5: "Позвонить",
      title6: "Все права защищены.",
    },
  },
};

export const i18n = createI18n({
  locale: "TM",
  fallbackLocale: "TM",
  messages,
});
