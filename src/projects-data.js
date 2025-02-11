import { t } from "i18next";
import bookimagic from "/src/assets/images/logo-bookimagic.png";
import willskill from "/src/assets/images/logo-willskill.jpg";
import tutor from "/src/assets/images/logo-tutor.png";
import magnit from "/src/assets/images/logo-magnit.png";
import hibad from "/src/assets/images/logo-no-logo.png";
import franceAe from "/src/assets/images/logo-france-ae.svg";
import beaute from "/src/assets/images/logo-beaute.svg";
import dessange from "/src/assets/images/logo-dessange.svg";

export const projects = [
  {
    title: "Bookimagic",
    name: "bookimagic",
    path: "https://bookimagic.com",
    logo: bookimagic,
    stack: ["Vite, ", "React, ", "Redux, ", "RTK Query, ", "Ant Design"],
    crmLink: "https://app.bookimagic.com",
    tasks: [
      t("projects.bookimagic.task1"),
      t("projects.bookimagic.task2"),
      t("projects.bookimagic.task3"),
      t("projects.bookimagic.task4"),
      t("projects.bookimagic.task5"),
    ],
  },
  {
    title: "France Aesthetic",
    name: "france_ae",
    path: "https://www.france-aesthetic.fr/",
    logo: franceAe,
    stack: [
      "Python, ",
      "SQL, ",
      "QWeb, ",
      "JavaScript, ",
      "JQuery, ",
      "XML, ",
      "Bootstrap",
    ],
    tasks: [
      t("projects.france_ae.task1"),
      t("projects.france_ae.task2"),
      t("projects.france_ae.task3"),
      t("projects.france_ae.task4"),
      t("projects.france_ae.task5"),
      t("projects.france_ae.task6"),
      t("projects.france_ae.task7"),
    ],
  },
  {
    title: "WillSkill",
    name: "will_skill",
    path: "https://willskill.ru",
    logo: willskill,
    stack: ["Next, ", "React Query, ", "Scss"],
    tasks: [
      t("projects.willskill.task1"),
      t("projects.willskill.task2"),
      t("projects.willskill.task3"),
      t("projects.willskill.task5"),
      t("projects.willskill.task6"),
      t("projects.willskill.task7"),
    ],
    markupExmples: [
      "https://willskill.ru/promo/figma-start-a",
      "https://willskill.ru/promo/html-developer-b",
      "https://willskill.ru/promo/time-management-a",
      "https://willskill.ru/promo/midjourney-operator",
      "https://willskill.ru/promo/streamer-a",
      "https://willskill.ru/webinar/cryptotrading-s-nulya/promo",
    ],
  },
  {
    title: "Dessange Armenia",
    name: "dessange",
    path: "https://www.dessange.am/",
    logo: dessange,
    stack: [
      "Python, ",
      "SQL, ",
      "QWeb, ",
      "JavaScript, ",
      "JQuery, ",
      "XML, ",
      "Bootstrap",
    ],
    tasks: [
      t("projects.france_ae.task1"),
      t("projects.france_ae.task2"),
      t("projects.france_ae.task3"),
      t("projects.france_ae.task4"),
      t("projects.france_ae.task5"),
      t("projects.france_ae.task6"),
      t("projects.france_ae.task7"),
    ],
  },
  {
    title: "Beaute Concept",
    name: "beaute",
    path: "https://www.beaute-concept.ae/",
    logo: beaute,
    stack: [
      "Python, ",
      "SQL, ",
      "QWeb, ",
      "JavaScript, ",
      "JQuery, ",
      "XML, ",
      "Bootstrap",
    ],
    tasks: [
      t("projects.beaute.task1"),
      t("projects.beaute.task2"),
      t("projects.beaute.task3"),
      t("projects.beaute.task4"),
      t("projects.beaute.task5"),
    ],
  },
  {
    title: "Tutorplace",
    name: "tutor_place",
    path: "https://tutorplace.ru",
    logo: tutor,
    stack: ["Pug, ", "Scss, ", "Java Script, ", "Gulp"],
    tasks: [
      t("projects.tutorplace.task1"),
      t("projects.tutorplace.task2"),
      t("projects.tutorplace.task3"),
    ],
    markupExmples: [
      "https://matrixv.tutorplace.ru",
      "https://matrixtf.tutorplace.ru",
      "https://excel1.tutorplace.ru",
      "https://chatbot1.tutorplace.ru",
    ],
  },
  {
    title: "Magnit",
    name: "magnit",
    path: "",
    logo: magnit,
    stack: ["Vue, ", "Vuex, ", "Ant Design"],
    tasks: [
      t("projects.magnit.task1"),
      t("projects.magnit.task2"),
      t("projects.magnit.task3"),
      t("projects.magnit.task4"),
    ],
  },
  {
    title: "Hibad",
    name: "hibad",
    path: "",
    logo: hibad,
    stack: ["React, ", "Redux Toolkit, ", "Material UI"],
    tasks: [
      t("projects.hibad.task1"),
      t("projects.hibad.task2"),
      t("projects.hibad.task3"),
    ],
  },
];

console.clear();
