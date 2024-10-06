import { colors } from '@vs/constants';
import React from 'react';

import { View, Text, Dimensions } from 'react-native';
import { BarChart, LineChart } from 'react-native-chart-kit';
import tw from 'twrnc';

export function SleepChart() {
  // Define your data for the bar chart
  const data = {
    labels: [
      'Monday',
      'Thuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ],
    datasets: [
      {
        data: [7, 8, 5, 5, 5.5, 8, 10]
      }
    ]
  };

  // Customize the chart's appearance
  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    color: (opacity = 1) => `${colors.primary[600]}`,
    fillShadowGradientFromOpacity: 1,
    fillShadowGradientToOpacity: 0,
    fillShadowGradientFrom: colors.primary[400],
    fillShadowGradientTo: colors.primary[400],
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
    decimalPlaces: 0,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16
    }
  };

  return (
    <View style={tw` flex-1 flex justify-center items-center rounded`}>
      {/* Heading for the chart */}
      <Text style={tw`text-lg mb-4 text-black self-start`}>
        Sleep graph for the past week
      </Text>

      {/* Bar chart with X-axis and Y-axis labels */}
      <LineChart
        style={tw` rounded-lg`}
        data={data}
        width={Dimensions.get('window').width - 55} // Adjust to screen width
        height={500}
        yAxisLabel=""
        yAxisSuffix="(h)"
        chartConfig={chartConfig}
        verticalLabelRotation={90}
        // Rotate labels if needed
        fromZero={true} // Start Y-axis at 0
      />
    </View>
  );
}
