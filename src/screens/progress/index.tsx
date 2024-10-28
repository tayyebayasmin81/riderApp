import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import styles from './styles';
import AppColors from '~utils/app-colors';
import {Image} from 'react-native';
import {Icons} from '~assets/images';
import {ScreenNames} from '~routes';

const ProgressScreen = ({navigation}: NativeStackScreenProps<any>) => {
  return (
    <ScreenWrapper
      statusBarColor={AppColors.white}
      scrollType="keyboard"
      barStyle="dark-content">
      <View style={styles.container}>
        <Text style={styles.txt1}>Payment in Progress</Text>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            navigation.replace(ScreenNames.SearchingDrivers);
          }}>
          <Image source={Icons.loader} style={styles.loader} />
          <Image source={Icons.tickIcon} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.txt2}>
          Your payment is being processed. Kindly avoid closing this window.
        </Text>
      </View>
    </ScreenWrapper>
  );
};

export default ProgressScreen;
