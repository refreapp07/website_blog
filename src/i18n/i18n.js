import fr from './fr.json';
import en from './en.json';

const translations = { fr, en };

/**
 * Get a translation value by key and language.
 * @param {string} key - dot-notation key e.g. "nav.home"
 * @param {string} lang - language code "fr" or "en"
 * @returns {string}
 */
export function t(key, lang = 'fr') {
  const dict = translations[lang] ?? translations['fr'];
  const keys = key.split('.');
  let value = dict;
  for (const k of keys) {
    value = value?.[k];
    if (value === undefined) break;
  }
  if (value === undefined) {
    // Fallback to French if key missing in requested language
    let fallback = translations['fr'];
    for (const k of keys) {
      fallback = fallback?.[k];
      if (fallback === undefined) break;
    }
    return fallback ?? key;
  }
  return value;
}
