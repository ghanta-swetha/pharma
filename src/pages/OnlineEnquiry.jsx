"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import axios from "axios";
import Footer from "../components/Footer";

export default function OnlineEnquiry() {
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [unit, setUnit] = useState("");
  const [delivery, setDelivery] = useState("");
  const [packing, setPacking] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [address, setAddress] = useState("");
  const [requirement, setRequirement] = useState("");
  const [country, setCountry] = useState("");
  const [Phonenumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");
  const [fax, setFax] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const countries = [
    { code: "AF", name: "Afghanistan" },
    { code: "AL", name: "Albania" },
    { code: "DZ", name: "Algeria" },
    { code: "AD", name: "Andorra" },
    { code: "AO", name: "Angola" },
    { code: "AI", name: "Anguilla" },
    { code: "AQ", name: "Antarctica" },
    { code: "AG", name: "Antigua and Barbuda" },
    { code: "AR", name: "Argentina" },
    { code: "AM", name: "Armenia" },
    { code: "AW", name: "Aruba" },
    { code: "AU", name: "Australia" },
    { code: "AT", name: "Austria" },
    { code: "AZ", name: "Azerbaijan" },
    { code: "BS", name: "Bahamas" },
    { code: "BH", name: "Bahrain" },
    { code: "BD", name: "Bangladesh" },
    { code: "BB", name: "Barbados" },
    { code: "BY", name: "Belarus" },
    { code: "BE", name: "Belgium" },
    { code: "BZ", name: "Belize" },
    { code: "BJ", name: "Benin" },
    { code: "BM", name: "Bermuda" },
    { code: "BT", name: "Bhutan" },
    { code: "BO", name: "Bolivia" },
    { code: "BA", name: "Bosnia and Herzegovina" },
    { code: "BW", name: "Botswana" },
    { code: "BR", name: "Brazil" },
    { code: "IO", name: "British Indian Ocean Territory" },
    { code: "VG", name: "British Virgin Islands" },
    { code: "BN", name: "Brunei" },
    { code: "BG", name: "Bulgaria" },
    { code: "BF", name: "Burkina Faso" },
    { code: "BI", name: "Burundi" },
    { code: "KH", name: "Cambodia" },
    { code: "CM", name: "Cameroon" },
    { code: "CA", name: "Canada" },
    { code: "CV", name: "Cape Verde" },
    { code: "KY", name: "Cayman Islands" },
    { code: "CF", name: "Central African Republic" },
    { code: "TD", name: "Chad" },
    { code: "CL", name: "Chile" },
    { code: "CN", name: "China" },
    { code: "CX", name: "Christmas Island" },
    { code: "CC", name: "Cocos Islands" },
    { code: "CO", name: "Colombia" },
    { code: "KM", name: "Comoros" },
    { code: "CK", name: "Cook Islands" },
    { code: "CR", name: "Costa Rica" },
    { code: "HR", name: "Croatia" },
    { code: "CU", name: "Cuba" },
    { code: "CW", name: "Curaçao" },
    { code: "CY", name: "Cyprus" },
    { code: "CZ", name: "Czech Republic" },
    { code: "CD", name: "Democratic Republic of the Congo" },
    { code: "DK", name: "Denmark" },
    { code: "DJ", name: "Djibouti" },
    { code: "DM", name: "Dominica" },
    { code: "DO", name: "Dominican Republic" },
    { code: "TL", name: "East Timor" },
    { code: "EC", name: "Ecuador" },
    { code: "EG", name: "Egypt" },
    { code: "SV", name: "El Salvador" },
    { code: "GQ", name: "Equatorial Guinea" },
    { code: "ER", name: "Eritrea" },
    { code: "EE", name: "Estonia" },
    { code: "ET", name: "Ethiopia" },
    { code: "FK", name: "Falkland Islands" },
    { code: "FO", name: "Faroe Islands" },
    { code: "FJ", name: "Fiji" },
    { code: "FI", name: "Finland" },
    { code: "FR", name: "France" },
    { code: "PF", name: "French Polynesia" },
    { code: "GA", name: "Gabon" },
    { code: "GM", name: "Gambia" },
    { code: "GE", name: "Georgia" },
    { code: "DE", name: "Germany" },
    { code: "GH", name: "Ghana" },
    { code: "GI", name: "Gibraltar" },
    { code: "GR", name: "Greece" },
    { code: "GL", name: "Greenland" },
    { code: "GD", name: "Grenada" },
    { code: "GU", name: "Guam" },
    { code: "GT", name: "Guatemala" },
    { code: "GG", name: "Guernsey" },
    { code: "GN", name: "Guinea" },
    { code: "GW", name: "Guinea-Bissau" },
    { code: "GY", name: "Guyana" },
    { code: "HT", name: "Haiti" },
    { code: "HN", name: "Honduras" },
    { code: "HK", name: "Hong Kong" },
    { code: "HU", name: "Hungary" },
    { code: "IS", name: "Iceland" },
    { code: "IN", name: "India" },
    { code: "ID", name: "Indonesia" },
    { code: "IR", name: "Iran" },
    { code: "IQ", name: "Iraq" },
    { code: "IE", name: "Ireland" },
    { code: "IM", name: "Isle of Man" },
    { code: "IL", name: "Israel" },
    { code: "IT", name: "Italy" },
    { code: "CI", name: "Ivory Coast" },
    { code: "JM", name: "Jamaica" },
    { code: "JP", name: "Japan" },
    { code: "JE", name: "Jersey" },
    { code: "JO", name: "Jordan" },
    { code: "KZ", name: "Kazakhstan" },
    { code: "KE", name: "Kenya" },
    { code: "KI", name: "Kiribati" },
    { code: "XK", name: "Kosovo" },
    { code: "KW", name: "Kuwait" },
    { code: "KG", name: "Kyrgyzstan" },
    { code: "LA", name: "Laos" },
    { code: "LV", name: "Latvia" },
    { code: "LB", name: "Lebanon" },
    { code: "LS", name: "Lesotho" },
    { code: "LR", name: "Liberia" },
    { code: "LY", name: "Libya" },
    { code: "LI", name: "Liechtenstein" },
    { code: "LT", name: "Lithuania" },
    { code: "LU", name: "Luxembourg" },
    { code: "MO", name: "Macau" },
    { code: "MK", name: "Macedonia" },
    { code: "MG", name: "Madagascar" },
    { code: "MW", name: "Malawi" },
    { code: "MY", name: "Malaysia" },
    { code: "MV", name: "Maldives" },
    { code: "ML", name: "Mali" },
    { code: "MT", name: "Malta" },
    { code: "MH", name: "Marshall Islands" },
    { code: "MR", name: "Mauritania" },
    { code: "MU", name: "Mauritius" },
    { code: "YT", name: "Mayotte" },
    { code: "MX", name: "Mexico" },
    { code: "FM", name: "Micronesia" },
    { code: "MD", name: "Moldova" },
    { code: "MC", name: "Monaco" },
    { code: "MN", name: "Mongolia" },
    { code: "ME", name: "Montenegro" },
    { code: "MS", name: "Montserrat" },
    { code: "MA", name: "Morocco" },
    { code: "MZ", name: "Mozambique" },
    { code: "MM", name: "Myanmar" },
    { code: "NA", name: "Namibia" },
    { code: "NR", name: "Nauru" },
    { code: "NP", name: "Nepal" },
    { code: "NL", name: "Netherlands" },
    { code: "NC", name: "New Caledonia" },
    { code: "NZ", name: "New Zealand" },
    { code: "NI", name: "Nicaragua" },
    { code: "NE", name: "Niger" },
    { code: "NG", name: "Nigeria" },
    { code: "NU", name: "Niue" },
    { code: "KP", name: "North Korea" },
    { code: "MP", name: "Northern Mariana Islands" },
    { code: "NO", name: "Norway" },
    { code: "OM", name: "Oman" },
    { code: "PK", name: "Pakistan" },
    { code: "PW", name: "Palau" },
    { code: "PS", name: "Palestine" },
    { code: "PA", name: "Panama" },
    { code: "PG", name: "Papua New Guinea" },
    { code: "PY", name: "Paraguay" },
    { code: "PE", name: "Peru" },
    { code: "PH", name: "Philippines" },
    { code: "PN", name: "Pitcairn" },
    { code: "PL", name: "Poland" },
    { code: "PT", name: "Portugal" },
    { code: "PR", name: "Puerto Rico" },
    { code: "QA", name: "Qatar" },
    { code: "CG", name: "Republic of the Congo" },
    { code: "RE", name: "Réunion" },
    { code: "RO", name: "Romania" },
    { code: "RU", name: "Russia" },
    { code: "RW", name: "Rwanda" },
    { code: "BL", name: "Saint Barthélemy" },
    { code: "SH", name: "Saint Helena" },
    { code: "KN", name: "Saint Kitts and Nevis" },
    { code: "LC", name: "Saint Lucia" },
    { code: "MF", name: "Saint Martin" },
    { code: "PM", name: "Saint Pierre and Miquelon" },
    { code: "VC", name: "Saint Vincent and the Grenadines" },
    { code: "WS", name: "Samoa" },
    { code: "SM", name: "San Marino" },
    { code: "ST", name: "São Tomé and Príncipe" },
    { code: "SA", name: "Saudi Arabia" },
    { code: "SN", name: "Senegal" },
    { code: "RS", name: "Serbia" },
    { code: "SC", name: "Seychelles" },
    { code: "SL", name: "Sierra Leone" },
    { code: "SG", name: "Singapore" },
    { code: "SX", name: "Sint Maarten" },
    { code: "SK", name: "Slovakia" },
    { code: "SI", name: "Slovenia" },
    { code: "SB", name: "Solomon Islands" },
    { code: "SO", name: "Somalia" },
    { code: "ZA", name: "South Africa" },
    { code: "KR", name: "South Korea" },
    { code: "SS", name: "South Sudan" },
    { code: "ES", name: "Spain" },
    { code: "LK", name: "Sri Lanka" },
    { code: "SD", name: "Sudan" },
    { code: "SR", name: "Suriname" },
    { code: "SJ", name: "Svalbard and Jan Mayen" },
    { code: "SZ", name: "Swaziland" },
    { code: "SE", name: "Sweden" },
    { code: "CH", name: "Switzerland" },
    { code: "SY", name: "Syria" },
    { code: "TW", name: "Taiwan" },
    { code: "TJ", name: "Tajikistan" },
    { code: "TZ", name: "Tanzania" },
    { code: "TH", name: "Thailand" },
    { code: "TG", name: "Togo" },
    { code: "TK", name: "Tokelau" },
    { code: "TO", name: "Tonga" },
    { code: "TT", name: "Trinidad and Tobago" },
    { code: "TN", name: "Tunisia" },
    { code: "TR", name: "Turkey" },
    { code: "TM", name: "Turkmenistan" },
    { code: "TC", name: "Turks and Caicos Islands" },
    { code: "TV", name: "Tuvalu" },
    { code: "VI", name: "U.S. Virgin Islands" },
    { code: "UG", name: "Uganda" },
    { code: "UA", name: "Ukraine" },
    { code: "AE", name: "United Arab Emirates" },
    { code: "GB", name: "United Kingdom" },
    { code: "US", name: "United States" },
    { code: "UY", name: "Uruguay" },
    { code: "UZ", name: "Uzbekistan" },
    { code: "VU", name: "Vanuatu" },
    { code: "VA", name: "Vatican City" },
    { code: "VE", name: "Venezuela" },
    { code: "VN", name: "Vietnam" },
    { code: "WF", name: "Wallis and Futuna" },
    { code: "EH", name: "Western Sahara" },
    { code: "YE", name: "Yemen" },
    { code: "ZM", name: "Zambia" },
    { code: "ZW", name: "Zimbabwe" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const formData = new FormData();
    formData.append("product", product);
    formData.append("quantity", `${quantity} ${unit}`);
    formData.append("delivery", delivery);
    formData.append("packing", packing);
    formData.append("name", companyName);
    formData.append("address", address);
    formData.append("requirement", requirement);
    formData.append("country", countries.find((c) => c.code === country)?.name || "");
    formData.append("mobile", Phonenumber);
    formData.append("email", email);
    formData.append("fax", fax);
    formData.append("toEmail", "info@spansulepharma.com");
    formData.append("heading", "Online Enquiry from Website");
    formData.append("subject", message);

    try {
      const response = await axios.post("https://api.smartaihr.com/api/users/sendingEmail", formData);
      console.log(response.data);
      setSuccess(true);
      setProduct("");
      setQuantity(1);
      setUnit("");
      setDelivery("");
      setPacking("");
      setCompanyName("");
      setAddress("");
      setRequirement("");
      setCountry("");
      setPhonenumber("");
      setEmail("");
      setFax("");
      setMessage("");
    } catch (error) {
      console.error("Error sending email", error);
      setError("There was an issue sending the enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[416px] flex-shrink-0">
        <img
          src="/assets/aboutpage/online enquiry.png"
          alt="Contact us background"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6">
          <h1 className="text-white text-center font-quicksand text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold sm:text-center">
            We're Ready to Hear From You
          </h1>
          <p className="text-white text-center font-roboto text-base sm:text-lg md:text-xl lg:text-2xl font-normal mt-2 sm:mt-4 max-w-3xl">
            Tell us what you need, how we can help, and we'll work with you
          </p>
        </div>
      </div>

      {/* Form Container */}
      <div className="w-full max-w-3xl sm:max-w-4xl px-4 sm:px-6 py-6 sm:py-8">
        {/* Online Enquiry Title */}
        <h2 className="text-[#008000] text-center font-quicksand text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 sm:text-center">
          Online Enquiry
        </h2>

        <p className="text-black text-center font-roboto text-base sm:text-lg md:text-xl font-normal leading-6 sm:leading-7 md:leading-[30px] tracking-[0.4px] mb-6 sm:mb-8">
          Have a question or looking to partner with us? Fill out the form below and our team will get back to you.
          Let's talk about what you need. We'd love to support your business and build a lasting relationship with you.
        </p>

        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            Enquiry sent successfully! We'll get back to you soon.
          </div>
        )}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>
        )}

        <form className="space-y-6 sm:space-y-8" onSubmit={handleSubmit}>
          {/* Contact Information Section */}
          <div>
            <h3 className="text-[#008000] font-quicksand text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 sm:text-center">
              Your Contact Information
            </h3>

            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              <div className="space-y-2">
                <label className="text-black font-[Roboto] text-base sm:text-lg md:text-xl font-normal leading-6 sm:leading-7 md:leading-[30px] tracking-[0.4px] flex">
                  Product <span className="text-[#F00] ml-1">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  className="w-full border border-gray-300 rounded p-2 sm:p-3 text-sm sm:text-base"
                />
              </div>

              <div className="space-y-2">
                <label className="text-black font-[Roboto] text-base sm:text-lg md:text-xl font-normal leading-6 sm:leading-7 md:leading-[30px] tracking-[0.4px] flex">
                  Quantity <span className="text-[#F00] ml-1">*</span>
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    required
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-[800px] border border-gray-300 rounded p-2 sm:p-3 text-sm sm:text-base"
                    min={1}
                    placeholder="Enter quantity"
                  />
                  <div className="relative w-62">
                    <select
                      required
                      value={unit}
                      onChange={(e) => setUnit(e.target.value)}
                      className="w-[100px] border border-gray-300 rounded p-2 sm:p-3 text-sm sm:text-base appearance-none"
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="grams">Grams</option>
                      <option value="kg">KG</option>
                      <option value="tons">Tons</option>
                    </select>
                    <ChevronDown
                      className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                      size={16}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-black font-[Roboto] text-base sm:text-lg md:text-xl font-normal leading-6 sm:leading-7 md:leading-[30px] tracking-[0.4px] flex">
                  Delivery <span className="text-[#F00] ml-1">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={delivery}
                  onChange={(e) => setDelivery(e.target.value)}
                  className="w-full border border-gray-300 rounded p-2 sm:p-3 text-sm sm:text-base"
                />
              </div>

              <div className="space-y-2">
                <label className="text-black font-[Roboto] text-base sm:text-lg md:text-xl font-normal leading-6 sm:leading-7 md:leading-[30px] tracking-[0.4px] flex">
                  Packing <span className="text-[#F00] ml-1">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={packing}
                  onChange={(e) => setPacking(e.target.value)}
                  className="w-full border border-gray-300 rounded p-2 sm:p-3 text-sm sm:text-base"
                />
              </div>
            </div>
          </div>

          {/* Company / Buyer Details Section */}
          <div>
            <h3 className="text-[#008000] font-quicksand text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 sm:text-center">
              Company / Buyer Details
            </h3>

            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              <div className="space-y-2">
                <label className="text-black font-[Roboto] text-base sm:text-lg md:text-xl font-normal leading-6 sm:leading-7 md:leading-[30px] tracking-[0.4px] flex">
                  Company Name <span className="text-[#F00] ml-1">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full border border-gray-300 rounded p-2 sm:p-3 text-sm sm:text-base"
                />
              </div>

              <div className="space-y-2">
                <label className="text-black font-[Roboto] text-base sm:text-lg md:text-xl font-normal leading-6 sm:leading-7 md:leading-[30px] tracking-[0.4px]">
                  Address
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full border border-gray-300 rounded p-2 sm:p-3 text-sm sm:text-base"
                />
              </div>

              <div className="space-y-2">
                <label className="text-black font-[Roboto] text-base sm:text-lg md:text-xl font-normal leading-6 sm:leading-7 md:leading-[30px] tracking-[0.4px] flex">
                  Your Requirement <span className="text-[#F00] ml-1">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={requirement}
                  onChange={(e) => setRequirement(e.target.value)}
                  className="w-full border border-gray-300 rounded p-2 sm:p-3 text-sm sm:text-base"
                />
              </div>

              <div className="space-y-2">
                <label className="text-black font-[Roboto] text-base sm:text-lg md:text-xl font-normal leading-6 sm:leading-7 md:leading-[30px] tracking-[0.4px] flex">
                  Country <span className="text-[#F00] ml-1">*</span>
                </label>
                <div className="relative">
                  <select
                    required
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full border border-gray-300 rounded p-2 sm:p-3 text-sm sm:text-base appearance-none"
                  >
                    <option value="" disabled>
                      Choose One
                    </option>
                    {countries.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    size={16}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-black font-[Roboto] text-base sm:text-lg md:text-xl font-normal leading-6 sm:leading-7 md:leading-[30px] tracking-[0.4px] flex">
                  Phonenumber <span className="text-[#F00] ml-1">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={Phonenumber}
                  onChange={(e) => setPhonenumber(e.target.value)}
                  className="w-full border border-gray-300 rounded p-2 sm:p-3 text-sm sm:text-base"
                />
              </div>

              <div className="space-y-2">
                <label className="text-black font-[Roboto] text-base sm:text-lg md:text-xl font-normal leading-6 sm:leading-7 md:leading-[30px] tracking-[0.4px] flex">
                  E-Mail <span className="text-[#F00] ml-1">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded p-2 sm:p-3 text-sm sm:text-base"
                />
              </div>

              <div className="space-y-2">
                <label className="text-black font-[Roboto] text-base sm:text-lg md:text-xl font-normal leading-6 sm:leading-7 md:leading-[30px] tracking-[0.4px]">
                  Fax
                </label>
                <input
                  type="text"
                  value={fax}
                  onChange={(e) => setFax(e.target.value)}
                  className="w-full border border-gray-300 rounded p-2 sm:p-3 text-sm sm:text-base"
                />
              </div>
            </div>
          </div>

          {/* Message Section */}
          <div className="space-y-2">
            <label className="text-black font-[Roboto] text-base sm:text-lg md:text-xl font-normal leading-6 sm:leading-7 md:leading-[30px] tracking-[0.4px]">
              Describe Your Buying Requirement in Detail
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-gray-300 rounded p-2 sm:p-3 h-40 sm:h-48 md:h-56 text-sm sm:text-base"
              placeholder="Message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-[#008000] hover:bg-[#006800] text-white font-[Quicksand] font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-md text-base sm:text-lg md:text-xl disabled:opacity-70"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </main>
  );
}