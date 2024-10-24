import React from 'react';
import {Control, Controller} from 'react-hook-form';
import {View} from 'react-native';
import {Text, TextInput} from 'react-native-paper';
import Spacer from '~components/spacer';
import {height} from '~utils';
import AppColors from '~utils/app-colors';

// Component Props
type Props = {
  control: Control;
  name: string;
};

const Input: React.FC<Props> = ({control, name, ...rest}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({field, fieldState: {error}}) => (
        <View>
          <TextInput
            error={Boolean(error)}
            {...field}
            onChangeText={field.onChange}
            mode="outlined"
            {...rest}
          />
          <Spacer vertical={height(0.5)} />
          <Text style={{color: AppColors.red}}>{error?.message}</Text>
          <Spacer vertical={height(0.5)} />
        </View>
      )}
    />
  );
};

export default Input;
