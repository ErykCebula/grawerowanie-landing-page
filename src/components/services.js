import React from "react";

import ArchitectureIcon from "../images/service-icons/interior-design.svg";
import RenovationIcon from "../images/service-icons/building-renovation.svg";
import ConstructionIcon from "../images/service-icons/construction.svg";
import Eyebrow from "./eyebrow";
import ServiceItem from "./serviceItem";

const Services = () => {
  return (
    <div id="services">
      <div className="container mx-auto">
        <div className="flex flex-col md:gap-20 gap-10 lg:py-28 md:py-20 py-12">
          <div className="grid lg:grid-cols-12 grid-cols-1 gap-8">
            <div className="lg:col-span-12">
              <Eyebrow label="NASZE USŁUGI" />
              <h2  className="font-display md:text-display-lg text-display-md pt-5">
                Dbamy o każdy szczegół, oferując <span className="italic">najwyższą jakość usług</span> oraz szybki czas
                realizacji.
              </h2>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col gap-8">
            <ServiceItem
              icon={RenovationIcon}
              title="Grawerowanie laserowe na metalu"
              description="Trwałe i precyzyjne napisy na brelokach, medalikach, zegarkach i innych przedmiotach."
            />
            <ServiceItem
              icon={ConstructionIcon}
              title="Grawerowanie na szkle"
              description="Eleganckie wzory na kieliszkach, butelkach czy statuetkach."
            />
            <ServiceItem
                icon={ArchitectureIcon}
                title="Grawerowanie na drewnie lub skórze"
                description="Idealne na tabliczki, upominki czy ozdobne skrzynki. Stylowe zdobienia na portfelach, paskach czy etui."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
