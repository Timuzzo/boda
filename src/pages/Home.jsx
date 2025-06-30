import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import Countdown from "../components/Countdown"

const Home = () => {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-section pt-16 md:pt-20 relative overflow-hidden">
        <div className="flex flex-col md:flex-row w-full h-auto md:h-full absolute top-16 md:top-20 left-0 right-0 bottom-0 z-0">
          <img src="/images/Banner_Photo 1.png" alt="Banner 1" className="object-cover w-full h-48 md:h-full md:w-1/3" />
          <img src="/images/Banner_Photo 2.png" alt="Banner 2" className="object-cover w-full h-48 md:h-full md:w-1/3" />
          <img src="/images/Banner_Photo 3.png" alt="Banner 3" className="object-cover w-full h-48 md:h-full md:w-1/3" />
        </div>
        <div className="hero-overlay" />
        <div className="hero-content flex flex-col items-center justify-center relative z-10">
          <img src="/images/Logo NT.png" alt="Logo NT" className="w-72 md:w-[32rem] drop-shadow-xl" />
          <p className="font-montserrat text-sm md:text-base uppercase tracking-widest mb-8">
            {t("common.date")} • {t("common.location")}
          </p>
          <Link to="/rsvp" className="btn-primary inline-block">
            {t("common.rsvp")}
          </Link>
        </div>
      </section>

      {/* Countdown Section */}
      <Countdown />

      {/* Combined Welcome & RSVP Section */}
      <section className="py-12 md:py-16 bg-hortensia-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-subtitle">{t("home.welcome")}</span>
            <h2 className="section-title">{t("home.gettingMarried")}</h2>
            <p className="font-montserrat text-gray-600 mb-8 leading-relaxed">{t("home.welcomeText")}</p>
            <h2 className="section-title">{t("home.willYouJoin")}</h2>
            <p className="font-montserrat text-gray-600 mb-8 leading-relaxed">{t("home.hopeJoin")}</p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link to="/rsvp" className="btn-primary">
                {t("common.rsvp")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
