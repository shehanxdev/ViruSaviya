import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/MainRouteScreens/HomeScreen/HomeScreen';
import { QuestionStackNavigator } from './Questions.routes';
import { CommunityScreen } from '@vs/screens';
import { MainStackParamList } from './route.types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CommunityIconSvg, HomeIconSvg } from '@vs/assets';

const MainStack = createBottomTabNavigator();

export const MainStackNavigator = () => {
  return (
    <MainStack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: () => {
          switch (route.name) {
            case 'HomeScreen':
              return <HomeIconSvg />;
            case 'CommunityScreen':
              return <CommunityIconSvg />;
            default:
              return <CommunityIconSvg />;
          }
        }
      })}>
      <MainStack.Screen name="HomeScreen" component={HomeScreen} />
      <MainStack.Screen name="CommunityScreen" component={CommunityScreen} />
      <MainStack.Screen
        name="QuestionsStack"
        component={QuestionStackNavigator}
      />
    </MainStack.Navigator>
  );
};
