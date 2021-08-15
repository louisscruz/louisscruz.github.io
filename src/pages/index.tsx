import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

import Layout from "../components/Layout";

const Ul = styled.ul`
  width: 100%;
  display: flex;
  padding: 0;
  justify-content: center;
`;

const Li = styled.li`
  padding: 10px;
  list-style: none;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

/* <Seo title="Home" /> */
const IndexPage = React.memo(() => (
  <Layout>
    <h1>Louis Cruz</h1>
    <p>
      I'm a full-stack software engineer with a focus on frontend development in
      TypeScript and React. I specialize in building, operating, and maintaining
      critical services, features, and codebases at scale.
    </p>
    <p>Currently, I'm a staff engineer and group technical lead at Zendesk.</p>
    <ImageContainer>
      <StaticImage
        src={"../images/profile.jpeg"}
        alt="Image of Louis Cruz"
        width={160}
        height={160}
      />
    </ImageContainer>
    <Ul>
      <Li>
        <a href="https://github.com/louisscruz/">GitHub</a>
      </Li>
      <Li>
        <a href="https://www.linkedin.com/in/louisscruz/">LinkedIn</a>
      </Li>
      <Li>
        <a href="mailto:louisstephancruz@me.com">Email</a>
      </Li>
    </Ul>
  </Layout>
));

export default IndexPage;
