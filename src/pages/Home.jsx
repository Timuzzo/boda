import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import Countdown from "../components/Countdown"

const Home = () => {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-section">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero-background.jpg')" }}
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-light mb-4">{t("common.names")}</h1>
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

      {/* Welcome Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-subtitle">{t("home.welcome")}</span>
            <h2 className="section-title">{t("home.gettingMarried")}</h2>
            <p className="font-montserrat text-gray-600 mb-8 leading-relaxed">{t("home.welcomeText")}</p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link to="/our-story" className="btn-outline">
                {t("common.ourStory")}
              </Link>
              <Link to="/details" className="btn-primary">
                {t("common.details")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Preview */}
      <section className="py-16 bg-hortensia-50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-subtitle">{t("home.joinUs")}</span>
            <h2 className="section-title">{t("home.weddingDetails")}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Ceremony */}
            <div className="details-card text-center">
              <div className="flex justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-eucalyptus-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl mb-2">{t("home.ceremony")}</h3>
              <p className="font-montserrat text-sm text-gray-600 mb-4">{t("common.date")} at 4:00 PM</p>
              <p className="font-montserrat text-sm text-gray-600">
                Iglesia de la Veracruz
                <br />
                Calle 51 #52-58
                <br />
                Medellín, Colombia
              </p>
            </div>

            {/* Reception */}
            <div className="details-card text-center">
              <div className="flex justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-eucalyptus-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl mb-2">{t("home.reception")}</h3>
              <p className="font-montserrat text-sm text-gray-600 mb-4">{t("common.date")} at 6:00 PM</p>
              <p className="font-montserrat text-sm text-gray-600">
                Hotel Dann Carlton Medellín
                <br />
                Calle 5A #43B-25
                <br />
                Medellín, Colombia
              </p>
            </div>

            {/* Accommodations */}
            <div className="details-card text-center">
              <div className="flex justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-eucalyptus-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl mb-2">{t("home.accommodations")}</h3>
              <p className="font-montserrat text-sm text-gray-600 mb-4">Special rates available</p>
              <p className="font-montserrat text-sm text-gray-600">
                Hotel Dann Carlton Medellín
                <br />
                Calle 5A #43B-25
                <br />
                Medellín, Colombia
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/details" className="btn-outline">
              {t("home.weddingDetails")}
            </Link>
          </div>
        </div>
      </section>

      {/* Photo Gallery Preview */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-subtitle">{t("home.memories")}</span>
            <h2 className="section-title">{t("home.ourJourney")}</h2>
          </div>

          <div className="image-grid">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="relative aspect-square overflow-hidden">
                <img
                  src={`/images/gallery-${i}.jpg`}
                  alt={`Timofey and Natalia photo ${i}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/our-story" className="btn-outline">
              {t("common.ourStory")}
            </Link>
          </div>
        </div>
      </section>

      {/* RSVP Call to Action */}
      <section className="py-20 bg-hortensia-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-subtitle">{t("home.joinUs")}</span>
            <h2 className="section-title">{t("home.willYouJoin")}</h2>
            <p className="font-montserrat text-gray-600 mb-8 leading-relaxed">{t("home.hopeJoin")}</p>
            <Link to="/rsvp" className="btn-primary inline-block">
              {t("common.rsvp")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
