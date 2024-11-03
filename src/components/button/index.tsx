import React from 'react';
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import {CustomText} from '~components';
import AppColors from '~utils/app-colors';
import {FontFamily} from '~utils/font-family';
import styles from './styles';

type IButtonCommonProps = {
  title?: string;
  onPress: () => void;
  disabled?: boolean;
  containerStyle?: any;
};

type IButtonProps = IButtonCommonProps & {
  isLoading?: boolean;
  loaderColor?: string;
  color?: string;
  size?: number;
  testID?: string;
  activeOpacity?: number;
};
const Button: React.FC<IButtonProps> = ({
  title,
  onPress,
  disabled = false,
  isLoading = false,
  loaderColor = AppColors.white,
  activeOpacity = 0.7,
  containerStyle = {},
  color = AppColors.white,
  size = 3.8,
  testID = 'button',
}) => {
  return (
    <TouchableOpacity
      testID={testID}
      onPress={onPress}
      disabled={disabled || isLoading}
      activeOpacity={activeOpacity}
      style={[styles.container, containerStyle]}>
      {isLoading ? (
        <ActivityIndicator color={loaderColor} size="large" testID="loader" />
      ) : (
        <CustomText
          color={color}
          letterSpacing={1.5}
          size={size}
          font={FontFamily.appFontSemiBold}>
          {title}
        </CustomText>
      )}
    </TouchableOpacity>
  );
};

export default Button;
