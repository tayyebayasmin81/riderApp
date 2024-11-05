import React, {forwardRef} from 'react';
import {Controller} from 'react-hook-form';
import {TextInput, View, ViewStyle} from 'react-native';
import {CustomText} from '~components/texts';
import AppColors from '~utils/app-colors';
import {FontFamily} from '~utils/font-family';
import styles from './styles';
import {width} from '~utils';

type KeyboardVariation =
  | 'default'
  | 'email-address'
  | 'number-pad'
  | 'decimal-pad'
  | 'numeric'
  | 'url'
  | 'phone-pad';

type KeyType =
  | 'done'
  | 'go'
  | 'next'
  | 'search'
  | 'send'
  | 'none'
  | 'previous'
  | 'default'
  | 'emergency-call'
  | 'google'
  | 'join'
  | 'route'
  | 'yahoo';

type AutoCapitalize = 'none' | 'sentences' | 'words' | 'characters';

interface Props {
  containerStyle?: ViewStyle;
  innerContainerStyle?: ViewStyle;
  iconContainerStyle?: ViewStyle;
  inputStyle?: ViewStyle;
  placeholder?: string;
  name: string;
  keyboardType?: KeyboardVariation;
  returnKeyType?: KeyType;
  maxlength?: number;
  multiline?: boolean;
  numberOfLines?: number;
  secureTextEntry?: boolean;
  textAlignVertical?: 'auto' | 'center' | 'top' | 'bottom';
  autofocus?: boolean;
  control: any;
  icon?: () => React.ReactNode | void;
  title?: string;
  titleTextSize?: number;
  showPasswordIcon?: boolean;
  value?: string;
  onSubmitEditing?: () => void;
  autoCapitalize?: AutoCapitalize;
  titleColor?: string;
  isPasswordVisible?: boolean;
  onPressIcon?: () => void;
  onFocus?: () => void;
  onChangeTextCustom?: (text: string) => void;
}

const TextField = forwardRef<TextInput, Props>(
  (
    {
      containerStyle = {},
      innerContainerStyle = {},
      inputStyle = {},
      placeholder,
      name,
      keyboardType = 'default',
      returnKeyType = 'default',
      maxlength,
      multiline = false,
      numberOfLines,
      secureTextEntry = false,
      textAlignVertical = 'center',
      autofocus = false,
      control,
      titleColor = AppColors.black,
      title = 'TextInput',
      titleTextSize = width(0.9),
      onSubmitEditing,
      autoCapitalize = 'sentences',
      onFocus,
      onChangeTextCustom,
    }: Props,
    ref,
  ) => {
    return (
      <View style={[styles.container, containerStyle]} testID="textField">
        <CustomText
          fontFam={FontFamily.appFontBold}
          size={titleTextSize}
          color={titleColor}
          textStyles={styles.title}>
          {title}
        </CustomText>
        <Controller
          control={control}
          render={({field: {onChange, value}, fieldState: {error}}) => (
            <>
              <View style={[styles.innerContainer, innerContainerStyle]}>
                <TextInput
                  ref={ref}
                  placeholder={placeholder}
                  keyboardType={keyboardType}
                  returnKeyType={returnKeyType}
                  autoCapitalize={autoCapitalize}
                  maxLength={maxlength}
                  multiline={multiline}
                  value={value}
                  onChangeText={text => {
                    if (onChangeTextCustom) {
                      onChangeTextCustom(text); // Apply custom logic if provided
                    } else onChange(text); // Update form state
                  }}
                  numberOfLines={numberOfLines}
                  secureTextEntry={secureTextEntry}
                  textAlignVertical={textAlignVertical}
                  autoFocus={autofocus}
                  placeholderTextColor={AppColors.gray10}
                  style={[styles.inputStyle, inputStyle]}
                  onSubmitEditing={onSubmitEditing}
                  onFocus={onFocus}
                />
              </View>
              <CustomText size={2.8} color={AppColors.red}>
                {error ? `*${error?.message}` : ''}
              </CustomText>
            </>
          )}
          name={name}
        />
      </View>
    );
  },
);

export default TextField;
