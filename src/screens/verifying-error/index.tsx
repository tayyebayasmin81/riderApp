import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {Icons} from '~assets/images';
import {Image} from 'react-native';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import AppColors from '~utils/app-colors';
import {Button} from '~components';
import {ScreenNames} from '~routes';

const VerifyingError = ({navigation}: NativeStackScreenProps<any>) => {
  return (
    <ScreenWrapper
      statusBarColor={AppColors.white}
      scrollType="none"
      barStyle="dark-content"
      translucent>
      <View style={styles.container}>
        {/* Back Button */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            navigation?.goBack();
          }}>
          <Image source={Icons.arrowLeft} style={styles.backIcon} />
        </TouchableOpacity>
        <View>
          {/* Card Image Placeholder */}
          <Image source={Icons.nocard} style={styles.icon} />

          {/* Verifying Text */}
          <Text style={styles.title}>Failed to add card</Text>
          <Text style={styles.securityText}>
            There was an issue adding your card. Please check your card details
            and try again.
          </Text>
        </View>
        {/* Security Note */}
        <View>
          <Button
            containerStyle={styles.confirmButton}
            onPress={() => {
              navigation?.navigate(ScreenNames?.BOOK_RIDE, {
                showChangeCard: true,
              });
            }}
            title="Add different Card"
          />
          <Button
            color={AppColors.gray}
            containerStyle={styles.confirmButton2}
            onPress={() => {
              navigation?.navigate(ScreenNames?.BOOK_RIDE, {
                showVisaCard: true,
              });
            }}
            title="Go back"
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default VerifyingError;
