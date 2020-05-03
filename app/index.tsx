import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import store from 'store';
import theme from 'common/styles/theme';
import 'common/translations/translate';
import RootNavigator from './RootNavigator';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    </ThemeProvider>
  );
};

export default App;