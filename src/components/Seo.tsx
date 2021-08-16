import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { useMemo } from 'react';

interface SeoProps {
  description?: string;
  lang?: string;
  title?: string;
}

const Seo = React.memo<SeoProps>(({ description, lang, title }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || data.site.siteMetadata.description;
  const titleToUse = data.site.siteMetadata?.title || title;

  const meta = useMemo(
    () => [
      {
        name: `description`,
        content: metaDescription,
      },
      {
        property: `og:title`,
        content: title,
      },
      {
        property: `og:description`,
        content: metaDescription,
      },
      {
        property: `og:type`,
        content: `website`,
      },
      {
        name: `twitter:title`,
        content: title,
      },
      {
        name: `twitter:description`,
        content: metaDescription,
      },
    ],
    [metaDescription, titleToUse]
  );

  const htmlAttributes = useMemo(
    () => ({
      lang,
    }),
    [lang]
  );

  return (
    <Helmet htmlAttributes={htmlAttributes} title={titleToUse} meta={meta} />
  );
});

export default Seo;
