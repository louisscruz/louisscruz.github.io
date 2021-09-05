import * as React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { useMemo } from 'react';

import type { MetadataQueryQuery } from '../../graphql-types';

interface SeoProps {
  data?: MetadataQueryQuery;
  subTitle?: string;
}

const htmlAttributes = { lang: 'en' };
const fallbackDescription = 'The website of Louis Cruz';
const fallbackTitle = 'Louis Cruz';

const Seo = React.memo<SeoProps>(({ data, subTitle = '' }) => {
  const { site } = data || {};

  const { description, title } = useMemo(() => {
    const primaryTitle = site?.siteMetadata?.title || fallbackTitle;
    const titleToUse = subTitle
      ? `${primaryTitle} | ${subTitle}`
      : primaryTitle;

    return {
      description: site?.siteMetadata?.description || fallbackDescription,
      title: titleToUse,
    };
  }, [site, subTitle]);

  const meta = useMemo(
    () => [
      {
        name: `description`,
        content: description,
      },
      {
        property: `og:title`,
        content: title,
      },
      {
        property: `og:description`,
        content: description,
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
        content: description,
      },
    ],
    [description, title]
  );

  return <Helmet htmlAttributes={htmlAttributes} title={title} meta={meta} />;
});

export const MetadataQuery = graphql`
  query MetadataQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

export default Seo;
