import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useRef} from 'react';
import {ImageBackground, TouchableOpacity, View} from 'react-native';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import styles from './styles';
import AppColors from '~utils/app-colors';
import {Icons} from '~assets/images';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {RideTrack} from '~components';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {ScreenNames} from '~routes';

const RideTracking = ({navigation}: NativeStackScreenProps<any>) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  useEffect(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  return (
    <ScreenWrapper
      statusBarColor={AppColors.white}
      scrollType="none"
      barStyle="dark-content">
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.replace(ScreenNames.RIDE_SUMMARY)}>
          <ImageBackground source={Icons.map} style={styles.map}>
            {/* Ride Info Section */}
            <GestureHandlerRootView>
              <BottomSheetModalProvider>
                <RideTrack modalRef={bottomSheetModalRef} />
              </BottomSheetModalProvider>
            </GestureHandlerRootView>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default RideTracking;
