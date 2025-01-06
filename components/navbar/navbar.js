import Link from "next/link";
<<<<<<< HEAD
import NavLink from "./navlink";
=======
>>>>>>> gh-pages
import { useState, useEffect } from "react";
import { ChevronUpIcon, ChevronRightIcon } from "@heroicons/react/solid";

const navLinks = [
  {
    section: "Styleguide",
    links: [
      { title: "Colors", href: "/Styleguide/colors" },
      { title: "Typography", href: "/Styleguide/typography" },
      { title: "Grid", href: "/Styleguide/grid" },
      { title: "Flex", href: "/Styleguide/flex" },
      { title: "Skeleton", href: "/Styleguide/skeleton" },
      { title: "Menu", href: "/Styleguide/menu" },
      { title: "Hamburger Icons", href: "/Styleguide/hamburger" },
      { title: "List", href: "/Styleguide/list" },
      { title: "Input", href: "/Styleguide/input" },
      { title: "Tabs", href: "/Styleguide/tabs" },
      { title: "Popup", href: "/Styleguide/popup" },
      // Add more links for the Styles section if needed
    ],
  },
  {
    section: "Components",
    links: [
<<<<<<< HEAD
      { title: "Cards", href: "/Components/cards" },
      { title: "Headings", href: "/Components/headings" },
      { title: "Sections", href: "/Components/sections" },
      // Add more links for the Components section if needed
    ],
  },
  {
    section: "Example Pages",
    links: [
      { title: "People", href: "/ExamplePages/people" },
      { title: "Products", href: "/ExamplePages/products" },
      { title: "Employees", href: "/ExamplePages/employees" },
      { title: "Orders", href: "/ExamplePages/orders" },
      // Add more links for the Example Pages section if needed
    ],
  },
];

function NavSection({ title, isOpen, toggleSection, children }) {
  const sectionStyles = `flex justify-between items-center cursor-pointer px-2 ${
    isOpen ? "bg-slate-800" : ""
  }`;

  return (
    <div className="">
      <div className={sectionStyles} onClick={toggleSection}>
        <h2 className="text-sm font-semibold tracking-widest uppercase text-slate-400 pl-2">
          {title}
        </h2>
        <span className="float-right p-1 text-slate-400 border-solid border-1 border-slate-200 ">
          {isOpen ? (
            <ChevronUpIcon className="h-5 w-5 inline-block" />
          ) : (
            <ChevronRightIcon className="h-5 w-5 inline-block" />
          )}
        </span>
      </div>
      {isOpen && children}
    </div>
=======
      { title: "Headings", href: "/Components/headings" },
      { title: "Sections", href: "/Components/sections" },
      { title: "Cards", href: "/Components/cards" },
      { title: "Card List", href: "/Components/cardList" },
      // Add more links for the Components section if needed
    ],
  },
];

const mainLinks = [
  { title: "People", href: "/ExamplePages/people" },
  { title: "Products", href: "/ExamplePages/products" },
  { title: "Orders", href: "/ExamplePages/orders" },
  // Add more main links if needed
];

function NavSection({ title, isOpen, toggleSection, children }) {
  const sectionStyles = `flex justify-between items-center cursor-pointer px-4 h-12 text-gray-500 ${
    isOpen ? "bg-gray-700" : "hover:bg-gray-700"
  }`;

  return (
    <li className="">
      <div className={sectionStyles} onClick={toggleSection}>
        <h2 className="text-sm font-medium uppercase">{title}</h2>
        <span className="flex items-center justify-center">
          {isOpen ? (
            <ChevronUpIcon className="h-6 w-6" />
          ) : (
            <ChevronRightIcon className="h-6 w-6" />
          )}
        </span>
      </div>
      {isOpen && <ul className="">{children}</ul>}
      <hr className="border-gray-700" />
    </li>
>>>>>>> gh-pages
  );
}

function Navbar() {
  const [openSection, setOpenSection] = useState(null);

  useEffect(() => {
    const savedSection = localStorage.getItem("openSection");
    if (savedSection) {
      setOpenSection(savedSection);
    }
  }, []);

  const toggleSection = (section) => {
    const newOpenSection = openSection === section ? null : section;
    setOpenSection(newOpenSection);
    localStorage.setItem("openSection", newOpenSection);
  };

  return (
<<<<<<< HEAD
    <nav className="w-full">
      <div className="p-3 border-rose-500">
        <Link href="/" className="text-lg font-bold text-slate-200 ">
          <div className="divide-y divide-dashed ">Tailwind Backoffice</div>
        </Link>
      </div>

      {navLinks.map((navLink, index) => (
        <NavSection
          key={index}
          title={navLink.section}
          isOpen={openSection === navLink.section}
          toggleSection={() => toggleSection(navLink.section)}
        >
          <div className="flex flex-col ml-3 mr-3">
            {navLink.links.map((link, linkIndex) => (
              <NavLink
                key={linkIndex}
                to={link.href}
                isActive={
                  typeof window !== "undefined" &&
                  window.location.pathname === link.href
                } // Set isActive to true if the current page matches the link href
              >
                {link.title}
              </NavLink>
            ))}
          </div>
        </NavSection>
      ))}
    </nav>
  );
}

export default Navbar;
=======
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <aside className="flex flex-col w-full max-w-xs bg-gray-800 min-h-screen">
        <nav className="flex flex-col w-full">
            <div className="flex flex-row items-center h-12 px-4 rounded-lg text-white">
              <span className="flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" height="37px" viewBox="0 -960 960 960" width="37px" fill="#F1F5F9">
  <path d="M440-280h80l12-60q12-5 22.5-10.5T576-364l58 18 40-68-46-40q2-14 2-26t-2-26l46-40-40-68-58 18q-11-8-21.5-13.5T532-620l-12-60h-80l-12 60q-12 5-22.5 10.5T384-596l-58-18-40 68 46 40q-2 14-2 26t2 26l-46 40 40 68 58-18q11 8 21.5 13.5T428-340l12 60Zm40-120q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/>
</svg>

              </span>
              <span className="ml-1 text-2xl font-bold" style={{ color: '#F1F5F9' }}>BackOffice</span>
            </div>
          <ul>
            {mainLinks.map((link, index) => (
              <li key={index} className="">
                <Link href={link.href} legacyBehavior>
                  <a className="flex flex-row items-center h-12 px-4 font-medium text-slate-400 hover:bg-gray-700 ">
                  
                    <span className="ml-3">{link.title}</span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <hr className="border-gray-700" />
          <ul>
            {navLinks.map((navLink, index) => (
              <NavSection
                key={index}
                title={navLink.section}
                isOpen={openSection === navLink.section}
                toggleSection={() => toggleSection(navLink.section)}
              >
                {navLink.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href} legacyBehavior>
                      <a className="flex flex-row items-center h-12 px-4 font-medium text-slate-400 hover:bg-gray-700 ">
                        <span className="ml-3">{link.title}</span>
                      </a>
                    </Link>
                  </li>
                ))}
              </NavSection>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
}

export default Navbar;
>>>>>>> gh-pages
