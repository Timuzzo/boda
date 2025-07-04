import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import Countdown from "../components/Countdown"

const Home = () => {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-section pt-16 md:pt-20 p-0 m-0 relative overflow-hidden">
        <style>{`
          @media (max-width: 639px) {
            .hero-img-1 { display: block; width: 100%; }
            .hero-img-2, .hero-img-3 { display: none; }
          }
          @media (min-width: 640px) and (max-width: 1023px) {
            .hero-img-1, .hero-img-2 { display: block; width: 50%; }
            .hero-img-3 { display: none; }
          }
          @media (min-width: 1024px) {
            .hero-img-1, .hero-img-2, .hero-img-3 { display: block; width: 33.3333%; }
          }
          @media (min-width: 768px) and (max-width: 1023px) {
            .hero-section .hero-img-1, .hero-section .hero-img-2 { height: 100%; }
            .hero-section .hero-img-3 { display: none; }
            .hero-section .hero-img-1, .hero-section .hero-img-2 { width: 50%; }
            .hero-section .hero-img-1, .hero-section .hero-img-2 { object-fit: cover; }
            .hero-section .hero-img-1, .hero-section .hero-img-2 { min-height: 0; }
            .hero-section .hero-img-1, .hero-section .hero-img-2 { max-height: none; }
          }
        `}</style>
        <div className="relative w-full h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] min-h-[300px]">
          <div className="flex w-full h-full overflow-hidden">
            <img src="/images/Banner_Photo 1.webp" alt="Banner 1" className="hero-img-1 object-cover h-full" />
            <img src="/images/Banner_Photo 2.webp" alt="Banner 2" className="hero-img-2 object-cover h-full" />
            <img src="/images/Banner_Photo 3.webp" alt="Banner 3" className="hero-img-3 object-cover h-full" />
          </div>
          {/* Overlay and Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
            <div className="absolute inset-0 z-10 pointer-events-none" />
            <div className="hero-content flex flex-col items-center justify-center relative z-20">
              <img src="/images/Logo NT.png" alt="Logo NT" className="w-48 sm:w-64 md:w-80 lg:w-[32rem] drop-shadow-xl" />
              <p className="font-montserrat text-base uppercase tracking-wider mb-4 md:mb-8 text-hortensia-300">
                {t("common.date")} • {t("common.location")}
              </p>
              <Link to="/rsvp" className="btn-primary inline-block font-montserrat text-sm uppercase tracking-wider">
                {t("common.rsvp")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <Countdown />

      {/* Combined Welcome & RSVP Section */}
      <section className="py-12 md:py-16 bg-hortensia-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-subtitle font-montserrat text-sm uppercase tracking-wider">{t("home.welcome")}</span>
            <h2 className="section-title font-cormorant font-light text-3xl md:text-4xl">{t("home.gettingMarried")}</h2>
            <p className="font-montserrat text-base text-gray-600 mb-8 leading-relaxed">{t("home.welcomeText")}</p>
            <h2 className="section-title font-cormorant font-light text-3xl md:text-4xl">{t("home.willYouJoin")}</h2>
            <p className="font-montserrat text-base text-gray-600 mb-8 leading-relaxed">{t("home.hopeJoin")}</p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link to="/rsvp" className="btn-primary font-montserrat text-sm uppercase tracking-wider">
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
