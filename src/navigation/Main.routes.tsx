import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import { Button } from '../components';

const MainStack = createStackNavigator();

export const MainStackNavigator = () => {
  const TestScreen = (props: any) => {
    return (
      <View>
        <Text>Test Screen</Text>
        <Button title="Hi" />
      </View>
    );
  };
  return (
    <MainStack.Navigator initialRouteName="Home">
      <MainStack.Screen
        name="Home"
        component={TestScreen}
        options={{
          title: 'Awesome app'
        }}
      />
      <MainStack.Screen name="Tasks" component={TestScreen} />
      <MainStack.Screen name="Exercises" component={TestScreen} />
    </MainStack.Navigator>
  );
};
