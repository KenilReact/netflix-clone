import React from "react";

const Footer = () => {
  const footerLinks = {
    column1: [
      { text: "FAQ", href: "#" },
      { text: "Investor Relations", href: "#" },
      { text: "Privacy", href: "#" },
      { text: "Speed Test", href: "#" },
    ],
    column2: [
      { text: "Help Centre", href: "#" },
      { text: "Jobs", href: "#" },
      { text: "Cookie Preferences", href: "#" },
      { text: "Legal Notices", href: "#" },
    ],
    column3: [
      { text: "Account", href: "#" },
      { text: "Ways to Watch", href: "#" },
      { text: "Corporate Information", href: "#" },
      { text: "Only on Netflix", href: "#" },
    ],
    column4: [
      { text: "Media Centre", href: "#" },
      { text: "Terms of Use", href: "#" },
      { text: "Contact Us", href: "#" },
    ],
  };

  return (
    <footer className="bg-black text-gray-500 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <a href="tel:000-800-919-1694" className="block mb-8 hover:underline">
          Questions? Call 000-800-919-1694
        </a>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {Object.values(footerLinks).map((column, columnIndex) => (
            <ul key={columnIndex}>
              {column.map((link, linkIndex) => (
                <li key={linkIndex} className="mb-4">
                  <a
                    href={link.href}
                    className="hover:underline transition-colors duration-200"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>

        <div className="mt-8 space-y-4">
          <div className="relative inline-block">
            <select
              className="bg-black text-white border border-gray-600 rounded px-8 py-2 appearance-none cursor-pointer pr-12"
              defaultValue="en"
            >
              <option value="en">English</option>
              <option value="hi">हिन्दी</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg
                className="w-4 h-4 fill-current text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>

          <p className="text-sm">Netflix India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
