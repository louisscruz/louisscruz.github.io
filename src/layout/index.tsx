import * as React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Link } from 'gatsby';
import type { Theme } from '../types';

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

const PrimaryNavigationLink = styled(Link)`
  background-color: ${({ theme }) => theme.colors[theme.primaryHue]['700']};
  border-radius: ${({ theme }) => theme.borderRadii};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  transition: 160ms all ease-in-out;
  padding: 4px 16px;
  outline: none;
  &:hover {
    background-color: ${({ theme }) => theme.colors[theme.primaryHue]['600']};
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

const theme: Theme = {
  borderRadii: '2px',
  breakpoints: {
    'extra-small': '512px',
    small: '768px',
    medium: '900px',
    large: '1200px',
    'extra-large': '1600px',
  },
  colors: {
    black: '#000000',
    blue: {
      200: '#dee9ff',
      300: '#c9dbff',
      400: '#73a2ff',
      500: '#4080ff',
      600: '#3075ff',
      700: '#0f4abf',
      800: '#053187',
      900: '#032870',
    },
    green: {
      200: '#bdffc4',
      300: '#84fa92',
      400: '#51e863',
      500: '#2dcc3f',
      600: '#28b839',
      700: '#11801e',
      800: '#096113',
      900: '#03470b',
    },
    grey: {
      200: '#ededed',
      300: '#d9d9d9',
      400: '#ababab',
      500: '#999999',
      600: '#828282',
      700: '#787878',
      800: '#787878',
      900: '#424242',
    },
    white: '#ffffff',
  },
  fontFamily: 'Helvetica, Arial, sans-serif',
  primaryHue: 'blue',
  renderables: {
    headerItem: {
      spacing: 'quadruple',
    },
  },
  secondaryHue: 'green',
  spacing: {
    single: {
      leftAndRight: '8px',
      topAndBottom: '8px',
    },
    double: {
      leftAndRight: '16px',
      topAndBottom: '16px',
    },
    triple: {
      leftAndRight: '32px',
      topAndBottom: '32px',
    },
    quadruple: {
      leftAndRight: '64px',
      topAndBottom: '64px',
    },
  },
};

const Layout = React.memo(({ children }) => (
  <ThemeProvider theme={theme}>
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
                <PrimaryNavigationLink to="something">
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
