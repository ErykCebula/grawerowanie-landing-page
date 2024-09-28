import React from "react";

import Logo from "../images/logos/logo-dark.svg";
import Button from "./button";

export const scrollToSection = (sectionId) => {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
};

const Header = () => {
  const navigation = [
    { name: "O nas", sectionId: "about" },
    { name: "Usługi", sectionId: "services" },
    { name: "Realizacje", sectionId: "works" },
  ];

  return (
      <header>
        <div className="container mx-auto">
          <div className="flex py-5 justify-between items-center">
            <div className="flex items-center space-x-2">
              <img className="h-8 w-auto" src={Logo} alt="Logo"/>
              <span className="text-lg font-semibold">Grawerowanie24</span>
            </div>
            <nav className="flex flex-row gap-6">
              <div className="hidden md:flex gap-4 items-center">
                {navigation.map(({name, sectionId}) => (
                    <a
                        key={name}
                        onClick={() => scrollToSection(sectionId)}
                        className="text-body-sm font-medium text-neutral-700 hover:text-primary-600 px-4 cursor-pointer"
                    >
                      {name}
                    </a>
                ))}
              </div>
              <Button
                  label="KONTAKT"
                  onClick={() => scrollToSection("contact")}
                  className={"cursor-pointer"}
              />
            </nav>
          </div>
        </div>
      </header>
  );
};

export default Header;
