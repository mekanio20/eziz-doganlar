import { createI18n } from "vue-i18n";

const messages = {
  TM: {
    links: {
      home: "Baş sahypa",
      about: "Biz barada",
      works: "Biziň işlerimiz",
      services: "Hyzmatlarymyz",
      contact: "Habarlaşmak",
    }
  },
  EN: {
    links: {
      home: "Home page",
      about: "About us",
      works: "Our Works",
      services: "Services",
      contact: "Contact",
    }
  },
  RU: {
    links: {
      home: "Главная страница",
      about: "О нас",
      works: "Наши работы",
      services: "Услуги",
      contact: "Контакты",
    } 
  },
};

export const i18n = createI18n({
  locale: "TM",
  fallbackLocale: "TM",
  messages,
});