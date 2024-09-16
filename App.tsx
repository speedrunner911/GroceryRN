import React from 'react';
import {I18nextProvider} from 'react-i18next';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { QueryClient, QueryClientProvider } from 'react-query';

import i18n from './app/locales/i18n';
import MainNavigator from './app/MainNavigator';
import {ThemeProvider} from './app/context/ThemeProvider';

// @todo: move to api file same as i18n
const client = new QueryClient();

const App = () => {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={client}>
        <I18nextProvider i18n={i18n}>
          <GluestackUIProvider config={config}>
            <ThemeProvider>
              <MainNavigator />
            </ThemeProvider>
          </GluestackUIProvider>
        </I18nextProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
};

export default App;
