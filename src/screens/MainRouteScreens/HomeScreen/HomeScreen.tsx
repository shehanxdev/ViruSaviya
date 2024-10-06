import { StackScreenProps } from '@react-navigation/stack';
import { Card, Text, View } from 'native-base';
import React, { useEffect, useState } from 'react';
import tw from 'twrnc';
import { colors, strings } from '@vs/constants';
import {
  AngryFaceSvg,
  AssessmentSvg,
  CalendarSVG,
  DiarySVG,
  DoctorSVG,
  HappyFaceSvg,
  HelpSvg,
  HomePageSvg,
  NatureSvg,
  NeutralFaceSvg,
  SadFaceSvg,
  SleepSVG,
  VoiceAnalyzeSvg
} from '@vs/assets';
import { TouchableOpacity, ScrollView, Image } from 'react-native';
import { AsyncStorageService } from './../../../services/AsynStorage.service';
import { encodedDisorders } from '@vs/constants';
import { MinuteTimer } from '../VoiceAnalysisScreen/MinuteTimer';
import ReactNativeModal from 'react-native-modal';
import ConfettiCannon from 'react-native-confetti-cannon';
import { getGreeting } from './../../../utils/greetingMessage';
import { MoodCalendar } from './MoodCalendarScreen';
type HomeScreenProps = StackScreenProps<
  Record<string, object | undefined>,
  'HomeScreen'
>;
export const HomeScreen = ({ navigation }: HomeScreenProps) => {
  // const handleNavigation = (path: string) => {
  //   navigation.navigate(path);
  // };

  const [diagnosis, setDiagnosis] = useState(null);
  const [modalVisibility, setModalVisibility] = useState(true);
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await AsyncStorageService.getData('VSDisorder');
        console.log(result);
        setDiagnosis(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      <ScrollView style={tw`flex  p-5`}>
        <Text style={tw`text-3xl pt-5 text-[${colors.primary[600]}]`}>
          Hello, Dave!
        </Text>
        <View style={tw`mt-10`}>
          <MoodCalendar />
        </View>
        <Text style={tw`text-lg pt-18`}>How do you feel today?</Text>
        <View style={tw`flex-row justify-center gap-10 mt-4`}>
          <TouchableOpacity>
            <HappyFaceSvg />
            <Text style={tw`mt-2`}>Happy</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <NeutralFaceSvg />
            <Text style={tw`mt-2`}>Neutral</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <SadFaceSvg />
            <Text style={tw`mt-2`}>Sad</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <AngryFaceSvg />
            <Text style={tw`mt-2`}>Angry</Text>
          </TouchableOpacity>
        </View>
        <View
          style={tw`shadow border-black shadow-gray-100 py-6 px-5 rounded-sm italic mt-8`}>
          <Text style={tw`italic`}>
            Our biggest weakness is giving up. Most certain to succeed The trick
            is to always try one more time.
          </Text>
          <Text>-Thomas Edison-</Text>
        </View>
        <View>
          <Text style={tw`my-10 text-lg`}>
            What would you like to do today?
          </Text>
          <View style={tw`mb-5 flex-row justify-center gap-10`}>
            <TouchableOpacity
              style={tw`flex border-2 bg-white  border-black rounded-lg p-4`}>
              <DoctorSVG />
              <Text style={tw`text-center`}>Visit a doctor</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={tw`flex border-2  bg-white  border-black rounded-lg p-4`}>
              <SleepSVG />
              <Text style={tw`text-center`}>Track Sleep</Text>
            </TouchableOpacity>
          </View>
          <View style={tw`mb-10 flex-row justify-center gap-10`}>
            <TouchableOpacity
              style={tw`flex border-2 bg-white  border-black rounded-lg p-4`}>
              <CalendarSVG />
              <Text style={tw`text-center`}>Mood Calendar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('GoalDiaryStack')}
              style={tw`flex border-2 bg-white  border-black rounded-lg p-4`}>
              <DiarySVG />
              <Text style={tw`text-center`}>Goal Diary</Text>
            </TouchableOpacity>
          </View>
          <Text style={tw`mb-10 text-center`}>Made with ❤️ in Sri Lanka</Text>
        </View>
      </ScrollView>
    </View>
  );
};
