import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View
} from 'react-native';

import { Header } from 'react-native/Libraries/NewAppScreen';
import { NativeBaseProvider } from 'native-base';
import { Button } from './src/components/index';
import { theme } from './theme';
function App(): React.JSX.Element {
  return (
    <NativeBaseProvider theme={theme} isSSR={false}>
      <SafeAreaView>
        <StatusBar />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Header />
          <View>
            <Button title="Test"></Button>
          </View>
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

export default App;
