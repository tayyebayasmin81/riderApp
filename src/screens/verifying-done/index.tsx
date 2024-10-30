import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {Icons} from '~assets/images';
import {Image} from 'react-native';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import AppColors from '~utils/app-colors';
import {Button} from '~components';

const VerifyingDone = ({navigation}: NativeStackScreenProps<any>) => {
  return (
    <ScreenWrapper
      statusBarColor={AppColors.white}
      scrollType="none"
      barStyle="dark-content"
      translucent>
      <View style={styles.container}>
        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={() => {}}>
          <Image source={Icons.arrowLeft} style={styles.backIcon} />
        </TouchableOpacity>
        <View>
          {/* Card Image Placeholder */}
          <Image source={Icons.card} style={styles.icon} />

          {/* Verifying Text */}
          <Text style={styles.title}>Card added sucessfully</Text>
          <TouchableOpacity style={styles.cardInfo}>
            <Image source={Icons.visa2} style={styles.cardBrandIcon} />
            <Text style={styles.cardNumber}>**** 4242</Text>
          </TouchableOpacity>
        </View>
        {/* Security Note */}
        <Button
          containerStyle={styles.confirmButton}
          onPress={() => {}}
          title="Continue"
        />
      </View>
    </ScreenWrapper>
  );
};

export default VerifyingDone;
