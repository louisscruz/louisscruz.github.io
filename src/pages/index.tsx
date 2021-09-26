import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import Seo from '../components/Seo';

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

/* <Seo title="Home" /> */
const IndexPage = React.memo(() => (
  <>
    <Seo />
    <ImageContainer>
      <StaticImage
        src="../images/profile.jpeg"
        alt="Image of Louis Cruz"
        layout="fixed"
        placeholder="blurred"
        width={256}
        height={256}
      />
    </ImageContainer>
    <p>
      I'm a full-stack software engineer with a focus on frontend development in
      TypeScript and React. I design, build, and maintain critical services,
      features, and codebases at scale.
    </p>
    <p>Currently, I'm a staff engineer and group technical lead at Zendesk.</p>
  </>
));

export default IndexPage;
