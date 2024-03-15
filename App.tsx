import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { theme } from './theme';
import tw from 'twrnc';
import { Routes } from './src/navigation';

function App(): React.JSX.Element {
  return (
    <NativeBaseProvider theme={theme} isSSR={false}>
      <SafeAreaView style={tw` flex-1`}>
        <StatusBar />

        <Routes isFirstTime={false} />
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

export default App;
