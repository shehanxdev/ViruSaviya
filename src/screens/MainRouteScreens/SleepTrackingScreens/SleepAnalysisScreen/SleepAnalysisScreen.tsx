import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import tw from 'twrnc';
import { getGreeting } from './../../../../utils/greetingMessage';
import { colors } from '@vs/constants';
import { SleepChart } from '../components/SleepChart';

export function SleepAnalysisScreen() {
  const greeting = getGreeting();
  return (
    <ScrollView>
      <View style={tw`my-10 mx-6`}>
        <Text style={tw`mb-10 text-4xl text-black text-center`}>
          Sleep Overview
        </Text>
        <Text style={tw`text-lg mb-4 text-black`}>
          Your last sleep information
        </Text>
        <View style={tw`rounded bg-white p-3 shadow`}>
          <View style={tw`flex gap-8 flex-wrap justify-between px-12`}>
            <View style={tw`flex flex-row  justify-between `}>
              <View>
                <Text style={tw`text-center  text-lg text-black`}>Bedtime</Text>
                <Text
                  style={tw`text-center text-lg font-bold text-black text-[${colors.primary[400]}]`}>
                  8:00 pm
                </Text>
              </View>
              <View>
                <Text style={tw`text-center  text-lg text-black`}>Wake up</Text>
                <Text
                  style={tw`text-center text-lg font-bold text-black text-[${colors.primary[400]}]`}>
                  8:00 am
                </Text>
              </View>
            </View>
            <View style={tw`flex flex-row  justify-between `}>
              <View>
                <Text style={tw`text-center  text-lg text-black`}>Total</Text>
                <Text
                  style={tw`text-center text-lg font-bold text-black text-[${colors.primary[400]}]`}>
                  12 h
                </Text>
              </View>
              <View>
                <Text style={tw`text-lg text-black`}>Quality</Text>
                <Text
                  style={tw`text-center text-lg font-bold text-black text-[${colors.primary[400]}]`}>
                  GOOD
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={tw`my-12`}>
          <SleepChart />
        </View>
      </View>
    </ScrollView>
  );
}
