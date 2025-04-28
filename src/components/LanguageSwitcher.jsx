import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex space-x-2">
      <button onClick={() => changeLanguage('en')} className="hover:underline">🇬🇧</button>
      <button onClick={() => changeLanguage('es')} className="hover:underline">🇪🇸</button>
      <button onClick={() => changeLanguage('ru')} className="hover:underline">🇷🇺</button>
    </div>
  );
}

export default LanguageSwitcher;
