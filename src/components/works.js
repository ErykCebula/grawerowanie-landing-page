import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import WorkItem from "./workItem";
import Eyebrow from "./eyebrow";

const Works = () => {
  const data = useStaticQuery(graphql`
    {
      allWorksJson {
        nodes {
          id
          title
          description
          image {
            childImageSharp {
              gatsbyImageData(
                width: 650
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  `);
  return (
    <div id="works">
      <div className="container mx-auto">
        <div className="flex flex-col gap-12 lg:py-28 md:py-24 py-12">
          <div className="grid xl:grid-cols-12 grid-cols-1 xl:gap-8 gap-10 items-center">
            <div className="xl:col-span-6 lg:col-span-8 flex flex-col xl:gap-24 md:gap-20 gap-10">
              <div className="flex flex-col gap-6">
                <Eyebrow label="NASZE REALIZACJE"/>
                <h2 className="font-display md:text-display-lg text-display-md pt-5 w-full">
                  Przykłady <span className="italic">naszych grawerów</span> wykonanych z pasją
                </h2>
                <p className="col-span-8 md:text-body-xl text-body-xl font-light text-neutral-700 max-w-[800px] w-full pt-3">
                  Z dumą prezentujemy wybrane projekty, które stworzyliśmy na zamówienie naszych klientów. Każdy grawer
                  jest unikalny i dopasowany do indywidualnych potrzeb, dbamy o każdy detal, aby końcowy efekt spełniał
                  najwyższe oczekiwania.
                </p>
              </div>
              {data.allWorksJson.nodes.slice(0, 1).map((node) => (
                  <WorkItem
                      key={node.id}
                      image={getImage(node.image)}
                      title={node.title}
                      description={node.description}
                  />
              ))}
            </div>
            <div className="xl:col-span-6 lg:col-span-8 flex flex-col xl:gap-24 md:gap-20 gap-10 xl:px-14">
              {data.allWorksJson.nodes.slice(1, 6).map((node) => (
                  <WorkItem
                      key={node.id}
                      image={getImage(node.image)}
                      title={node.title}
                      description={node.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
