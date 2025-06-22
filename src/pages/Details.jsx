import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import Map from "../components/Map"

const Details = () => {
  const { t } = useTranslation()

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-hortensia-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-subtitle">{t("details.joinUs")}</span>
            <h1 className="section-title">{t("details.weddingDetails")}</h1>
            <p className="font-montserrat text-gray-600 leading-relaxed">{t("details.detailsIntro")}</p>
          </div>
        </div>
      </section>

      {/* Main Events */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-subtitle">{t("details.schedule")}</span>
            <h2 className="section-title">{t("details.theBigDay")}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Ceremony */}
            <div className="flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden mb-6">
                <img src="/images/ceremony.jpg" alt="Iglesia de la Veracruz" className="w-full h-full object-cover" />
              </div>
              <div className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-eucalyptus-400 mr-2"
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
                <span className="font-montserrat text-sm uppercase tracking-wider text-gray-500">
                  {t("details.ceremony")}
                </span>
              </div>
              <h3 className="font-cormorant text-2xl mb-2">Iglesia de la Veracruz</h3>
              <p className="font-montserrat text-sm text-gray-600 mb-4">{t("common.date")} at 4:00 PM</p>
              <p className="font-montserrat text-sm text-gray-600 mb-4">
                Calle 51 #52-58
                <br />
                Medellín, Colombia
              </p>
              <p className="font-montserrat text-sm text-gray-600">
                The ceremony will last approximately one hour. Please arrive 30 minutes early to be seated. The dress
                code is formal attire.
              </p>
            </div>

            {/* Reception */}
            <div className="flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden mb-6">
                <img
                  src="/images/reception.jpg"
                  alt="Hotel Dann Carlton Medellín"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-eucalyptus-400 mr-2"
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
                <span className="font-montserrat text-sm uppercase tracking-wider text-gray-500">
                  {t("details.reception")}
                </span>
              </div>
              <h3 className="font-cormorant text-2xl mb-2">Hotel Dann Carlton Medellín</h3>
              <p className="font-montserrat text-sm text-gray-600 mb-4">{t("common.date")} at 6:00 PM</p>
              <p className="font-montserrat text-sm text-gray-600 mb-4">
                Calle 5A #43B-25
                <br />
                Medellín, Colombia
              </p>
              <p className="font-montserrat text-sm text-gray-600">
                Join us for cocktails, dinner, and dancing as we celebrate our marriage. The evening will include a
                seated dinner, toasts, and plenty of dancing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Timeline */}
      <section className="py-20 bg-hortensia-50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-subtitle">{t("details.itinerary")}</span>
            <h2 className="section-title">{t("details.weddingDaySchedule")}</h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="space-y-0">
              <div className="timeline-item">
                <div className="timeline-dot bg-eucalyptus-200"></div>
                <div className="timeline-content">
                  <h3 className="font-cormorant text-xl mb-1">3:30 PM</h3>
                  <p className="font-montserrat text-sm font-medium mb-1">Guest Arrival</p>
                  <p className="font-montserrat text-sm text-gray-600">
                    Please arrive at Iglesia de la Veracruz to be seated
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot bg-eucalyptus-200"></div>
                <div className="timeline-content">
                  <h3 className="font-cormorant text-xl mb-1">4:00 PM</h3>
                  <p className="font-montserrat text-sm font-medium mb-1">Ceremony Begins</p>
                  <p className="font-montserrat text-sm text-gray-600">Exchange of vows and rings</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot bg-eucalyptus-200"></div>
                <div className="timeline-content">
                  <h3 className="font-cormorant text-xl mb-1">5:00 PM</h3>
                  <p className="font-montserrat text-sm font-medium mb-1">Post-Ceremony</p>
                  <p className="font-montserrat text-sm text-gray-600">Group photos and travel to reception venue</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot bg-eucalyptus-200"></div>
                <div className="timeline-content">
                  <h3 className="font-cormorant text-xl mb-1">6:00 PM</h3>
                  <p className="font-montserrat text-sm font-medium mb-1">Cocktail Hour</p>
                  <p className="font-montserrat text-sm text-gray-600">
                    Drinks and hors d'oeuvres at Hotel Dann Carlton Medellín
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot bg-eucalyptus-200"></div>
                <div className="timeline-content">
                  <h3 className="font-cormorant text-xl mb-1">7:00 PM</h3>
                  <p className="font-montserrat text-sm font-medium mb-1">Dinner Service</p>
                  <p className="font-montserrat text-sm text-gray-600">Seated dinner and toasts</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot bg-eucalyptus-200"></div>
                <div className="timeline-content">
                  <h3 className="font-cormorant text-xl mb-1">9:00 PM</h3>
                  <p className="font-montserrat text-sm font-medium mb-1">First Dance</p>
                  <p className="font-montserrat text-sm text-gray-600">Followed by dancing and celebration</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot bg-eucalyptus-200"></div>
                <div className="timeline-content">
                  <h3 className="font-cormorant text-xl mb-1">12:00 AM</h3>
                  <p className="font-montserrat text-sm font-medium mb-1">Farewell</p>
                  <p className="font-montserrat text-sm text-gray-600">End of celebration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Venue Map */}
      <section className="py-20 bg-hortensia-50">
        <div className="container">
          <div className="text-center mb-12">
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
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-subtitle">{t("details.information")}</span>
            <h2 className="section-title">{t("details.whatToKnow")}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
              <div className="mt-2">
                <a
                  href="https://pin.it/1mPYSjAoR"
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
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.084 2.438 7.5 6.188 7.5 1.25 0 1.75-.875 1.75-1.75 0-.438-.031-1.563-.031-2.844 0 0-.438.875-1.063 1.094-.625.219-1.531-.188-1.531-.938 0-.75.531-1.344 1.188-1.344.656 0 1.031.5 1.031 1.094 0 .594-.375 1.469-.375 2.031 0 .563.438.75.938.75 1.25 0 2.188-1.344 2.188-3.281 0-1.719-1.219-2.969-2.969-2.969-2.031 0-3.188 1.531-3.188 3.125 0 .594.188 1.031.438 1.313.094.094.125.125.094.25-.031.094-.094.313-.125.406-.031.094-.125.125-.281.094-.781-.25-1.25-1.031-1.25-2.094 0-2.188 1.844-4.781 5.5-4.781 2.938 0 4.625 2.063 4.625 4.281 0 2.938-1.625 4.594-4.031 4.594-.813 0-1.594-.438-1.844-.938l-.5 1.938c-.156.594-.438 1.344-.656 1.813.5.156 1.031.25 1.594.25 5.523 0 10-4.477 10-10S17.523 2 12 2z" />
                  </svg>
                  {t("details.dressCodePinterest")}
                </a>
              </div>
            </div>
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
              <Link to="/registry" className="btn-primary inline-block mt-4">
                {t('registry.giftRegistry')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
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
