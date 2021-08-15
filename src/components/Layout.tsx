/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import GlobalStyles from "./GlobalStyles";

const MainContentContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Main = styled.main`
  max-width: 900px;
`;
const Layout = React.memo(({ children }) => (
  <>
    <GlobalStyles />
    <MainContentContainer>
      <Main>{children}</Main>
    </MainContentContainer>
  </>
));

export default Layout;
