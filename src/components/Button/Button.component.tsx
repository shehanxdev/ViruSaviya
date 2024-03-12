import React from 'react';
import { Button as NBButton, Text, useTheme } from 'native-base';
import { colors } from './../../constants/colors';
import { TextFontSizes } from 'src/constants';

interface ButtonProps {
  title: string;
  color?: string;
  variant?: 'solid' | 'outline' | 'ghost';
  isLoading?: boolean;
  fontSize?: TextFontSizes;
  buttonTextColor?: string;
  onPress?: () => void;
}

export const Button = ({
  color,
  title,
  variant = 'solid',
  isLoading = false,
  fontSize = 'lg',
  buttonTextColor = colors.white,
  onPress
}: ButtonProps) => {
  const theme = useTheme();

  return (
    <NBButton
      fontFamily={'Noto Sans Sinhala'}
      onPress={onPress}
      isLoading={isLoading}
      backgroundColor={color ?? theme.colors.primary[400]}
      variant={variant}
      _pressed={{ backgroundColor: colors.primary[500] }}>
      <Text color={buttonTextColor} fontSize={fontSize}>
        {title}
      </Text>
    </NBButton>
  );
};
