import { useTranslation } from "react-i18next"

const OurStory = () => {
  const { t } = useTranslation()

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-hortensia-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-subtitle">{t("ourStory.aboutUs")}</span>
            <h1 className="section-title">{t("ourStory.loveStory")}</h1>
            <p className="font-montserrat text-gray-600 leading-relaxed">{t("ourStory.storyIntro")}</p>
          </div>
        </div>
      </section>

      {/* Story Timeline */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* How We Met */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-20">
              <div className="relative aspect-square md:aspect-auto md:h-full overflow-hidden">
                <img
                  src="/images/story-1.jpg"
                  alt="Timofey and Natalia when they first met"
                  className="w-full h-full object-cover"
                />
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
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  <span className="font-montserrat text-sm uppercase tracking-wider text-gray-500">
                    {t("ourStory.howWeMet")}
                  </span>
                </div>
                <h2 className="font-cormorant text-3xl mb-4">{t("ourStory.chanceEncounter")}</h2>
                <p className="font-montserrat text-gray-600 leading-relaxed mb-4">{t("ourStory.howWeMet1")}</p>
                <p className="font-montserrat text-gray-600 leading-relaxed">{t("ourStory.howWeMet2")}</p>
              </div>
            </div>

            {/* Our Journey */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-20">
              <div className="flex flex-col justify-center order-2 md:order-1">
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
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  <span className="font-montserrat text-sm uppercase tracking-wider text-gray-500">
                    {t("ourStory.ourJourney")}
                  </span>
                </div>
                <h2 className="font-cormorant text-3xl mb-4">{t("ourStory.growingTogether")}</h2>
                <p className="font-montserrat text-gray-600 leading-relaxed mb-4">{t("ourStory.journey1")}</p>
                <p className="font-montserrat text-gray-600 leading-relaxed">{t("ourStory.journey2")}</p>
              </div>
              <div className="relative aspect-square md:aspect-auto md:h-full overflow-hidden order-1 md:order-2">
                <img
                  src="/images/story-2.jpg"
                  alt="Timofey and Natalia traveling together"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* The Proposal */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="relative aspect-square md:aspect-auto md:h-full overflow-hidden">
                <img
                  src="/images/story-3.jpg"
                  alt="Timofey proposing to Natalia"
                  className="w-full h-full object-cover"
                />
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
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  <span className="font-montserrat text-sm uppercase tracking-wider text-gray-500">
                    {t("ourStory.theProposal")}
                  </span>
                </div>
                <h2 className="font-cormorant text-3xl mb-4">{t("ourStory.perfectSurprise")}</h2>
                <p className="font-montserrat text-gray-600 leading-relaxed mb-4">{t("ourStory.proposal1")}</p>
                <p className="font-montserrat text-gray-600 leading-relaxed">{t("ourStory.proposal2")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-hortensia-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-cormorant text-3xl md:text-4xl italic mb-6">{t("ourStory.quote")}</h2>
            <p className="font-montserrat text-sm uppercase tracking-wider text-gray-500">
              {t("ourStory.quoteAuthor")}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurStory
