import { useState } from "react"
import { useTranslation } from "react-i18next"

const FAQ = () => {
  const { t } = useTranslation()
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "faq.rsvpDeadline",
      answer: "faq.rsvpDeadlineAnswer",
    },
    {
      question: "faq.weather",
      answer: "faq.weatherAnswer",
    },
    {
      question: "faq.transportation",
      answer: "faq.transportationAnswer",
    },
    {
      question: "faq.indoorsOutdoors",
      answer: "faq.indoorsOutdoorsAnswer",
    },
    {
      question: "faq.parking",
      answer: "faq.parkingAnswer",
    },
    {
      question: "faq.vaccination",
      answer: "faq.vaccinationAnswer",
    },
  ]

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-hortensia-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-subtitle">{t("faq.frequentlyAsked")}</span>
            <h1 className="section-title">{t("common.faq")}</h1>
            <p className="font-montserrat text-gray-600 leading-relaxed">{t("faq.faqIntro")}</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <h3 className="font-cormorant text-xl text-eucalyptus-700">
                      {t(faq.question)}
                    </h3>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-6 w-6 text-eucalyptus-400 transition-transform ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className={`px-6 py-4 bg-gray-50 transition-all duration-300 ${
                      openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    } overflow-hidden`}
                  >
                    <p className="font-montserrat text-gray-600">{t(faq.answer)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQ 