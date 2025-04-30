import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="bg-hortensia-50 py-12 mt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-cormorant text-3xl md:text-4xl font-light text-eucalyptus-700 mb-6">{t("common.names")}</h2>
          <p className="font-montserrat text-sm text-hortensia-600 mb-8 max-w-md mx-auto">{t("common.welcomeMessage")}</p>
          <div className="flex justify-center space-x-6 mb-8">
            <Link
              to="/our-story"
              className="font-montserrat text-xs uppercase tracking-wider text-hortensia-600 hover:text-eucalyptus-600 transition-colors relative group"
            >
              {t("common.ourStory")}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-eucalyptus-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/details"
              className="font-montserrat text-xs uppercase tracking-wider text-hortensia-600 hover:text-eucalyptus-600 transition-colors relative group"
            >
              {t("common.details")}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-eucalyptus-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/rsvp"
              className="font-montserrat text-xs uppercase tracking-wider text-hortensia-600 hover:text-eucalyptus-600 transition-colors relative group"
            >
              {t("common.rsvp")}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-eucalyptus-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
          <p className="font-montserrat text-xs text-hortensia-500">
            {t("common.copyright", { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
