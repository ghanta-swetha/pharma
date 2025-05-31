"use client"

import { useState, useRef, useEffect } from "react"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"
import axios from "axios"
import Footer from "../components/Footer"

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      question: "What services does your company offer?",
      answer:
        "We offer pharmaceutical manufacturing, formulation development, packaging, and regulatory assistance services.",
    },
    {
      question: "Are you WHO-GMP and ISO-certified?",
      answer:
        "Yes, our facility is WHO-GMP compliant and ISO 9001:2015 certified, ensuring high-quality production processes.",
    },
    {
      question: "Which pharmaceutical products do you manufacture?",
      answer: "We manufacture tablets, capsules, syrups, ointments, and various therapeutic category medicines.",
    },
    {
      question: "What quality standards do you follow?",
      answer:
        "We adhere strictly to GMP guidelines and follow international quality control standards at every stage of production.",
    },
    {
      question: "Do you provide contract manufacturing or private labeling services?",
      answer:
        "Yes, we provide comprehensive contract manufacturing and private labeling options based on client requirements.",
    },
  ]

  const [openIndex, setOpenIndex] = useState(null)
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState({
    name: "India",
    code: "+91",
    iso: "in",
  })
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const dropdownRef = useRef(null)

  // List of countries with their codes and ISO codes for flags
  const countries = [
    { name: "Afghanistan", code: "+93", iso: "af" },
    { name: "Albania", code: "+355", iso: "al" },
    { name: "Algeria", code: "+213", iso: "dz" },
    { name: "Andorra", code: "+376", iso: "ad" },
    { name: "Angola", code: "+244", iso: "ao" },
    { name: "Argentina", code: "+54", iso: "ar" },
    { name: "Armenia", code: "+374", iso: "am" },
    { name: "Australia", code: "+61", iso: "au" },
    { name: "Austria", code: "+43", iso: "at" },
    { name: "Azerbaijan", code: "+994", iso: "az" },
    { name: "Bahamas", code: "+1-242", iso: "bs" },
    { name: "Bahrain", code: "+973", iso: "bh" },
    { name: "Bangladesh", code: "+880", iso: "bd" },
    { name: "Belarus", code: "+375", iso: "by" },
    { name: "Belgium", code: "+32", iso: "be" },
    { name: "Belize", code: "+501", iso: "bz" },
    { name: "Benin", code: "+229", iso: "bj" },
    { name: "Bhutan", code: "+975", iso: "bt" },
    { name: "Bolivia", code: "+591", iso: "bo" },
    { name: "Bosnia and Herzegovina", code: "+387", iso: "ba" },
    { name: "Botswana", code: "+267", iso: "bw" },
    { name: "Brazil", code: "+55", iso: "br" },
    { name: "Brunei", code: "+673", iso: "bn" },
    { name: "Bulgaria", code: "+359", iso: "bg" },
    { name: "Burkina Faso", code: "+226", iso: "bf" },
    { name: "Burundi", code: "+257", iso: "bi" },
    { name: "Cambodia", code: "+855", iso: "kh" },
    { name: "Cameroon", code: "+237", iso: "cm" },
    { name: "Canada", code: "+1", iso: "ca" },
    { name: "Cape Verde", code: "+238", iso: "cv" },
    { name: "Central African Republic", code: "+236", iso: "cf" },
    { name: "Chad", code: "+235", iso: "td" },
    { name: "Chile", code: "+56", iso: "cl" },
    { name: "China", code: "+86", iso: "cn" },
    { name: "Colombia", code: "+57", iso: "co" },
    { name: "Comoros", code: "+269", iso: "km" },
    { name: "Costa Rica", code: "+506", iso: "cr" },
    { name: "Croatia", code: "+385", iso: "hr" },
    { name: "Cuba", code: "+53", iso: "cu" },
    { name: "Cyprus", code: "+357", iso: "cy" },
    { name: "Czech Republic", code: "+420", iso: "cz" },
    { name: "Denmark", code: "+45", iso: "dk" },
    { name: "Djibouti", code: "+253", iso: "dj" },
    { name: "Dominican Republic", code: "+1-809", iso: "do" },
    { name: "Ecuador", code: "+593", iso: "ec" },
    { name: "Egypt", code: "+20", iso: "eg" },
    { name: "El Salvador", code: "+503", iso: "sv" },
    { name: "Equatorial Guinea", code: "+240", iso: "gq" },
    { name: "Eritrea", code: "+291", iso: "er" },
    { name: "Estonia", code: "+372", iso: "ee" },
    { name: "Ethiopia", code: "+251", iso: "et" },
    { name: "Fiji", code: "+679", iso: "fj" },
    { name: "Finland", code: "+358", iso: "fi" },
    { name: "France", code: "+33", iso: "fr" },
    { name: "Gabon", code: "+241", iso: "ga" },
    { name: "Gambia", code: "+220", iso: "gm" },
    { name: "Georgia", code: "+995", iso: "ge" },
    { name: "Germany", code: "+49", iso: "de" },
    { name: "Ghana", code: "+233", iso: "gh" },
    { name: "Greece", code: "+30", iso: "gr" },
    { name: "Guatemala", code: "+502", iso: "gt" },
    { name: "Guinea", code: "+224", iso: "gn" },
    { name: "Haiti", code: "+509", iso: "ht" },
    { name: "Honduras", code: "+504", iso: "hn" },
    { name: "Hungary", code: "+36", iso: "hu" },
    { name: "Iceland", code: "+354", iso: "is" },
    { name: "India", code: "+91", iso: "in" },
    { name: "Indonesia", code: "+62", iso: "id" },
    { name: "Iran", code: "+98", iso: "ir" },
    { name: "Iraq", code: "+964", iso: "iq" },
    { name: "Ireland", code: "+353", iso: "ie" },
    { name: "Israel", code: "+972", iso: "il" },
    { name: "Italy", code: "+39", iso: "it" },
    { name: "Jamaica", code: "+1-876", iso: "jm" },
    { name: "Japan", code: "+81", iso: "jp" },
    { name: "Jordan", code: "+962", iso: "jo" },
    { name: "Kazakhstan", code: "+7", iso: "kz" },
    { name: "Kenya", code: "+254", iso: "ke" },
    { name: "Kuwait", code: "+965", iso: "kw" },
    { name: "Kyrgyzstan", code: "+996", iso: "kg" },
    { name: "Laos", code: "+856", iso: "la" },
    { name: "Latvia", code: "+371", iso: "lv" },
    { name: "Lebanon", code: "+961", iso: "lb" },
    { name: "Lesotho", code: "+266", iso: "ls" },
    { name: "Liberia", code: "+231", iso: "lr" },
    { name: "Libya", code: "+218", iso: "ly" },
    { name: "Liechtenstein", code: "+423", iso: "li" },
    { name: "Lithuania", code: "+370", iso: "lt" },
    { name: "Luxembourg", code: "+352", iso: "lu" },
    { name: "Madagascar", code: "+261", iso: "mg" },
    { name: "Malawi", code: "+265", iso: "mw" },
    { name: "Malaysia", code: "+60", iso: "my" },
    { name: "Maldives", code: "+960", iso: "mv" },
    { name: "Mali", code: "+223", iso: "ml" },
    { name: "Malta", code: "+356", iso: "mt" },
    { name: "Mauritania", code: "+222", iso: "mr" },
    { name: "Mauritius", code: "+230", iso: "mu" },
    { name: "Mexico", code: "+52", iso: "mx" },
    { name: "Moldova", code: "+373", iso: "md" },
    { name: "Monaco", code: "+377", iso: "mc" },
    { name: "Mongolia", code: "+976", iso: "mn" },
    { name: "Montenegro", code: "+382", iso: "me" },
    { name: "Morocco", code: "+212", iso: "ma" },
    { name: "Mozambique", code: "+258", iso: "mz" },
    { name: "Myanmar", code: "+95", iso: "mm" },
    { name: "Namibia", code: "+264", iso: "na" },
    { name: "Nepal", code: "+977", iso: "np" },
    { name: "Netherlands", code: "+31", iso: "nl" },
    { name: "New Zealand", code: "+64", iso: "nz" },
    { name: "Nicaragua", code: "+505", iso: "ni" },
    { name: "Niger", code: "+227", iso: "ne" },
    { name: "Nigeria", code: "+234", iso: "ng" },
    { name: "North Korea", code: "+850", iso: "kp" },
    { name: "North Macedonia", code: "+389", iso: "mk" },
    { name: "Norway", code: "+47", iso: "no" },
    { name: "Oman", code: "+968", iso: "om" },
    { name: "Pakistan", code: "+92", iso: "pk" },
    { name: "Palestine", code: "+970", iso: "ps" },
    { name: "Panama", code: "+507", iso: "pa" },
    { name: "Papua New Guinea", code: "+675", iso: "pg" },
    { name: "Paraguay", code: "+595", iso: "py" },
    { name: "Peru", code: "+51", iso: "pe" },
    { name: "Philippines", code: "+63", iso: "ph" },
    { name: "Poland", code: "+48", iso: "pl" },
    { name: "Portugal", code: "+351", iso: "pt" },
    { name: "Qatar", code: "+974", iso: "qa" },
    { name: "Romania", code: "+40", iso: "ro" },
    { name: "Russia", code: "+7", iso: "ru" },
    { name: "Rwanda", code: "+250", iso: "rw" },
    { name: "Saudi Arabia", code: "+966", iso: "sa" },
    { name: "Senegal", code: "+221", iso: "sn" },
    { name: "Serbia", code: "+381", iso: "rs" },
    { name: "Singapore", code: "+65", iso: "sg" },
    { name: "Slovakia", code: "+421", iso: "sk" },
    { name: "Slovenia", code: "+386", iso: "si" },
    { name: "Somalia", code: "+252", iso: "so" },
    { name: "South Africa", code: "+27", iso: "za" },
    { name: "South Korea", code: "+82", iso: "kr" },
    { name: "South Sudan", code: "+211", iso: "ss" },
    { name: "Spain", code: "+34", iso: "es" },
    { name: "Sri Lanka", code: "+94", iso: "lk" },
    { name: "Sudan", code: "+249", iso: "sd" },
    { name: "Sweden", code: "+46", iso: "se" },
    { name: "Switzerland", code: "+41", iso: "ch" },
    { name: "Syria", code: "+963", iso: "sy" },
    { name: "Taiwan", code: "+886", iso: "tw" },
    { name: "Tajikistan", code: "+992", iso: "tj" },
    { name: "Tanzania", code: "+255", iso: "tz" },
    { name: "Thailand", code: "+66", iso: "th" },
    { name: "Togo", code: "+228", iso: "tg" },
    { name: "Tunisia", code: "+216", iso: "tn" },
    { name: "Turkey", code: "+90", iso: "tr" },
    { name: "Turkmenistan", code: "+993", iso: "tm" },
    { name: "Uganda", code: "+256", iso: "ug" },
    { name: "Ukraine", code: "+380", iso: "ua" },
    { name: "United Arab Emirates", code: "+971", iso: "ae" },
    { name: "United Kingdom", code: "+44", iso: "gb" },
    { name: "United States", code: "+1", iso: "us" },
    { name: "Uruguay", code: "+598", iso: "uy" },
    { name: "Uzbekistan", code: "+998", iso: "uz" },
    { name: "Venezuela", code: "+58", iso: "ve" },
    { name: "Vietnam", code: "+84", iso: "vn" },
    { name: "Yemen", code: "+967", iso: "ye" },
    { name: "Zambia", code: "+260", iso: "zm" },
    { name: "Zimbabwe", code: "+263", iso: "zw" },
  ]

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsCountryDropdownOpen(false)
        setSearchQuery("")
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const handleCountrySelect = (country) => {
    setSelectedCountry(country)
    setIsCountryDropdownOpen(false)
    setSearchQuery("")
  }

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value)
  }

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleDropdownToggle = () => {
    setIsCountryDropdownOpen((prev) => !prev)
  }

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess(false)

    const formData = new FormData()
    formData.append("name", name)
    formData.append("mobile", `${selectedCountry.code}${phoneNumber}`)
    formData.append("email", email)
    formData.append("toEmail", "info@spansulepharma.com")
    formData.append("heading", "Inquiry from Website")
    formData.append("subject", message)

    try {
      const response = await axios.post("https://api.smartaihr.com/api/users/sendingEmail", formData)
      console.log(response.data)
      setSuccess(true)
      setName("")
      setEmail("")
      setPhoneNumber("")
      setMessage("")
      setSelectedCountry({ name: "India", code: "+91", iso: "in" })
    } catch (error) {
      console.error("Error sending email", error)
      setError("There was an issue sending the email. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="relative flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat px-4"
        style={{
          height: "auto",
          minHeight: "450px",
          paddingTop: "60px",
          paddingBottom: "60px",
          backgroundImage:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/aboutpage/abouthero.png')",
          backgroundColor: "lightgray",
        }}
      >
        <h1 className="text-white text-center font-[Quicksand] text-4xl sm:text-center md:text-5xl lg:text-6xl font-bold">Contact Us</h1>
        <p className="text-white text-center font-[Roboto] text-base md:text-xl lg:text-2xl mt-2 max-w-3xl">
          Your thoughts matter! Share your feedback to help us improve.
        </p>
      </div>

      {/* Contact Form Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 p-4 md:p-6 lg:p-8 max-w-7xl mx-auto mt-8 md:mt-10">
        {/* Form */}
        <div className="w-full lg:w-1/2 space-y-4 md:space-y-5">
          <h2 className="text-green-700 font-bold text-2xl sm:text-center md:text-3xl mb-2 md:mb-4 md:text-center">Let's Get In Touch</h2>
          {success && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
              Email sent successfully! We'll get back to you soon.
            </div>
          )}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>
          )}
          <form className="space-y-3 md:space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your first name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-3 md:px-4 py-2 md:py-3 border border-black rounded-xl"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 md:px-4 py-2 md:py-3 border border-black rounded-xl"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="flex items-center rounded-xl border border-black overflow-hidden">
                  <div className="relative" ref={dropdownRef}>
                    <div
                      className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-4 py-2 md:py-3 cursor-pointer border-r border-black bg-white hover:bg-gray-100"
                      onClick={handleDropdownToggle}
                    >
                      <img
                        src={`https://flagcdn.com/w20/${selectedCountry.iso}.png`}
                        alt={selectedCountry.name}
                        className="w-4 sm:w-5 h-auto"
                      />
                      <span className="weekly sm:inline text-xs md:text-sm">{selectedCountry.name}</span>
                      {isCountryDropdownOpen ? <FaChevronUp className="text-sm" /> : <FaChevronDown className="text-sm" />}
                    </div>
                    {isCountryDropdownOpen && (
                      <div
                        className="bg-white border border-gray-300 rounded-md shadow-lg"
                        style={{
                          position: "absolute",
                          top: "100%",
                          left: 0,
                          width: "250px",
                          maxWidth: "90vw",
                          maxHeight: "300px",
                          overflowY: "auto",
                          zIndex: 10000,
                        }}
                      >
                        <div className="sticky top-0 bg-white p-2 border-b">
                          <input
                            type="text"
                            placeholder="Search countries..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className="w-full px-2 py-1 md:px-3 md:py-2 border border-gray-300 rounded text-sm focus:outline-none"
                            onClick={(e) => e.stopPropagation()}
                          />
                        </div>
                        {filteredCountries.length > 0 ? (
                          filteredCountries.map((country, index) => (
                            <div
                              key={index}
                              className={`flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer ${selectedCountry.name === country.name ? "bg-gray-100" : ""}`}
                              onClick={() => handleCountrySelect(country)}
                            >
                              <img
                                src={`https://flagcdn.com/w20/${country.iso}.png`}
                                alt={country.name}
                                className="w-4 h-auto"
                              />
                              <span className="text-xs md:text-sm flex-1">{country.name}</span>
                              <span className="text-gray-500 text-xs">{country.code}</span>
                            </div>
                          ))
                        ) : (
                          <div className="px-3 py-2 text-xs md:text-sm text-gray-500">No countries found</div>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="px-1 sm:px-2 py-2 md:py-3 border-r border-black bg-white text-xs md:text-sm">{selectedCountry.code}</div>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    placeholder="Enter your phone number"
                    required
                    className="flex-1 px-2 sm:px-3 md:px-4 py-2 md:py-3 bg-white outline-none text-sm"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                placeholder="Enter your message..."
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full px-3 md:px-4 py-2 md:py-3 border border-black rounded-xl text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-green-700 text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-md hover:bg-green-800 w-full text-sm md:text-base disabled:opacity-70"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
          <img
            src="/assets/contactpage/formimage.png"
            alt="Contact Visual"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
      </div>

      {/* Three-Column Info Section */}
     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mt-12 md:mt-16 px-4 md:px-6 text-center">
  {/* Address */}
  <div className="p-4">
    <div
      className="flex items-center justify-center mx-auto mb-3 md:mb-4"
      style={{
        borderRadius: "100px",
        background: "#CEF4CE",
        padding: "12px",
        width: "50px",
        height: "50px",
      }}
    >
      <img src="/assets/contactpage/MapPinArea.png" alt="Location" className="w-5 h-5" />
    </div>
    <h3 className="text-black text-lg sm:text-center md:text-xl font-bold font-[Quicksand] md:text-center">Office Address</h3>
    <p className="text-black text-sm md:text-base font-[Roboto] mt-2">
      Plot No:59, G-3, Sivenkateswara Towers, Bhasyagars Colony, Opp:KPHB, Hyderabad-500072, Telangana, India.
    </p>
  </div>

  {/* Phone */}
  <div className="p-4">
    <div
      className="flex items-center justify-center mx-auto mb-3 md:mb-4"
      style={{
        borderRadius: "100px",
        background: "#CEF4CE",
        padding: "12px",
        width: "50px",
        height: "50px",
      }}
    >
      <img src="/assets/contactpage/PhoneIncoming.png" alt="Phone" className="w-5 h-5" />
    </div>
    <h3 className="text-black text-lg sm:text-center md:text-xl font-bold font-[Quicksand] md:text-center">Phone Number</h3>
    <p className="text-black text-sm md:text-base font-[Roboto] mt-2">
      Phone: +91-40-46679999 <br />
      Mobile: +91-9963214060 <br />
      Fax: +91-40-23055443 <br />
      Whatsapp: +91-7032731444
    </p>
  </div>

  {/* Email */}
  <div className="p-4">
    <div
      className="flex items-center justify-center mx-auto mb-3 md:mb-4"
      style={{
        borderRadius: "100px",
        background: "#CEF4CE",
        padding: "12px",
        width: "50px",
        height: "50px",
      }}
    >
      <img src="/assets/contactpage/EnvelopeOpen.png" alt="Email" className="w-5 h-5" />
    </div>
    <h3 className="text-black text-lg sm:text-center md:text-xl font-bold font-[Quicksand] md:text-center">Email Address</h3>
    <p className="text-black text-sm md:text-base font-[Roboto] mt-2">info@spsnulespharma.com</p>
  </div>
</div>


      {/* Map Section */}
       <div className="max-w-7xl mx-auto mt-12 md:mt-16 px-4 md:px-6 text-center">
      <h2 className="font-[Quicksand] text-3xl sm:text-center md:text-4xl lg:text-5xl font-bold text-green-700 mb-4 md:mb-6 md:text-center">
        Our Location
      </h2>
      <p className="mt-6 text-sm font-[Roboto] text-gray-700 md:text-lg text-center max-w-7xl mx-auto">
        Located in Hyderabad, the capital city of Telangana, our facility enjoys excellent connectivity by air, rail, and road to cities across India and major global destinations. Strategically positioned, it serves as an ideal hub to cater to both eastern and western states of India. Hyderabad is also a rapidly emerging pharmaceutical and IT hub, making it a prime location for growth and innovation.
      </p>
      <iframe
        title="location-map"
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d9146.417679829068!2d78.3899533946192!3d17.496680916124408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sPlot%20No%3A59%2C%20G-3%2C%20Srivenkateswara%20Towers%2C%20%20Bhagyanagar%20Colony%2C%20%20Opp.KPHB%2C%20Hyderabad-500072%2C%20%20Telangana%2C%20India.!5e1!3m2!1sen!2sin!4v1748501132358!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg mt-6 shadow-lg max-w-full"
      />
    </div>
      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto mt-12 md:mt-16 px-4 md:px-6 mb-12">
        <h2 className="text-green-700 text-3xl sm:text-center md:text-4xl lg:text-5xl font-[Quicksand] font-bold capitalize mb-4 md:mb-6 md:text-center">Frequently Asked Questions</h2>
        <div className="flex flex-col gap-3 md:gap-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 px-3 md:px-4 py-2 md:py-3 rounded-md cursor-pointer"
              onClick={() => toggleFAQ(index)}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "12px",
                alignSelf: "stretch",
              }}
            >
              <div className="flex justify-between items-center w-full">
                <h3
                  className="text-base sm:text-center md:text-lg font-[Roboto] font-medium leading-tight md:text-center"
                  style={{ color: "#000" }}
                >
                  {item.question}
                </h3>
                {openIndex === index ? (
                  <FaChevronUp className="text-black flex-shrink-0 ml-2" />
                ) : (
                  <FaChevronDown className="text-black flex-shrink-0 ml-2" />
                )}
              </div>
              {openIndex === index && (
                <p className="text-sm md:text-base font-[Roboto] text-black leading-relaxed">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact