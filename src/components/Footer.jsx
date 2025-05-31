import React from "react";

const Footer = () => {
  // Navigation menu items
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Where We Are", link: "/where-we-are" },
    { name: "Products", link: "/products" },
    { name: "Online Enquiry", link: "/enquiry" },
    { name: "Contact Us", link: "/contact" },
    { name: "News/Events", link: "/news" },
  ];

  // Social media icons with dummy links
  const socialIcons = [
    { name: "Facebook", icon: "/assets/homepage/socialicon1.png", link: "https://www.facebook.com/people/Spansules-Pharmatech/100064027470727/?modal=admin_todo_tour#" },
    { name: "Twitter", icon: "/assets/homepage/socialicon2.png", link: "https://twitter.com/spansulespharma" },
    { name: "LinkedIn", icon: "/assets/homepage/socialicon3.png", link: "https://www.linkedin.com/in/spansules-pharmatech/" },
    { name: "Instagram", icon: "/assets/homepage/socialicon4.png", link: "https://instagram.com/spansulespharma" },
  ];

  return (
    <footer
      className="w-full text-white relative bg-cover bg-center bg-no-repeat mb-[-34px]"
      style={{ backgroundImage: "url('/assets/homepage/footer.png')" }}
    >
      {/* Background dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>

      {/* Footer content - responsive */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col items-center gap-8">
        {/* Logo */}
        <div className="flex justify-center w-full mb-2">
          <img src="/assets/homepage/footerlogo.png" alt="SPANSULES" className="h-12" />
        </div>

        {/* Navigation */}
        <nav className="flex justify-center flex-wrap gap-4 md:gap-6 w-full text-sm">
          {navItems.map((item, index) => (
            <a key={index} href={item.link} className="hover:text-green-300 transition-colors px-2 py-1">
              {item.name}
            </a>
          ))}
        </nav>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {/* Phone Numbers */}
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <p className="text-sm mb-1 text-center">91 - 40 - 66679999</p>
            <p className="text-sm mb-1 text-center">91 - 40 - 23204043</p>
            <p className="text-sm text-center">91 - 9963214566</p>
          </div>

          {/* Address */}
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
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
            <p className="text-sm mb-1 text-center">Plot No:59, G-3, Srivenkateswara Towers,</p>
            <p className="text-sm mb-1 text-center">Bhagyanagar Colony,</p>
            <p className="text-sm mb-1 text-center">Opp.KPHB, Hyderabad-500072,</p>
            <p className="text-sm text-center">Telangana, India.</p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <p className="text-sm text-center">info@spansulepharma.com</p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-4 w-full">
          {socialIcons.map((social, index) => (
            <a
              key={index}
              href={social.link}
              className="hover:opacity-80 transition-opacity"
              aria-label={social.name}
            >
              <img src={social.icon || "/placeholder.svg"} alt={social.name} className="h-6 w-6" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-sm w-full">
          <p>Copyright © 2023. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



// import React from "react";

// const Footer = () => {
//   // Navigation menu items
//   const navItems = [
//     { name: "Home", link: "/" },
//     { name: "About Us", link: "/about" },
//     { name: "Where We Are", link: "/where-we-are" },
//     { name: "Products", link: "/products" },
//     { name: "Online Enquiry", link: "/enquiry" },
//     { name: "Contact Us", link: "/contact" },
//     { name: "News/Events", link: "/news" },
//   ];

//   // Social media icons
//   const socialIcons = [
//     { name: "Facebook", icon: "/assets/homepage/socialicon1.png", link: "#" },
//     { name: "Twitter", icon: "/assets/homepage/socialicon2.png", link: "#" },
//     { name: "LinkedIn", icon: "/assets/homepage/socialicon3.png", link: "#" },
//     { name: "Instagram", icon: "/assets/homepage/socialicon4.png", link: "#" },
//   ];

//   return (
//     <footer
//       className="w-full text-white relative bg-cover bg-center bg-no-repeat mb-[-34px]"
//       style={{ backgroundImage: "url('/assets/homepage/footer.png')" }}
//     >
//       {/* Background dark overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>

//       {/* Footer content - responsive */}
//       <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col items-center gap-8">
//         {/* Logo */}
//         <div className="flex justify-center w-full mb-2">
//           <img src="/assets/homepage/footerlogo.png" alt="SPANSULES" className="h-12" />
//         </div>

//         {/* Navigation */}
//         <div className="flex-col  justify-center items-center ">
//           <ul className="md:flex gap-4 md:gap-2 lg:gap-10 w-full text-sm">
//           {navItems.map((item, index) => (
//             <li key={index} href={item.link} className="hover:text-green-300 transition-colors px-2 py-1 text-center">
//               {item.name}
//             </li>
//           ))}
//         </ul>
//         </div>

//         {/* Contact Information */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8  w-full">
//           {/* Phone Numbers */}
//           <div className="flex justify-center items-center gap-3">
//             <div className="flex items-center mb-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5 mr-2"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                 />
//               </svg>
//             </div>
//             <div className="">
//               <p className="text-[16px]  mb-1 text-start">91 - 40 - 66679999</p>
//               <p className="text-[16px]  mb-1 text-start">91 - 40 - 23204043</p>
//               <p className="text-[16px]  text-start">91 - 9963214566</p>
//             </div>
//           </div>

//           {/* Address */}
//           <div className="flex justify-center items-center">
//             <div className="flex items-center mb-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5 mr-2"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                 />
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                 />
//               </svg>
//             </div>
//             <div className="">
//               <p className="text-[16px]  mb-1 text-center">Plot No:59, G-3, Srivenkateswara Towers,</p>
//               <p className="text-[16px]  mb-1 text-center">Bhagyanagar Colony,</p>
//               <p className="text-[16px]  mb-1 text-center">Opp.KPHB, Hyderabad-500072,</p>
//               <p className="text-[16px]  text-center">Telangana, India.</p>
//             </div>
//           </div>

//           {/* Email */}
//           <div className="flex items-center justify-center mb-2 gap-3">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5 mr-2"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//               />
//             </svg>
//             <p className="text-[16px] ">info@spansulepharma.com</p>
//           </div>
//         </div>

//         {/* Social Media Icons */}
//         <div className="flex justify-center gap-4 w-full">
//           {socialIcons.map((social, index) => (
//             <a
//               key={index}
//               href={social.link}
//               className="hover:opacity-80 transition-opacity"
//               aria-label={social.name}
//             >
//               <img src={social.icon || "/placeholder.svg"} alt={social.name} className="h-6 w-6" />
//             </a>
//           ))}
//         </div>

//         {/* Copyright */}
//         <div className="text-center text-[16px]  w-full">
//           <p>Copyright © 2023. All Rights Reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
