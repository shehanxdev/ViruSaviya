import { StackScreenProps } from '@react-navigation/stack';
import { Card, Text, View } from 'native-base';
import React from 'react';
import tw from 'twrnc';
import { strings } from '@vs/constants';
import {
  AngryFaceSvg,
  AssessmentSvg,
  HappyFaceSvg,
  HelpSvg,
  HomePageSvg,
  NeutralFaceSvg,
  SadFaceSvg,
  VoiceAnalyzeSvg
} from '@vs/assets';
import { Pressable, ScrollView, Image } from 'react-native';
type HomeScreenProps = StackScreenProps<
  Record<string, object | undefined>,
  'HomeScreen'
>;
export const HomeScreen = ({ navigation }: HomeScreenProps) => {
  // const handleNavigation = (path: string) => {
  //   navigation.navigate(path);
  // };

  const handleVoiceScreenNavigation = () => {
    navigation.navigate('VoiceAnalyzeScreen');
  };

  return (
    <ScrollView style={tw`flex p-5 `}>
      <Text style={tw`text-3xl pt-5`}>{strings.ආයුබෝවන්}</Text>
      <HomePageSvg style={tw`mt-6`} />
      <Text style={tw`text-lg pt-18`}>{strings.අද_ඔබට_කොහොමද}?</Text>
      <View style={tw`flex-row justify-center gap-10 mt-4`}>
        <Pressable>
          <HappyFaceSvg />
          <Text style={tw`mt-2`}>{strings.සතුටින්}</Text>
        </Pressable>
        <Pressable>
          <NeutralFaceSvg />
          <Text style={tw`mt-2`}>මධ්‍යස්ථයි</Text>
        </Pressable>
        <Pressable>
          <SadFaceSvg />
          <Text style={tw`mt-2`}>{strings.දුකින්}</Text>
        </Pressable>
        <Pressable>
          <AngryFaceSvg />
          <Text style={tw`mt-2`}>{strings.තරහින්}</Text>
        </Pressable>
      </View>
      <View
        style={tw`shadow border-black shadow-[shadow-gray-100] py-6 px-5 rounded-sm italic mt-8`}>
        <Text style={tw`italic`}>
          අපේ ලොකුම දුර්වලකම තියෙන්නේ අත්හැරීම. සාර්ථක වීමට වඩාත්ම නිශ්චිත
          මාර්ගය වන්නේ සෑම විටම තවත් එක් වරක් උත්සාහ කිරීමයි.
        </Text>
        <Text>-Thomas Edison-</Text>
      </View>
      <View>
        <Text style={tw`my-10 text-lg`}>ඔබ කුමක් කිරීමට කැමතිද?</Text>
        <View style={tw`mb-5 flex-row justify-center gap-10`}>
          <Pressable
            onPress={handleVoiceScreenNavigation}
            style={tw`flex border-2  border-black rounded-lg p-4`}>
            <VoiceAnalyzeSvg />
            <Text style={tw`text-center`}>Analyze Voice</Text>
          </Pressable>
          <Pressable style={tw`flex border-2  border-black rounded-lg p-4`}>
            <AssessmentSvg />
            <Text style={tw`text-center`}>Analyze Voice</Text>
          </Pressable>
        </View>
        <View style={tw`mb-10 flex-row justify-center gap-10`}>
          <Pressable style={tw`flex border-2  border-black rounded-lg p-4`}>
            <VoiceAnalyzeSvg />
            <Text style={tw`text-center`}>Analyze Voice</Text>
          </Pressable>
          <Pressable style={tw`flex border-2  border-black rounded-lg p-4`}>
            <HelpSvg />
            <Text style={tw`text-center`}>Help</Text>
          </Pressable>
        </View>
        <Text style={tw`mb-10 text-center`}>Made with ❤️ in Sri Lanka</Text>
      </View>
    </ScrollView>
  );
};
