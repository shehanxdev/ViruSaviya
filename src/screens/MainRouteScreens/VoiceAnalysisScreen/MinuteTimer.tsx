import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

export const MinuteTimer = () => {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(prevSeconds => prevSeconds - 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  const formatTime = (time: any) => {
    return time < 10 ? `0${time}` : time.toString();
  };

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <View style={tw`flex-row justify-center`}>
      <Text style={tw`text-white text-6xl `}>{formatTime(minutes)}:</Text>
      <Text style={tw`text-white text-6xl`}>
        {formatTime(remainingSeconds)}
      </Text>
    </View>
  );
};
