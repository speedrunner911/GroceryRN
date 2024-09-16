import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import Config from 'react-native-config';

import en from './en.json';
import uk from './uk.json';

const LANGUAGE = Config.LANGUAGE;

const resources = {
  en: {
    translation: en,
  },
  uk: {
    translation: uk,
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: LANGUAGE,
  resources,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
