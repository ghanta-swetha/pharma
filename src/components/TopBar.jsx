"use client"

import { useEffect, useState } from "react"

const TopBar = () => {
  const [language, setLanguage] = useState("English")
  const [translatorReady, setTranslatorReady] = useState(false)

  const languageMap = {
    Afrikaans: "af",
    Albanian: "sq",
    Amharic: "am",
    Arabic: "ar",
    Armenian: "hy",
    Assamese: "as",
    Aymara: "ay",
    Azerbaijani: "az",
    Bambara: "bm",
    Basque: "eu",
    Belarusian: "be",
    Bengali: "bn",
    Bhojpuri: "bho",
    Bosnian: "bs",
    Bulgarian: "bg",
    Catalan: "ca",
    Cebuano: "ceb",
    Chichewa: "ny",
    Chinese: "zh-CN",
    "Chinese (Traditional)": "zh-TW",
    Corsican: "co",
    Croatian: "hr",
    Czech: "cs",
    Danish: "da",
    Dhivehi: "dv",
    Dogri: "doi",
    Dutch: "nl",
    English: "en",
    Esperanto: "eo",
    Estonian: "et",
    Ewe: "ee",
    Filipino: "tl",
    Finnish: "fi",
    French: "fr",
    Frisian: "fy",
    Galician: "gl",
    Georgian: "ka",
    German: "de",
    Greek: "el",
    Guarani: "gn",
    Gujarati: "gu",
    "Haitian Creole": "ht",
    Hausa: "ha",
    Hawaiian: "haw",
    Hebrew: "he",
    Hindi: "hi",
    Hmong: "hmn",
    Hungarian: "hu",
    Icelandic: "is",
    Igbo: "ig",
    Ilocano: "ilo",
    Indonesian: "id",
    Irish: "ga",
    Italian: "it",
    Japanese: "ja",
    Javanese: "jw",
    Kannada: "kn",
    Kazakh: "kk",
    Khmer: "km",
    Kinyarwanda: "rw",
    Konkani: "gom",
    Korean: "ko",
    Krio: "kri",
    Kurdish: "ku",
    "Kurdish (Sorani)": "ckb",
    Kyrgyz: "ky",
    Lao: "lo",
    Latin: "la",
    Latvian: "lv",
    Lingala: "ln",
    Lithuanian: "lt",
    Luganda: "lg",
    Luxembourgish: "lb",
    Macedonian: "mk",
    Maithili: "mai",
    Malagasy: "mg",
    Malay: "ms",
    Malayalam: "ml",
    Maltese: "mt",
    Maori: "mi",
    Marathi: "mr",
    Meiteilon: "mni-Mtei",
    Mizo: "lus",
    Mongolian: "mn",
    Myanmar: "my",
    Nepali: "ne",
    Norwegian: "no",
    Odia: "or",
    Oromo: "om",
    Pashto: "ps",
    Persian: "fa",
    Polish: "pl",
    Portuguese: "pt",
    Punjabi: "pa",
    Quechua: "qu",
    Romanian: "ro",
    Russian: "ru",
    Hakka: "hak",
    Samoan: "sm",
    Sanskrit: "sa",
    "Scots Gaelic": "gd",
    Sepedi: "nso",
    Serbian: "sr",
    Sesotho: "st",
    Shona: "sn",
    Sindhi: "sd",
    Sinhala: "si",
    Slovak: "sk",
    Slovenian: "sl",
    Somali: "so",
    Spanish: "es",
    Sundanese: "su",
    Swahili: "sw",
    Swedish: "sv",
    Tajik: "tg",
    Tamil: "ta",
    Tatar: "tt",
    Telugu: "te",
    Thai: "th",
    Tigrinya: "ti",
    Tsonga: "ts",
    Turkish: "tr",
    Turkmen: "tk",
    Twi: "tw",
    Ukrainian: "uk",
    Urdu: "ur",
    Uyghur: "ug",
    Uzbek: "uz",
    Vietnamese: "vi",
    Welsh: "cy",
    Xhosa: "xh",
    Yiddish: "yi",
    Yoruba: "yo",
    Zulu: "zu",
  }

  const languages = Object.keys(languageMap)

  useEffect(() => {
    if (window.google?.translate) {
      setTranslatorReady(true)
      return
    }

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: Object.values(languageMap).join(","),
          autoDisplay: false,
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element",
      )
      setTranslatorReady(true)
    }

    const script = document.createElement("script")
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    script.async = true
    script.defer = true
    script.onerror = () => {
      console.error("Failed to load Google Translate script")
    }
    document.body.appendChild(script)

    return () => {
      if (window.googleTranslateElementInit) {
        delete window.googleTranslateElementInit
      }
    }
  }, [])

  const handleLanguageChange = (e) => {
    const selectedLang = e.target.value
    setLanguage(selectedLang)

    if (!translatorReady) {
      console.warn("Google Translate not yet initialized")
      return
    }

    const langCode = languageMap[selectedLang]

    try {
      const translateElement = document.querySelector("#google_translate_element")
      const iframe = translateElement?.querySelector("iframe")
      const iframeDoc = iframe?.contentWindow?.document
      if (iframeDoc) {
        const dropdown = iframeDoc.querySelector(".goog-te-combo")
        if (dropdown) {
          dropdown.value = langCode
          dropdown.dispatchEvent(new Event("change"))
          return
        }
      }
    } catch (error) {
      console.error("Error accessing Google Translate iframe:", error)
    }

    try {
      const selectors = [".goog-te-combo", ".skiptranslate .goog-te-combo", "select.goog-te-combo"]
      let googleSelect = null
      for (const selector of selectors) {
        googleSelect = document.querySelector(selector)
        if (googleSelect) break
      }

      if (googleSelect) {
        googleSelect.value = langCode
        googleSelect.dispatchEvent(new Event("change", { bubbles: true }))
      } else {
        document.cookie = `googtrans=/en/${langCode}; path=/; domain=${window.location.hostname}`
        window.location.reload()
      }
    } catch (error) {
      console.error("Error changing language:", error)
    }
  }

  return (
    <>
      <style global jsx>{`
        #google_translate_element,
        .goog-te-banner-frame,
        .goog-te-menu-frame,
        .goog-te-gadget,
        .goog-te-combo,
        .goog-te-menu2,
        .skiptranslate {
          display: none !important;
          visibility: hidden !important;
          height: 0 !important;
          width: 0 !important;
          overflow: hidden !important;
        }

        body {
          top: 0 !important;
        }

        select.notranslate {
          display: block !important;
          visibility: visible !important;
        }
      `}</style>

      <div className="w-full bg-gray-50 py-2 sm:py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Small screens */}
          <div className="flex flex-col justify-between items-center text-center sm:flex md:hidden">
            <div className="text-spansules-green font-['Quicksand'] text-sm sm:text-base font-bold">
              Welcome to our SPANSULES
            </div>
            <div className="flex text-spansules-green flex-col font-semibold items-center text-xs sm:text-sm my-2 space-y-1">
              <span>WHO GMP Certified Company</span>
              <span>ISO 9001:2015 Certified Company</span>
            </div>
            <div className="mt-2 w-full">
              <div className="notranslate">
                <select
                  value={language}
                  onChange={handleLanguageChange}
                  className="border border-black bg-white px-2 sm:px-3 py-1 font-roboto text-sm sm:text-base font-semibold appearance-none pr-8 relative cursor-pointer w-full sm:w-[197px]"
                  style={{
                    backgroundImage:
                      'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%3E%3Cpath%20fill%3D%22%23000%22%20d%3D%22M7%2010L0%203h14z%22%2F%3E%3C%2Fsvg%3E")',
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 8px center",
                    backgroundSize: "9px",
                  }}
                >
                  <option value="English">Select Language</option>
                  {languages.map((lang) => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Medium screens */}
          <div className="hidden md:flex md:flex-col md:items-center md:justify-center md:text-center md:space-y-2 lg:hidden">
            <div className="text-spansules-green font-['Quicksand'] text-base font-bold">Welcome to our SPANSULES</div>
            <div className="text-spansules-green font-semibold text-sm">
              <span>WHO GMP Certified Company</span>
              <span className="mx-2">|</span>
              <span>ISO 9001:2015 Certified Company</span>
            </div>
            <div className="mt-1 w-auto">
              <div className="notranslate">
                <select
                  value={language}
                  onChange={handleLanguageChange}
                  className="border border-black bg-white px-3 py-1 font-roboto text-base font-semibold appearance-none pr-8 relative cursor-pointer w-[250px]"
                  style={{
                    backgroundImage:
                      'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%3E%3Cpath%20fill%3D%22%23000%22%20d%3D%22M7%2010L0%203h14z%22%2F%3E%3C%2Fsvg%3E")',
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 8px center",
                    backgroundSize: "9px",
                  }}
                >
                  <option value="English">Select Language</option>
                  {languages.map((lang) => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Large screens */}
          <div className="hidden lg:flex lg:flex-row lg:justify-between lg:items-center lg:text-left">
            <div className="text-spansules-green font-['Quicksand'] text-base font-bold">Welcome to our SPANSULES</div>
            <div className="flex text-spansules-green flex-row font-semibold items-center text-sm my-0 space-y-0">
              <span>WHO GMP Certified Company</span>
              <span className="text-spansules-green mx-2">|</span>
              <span>ISO 9001:2015 Certified Company</span>
            </div>
            <div className="mt-0 w-auto">
              <div className="notranslate">
                <select
                  value={language}
                  onChange={handleLanguageChange}
                  className="border border-black bg-white px-3 py-1 font-roboto text-base font-semibold appearance-none pr-8 relative cursor-pointer w-[197px]"
                  style={{
                    backgroundImage:
                      'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%3E%3Cpath%20fill%3D%22%23000%22%20d%3D%22M7%2010L0%203h14z%22%2F%3E%3C%2Fsvg%3E")',
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 8px center",
                    backgroundSize: "9px",
                  }}
                >
                  <option value="English">Select Language</option>
                  {languages.map((lang) => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Google Translate placeholder */}
        <div id="google_translate_element" style={{ height: 0, overflow: "hidden" }}></div>
      </div>
    </>
  )
}

export default TopBar
