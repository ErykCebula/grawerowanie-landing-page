import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import CtaButton from "../images/cta-button.svg";
import {scrollToSection} from "./header";

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      heroimage: file(relativePath: { eq: "hero-image.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 5120
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);
  return (
    <div id="home">
      <div className="container mx-auto">
        <div className="flex flex-col xl:px-32 items-center text-center gap-6 py-20">
          <h1 className="font-display md:text-display-2xl text-display-lg">
            Hej, witamy na <span className="italic">Grawerowanie24</span>!
          </h1>
          <p className="col-span-8 md:text-body-xl text-body-xl font-bold text-neutral-700 max-w-[800px]">
            Profesjonalne usługi grawerskie w Lubuskim.
          </p>
        </div>
      </div>
      <div className="relative">
        <GatsbyImage image={getImage(data.heroimage)} alt="Grawerowanie"/>
        <a onClick={() => scrollToSection("contact")} className="cursor-pointer">
        <img
            src={CtaButton}
            alt="Get in touch"
            className="absolute xl:left-28 lg:left-[44%] md:left-[42%] left-[35%] -top-16"
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;
