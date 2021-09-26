import * as React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Link } from 'gatsby';
import globalTheme from '../theme';
import Seo from '../components/Seo';

const GlobalStyles = createGlobalStyle`
  html, body {
    line-height: 1.15;
  }
  html, body, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
    font-family: Verdana, sans-serif;
    font-size: 18px;
    font-weight: 300;
  }
  h1, h2 {
    font-family: Garamond, serif;
  }
  h1 {
    font-size: 62px;
  }
  h2 {
    font-size: 48px;
  }
  p {
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0;
    margin-inline-end: 0;
  }
  a:not(nav a) {
    color: ${({ theme }) => theme.colors[theme.primaryHue]['700']};
    text-decoration: none;
    outline: none;
    transition: 160ms all ease-in-out;
    &:hover, &:focus {
      color: ${({ theme }) => theme.colors[theme.primaryHue]['800']};
      text-decoration: underline;
    }
  }
`;

const GlobalContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContentContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

const Main = styled.main`
  flex: 1;
  max-width: 900px;
`;

const InnerMainContent = styled.div`
  margin: 16px;
`;

const HeaderContentContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Header = styled.header`
  display: flex;
  flex: 1;
  flex-direction: column;
  border-bottom: 4px double ${({ theme }) => theme.colors.black};
  max-width: ${({ theme }) => theme.breakpoints.medium};
  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    flex-direction: row;
  }
`;

const Navigation = styled.nav`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    justify-content: flex-start;
  }
`;

const Title = styled.h1`
  text-align: center;
`;

const NavigationUl = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  flex-direction: column;
  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    flex-direction: row;
  }
`;

const NavigationLi = styled.li`
  display: flex;
  margin: 12px;
`;

const NavigationLink = styled(Link)`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadii};
  color: ${({ theme }) => theme.colors[theme.primaryHue]['700']};
  text-decoration: none;
  transition: 160ms all ease-in-out;
  padding: 4px 16px;
  outline: none;
  &:hover {
    background-color: ${({ theme }) => theme.colors[theme.primaryHue]['200']};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors[theme.primaryHue]['300']};
    color: ${({ theme }) => theme.colors[theme.primaryHue]['900']};
  }
  &:focus-visible {
    box-shadow: ${({ theme }) =>
      `0px 0px 0px 2px ${theme.colors[theme.primaryHue]['500']}`};
  }
`;

const PrimaryNavigationLink = styled.a`
  background-color: ${({ theme }) => theme.colors[theme.primaryHue]['700']};
  border-radius: ${({ theme }) => theme.borderRadii};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  transition: 160ms all ease-in-out;
  padding: 4px 16px;
  outline: none;
  &:hover {
    background-color: ${({ theme }) => theme.colors[theme.primaryHue]['600']};
    cursor: pointer;
  }
  &:active {
    background-color: ${({ theme }) => theme.colors[theme.primaryHue]['900']};
  }
  &:focus-visible {
    box-shadow: ${({ theme }) =>
      `0px 0px 4px 2px ${theme.colors[theme.primaryHue]['500']}`};
  }
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Footer = styled.footer`
  border-top: 4px double ${({ theme }) => theme.colors.black};
  display: flex;
  max-width: ${({ theme }) => theme.breakpoints.medium};
  width: 100%;
`;

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

const Layout = React.memo(({ children }) => (
  <ThemeProvider theme={globalTheme}>
    <Seo />
    <GlobalStyles />
    <GlobalContainer>
      <HeaderContentContainer>
        <Header>
          <Title>Louis Cruz</Title>
          <Navigation>
            <NavigationUl>
              <NavigationLi>
                <NavigationLink to="/">About</NavigationLink>
              </NavigationLi>
              <NavigationLi>
                <NavigationLink to="/blog">Blog</NavigationLink>
              </NavigationLi>
              <NavigationLi>
                <PrimaryNavigationLink href="mailto:louisstephancruz@me.com">
                  Contact
                </PrimaryNavigationLink>
              </NavigationLi>
            </NavigationUl>
          </Navigation>
        </Header>
      </HeaderContentContainer>
      <MainContentContainer>
        <Main>
          <InnerMainContent>{children}</InnerMainContent>
        </Main>
      </MainContentContainer>
      <FooterContainer>
        <Footer>
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
        </Footer>
      </FooterContainer>
    </GlobalContainer>
  </ThemeProvider>
));

export default Layout;
