import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Eyebrow from "./eyebrow";

const About = () => {
  const data = useStaticQuery(graphql`
    {
      aboutimage: file(relativePath: { eq: "about-creative.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 592
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);
  return (
    <div>
      <div className="container mx-auto" id="about">
        <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-8 gap-20 lg:py-32 py-12 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <Eyebrow label="O NAS" />
            <h2 className="font-display md:text-display-xl text-display-md font-normal pb-4">
              Tworzymy personalizowane  <span className="italic">grawery</span>, które przemieniają każdy przedmiot w
              unikalne dzieło sztuki.
            </h2>
            <p className="md:text-body-lg text-body-md font-light text-neutral-700">
              Nasza firma specjalizuje się w precyzyjnych usługach grawerskich,
              które nadają wyjątkowy charakter każdemu przedmiotowi.
              Oferujemy profesjonalne grawerowanie na różnych powierzchniach,
              takich jak drewno, metal, szkło czy skóra, a każda realizacja jest dla nas równie ważna.
            </p>
            <p className="md:text-body-lg text-body-md font-light text-neutral-700">
              Dbamy o to, aby każdy grawer był wykonany z najwyższą precyzją i dbałością o szczegóły,
              dzięki czemu tworzymy personalizowane pamiątki, które zostają na długie lata.
              Nasze usługi to nie tylko zwykłe grawerowanie — to sztuka,
              która oddaje emocje i wspomnienia naszych klientów.
            </p>
          </div>
          <div className="lg:col-span-6 flex flex-col gap-8 relative">
            <GatsbyImage
              image={getImage(data.aboutimage)}
              alt="Interior Design"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
