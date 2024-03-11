import React from 'react';
import { View } from 'react-native';
import { Button as NBButton, Text, useTheme } from 'native-base';
import { colors } from './../../constants/colors';

interface ButtonProps {
  title: string;
  color?: string;
  variant?: 'solid' | 'outline' | 'ghost';
  isLoading?: boolean;
  fontSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
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
      onPress={onPress}
      isLoading={isLoading}
      backgroundColor={color ? color : theme.colors.primary[500]}
      variant={variant}
      _pressed={{ backgroundColor: colors.primary[600] }}>
      <Text color={buttonTextColor} fontSize={fontSize}>
        {title}
      </Text>
    </NBButton>
  );
};
