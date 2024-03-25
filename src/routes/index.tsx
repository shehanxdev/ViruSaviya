import { View } from 'react-native';
import { MainStackNavigator } from './Main.routes';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import tw from 'twrnc';
import { QuestionStackNavigator } from './Questions.routes';

interface RoutesPropType {
  isFirstTime: boolean;
}
export const Routes = ({ isFirstTime = true }: RoutesPropType) => {
  return (
    <NavigationContainer>
      {isFirstTime ? <MainStackNavigator /> : <QuestionStackNavigator />}
    </NavigationContainer>
  );
};
