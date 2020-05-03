import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'common/styles/theme';
import 'common/translations/translate';
import RootNavigator from './RootNavigator';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RootNavigator />
    </ThemeProvider>
  );
};

export default App;