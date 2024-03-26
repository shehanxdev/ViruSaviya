import React, { useState } from 'react';
import { Button as NBButton, Text, useTheme } from 'native-base';
import { colors } from './../../constants/colors';
import {
  TextFontSizes,
  NavtiveBaseButtonVariant,
  NativeBaseButtonVariantType
} from '@vs/constants';
import tw from 'twrnc';
interface ButtonProps {
  title: string;
  bgColor?: string;
  outlineColor?: string;
  pressedButtonColor?: string;
  variant?: NativeBaseButtonVariantType;
  isLoading?: boolean;
  fontSize?: TextFontSizes;
  buttonTextColor?: string;
  onPress?: () => void;
}

export const Button = ({
  bgColor = colors.primary[400],
  outlineColor,
  pressedButtonColor = colors.primary[500],
  title,
  variant = NavtiveBaseButtonVariant.solid,
  isLoading = false,
  fontSize = 'lg',
  buttonTextColor = colors.white,
  onPress
}: ButtonProps) => {
  const [buttonBgColor, setButtonBgColor] = useState(bgColor);
  const theme = useTheme();

  return (
    <NBButton
      style={tw`rounded-full`}
      fontFamily={'Noto Sans Sinhala'}
      onPress={onPress}
      outlineColor={outlineColor}
      isLoading={isLoading}
      backgroundColor={buttonBgColor}
      onPressIn={() => setButtonBgColor(pressedButtonColor)}
      onPressOut={() => setButtonBgColor(bgColor)}
      variant={variant}>
      <Text color={buttonTextColor} fontSize={fontSize}>
        {title}
      </Text>
    </NBButton>
  );
};
