import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import { Button } from '../components';
import { WelcomeScreen } from '../screens/QuestionsRouteScreens/WelcomeScreen/WelcomeScreen';

const QuestionStack = createStackNavigator();

export const QuestionStackNavigator = () => {
  const TestScreen = (props: any) => {
    return (
      <View>
        <Text>Test Screen</Text>
        <Button title="Hi" />
      </View>
    );
  };
  return (
    <QuestionStack.Navigator
      initialRouteName="WelcomeScreen"
      screenOptions={{ headerShown: false }}>
      <QuestionStack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <QuestionStack.Screen name="QuestionScreen" component={TestScreen} />
    </QuestionStack.Navigator>
  );
};
