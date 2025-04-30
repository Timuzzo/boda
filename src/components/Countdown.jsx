import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"

const Countdown = () => {
  const { t } = useTranslation()
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Wedding date: January 31, 2026 at 4:00 PM
    const weddingDate = new Date(2026, 0, 31, 16, 0, 0)

    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = weddingDate.getTime() - now.getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((difference / (1000 * 60)) % 60)
        const seconds = Math.floor((difference / 1000) % 60)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    // Initial calculation
    calculateTimeLeft()

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000)

    // Clear interval on component unmount
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-hortensia-50 py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="font-cormorant text-3xl md:text-4xl font-light text-eucalyptus-700">
            {t("home.countdown.untilWedding")}
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          <div className="bg-white p-4 md:p-6 shadow-sm text-center">
            <div className="font-cormorant text-4xl md:text-5xl text-eucalyptus-600 mb-2">{timeLeft.days}</div>
            <div className="font-montserrat text-xs uppercase tracking-wider text-hortensia-600">
              {t("home.countdown.days")}
            </div>
          </div>
          <div className="bg-white p-4 md:p-6 shadow-sm text-center">
            <div className="font-cormorant text-4xl md:text-5xl text-eucalyptus-600 mb-2">{timeLeft.hours}</div>
            <div className="font-montserrat text-xs uppercase tracking-wider text-hortensia-600">
              {t("home.countdown.hours")}
            </div>
          </div>
          <div className="bg-white p-4 md:p-6 shadow-sm text-center">
            <div className="font-cormorant text-4xl md:text-5xl text-eucalyptus-600 mb-2">{timeLeft.minutes}</div>
            <div className="font-montserrat text-xs uppercase tracking-wider text-hortensia-600">
              {t("home.countdown.minutes")}
            </div>
          </div>
          <div className="bg-white p-4 md:p-6 shadow-sm text-center">
            <div className="font-cormorant text-4xl md:text-5xl text-eucalyptus-600 mb-2">{timeLeft.seconds}</div>
            <div className="font-montserrat text-xs uppercase tracking-wider text-hortensia-600">
              {t("home.countdown.seconds")}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Countdown
