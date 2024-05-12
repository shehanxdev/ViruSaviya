import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/MainRouteScreens/HomeScreen/HomeScreen';
import { QuestionStackNavigator } from './Questions.routes';
import { CommunityScreen } from '@vs/screens';
import { MainStackParamList } from './route.types';

const MainStack = createStackNavigator<MainStackParamList>();

export const MainStackNavigator = () => {
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
      <MainStack.Screen name="CommunityScreen" component={CommunityScreen} />
      <MainStack.Screen
        name="QuestionsStack"
        component={QuestionStackNavigator}
      />
    </MainStack.Navigator>
  );
};
