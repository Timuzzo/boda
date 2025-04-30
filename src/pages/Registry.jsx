import { useTranslation } from "react-i18next"

const Registry = () => {
  const { t } = useTranslation()

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-hortensia-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-subtitle">{t("registry.giftRegistry")}</span>
            <h1 className="section-title">{t("common.registry")}</h1>
            <p className="font-montserrat text-gray-600 leading-relaxed">{t("registry.registryIntro")}</p>
          </div>
        </div>
      </section>

      {/* Registry Options */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Traditional Registry */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-eucalyptus-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h2 className="font-cormorant text-2xl mb-4">{t("registry.traditionalRegistry")}</h2>
              <p className="font-montserrat text-sm text-gray-600 mb-6">{t("registry.traditionalInfo")}</p>
              <div className="grid grid-cols-2 gap-6 w-full max-w-xs mb-8">
                <div className="aspect-square relative bg-white p-4 flex items-center justify-center shadow-sm">
                  <img src="/images/registry-1.jpg" alt="Falabella Logo" className="w-full h-full object-contain" />
                </div>
                <div className="aspect-square relative bg-white p-4 flex items-center justify-center shadow-sm">
                  <img src="/images/registry-2.jpg" alt="Exito Logo" className="w-full h-full object-contain" />
                </div>
                <div className="aspect-square relative bg-white p-4 flex items-center justify-center shadow-sm">
                  <img src="/images/registry-3.jpg" alt="Home Center Logo" className="w-full h-full object-contain" />
                </div>
                <div className="aspect-square relative bg-white p-4 flex items-center justify-center shadow-sm">
                  <img
                    src="/images/registry-4.jpg"
                    alt="Ambiente Gourmet Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <a href="#" target="_blank" rel="noopener noreferrer" className="btn-outline">
                {t("registry.viewRegistry")}
              </a>
            </div>

            {/* Honeymoon Fund */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-eucalyptus-400"
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
              <h2 className="font-cormorant text-2xl mb-4">{t("registry.honeymoonFund")}</h2>
              <p className="font-montserrat text-sm text-gray-600 mb-6">{t("registry.honeymoonInfo")}</p>
              <div className="relative aspect-[4/3] w-full max-w-xs mb-8 overflow-hidden">
                <img src="/images/honeymoon.jpg" alt="Honeymoon destination" className="w-full h-full object-cover" />
              </div>
              <a href="#" target="_blank" rel="noopener noreferrer" className="btn-primary">
                {t("registry.contribute")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Charity Section */}
      <section className="py-20 bg-hortensia-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-eucalyptus-400 mx-auto"
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
            </div>
            <h2 className="section-title">{t("registry.charitableDonations")}</h2>
            <p className="font-montserrat text-gray-600 mb-8">{t("registry.charityInfo")}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-6 shadow-sm">
                <h3 className="font-cormorant text-xl mb-3">Fundación Natura Colombia</h3>
                <p className="font-montserrat text-sm text-gray-600 mb-4">
                  Supporting conservation efforts to protect Colombia's biodiversity and natural resources.
                </p>
                <a
                  href="https://www.natura.org.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-montserrat text-sm text-eucalyptus-600 underline"
                >
                  {t("registry.donate")}
                </a>
              </div>
              <div className="bg-white p-6 shadow-sm">
                <h3 className="font-cormorant text-xl mb-3">Fundación Salva Terra</h3>
                <p className="font-montserrat text-sm text-gray-600 mb-4">
                  Working to improve food security and sustainable agriculture in rural Colombian communities.
                </p>
                <a
                  href="https://www.salvaterra.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-montserrat text-sm text-eucalyptus-600 underline"
                >
                  {t("registry.donate")}
                </a>
              </div>
              <div className="bg-white p-6 shadow-sm">
                <h3 className="font-cormorant text-xl mb-3">Fundación Batuta</h3>
                <p className="font-montserrat text-sm text-gray-600 mb-4">
                  Providing music education to children and youth in vulnerable situations across Colombia.
                </p>
                <a
                  href="https://www.fundacionbatuta.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-montserrat text-sm text-eucalyptus-600 underline"
                >
                  {t("registry.donate")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-eucalyptus-400 mx-auto"
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
            <h2 className="section-title">{t("registry.thankYou")}</h2>
            <p className="font-montserrat text-gray-600">{t("registry.thankYouMessage")}</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Registry
