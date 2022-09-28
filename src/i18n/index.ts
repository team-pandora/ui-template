import { use } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        fallbackLng: "en",
        detection: {
            order: ["cookie", "htmlTag", "localStorage", "path", "subdomain"],
            caches: ["cookie"],
        },
        backend: {
            loadPath: "/locales/{{lng}}.json",
        },
    });
