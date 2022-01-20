import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import config from '../config';

import en from './en';
import es from './es';

const resources = {
  en: {
    translation: { ...en },
  },
  es: {
    translation: { ...es },
  },
};

const getLanguage = (): string => {
  let lang = config.localStorage.getLanguage();
  if (lang) {
    return lang;
  }
  lang = navigator.language?.substring?.(0, 2);
  if (Object.keys(resources).some((key) => key === lang)) {
    return lang;
  }
  return 'es';
};

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    lng: getLanguage(),
    interpolation: {
      escapeValue: false,
    },
    initImmediate: false,
  });

export { i18n, resources };
