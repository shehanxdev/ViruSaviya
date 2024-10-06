import { SleepingMoonSVG } from '@vs/assets';
import { colors } from '@vs/constants';
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { CircularProgress } from 'react-native-circular-progress';

import tw from 'twrnc';
import { getGreeting } from './../../../../utils/greetingMessage';
import { Button } from '@vs/components';

const SleepTimer: React.FC = () => {
  const [timeElapsed, setTimeElapsed] = useState<number>(0); // Time in seconds
  const [isTracking, setIsTracking] = useState<boolean>(false);
  const totalSleepTime = 8 * 60 * 60; // 8 hours in seconds

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTracking) {
      interval = setInterval(() => {
        setTimeElapsed(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTracking]);

  const formatTime = (timInSeconds: number): string => {
    const hours = Math.floor(timInSeconds / 3600);
    const minutes = Math.floor((timInSeconds % 3600) / 60);
    const seconds = (timInSeconds % 3600) % 60;
    return `${hours}h ${minutes}min ${seconds}s`;
  };
  const greeting = getGreeting();

  return (
    <ScrollView>
      <View style={tw`flex justify-center items-center gap-10  relative`}>
        <Text style={tw`mb-20 text-4xl text-black`}>{`${greeting}!`}</Text>
        {/* Circular Progress */}
        <View>
          <CircularProgress
            size={200}
            width={10}
            fill={(timeElapsed / totalSleepTime) * 100}
            tintColor={colors.primary[400]}
            backgroundColor="#c3c3c3"
            rotation={0}
            lineCap="round">
            {() => (
              <View style={tw`flex items-center gap-4 justify-center`}>
                <Text style={tw`text-lg text-center text-gray-500`}>
                  {formatTime(timeElapsed)}
                </Text>
                <SleepingMoonSVG />
              </View>
            )}
          </CircularProgress>
        </View>

        {/* Buttons */}
        <View style={tw`w-full `}>
          <TouchableOpacity style={tw`  px-6 rounded-full mb-4`}>
            <Button
              bgColor={isTracking ? colors.primary[400] : '#d30100'}
              onPress={() => setIsTracking(!isTracking)}
              title={isTracking ? 'Stop Tracking' : 'Start Tracking'}
            />
          </TouchableOpacity>
          <TouchableOpacity style={tw` px-6 rounded-full mb-4`}>
            <Button
              onPress={() => setTimeElapsed(0)}
              pressedButtonColor={colors.lightGrey}
              bgColor={colors.secondary[600]}
              title="Reset"
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default SleepTimer;
