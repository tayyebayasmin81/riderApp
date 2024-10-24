import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useCallback, useRef, useEffect, useState} from 'react';
import {
  ImageBackground,
  View,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import {ScreenNames} from '~routes';
import styles from './styles';
import AppColors from '~utils/app-colors';
import {BookRideModal, DayPickerBottomSheet, Header} from '~components';
import {Icons} from '~assets/images';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const BookRide = ({navigation}: NativeStackScreenProps<any>) => {
  const [sheetIndex, setSheetIndex] = useState(0);

  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const repeatTripsModalRef = useRef<BottomSheetModal>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    setSheetIndex(index);
    console.log('handleSheetChanges', index);
  }, []);

  // Automatically open the modal when the component mounts
  useEffect(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <ScreenWrapper statusBarColor={AppColors.primary} scrollType="keyboard">
      <View style={styles.container}>
        <Header
          title={'Location'}
          showBackButton
          showNotificationIcon={false}
          showHistoryIcon
          titleStyle={styles.headerTitle}
          onBackPress={() => navigation.navigate(ScreenNames.BOTTOM_TABS)}
        />
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => bottomSheetModalRef.current?.present()}>
          <ImageBackground source={Icons.map} style={styles.map}>
            {sheetIndex === 0 && (
              <TouchableOpacity
                style={styles.rowRepeatButton}
                onPress={() => {
                  bottomSheetModalRef?.current?.close();
                  repeatTripsModalRef?.current?.present();
                }}>
                <Image source={Icons.changes} style={styles.changesIcon} />
                <Text style={styles.repeatTripsTxt}>Repeat Trips</Text>
              </TouchableOpacity>
            )}
            <GestureHandlerRootView>
              <BottomSheetModalProvider>
                <BookRideModal
                  onPressConfirm={() => {}}
                  bottomSheetModalRef={bottomSheetModalRef}
                  handleSheetChanges={handleSheetChanges}
                  sheetIndex={sheetIndex}
                />
                <DayPickerBottomSheet
                  onPressConfirm={() => repeatTripsModalRef?.current?.close()}
                  repeatTripsModalRef={repeatTripsModalRef}
                />
              </BottomSheetModalProvider>
            </GestureHandlerRootView>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default BookRide;
