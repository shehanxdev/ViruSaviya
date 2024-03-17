import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { WelcomeScreen } from '../screens/QuestionsRouteScreens/WelcomeScreen/WelcomeScreen';
import { QuestionScreen } from './../screens/QuestionsRouteScreens/QuestionScreen/QuestionScreen';

const QuestionStack = createStackNavigator();

export const QuestionStackNavigator = () => {
  return (
    <QuestionStack.Navigator
      initialRouteName="WelcomeScreen"
      screenOptions={{ headerShown: false }}>
      <QuestionStack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <QuestionStack.Screen name="QuestionScreen" component={QuestionScreen} />
    </QuestionStack.Navigator>
  );
};
