import { Text, View } from 'native-base';
import React from 'react';
import { BaseQuestionScreen } from '../BaseScreenWithBlob';
import { strings } from './../../../constants/strings';
import tw from 'twrnc';
import { Button } from '../../../components/Button';

export const WelcomeScreen: React.FC = () => {
  return (
    <BaseQuestionScreen>
      <View style={tw`flex justify-between mt-10`}>
        <View style={tw`flex justify-center items-center`}>
          <Text fontSize="5xl" bold>
            {strings.විරු_සවිය}
          </Text>
          <Text fontSize="xl">{strings.රණවිරු_ඔබට_සවියක්}</Text>
        </View>
        <View style={tw`flex  mx-10 gap-4 `}>
          <Button title={strings.සුවතා_පරීක්ෂාව} onPress={() => {}} />
          <Button title={strings.සුවතා_පරීක්ෂාව} onPress={() => {}} />
        </View>
      </View>
    </BaseQuestionScreen>
  );
};
