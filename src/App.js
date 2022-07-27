import React, { useContext, useMemo, useState } from 'react';

import { ThemeProvider } from "styled-components";
import themes from './styles/themes';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';
import { ThemeContext } from './context/ThemeContext';

function App() {

  const { theme } = useContext(ThemeContext);

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme])

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  );
};

export default App;
