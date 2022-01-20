enum STORAGE_CONSTANTS {
  LANGUAGE = 'LANGUAGE',
}

export const getLanguage = (): string => localStorage.getItem(STORAGE_CONSTANTS.LANGUAGE) || 'es';
export const setLanguage = (language: string): void =>
  localStorage.setItem(STORAGE_CONSTANTS.LANGUAGE, language);
