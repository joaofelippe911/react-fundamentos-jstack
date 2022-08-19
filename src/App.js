import React, { useContext, useMemo, useState } from 'react';

import { ThemeProvider as StyledThemeProvider } from "styled-components";
import themes from './styles/themes';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';
import ThemeProvider, { ThemeContext } from './context/ThemeContext';

class App extends React.Component {
  render() {
    return (
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ theme }) => (
            <StyledThemeProvider theme={themes[theme] || themes.dark}>
              <GlobalStyle />
              <Layout />
            </StyledThemeProvider>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    );
  }
}

export default App;
