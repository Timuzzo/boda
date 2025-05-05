"use client"

import { useState, useRef, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { Globe } from "lucide-react"

const LanguageSwitcher = ({ onOpen }) => {
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
    if (onOpen && !isOpen) {
      onOpen()
    }
  }

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    setIsOpen(false)
  }

  const languages = [
    { code: "en", name: "English" },
    { code: "es", name: "Español" },
    { code: "ru", name: "Русский" },
    { code: "de", name: "Deutsch" },
  ]

  const currentLanguage = languages.find((lang) => lang.code === i18n.language)

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center text-hortensia-600 hover:text-eucalyptus-600 transition-colors"
        aria-label="Change language"
      >
        <Globe className="h-5 w-5" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-1 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`block w-full text-left px-4 py-2 text-sm ${
                i18n.language === lang.code
                  ? "bg-eucalyptus-50 text-eucalyptus-700"
                  : "text-hortensia-600 hover:bg-eucalyptus-50 hover:text-eucalyptus-600"
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher
