import { useTranslation } from "react-i18next"

const Travel = () => {
  const { t } = useTranslation()

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-hortensia-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-subtitle">{t("travel.gettingHere")}</span>
            <h1 className="section-title">{t("travel.travelAccommodations")}</h1>
            <p className="font-montserrat text-gray-600 leading-relaxed">{t("travel.travelIntro")}</p>
          </div>
        </div>
      </section>

      {/* Travel Information */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="text-center mb-8">
            <span className="section-subtitle">{t("travel.transportation")}</span>
            <h2 className="section-title">{t("travel.gettingToMedellin")}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* By Air */}
            <div className="details-card">
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
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl mb-2 text-center">{t("travel.byAir")}</h3>
              <p className="font-montserrat text-sm text-gray-600 mb-4">{t("travel.byAirInfo1")}</p>
              <p className="font-montserrat text-sm text-gray-600">{t("travel.byAirInfo2")}</p>
            </div>

            {/* Airport Transfer */}
            <div className="details-card">
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
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl mb-2 text-center">{t("travel.airportTransfer")}</h3>
              <p className="font-montserrat text-sm text-gray-600 mb-4">{t("travel.airportTransferInfo")}</p>
              <ul className="font-montserrat text-sm text-gray-600 list-disc pl-5 space-y-2">
                <li>{t("travel.taxi")}</li>
                <li>{t("travel.bus")}</li>
                <li>{t("travel.uber")}</li>
                <li>{t("travel.privateTransfer")}</li>
              </ul>
            </div>

            {/* Getting Around */}
            <div className="details-card">
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
              <h3 className="font-cormorant text-2xl mb-2 text-center">{t("travel.gettingAround")}</h3>
              <p className="font-montserrat text-sm text-gray-600 mb-4">{t("travel.gettingAroundInfo1")}</p>
              <p className="font-montserrat text-sm text-gray-600">{t("travel.gettingAroundInfo2")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodations */}
      <section className="py-12 md:py-16 bg-hortensia-50">
        <div className="container">
          <div className="text-center mb-8">
            <span className="section-subtitle">{t("travel.whereToStay")}</span>
            <h2 className="section-title">{t("travel.accommodations")}</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Main Hotel */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="relative aspect-square md:aspect-auto md:h-full overflow-hidden">
                <img src="/images/hotel.jpg" alt="Hotel Dann Carlton Medellín" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col justify-center">
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
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  <span className="font-montserrat text-sm uppercase tracking-wider text-gray-500">
                    {t("travel.mainHotel")}
                  </span>
                </div>
                <h3 className="font-cormorant text-2xl mb-2">Hotel Dann Carlton Medellín</h3>
                <p className="font-montserrat text-sm text-gray-600 mb-4">
                  Calle 5A #43B-25
                  <br />
                  Medellín, Colombia
                </p>
                <p className="font-montserrat text-sm text-gray-600 mb-4">{t("travel.hotelInfo")}</p>
                <a
                  href="https://www.hoteldanncarlton.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline inline-block self-start"
                >
                  {t("travel.bookNow")}
                </a>
              </div>
            </div>

            {/* Alternative Options */}
            <div className="text-center mb-8">
              <h3 className="font-cormorant text-2xl mb-4">{t("travel.alternativeAccommodations")}</h3>
              <p className="font-montserrat text-sm text-gray-600 mb-6 max-w-2xl mx-auto">
                {t("travel.alternativeInfo")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="details-card">
                <h4 className="font-cormorant text-xl mb-2">{t("travel.luxury")}</h4>
                <ul className="font-montserrat text-sm text-gray-600 space-y-3">
                  <li>
                    <strong>Hotel Park 10</strong>
                    <br />
                    Calle 9A #37-16, El Poblado
                    <br />
                    10-minute drive to reception
                  </li>
                  <li>
                    <strong>Medellin Marriott Hotel</strong>
                    <br />
                    Calle 16 #28-51, Variante Las Palmas
                    <br />
                    15-minute drive to reception
                  </li>
                </ul>
              </div>

              <div className="details-card">
                <h4 className="font-cormorant text-xl mb-2">{t("travel.midRange")}</h4>
                <ul className="font-montserrat text-sm text-gray-600 space-y-3">
                  <li>
                    <strong>Hotel Diez</strong>
                    <br />
                    Calle 10A #34-11, El Poblado
                    <br />
                    12-minute drive to reception
                  </li>
                  <li>
                    <strong>Sites Hotel</strong>
                    <br />
                    Calle 8 #43C-23, El Poblado
                    <br />
                    10-minute drive to reception
                  </li>
                </ul>
              </div>

              <div className="details-card">
                <h4 className="font-cormorant text-xl mb-2">{t("travel.budgetFriendly")}</h4>
                <ul className="font-montserrat text-sm text-gray-600 space-y-3">
                  <li>
                    <strong>Hotel Poblado Plaza</strong>
                    <br />
                    Carrera 43A #4 Sur-75, El Poblado
                    <br />
                    15-minute drive to reception
                  </li>
                  <li>
                    <strong>Selina Medellin</strong>
                    <br />
                    Calle 10 #36-24, El Poblado
                    <br />
                    12-minute drive to reception
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Things to Do */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="text-center mb-8">
            <span className="section-subtitle">{t("travel.explore")}</span>
            <h2 className="section-title">{t("travel.thingsToDoMedellin")}</h2>
            <p className="font-montserrat text-gray-600 max-w-2xl mx-auto">{t("travel.exploreInfo")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-eucalyptus-400"
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
              <div>
                <h3 className="font-cormorant text-xl mb-1">Parque Arví</h3>
                <p className="font-montserrat text-sm text-gray-600 mb-2">
                  A beautiful ecological nature preserve accessible by cable car with stunning views of the city.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-eucalyptus-400"
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
              <div>
                <h3 className="font-cormorant text-xl mb-1">Plaza Botero</h3>
                <p className="font-montserrat text-sm text-gray-600 mb-2">
                  An open-air museum featuring 23 sculptures by renowned Colombian artist Fernando Botero.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-eucalyptus-400"
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
              <div>
                <h3 className="font-cormorant text-xl mb-1">Comuna 13</h3>
                <p className="font-montserrat text-sm text-gray-600 mb-2">
                  Once one of the most dangerous neighborhoods, now transformed with colorful street art and outdoor
                  escalators.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-eucalyptus-400"
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
              <div>
                <h3 className="font-cormorant text-xl mb-1">Jardín Botánico</h3>
                <p className="font-montserrat text-sm text-gray-600 mb-2">
                  A peaceful botanical garden with a butterfly house and various plant species from Colombia.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-eucalyptus-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.701 2.701 0 01-1.5.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-cormorant text-xl mb-1">Our Favorite Restaurants</h3>
                <ul className="font-montserrat text-sm text-gray-600 space-y-1">
                  <li>• El Cielo - Modern Colombian cuisine</li>
                  <li>• Carmen - Elegant fusion restaurant</li>
                  <li>• Mondongos - Traditional Colombian food</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-eucalyptus-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-cormorant text-xl mb-1">Shopping</h3>
                <ul className="font-montserrat text-sm text-gray-600 space-y-1">
                  <li>• El Tesoro Shopping Park</li>
                  <li>• Santa Fe Mall</li>
                  <li>• Mercado del Rio - Food market</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weather Information */}
      <section className="py-12 md:py-16 bg-hortensia-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-subtitle">{t("travel.bePrepared")}</span>
            <h2 className="section-title">{t("travel.weatherJanuary")}</h2>
            <p className="font-montserrat text-gray-600 mb-6">{t("travel.weatherInfo1")}</p>
            <p className="font-montserrat text-gray-600">{t("travel.weatherInfo2")}</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Travel
