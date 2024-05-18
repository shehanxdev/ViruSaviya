import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/MainRouteScreens/HomeScreen/HomeScreen';
import { QuestionStackNavigator } from './Questions.routes';
import { CommunityScreen, VoiceAnalysisScreen } from '@vs/screens';
import { MainStackParamList } from './route.types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  CommunityIconSvg,
  HamburgerIconSvg,
  HomeIconSvg,
  UserIconSvg,
  VoiceAnalyzeSvgSamll
} from '@vs/assets';
import { Text, View } from 'react-native';
import tw from 'twrnc';
import { colors } from '@vs/constants';

const MainStack = createBottomTabNavigator();

export const MainStackNavigator = () => {
  return (
    <MainStack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({ route }) => ({
        headerShown: true,
        headerStyle: { elevation: 15, shadowColor: 'black' },
        tabBarIcon: () => {
          switch (route.name) {
            case 'HomeScreen':
              return (
                <View style={tw`mt-4`}>
                  <HomeIconSvg />
                </View>
              );
            case 'VoiceAnalyzeScreen':
              return (
                <View style={tw`mt-4`}>
                  <VoiceAnalyzeSvgSamll />
                </View>
              );
            default:
              return (
                <View style={tw`mt-4`}>
                  <CommunityIconSvg />
                </View>
              );
          }
        },
        tabBarLabel: '',
        headerLeft(_props) {
          return (
            <View style={tw`mx-5 my-4`}>
              <UserIconSvg />
            </View>
          );
        },
        headerRight(_props) {
          return (
            <View style={tw`mx-5 my-4`}>
              <HamburgerIconSvg />
            </View>
          );
        },
        headerTitle: ''
      })}>
      <MainStack.Screen name="HomeScreen" component={HomeScreen} />
      <MainStack.Screen
        name="VoiceAnalyzeScreen"
        component={VoiceAnalysisScreen}
      />
      <MainStack.Screen name="CommunityScreen" component={CommunityScreen} />

      <MainStack.Screen
        name="QuestionsStack"
        component={QuestionStackNavigator}
      />
    </MainStack.Navigator>
  );
};
