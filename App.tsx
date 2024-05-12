import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { theme } from './theme';
import tw from 'twrnc';
import { Routes } from './src/routes';
import { colors } from '@vs/constants';

function App(): React.JSX.Element {
  return (
    <NativeBaseProvider theme={theme} isSSR={false}>
      <StatusBar backgroundColor={colors.primary[300]} />
      {/* //TODO: below route param isFirst Time must be changed to a dynamic value once developments are done */}

      <Routes isFirstTime={true} />
    </NativeBaseProvider>
  );
}

export default App;
