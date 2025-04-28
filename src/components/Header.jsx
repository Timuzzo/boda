import { Link } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="text-xl font-bold">{t('home.names')}</div>
      <nav className="flex space-x-4">
        <Link to="/">{t('menu.home')}</Link>
        <Link to="/our-story">{t('menu.ourStory')}</Link>
        <Link to="/timeline">{t('menu.timeline')}</Link>
        <Link to="/travel">{t('menu.travel')}</Link>
        <Link to="/rsvp">{t('menu.rsvp')}</Link>
        <Link to="/contact">{t('menu.contact')}</Link>
      </nav>
      <LanguageSwitcher />
    </header>
  );
}

export default Header;
