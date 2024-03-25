import { StackScreenProps } from '@react-navigation/stack';
import { Text, View, Pressable } from 'native-base';
import React from 'react';
import tw from 'twrnc';
type HomeScreenProps = StackScreenProps<
  Record<string, object | undefined>,
  'HomeScreen'
> & {
  isDiagnosisAssessment?: boolean;
};
export const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const handleNavigation = (path: string) => {
    navigation.navigate(path);
  };
  return (
    <View style={tw`flex flex-1  items-center justify-end p-4 gap-8 mb-14`}>
      <View style={tw`flex flex-row items-center gap-4`}>
        <Pressable
          style={tw`bg-white rounded-lg p-2  w-40 h-40 shadow-md`}
          onPress={() => handleNavigation('QuestionsStack')}>
          <Text style={tw`text-center text-xl`}>Take Diagnosis Assessment</Text>
        </Pressable>
        <Pressable
          style={tw`bg-white rounded-lg p-2  w-40 h-40 shadow-md`}
          onPress={() => handleNavigation('Exercises')}>
          <Text style={tw`text-center text-xl`}>
            View Recommended Exercises{' '}
          </Text>
        </Pressable>
      </View>
      <View style={tw`flex flex-row items-center gap-4`}>
        <Pressable
          style={tw`bg-white rounded-lg p-2  w-40 h-40 shadow-md`}
          onPress={() => handleNavigation('Tasks')}>
          <Text style={tw`text-center text-xl`}>Analyze My Voice</Text>
        </Pressable>
        <Pressable
          style={tw`bg-white rounded-lg p-2  w-40 h-40 shadow-md`}
          onPress={() => handleNavigation('CommunityScreen')}>
          <Text style={tw`text-center text-xl`}>Post My Thaughts</Text>
        </Pressable>
      </View>
    </View>
  );
};
