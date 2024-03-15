import React from 'react';
import { View } from 'react-native';
import { BlobBackgroundSVG } from '../../../assets';
import tw from 'twrnc';
import { Text } from 'native-base';

interface BaseQuestionScreenProps {
  children?: React.ReactNode;
  withBlob?: boolean;
}

export const BaseQuestionScreen: React.FC<BaseQuestionScreenProps> = ({
  children,
  withBlob = false
}) => {
  return (
    <View style={tw`h-100 items-center`}>
      {withBlob && <BlobBackgroundSVG style={tw`absolute w-full h-full`} />}
      {children}
    </View>
  );
};
