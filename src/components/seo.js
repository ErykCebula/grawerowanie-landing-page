import * as React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function Seo({ lang, meta, title, description, url }) {
  const { site } = useStaticQuery(
      graphql`
      query {
        site {
          siteMetadata {
            siteUrl
            title
            description
            author
          }
        }
      }
    `
  );

  const siteTitle = title ? `${title} | ${site.siteMetadata.title}` : site.siteMetadata.title;
  const metaDescription = description || site.siteMetadata.description;
  const siteUrl = site.siteMetadata.siteUrl;
  const ogUrl = url ? `${siteUrl}${url}` : siteUrl;

  return (
      <Helmet
          htmlAttributes={{
            lang,
          }}
          title={siteTitle}
          meta={[
            {
              name: "description",
              content: metaDescription,
            },
            {
              name: "keywords",
              content: `grawerowanie, personalizowane prezenty, laserowe grawerowanie, grawer na drewnie, grawer na metalu, usługi grawerskie, personalizacja, prezenty firmowe, grawerowane upominki, grawerowanie manualne, grawerowanie laserowe, grawerowanie na szkle, grawerowanie na skórze, grawerowanie na biżuterii, grawerowanie precyzyjne, znakowanie laserowe, tabliczki grawerowane, grawerowane breloki, grawerowane medale, grawerowanie przemysłowe, szyldy, szyldy emaliowane, szyldy reklamowe, szyldy na drzwi, tabliczki informacyjne`,
            },
            {
              property: "og:title",
              content: siteTitle,
            },
            {
              property: "og:description",
              content: metaDescription,
            },
            {
              property: "og:type",
              content: "website",
            },
            {
              property: "og:url",
              content: ogUrl,
            },
            {
              name: "twitter:card",
              content: "summary_large_image",
            },
            {
              name: "twitter:creator",
              content: site.siteMetadata?.author || "",
            },
            {
              name: "twitter:title",
              content: siteTitle,
            },
            {
              name: "twitter:description",
              content: metaDescription,
            },
          ].concat(meta)}
      />
  );
}

Seo.defaultProps = {
  lang: "pl",
  meta: [],
  description: "",
};

Seo.propTypes = {
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
};

export default Seo;
