import i18next from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"
import HttpApi from "i18next-http-backend"

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['es', 'en'],
    fallbackLng: "es",
    backend: {
      loadPath: '/locales/{{lng}}/translation.json'
    },
    react: {useSuspense: false},
    detection:{
      order: ['htmlTag', 'cookie',  'localStorage', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    interpolation: {
      escapeValue: false
    },
  })

export default i18next