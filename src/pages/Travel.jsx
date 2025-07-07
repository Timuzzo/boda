import { useTranslation } from "react-i18next"

const Travel = () => {
  const { t } = useTranslation()

  return (
    <div className="flex justify-center pt-16 md:pt-20 min-h-screen w-full">
      <div className="w-full max-w-6xl">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-hortensia-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <span className="section-subtitle">{t("travel.gettingHere")}</span>
              <h1 className="section-title">{t("travel.travelAccommodations")}</h1>
              <p className="font-montserrat text-gray-600 leading-relaxed">{t("travel.travelIntro")}</p>
              <p className="font-montserrat text-gray-600 leading-relaxed">{t("travel.travelIntro3")}</p>
              <p className="font-montserrat text-gray-600 leading-relaxed font-bold">{t("travel.travelIntro2")}</p>
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

            <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
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
                <div className="font-montserrat text-sm text-gray-600 mt-4">
                  <strong>{t("travel.europeRoutes").split("\n")[0]}</strong>
                  <ul className="list-disc pl-5 mt-2">
                    {t("travel.europeRoutes")
                      .split("\n")
                      .slice(1)
                      .filter(line => line.trim() !== "")
                      .map((line, idx) => (
                        <li key={idx}>{line}</li>
                      ))}
                  </ul>
                  <p className="mt-3">{t("travel.europePriceInfo")}</p>
                </div>
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
                  <li>{t("travel.taxi120")}</li>
                  <li>{t("travel.busSanDiego")}</li>
                  <li>{t("travel.uber")}</li>
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
                <div className="font-montserrat text-sm text-gray-600">
                  {t("travel.gettingAroundFull")}
                </div>
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
            <div className="max-w-4xl mx-auto text-center">
              {/* Main Hotel */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* El Albergue Airbnb */}
                <div className="relative aspect-square md:aspect-auto md:h-full overflow-hidden bg-gray-100 flex items-center justify-center group rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                  <img src="/images/El_Albergue.jpeg" alt="El Albergue" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="font-cormorant text-2xl mb-2 text-center">El Albergue</h3>
                  <ul className="font-montserrat text-sm text-gray-600 list-disc pl-5 space-y-2 mb-2 text-left inline-block">
                    {t("travel.albergueDescriptionList", { returnObjects: true }).map((item, idx) => {
                      if (item.includes("26.01.2026") && item.includes("08.02.2026")) {
                        // Bold the dates in the string
                        const parts = item.split(/(26\.01\.2026|08\.02\.2026)/);
                        return (
                          <li key={idx}>
                            {parts.map((part, i) =>
                              part === "26.01.2026" || part === "08.02.2026" ? <strong key={i}>{part}</strong> : part
                            )}
                          </li>
                        );
                      }
                      return <li key={idx}>{item}</li>;
                    })}
                  </ul>
                  <div className="flex justify-center w-full mt-2">
                    <a
                      href="https://www.airbnb.de/rooms/1114363646383176199?viralityEntryPoint=1&s=76&_set_bev_on_new_domain=1751626065_EAZDA2YTBmMmZlMj&source_impression_id=p3_1751626067_P36jrUVYWWQNe_nr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline"
                    >
                      {t("travel.viewOnAirbnb")}
                    </a>
                  </div>
                </div>
              </div>

              {/* Grouped Areas & Accommodations in One Tile */}
              <div className="flex justify-center mb-12">
                <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl w-full text-center">
                  <h3 className="font-cormorant text-2xl mb-4">{t("travel.recommendedAreasTitle")}</h3>
                  <ul className="font-montserrat text-gray-600 space-y-4 mb-6 text-left inline-block text-left">
                    <li>
                      <strong>{t("travel.barrioManilaTitle")}</strong>: {t("travel.barrioManilaDesc")}
                    </li>
                    <li>
                      <strong>{t("travel.barrioPobladoTitle")}</strong>: {t("travel.barrioPobladoDesc")}
                    </li>
                  </ul>
                  <h4 className="font-cormorant text-xl mb-3">{t("travel.alternativeAccommodationsTitle")}</h4>
                  <ul className="font-montserrat text-gray-600 space-y-2 mb-2 text-left inline-block text-left">
                    <li>
                      <a href="https://www.thesomos.com" className="text-eucalyptus-600 underline font-bold" target="_blank" rel="noopener noreferrer">The Somos Bold Hotel</a>
                    </li>
                    <li>
                      <a href="https://hotelcelestino.com/?gad_source=1&gad_campaignid=19655694710" className="text-eucalyptus-600 underline font-bold" target="_blank" rel="noopener noreferrer">Celestino Boutique Hotel</a>
                    </li>
                    <li>
                      <a href="https://www.masaya-experience.com/originals/medellin/?gad_source=1&gad_campaignid=22204124120&gbraid=0AAAAAC4sT_lCocIfnHfLy0LSxa7BRKE6-&gclid=CjwKCAjw4K3DBhBqEiwAYtG_9K-QFZqdd-GfFw249D7eHzp_OrVYdF1hFnerudIeUdBjQI63L--U2hoCKCwQAvD_BwE" className="text-eucalyptus-600 underline font-bold" target="_blank" rel="noopener noreferrer">Masaya Medellín</a>
                    </li>
                    <li>
                      <a href="https://www.lamartinaboutiquehotel.co/en/?sjrncid=GA_20404463440&sjrnaid=GA_666929033967&gclsrc=aw.ds&gad_source=1&gad_campaignid=20404463440&gbraid=0AAAAAqAsJSQkV_w41dIp29J9Q-_7wxmSD&gclid=CjwKCAjw4K3DBhBqEiwAYtG_9GyMD7HnTch9HGAMLBrMgVB1ERaGEdBsAC4ajlujG2LV4E4_RnjCkRoCOQ8QAvD_BwE" className="text-eucalyptus-600 underline font-bold" target="_blank" rel="noopener noreferrer">La Martina Boutique Hotel</a>
                    </li>
                    <li>
                      <a href="https://574hotel.com" className="text-eucalyptus-600 underline font-bold" target="_blank" rel="noopener noreferrer">Hotel 574</a>
                    </li>
                    <li>
                      <a href="https://www.estelarblue.com/en/" className="text-eucalyptus-600 underline font-bold" target="_blank" rel="noopener noreferrer">ESTELAR Blue Hotel</a>
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
                  <h3 className="font-cormorant text-xl mb-1">{t("travel.parqueArvi")}</h3>
                  <p className="font-montserrat text-sm text-gray-600 mb-2">
                    {t("travel.parqueArviDesc")}
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
                  <h3 className="font-cormorant text-xl mb-1">{t("travel.plazaBotero")}</h3>
                  <p className="font-montserrat text-sm text-gray-600 mb-2">
                    {t("travel.plazaBoteroDesc")}
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
                  <h3 className="font-cormorant text-xl mb-1">{t("travel.comuna13")}</h3>
                  <p className="font-montserrat text-sm text-gray-600 mb-2">
                    {t("travel.comuna13Desc")}
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
                  <h3 className="font-cormorant text-xl mb-1">{t("travel.jardinBotanico")}</h3>
                  <p className="font-montserrat text-sm text-gray-600 mb-2">
                    {t("travel.jardinBotanicoDesc")}
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
                  <h3 className="font-cormorant text-xl mb-1">{t("travel.favoriteRestaurants")}</h3>
                  <ul className="font-montserrat text-sm text-gray-600 space-y-1">
                    <li>{t("travel.restaurantElCielo")}</li>
                    <li>{t("travel.restaurantCarmen")}</li>
                    <li>{t("travel.restaurantMondongos")}</li>
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
                  <h3 className="font-cormorant text-xl mb-1">{t("travel.shopping")}</h3>
                  <ul className="font-montserrat text-sm text-gray-600 space-y-1">
                    <li>{t("travel.shoppingTesoro")}</li>
                    <li>{t("travel.shoppingSantaFe")}</li>
                    <li>{t("travel.shoppingMercado")}</li>
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
    </div>
  )
}

export default Travel
