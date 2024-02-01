import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-locize-backend";
// import { locizePlugin } from "locize";
import LastUsed from "locize-lastused";

const condition = import.meta.env.DEV;
const PROJECT_ID = import.meta.env.VITE_LOCIZE_PROJECT_ID;
const API_KEY = import.meta.env.VITE_LOCIZE_API_KEY;

// const options = {
//   order: ["querystring", "navigator"],
//   lookupQuerystring: "lng",
// };

i18next
  // .use(locizePlugin)
  .use(LastUsed)
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(Backend)
  .init({
    debug: condition,
    fallbackLng: "en",
    lng: "en",
    defaultNS: "en",
    // ns: ["common"],

    // detection: options,

    saveMissing: true,
    updateMissing: true,

    backend: {
      projectId: PROJECT_ID,
      apiKey: API_KEY,

      allowedAddOrUpdateHosts: [
        "test.host",
        "127.0.0.1",
        "http://localhost:3000/",
        "localhost",
      ],
    },

    locizeLastUsed: {
      projectId: PROJECT_ID,
      apiKey: API_KEY,
    },
  });

export default i18next;
