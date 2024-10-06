import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { AsyncStorageService } from './../../../services/AsynStorage.service';
import { therapies } from './../../../data/recommendations';
import { FlatList } from 'native-base';

export const TaskScreen = () => {
  const [diagnosis, setDiagnosis] = useState();
  const [rtherapies, setTherapies] = useState([{ therapyname: '', guide: '' }]);

  const TherapyList = () => {
    return (
      <ScrollView contentContainerStyle={tw`p-4`}>
        {rtherapies.map((item, index) => (
          <View key={index} style={tw`bg-white p-4 m-2 rounded-lg shadow-lg`}>
            <Text style={tw`text-lg font-bold mb-2`}>{item.therapyname}</Text>
            <Text>{item.guide}</Text>
          </View>
        ))}
      </ScrollView>
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await AsyncStorageService.getData('VSDisorder');
        console.log(result);
        setDiagnosis(result);
        if (result == 'Normal') {
          setTherapies(therapies['Normal']);
        } else if (result == 'Bipolar Type-1') {
          setTherapies(therapies['Bipolar Type-1']);
        } else if (result == 'Bipolar Type-2') {
          setTherapies(therapies['Bipolar Type-2']);
        } else if (result == 'Depression') {
          setTherapies(therapies['Depression']);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  console.log(rtherapies);
  return (
    <View style={tw`flex-1`}>
      <ScrollView>
        <TherapyList />
      </ScrollView>
    </View>
  );
};
