import { useTranslation } from "react-i18next"
import Display, { DisplayAccountNumber } from "../components/Display"

const Registry = () => {
  const { t } = useTranslation()

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-hortensia-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-subtitle">{t("registry.giftRegistry")}</span>
            <h1 className="section-title">{t("common.registry")}</h1>
            <p className="font-montserrat text-gray-600 leading-relaxed">{t("registry.registryIntro")}</p>
          </div>
        </div>
      </section>

      {/* Registry Options */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Amazon Wishlist */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-8">
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
              <h2 className="font-cormorant text-2xl mb-4">{t("registry.amazonWishlist")}</h2>
              <p className="font-montserrat text-sm text-gray-600 mb-8">
                {t("registry.amazonWishlistInfo")}
              </p>
              <div className="w-full max-w-xs mb-8">
                <div className="aspect-[4/3] relative bg-white p-4 flex items-center justify-center shadow-sm">
                  <img src="/images/amazon-logo.svg" alt="Amazon Logo" className="w-32 h-32 object-contain" />
                </div>
              </div>
              <a href="#" target="_blank" rel="noopener noreferrer" className="btn-outline pointer-events-none opacity-50 cursor-not-allowed">
                To be continued
              </a>
            </div>

            {/* Bank Accounts */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-8">
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
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>
              <h2 className="font-cormorant text-2xl mb-4">{t("registry.bankTransfers")}</h2>
              <p className="font-montserrat text-sm text-gray-600 mb-8">
                {t("registry.bankTransfersInfo")}
              </p>
              <div className="w-full max-w-xs mb-8">
                <div className="bg-white p-6 shadow-sm text-left">
                  <h3 className="font-cormorant text-xl mb-4">{t("registry.nataliaAccount")}</h3>
                  <p className="font-montserrat text-sm text-gray-600 mb-2">{t("registry.bank")}: Bancolombia</p>
                  <DisplayAccountNumber />
                  <p className="font-montserrat text-sm text-gray-600 mb-2">{t("registry.accountType")}: Ahorros</p>
                  <h3 className="font-cormorant text-xl mt-4 mb-4">{t("registry.timoAccount")}</h3>
                  <p className="font-montserrat text-sm text-gray-600 mb-2">{t("registry.bank")}: Consorsbank</p>
                  <Display />
                  <p className="font-montserrat text-sm text-gray-600 mb-2">{t("registry.bicSwift")}: CSDBDE71XXX</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8">
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
