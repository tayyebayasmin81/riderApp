import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useRef, useState} from 'react';
import {ImageBackground, TouchableOpacity, View} from 'react-native';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import styles from './styles';
import AppColors from '~utils/app-colors';
import {Icons} from '~assets/images';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {RiderSummary, RideTrack} from '~components';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {ScreenNames} from '~routes';
import {BlurView} from '@react-native-community/blur';

const RideTracking = ({navigation}: NativeStackScreenProps<any>) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const modalRef = useRef<BottomSheetModal>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalChange = (index: number) => {
    setIsModalOpen(index >= 0);
  };

  useEffect(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  return (
    <ScreenWrapper
      statusBarColor={AppColors.white}
      scrollType="none"
      barStyle="dark-content">
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={1}>
          <ImageBackground source={Icons.map} style={styles.map}>
            {/* Ride Info Section */}
            {isModalOpen && (
              <BlurView
                blurType="light"
                blurAmount={8}
                style={styles.blurView}
              />
            )}
            <GestureHandlerRootView>
              <BottomSheetModalProvider>
                <RideTrack
                  onDismiss={() =>
                    navigation?.navigate(ScreenNames.SearchingDrivers)
                  }
                  modalRef={bottomSheetModalRef}
                  onGotoNext={() => {
                    bottomSheetModalRef?.current?.close();
                    modalRef?.current?.present();
                  }}
                />
                <RiderSummary
                  modalRef={modalRef}
                  onPressConfirm={() => {
                    bottomSheetModalRef?.current?.close();
                    modalRef?.current?.close();
                    navigation.navigate(ScreenNames?.RIDE_SUMMARY);
                  }}
                  handleModalChange={handleModalChange}
                />
              </BottomSheetModalProvider>
            </GestureHandlerRootView>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default RideTracking;
