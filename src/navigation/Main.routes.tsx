import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import { Button } from '../components';
import { HomeScreen } from './../screens/MainRouteScreens/HomeScreen/HomeScreen';
import { QuestionStackNavigator } from './Questions.routes';
import { CommunityScreen } from './../screens/MainRouteScreens/HomeScreen/CommunityScreen';

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
    <MainStack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ headerShown: false }}>
      <MainStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Awesome app'
        }}
      />
      <MainStack.Screen name="Tasks" component={TestScreen} />
      <MainStack.Screen name="CommunityScreen" component={CommunityScreen} />
      <MainStack.Screen
        name="QuestionsStack"
        component={QuestionStackNavigator}
      />
    </MainStack.Navigator>
  );
};
