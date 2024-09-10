import Link from "next/link";
import NavLink from "./navlink";
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
