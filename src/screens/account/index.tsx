import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import {ScreenNames} from '~routes';
import styles from './styles';
import AppColors from '~utils/app-colors';
import {Button} from 'react-native';

const Account = ({navigation}: NativeStackScreenProps<any>) => {
  return (
    <ScreenWrapper statusBarColor={AppColors.primary} scrollType="keyboard">
      <View style={styles.container}>
        <Button
          onPress={() => navigation.navigate(ScreenNames.LOGIN)}
          title="Account"
        />
      </View>
    </ScreenWrapper>
  );
};

export default Account;
