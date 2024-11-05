import React from "react";

import MetalIcon from "../images/service-icons/metal.svg";
import GlassIcon from "../images/service-icons/glass.svg";
import MechanicIcon from "../images/service-icons/mechanic.svg";
import WoodIcon from "../images/service-icons/wood.svg";
import SzyldIcon from "../images/service-icons/szyld.svg";
import Eyebrow from "./eyebrow";
import ServiceItem from "./serviceItem";

const Services = () => {
  return (
    <div id="services">
      <div className="container mx-auto">
        <div className="flex flex-col md:gap-20 gap-10 lg:py-28 md:py-20 py-12">
          <div className="grid lg:grid-cols-12 grid-cols-1 gap-8">
            <div className="lg:col-span-12">
              <Eyebrow label="NASZE USŁUGI"/>
              <h2 className="font-display md:text-display-lg text-display-md pt-5">
                Dbamy o każdy szczegół, oferując <span className="italic">najwyższą jakość usług</span> oraz szybki czas
                realizacji.
              </h2>
            </div>
          </div>

          <div className="flex flex-wrap gap-8 w-full overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-8">
              <ServiceItem
                  icon={MetalIcon}
                  title="Grawerowanie laserowe na metalu"
                  description="Trwałe i precyzyjne napisy na brelokach, medalikach, zegarkach i innych przedmiotach."
              />
              <ServiceItem
                  icon={GlassIcon}
                  title="Grawerowanie na szkle"
                  description="Eleganckie wzory na kieliszkach, butelkach czy statuetkach."
              />
              <ServiceItem
                  icon={WoodIcon}
                  title="Grawerowanie na drewnie lub skórze"
                  description="Idealne na tabliczki, upominki czy ozdobne skrzynki. Stylowe zdobienia na portfelach, paskach czy etui."
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-8">
              <ServiceItem
                  icon={MechanicIcon}
                  title="Grawerowanie mechaniczne"
                  description="Idealne na tabliczki, upominki czy ozdobne skrzynki. Stylowe zdobienia na portfelach, paskach czy etui."
              />
              <ServiceItem
                  icon={SzyldIcon}
                  title="Szyldy emaliowane"
                  description="Idealne na tabliczki, upominki czy ozdobne skrzynki. Stylowe zdobienia na portfelach, paskach czy etui."
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
export default Services;
