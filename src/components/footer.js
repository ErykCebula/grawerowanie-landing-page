import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      allSocialJson {
        nodes {
          id
          name
          href
          icon {
            publicURL
          }
        }
      }
    }
  `);
  return (
    <footer id={"contact"}>
      <div className="container mx-auto">
        <div className="mt-2 md:mb-20 mb-10">
          <hr className="text-neutral-300"></hr>
        </div>
        <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-8 gap-12">
          <div className="lg:col-span-6 md:pr-24">
            <h3 className="font-display md:text-display-lg text-display-sm font-normal pb-4">
              Wybierz jakość i precyzję!
            </h3>
            <a href="mailto:biuro@grawerowanie24.com.pl"
            className="font-display md:text-display-lg text-display-sm italic text-primary-600 underline">
              Skontaktuj się z nami
            </a>
          </div>
          <div className="lg:col-span-6 flex flex-col gap-8 xl:pl-80 lg:pl-48">
            <div className="flex flex-col gap-2">
              <p className="text-display-xs font-display font-normal">
                ART-TECH
              </p>
              <p className="text-body-sm font-light text-neutral-900">
                ul. Włókniarzy 23/1A; 68-100 Żagań
              </p>
              <p className="text-body-sm font-light text-neutral-900">
                NIP: 924-121-03-30
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-body-sm font-light text-neutral-900">
                E-mail:
              </p>
              <a
                className="text-display-xs font-display font-normal text-primary-600"
                href="mailto:biuro@grawerowanie24.com.pl">
                biuro@grawerowanie24.com.pl
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-body-sm font-light text-neutral-900">
                Telefon:
              </p>
              <a
                  className="text-display-xs font-display font-normal text-primary-600"
                  href="tel:+48600171928">
                600 171 928
              </a>
              <span className="mx-2">  </span>
              <a
                  className="text-display-xs font-display font-normal text-primary-600"
                  href="tel:+48796303969">
                796 303 969
              </a>
            </div>
          </div>
        </div>
        <div className="md:my-20 my-10">
          <hr className="text-neutral-300"></hr>
        </div>
        <div className="flex lg:flex-row flex-col gap-8 lg:items-center justify-between md:mb-20 mb-10">
          <div className="text-body-md font-light">
            © 2024 Grawerowanie24 – Twoje miejsce na personalizowane grawery.
          </div>
          <div className="flex lg:flex-row flex-col lg:items-center md:gap-6 gap-4">
            <div className="flex flex-row items-center opacity-70">
              <p className="text-body-sm font-semibold tracking-widest text-neutral-700 pr-4">
                Nasze media
              </p>
              <hr className="w-16 text-neutral-700"></hr>
            </div>
            <div className="flex flex-row  items-center gap-6">
              {data.allSocialJson.nodes.map((node) => (
                <a
                  href={node.href}
                  key={node.name}
                  target="_blank"
                  rel="noreferrer">
                  <img
                    className="h-10 w-10"
                    src={node.icon.publicURL}
                    alt={node.name}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
