import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {Icons} from '~assets/images';
import {Image} from 'react-native';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import AppColors from '~utils/app-colors';
import {ScreenNames} from '~routes';

const Verifying = ({navigation}: NativeStackScreenProps<any>) => {
  return (
    <ScreenWrapper
      statusBarColor={AppColors.white}
      scrollType="none"
      barStyle="dark-content"
      translucent>
      <View style={styles.container}>
        {/* Back Button */}
        <TouchableOpacity style={styles.backButton}>
          <Image source={Icons.arrowLeft} style={styles.backIcon} />
        </TouchableOpacity>
        <View>
          {/* Card Image Placeholder */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(ScreenNames.VERIFYING_DONE);
            }}>
            <Image source={Icons.scan} style={styles.icon} />
          </TouchableOpacity>
          {/* Verifying Text */}
          <Text style={styles.title}>Verifying your card</Text>
          <TouchableOpacity
            style={styles.cardInfo}
            onPress={() => {
              navigation.navigate(ScreenNames.VERIFYING_ERROR);
            }}>
            <Image source={Icons.visa2} style={styles.cardBrandIcon} />
            <Text style={styles.cardNumber}>**** 4242</Text>
          </TouchableOpacity>
        </View>
        {/* Security Note */}
        <View>
          <Text style={styles.securityText}>Your card details are safe.</Text>
          <Text style={styles.securityText1}>
            We use secure encryption to protect your information.
          </Text>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Verifying;
