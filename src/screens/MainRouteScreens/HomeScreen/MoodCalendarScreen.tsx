import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';
import tw from 'twrnc';

// Define mood colors and types for moods
const moodColors = {
  angry: '#B22222', // Red -  angry
  Happy: '#FFA500', // Orange -  Happy
  Neutral: '#228B22', // Green -  Neutral
  Sad: '#1E90FF' // Blue -  Sad
};

type Mood = 'angry' | 'Happy' | 'Neutral' | 'Sad';

interface MoodData {
  [key: string]: {
    mood: Mood;
  };
}

export const MoodCalendar: React.FC = () => {
  // Define state for mood data
  const [moodData, setMoodData] = useState<MoodData>({
    '2024-09-10': { mood: 'angry' },
    '2024-09-11': { mood: 'Happy' },
    '2024-09-12': { mood: 'Neutral' },
    '2024-09-13': { mood: 'Sad' },
    '2024-09-15': { mood: 'Sad' }
  });

  // Function to map mood data to calendar marking styles
  const getMarkedDates = (): { [key: string]: any } => {
    const markedDates: { [key: string]: any } = {};
    Object.keys(moodData).forEach(date => {
      const mood = moodData[date].mood;
      markedDates[date] = {
        customStyles: {
          container: {
            backgroundColor: moodColors[mood], // Set background color based on mood
            borderRadius: 5
          },
          text: {
            color: '#fff', // Set text color to white
            fontWeight: 'bold'
          }
        }
      };
    });
    return markedDates;
  };

  return (
    <View style={tw`flex-1`}>
      {/* Calendar */}
      <Calendar
        style={tw`border border-gray-200 rounded-lg`}
        markingType={'custom'}
        markedDates={getMarkedDates()}
        firstDay={1} // Start the week on Monday
        theme={{
          textDayFontWeight: 'bold',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: 'bold',
          todayTextColor: '#00adf5'
        }}
      />

      {/* Mood Legend */}
      <View style={tw`mt-4`}>
        <Text style={tw`text-center text-lg font-bold mb-2`}>Mood Legend</Text>
        <View style={tw`flex-row justify-between px-8`}>
          <View style={tw`items-center`}>
            <View
              style={[
                tw`w-6 h-6 bg-[${moodColors.angry}]`,
                { borderRadius: 3 }
              ]}
            />
            <Text> angry</Text>
          </View>
          <View style={tw`items-center`}>
            <View
              style={[
                tw`w-6 h-6 bg-[${moodColors.Happy}]`,
                { borderRadius: 3 }
              ]}
            />
            <Text> Happy</Text>
          </View>
          <View style={tw`items-center`}>
            <View
              style={[
                tw`w-6 h-6 bg-[${moodColors.Neutral}]`,
                { borderRadius: 3 }
              ]}
            />
            <Text> Neutral</Text>
          </View>
          <View style={tw`items-center`}>
            <View
              style={[tw`w-6 h-6 bg-[${moodColors.Sad}]`, { borderRadius: 3 }]}
            />
            <Text> Sad</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
