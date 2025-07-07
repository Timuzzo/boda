import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import Map from "../components/Map"

const Details = () => {
  const { t } = useTranslation()

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-hortensia-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-subtitle">{t("details.joinUs")}</span>
            <h1 className="section-title">{t("details.weddingDetails")}</h1>
            <p className="font-montserrat text-gray-600 leading-relaxed">{t("details.detailsIntro")}</p>
          </div>
        </div>
      </section>

      {/* Schedule Timeline Placeholder */}
      <section className="py-12 md:py-16 bg-hortensia-50">
        <div className="container">
          <div className="text-center mb-8">
            <span className="section-subtitle">{t("details.itinerary")}</span>
            <h2 className="section-title">{t("details.weddingDaySchedule")}</h2>
          </div>
          <div className="flex flex-col items-center justify-center min-h-[200px]">
            <h3 className="font-cormorant text-4xl md:text-5xl mb-4 text-gray-700">To be continued...</h3>
            <p className="font-montserrat text-gray-500 text-lg text-center max-w-xl">{t("details.comingSoon", "We are working on this section. Please check back soon for the full schedule of our special day!")}</p>
          </div>
        </div>
      </section>

      {/* Venue Map */}
      <section className="py-12 md:py-16 bg-hortensia-50">
        <div className="container">
          <div className="text-center mb-8">
            <span className="section-subtitle">{t("details.location")}</span>
            <h2 className="section-title">{t("details.venueMap")}</h2>
          </div>
          <div className="max-w-5xl mx-auto px-4">
            <div className="mb-6 text-center">
              <h3 className="font-cormorant text-2xl text-eucalyptus-700">Fábula Bodas & Eventos</h3>
              <p className="font-montserrat text-sm text-gray-600 mt-2">Medellín, Colombia</p>
            </div>
            <Map />
            <div className="mt-8 text-center">
              <a
                href="https://www.google.de/maps/place/F%C3%A1bula+Bodas+%26+Eventos/@6.1586035,-75.6344229,12z/data=!4m10!1m2!2m1!1sfabula+medellin!3m6!1s0x8e4683025af66275:0x8a86f02b69e6d0aa!8m2!3d6.1269428!4d-75.5491873!15sCg9mYWJ1bGEgbWVkZWxsaW6SAQtldmVudF92ZW51ZaoBQxABKgoiBmZhYnVsYSgFMh4QASIatMqV0kTiGzFjmCxD0DDSNobCyyCEt_f9fWYyExACIg9mYWJ1bGEgbWVkZWxsaW7gAQA!16s%2Fg%2F11w_dchm0m?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-eucalyptus-600 hover:text-eucalyptus-700 transition-colors"
              >
                <span className="font-montserrat text-sm uppercase tracking-wider mr-2">
                  {t("details.openInMaps")}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
            {/* Instagram Link */}
            <div className="mt-4 text-center">
              <a
                href="https://www.instagram.com/fabulacampestre"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-pink-600 hover:text-pink-700 font-montserrat text-sm transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 mr-2"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.25a6.25 6.25 0 1 1-6.25 6.25A6.25 6.25 0 0 1 12 5.75zm0 1.5a4.75 4.75 0 1 0 4.75 4.75A4.75 4.75 0 0 0 12 7.25zm6.5 1.25a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
                </svg>
                @fabulacampestre
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="text-center mb-8">
            <span className="section-subtitle">{t("details.information")}</span>
            <h2 className="section-title">{t("details.whatToKnow")}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Gifts */}
            <div className="text-center">
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
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl mb-2">{t("details.gifts")}</h3>
              <p className="font-montserrat text-sm text-gray-600">{t("details.giftsInfo")}</p>
              <div className="mt-6 flex justify-center">
                <Link to="/registry" className="btn-primary inline-block">
                  {t('registry.giftRegistry')}
                </Link>
              </div>
            </div>
            {/* Dress Code */}
            <div className="text-center">
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
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl mb-2">{t("details.dressCode")}</h3>
              <p className="font-montserrat text-sm text-gray-600 mb-2">{t("details.dressCodeWomen")}</p>
              <p className="font-montserrat text-sm text-gray-600 mb-2">{t("details.dressCodeMen")}</p>
              <p className="font-montserrat text-sm text-gray-600 mb-4">{t("details.dressCodeRecommendations")}</p>
              <div className="mt-6 flex justify-center">
                <a
                  href="https://pin.it/1mPYSjAoR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center"
                >
                  {t("details.dressCodePinterest")}
                </a>
              </div>
            </div>
            {/* FAQ */}
            <div className="text-center">
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
                    d="M7 8h10M7 12h6m-6 4h8a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v7a2 2 0 002 2h2l3 3 3-3z"
                  />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl mb-2">{t("faq.frequentlyAsked")}</h3>
              <p className="font-montserrat text-sm text-gray-600 mb-4">{t("faq.faqIntro")}</p>
              <div className="mt-6 flex justify-center">
                <Link to="/faq" className="btn-primary inline-block">
                  {t('details.faqButton', 'Go to FAQ')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Events Section - Redesigned as Tiles */}
      <section className="py-12 md:py-16 bg-hortensia-50">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-subtitle flex items-center justify-center gap-2 text-lg mb-2">
              <span role="img" aria-label="calendar">📅</span> {t("details.additionalEventsItinerary")}
            </span>
            <h2 className="section-title mb-2">{t("details.additionalEventsMagic")}</h2>
            <p className="font-montserrat text-gray-600 mb-6">{t("details.additionalEventsIntro")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Get Together Tile */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
              <div className="text-4xl mb-3">🥂</div>
              <h3 className="font-cormorant text-xl mb-2">{t("details.getTogetherTitle")}</h3>
              <p className="font-montserrat text-gray-600">{t("details.getTogetherDesc")}</p>
            </div>

            {/* After Party BBQ Tile */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
              <div className="text-4xl mb-3">🍖</div>
              <h3 className="font-cormorant text-xl mb-2">{t("details.bbqTitle")}</h3>
              <p className="font-montserrat text-gray-600">{t("details.bbqDesc")}</p>
            </div>

            {/* Escapada a Guatapé & El Peñol Tile */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center md:col-span-2">
              <div className="text-4xl mb-3">🏞️</div>
              <h3 className="font-cormorant text-xl mb-2">{t("details.guatapeTitle")}</h3>
              <p className="font-montserrat text-gray-600 mb-4">{t("details.guatapeDesc")}</p>
              <a href="https://es-l.airbnb.com/rooms/27826434?source_impression_id=p3_1751909080_P3oTbiKgnfcmEx5j" target="_blank" rel="noopener noreferrer" className="btn-outline">{t("details.casaAguasBtn")}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">{t("details.readyToJoin")}</h2>
            <p className="font-montserrat text-gray-600 mb-8 leading-relaxed">{t("details.hopeJoin")}</p>
            <Link to="/rsvp" className="btn-primary inline-block">
              {t("common.rsvp")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Details
