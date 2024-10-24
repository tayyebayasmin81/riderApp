import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import {ScreenNames} from '~routes';
import styles from './styles';
import AppColors from '~utils/app-colors';
import {Button, Header} from '~components';
import {Icons} from '~assets/images';

const Dashboard = ({navigation}: NativeStackScreenProps<any>) => {
  return (
    <ScreenWrapper statusBarColor={AppColors.primary} scrollType="none">
      <View style={styles.container}>
        <Header
          title={'California'}
          subtitle="775 Rolling Green Rd. Celins Apt..."
        />
        <ImageBackground source={Icons.map} style={styles.map}>
          {/* Ride Info Section */}
          <View style={styles.riderContainer}>
            <View style={styles.rideInfo}>
              <View style={styles.rideInfoItem}>
                <Text style={styles.rideInfoTitle}>Today's Ride</Text>
                <Text style={styles.rideInfoNumber}>10</Text>
              </View>
              <View style={styles.rideInfoItem}>
                <Text style={styles.rideInfoTitle}>Upcoming Rides</Text>
                <Text style={styles.rideInfoNumber}>08</Text>
              </View>
            </View>

            {/* Book Ride Button */}
            <Button
              onPress={() => navigation.navigate(ScreenNames.BOOK_RIDE)}
              title="Book Ride"
            />
          </View>
        </ImageBackground>
      </View>
    </ScreenWrapper>
  );
};

export default Dashboard;
