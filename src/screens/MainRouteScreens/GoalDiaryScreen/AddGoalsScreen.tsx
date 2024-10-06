import { StackScreenProps } from '@react-navigation/stack';
import { Button } from '@vs/components';
import { colors } from '@vs/constants';
import { Input, TextArea } from 'native-base';
import React from 'react';
import { Text, View } from 'react-native';
import tw from 'twrnc';

export function AddGoalsScreen() {
  return (
    <View style={tw`mx-6 my-6`}>
      <Text style={tw`text-lg text-black mb-10`}>Add goals</Text>
      <View style={tw`mb-6`}>
        <Input
          backgroundColor={colors.white}
          focusOutlineColor={colors.primary[400]}
          variant="outline"
          placeholder="Title"
        />
      </View>
      <TextArea
        backgroundColor={colors.white}
        focusOutlineColor={colors.primary[400]}
        h={80}
        placeholder="Explain your goal further"
        w="100%"
        autoCompleteType={''}
      />
      <View style={tw`mt-12`}>
        <Button title="Add" />
      </View>
    </View>
  );
}
