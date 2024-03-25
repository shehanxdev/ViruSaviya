import { Text, View } from 'native-base';
import React from 'react';
import { BaseQuestionScreen } from '../BaseScreenWithBlob';
import { strings } from './../../../constants/strings';
import tw from 'twrnc';
import { Button } from '../../../components/Button';
import type { StackScreenProps } from '@react-navigation/stack';
import { colors, pathNames, stackNames } from '@vs/constants';
import { MeditatingPersonSVG } from '@vs/assets';

type WelcomeScreenProps = StackScreenProps<
  Record<string, object | undefined>,
  'WelcomeScreen'
>;

export const WelcomeScreen = ({ navigation }: WelcomeScreenProps) => {
  const naviagteToNextScreen = (path: string) => {
    navigation.navigate(path);
  };

  return (
    <BaseQuestionScreen withBlob={true}>
      <View style={tw`flex justify-between mt-8 mb-8  flex-1`}>
        <View style={tw`flex justify-center items-center mx-10`}>
          <Text fontSize="5xl" bold>
            {strings.විරු_සවිය}
          </Text>
          <Text fontSize="xl">{strings.රණවිරු_ඔබට_සවියක්}</Text>
        </View>
        <View style={tw`flex-1`}>
          <MeditatingPersonSVG />
        </View>
        <View style={tw`flex  gap-4 mx-10`}>
          <Button
            title={strings.සුවතා_පරීක්ෂාව}
            onPress={() => naviagteToNextScreen(pathNames.QuestionScreen)}
          />
          <View style={tw`border-black border rounded`}>
            <Button
              pressedButtonColor={colors.lightGrey}
              buttonTextColor={colors.black}
              bgColor={colors.white}
              title={strings.මඟ_හරින්න}
              onPress={() => naviagteToNextScreen(stackNames.MainStack)}
            />
          </View>
        </View>
      </View>
    </BaseQuestionScreen>
  );
};
