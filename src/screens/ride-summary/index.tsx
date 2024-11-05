import React, {useRef, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import styles from './styles';
import AppColors from '~utils/app-colors';
import {Button, RiderSummary} from '~components';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Icons} from '~assets/images';
import {ScreenNames} from '~routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BlurView} from '@react-native-community/blur';

const RideSummary = ({navigation}: NativeStackScreenProps<any>) => {
  const modalRef = useRef<BottomSheetModal>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalChange = (index: number) => {
    setIsModalOpen(index >= 0);
  };
  return (
    <ScreenWrapper statusBarColor={AppColors.primary} scrollType="none">
      <View style={styles.container}>
        <GestureHandlerRootView>
          <BottomSheetModalProvider>
            <Text style={styles.header}>Ride Summary</Text>
            <Text style={styles.subHeader}>
              Ride complete! Here’s your summary.
            </Text>
            <Text style={styles.thankYou}>
              Thanks for choosing <Text style={styles.brand}>Uzruc!</Text>
            </Text>
            <Text style={styles.date}>Ride ended on Mon 22 Feb, 4:10 PM</Text>
            <View style={styles.seperator} />
            {/* Trip Details */}
            <View style={styles.tripDetails}>
              <Text style={styles.sectionTitle}>Trip Details</Text>
              <View style={styles.locationContainer}>
                <Image
                  source={Icons.orderProgress}
                  style={styles.iconProgress}
                />
                <View style={styles.locationRow}>
                  <Text style={styles.locationText}>PICK-UP FROM</Text>
                  <Text style={styles.addressText1}>Dubai Mall</Text>

                  <Text style={styles.addressText}>
                    8500 Main st, Houston, TX
                  </Text>
                </View>
                <View style={styles.locationRow}>
                  <Text style={styles.locationText}>DROP-OFF AT</Text>
                  <Text style={styles.addressText1}>Jumerirah Park</Text>
                  <Text style={styles.addressText}>
                    8500 Main st, Houston, TX
                  </Text>
                </View>
              </View>
            </View>
            {/* Driver Info */}
            <TouchableOpacity
              style={styles.driverInfo}
              onPress={() => modalRef?.current?.present()}>
              <View>
                <Text style={styles.driverName}>Naser Abdullah</Text>
                <Text style={styles.rating}>Your rating ★★★★☆</Text>
              </View>
              <Image source={Icons.man} style={styles.driverImage} />
            </TouchableOpacity>
            {/* Fare Breakdown */}
            <View style={styles.fareBreakdown}>
              <Text style={styles.sectionTitle}>Fare Breakdown</Text>
              <View style={styles.fareItem}>
                <Text style={styles.FareTxt2}>Trip fare</Text>
                <Text style={styles.fareText}>AED 38</Text>
              </View>
              <View style={styles.fareItem}>
                <Text style={styles.FareTxt2}>Driver tip</Text>
                <Text style={styles.fareText}>AED 5</Text>
              </View>
              <View style={styles.fareItem}>
                <Text style={styles.promotext}>Promo</Text>
                <Text style={styles.promo}>AED -3</Text>
              </View>
              <View style={styles.fareItem}>
                <Text style={styles.total}>Total</Text>
                <Text style={styles.fareText}>AED 40</Text>
              </View>
            </View>

            {isModalOpen && (
              <BlurView
                blurType="light"
                blurAmount={8}
                style={styles.blurView}
              />
            )}
            <RiderSummary
              modalRef={modalRef}
              onPressConfirm={() => {
                modalRef?.current?.close();
              }}
              handleModalChange={handleModalChange}
            />

            {/* Done Button */}
            <Button
              containerStyle={styles.confirmButton}
              onPress={() => navigation?.replace(ScreenNames.BOTTOM_TABS)}
              title="Done"
            />
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </View>
    </ScreenWrapper>
  );
};

export default RideSummary;
