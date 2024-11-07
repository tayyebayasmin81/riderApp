import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useRef} from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import styles from './styles';
import AppColors from '~utils/app-colors';
import {Icons} from '~assets/images';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {SearchingDriver} from '~components';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {ScreenNames} from '~routes';

const SearchingDrivers = ({navigation}: NativeStackScreenProps<any>) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  useEffect(() => {
    bottomSheetModalRef.current?.present();
    setTimeout(() => {
      navigation.navigate(ScreenNames.RIDE_TRACKING);
    }, 10000);
  }, [navigation]);

  return (
    <ScreenWrapper
      statusBarColor={AppColors.white}
      scrollType="none"
      barStyle="dark-content">
      <View style={styles.container}>
        <ImageBackground source={Icons.map} style={styles.map}>
          <TouchableOpacity
            style={styles.carContainer}
            onPress={() => navigation.navigate(ScreenNames.RIDE_TRACKING)}>
            <View style={styles.carContainer2}>
              <Image source={Icons.car1} style={styles.car} />
            </View>
            <Text style={styles.txt1}>Finding drivers nearby</Text>
            <Text style={styles.txt2}>This may take a few seconds...</Text>
          </TouchableOpacity>
          {/* Ride Info Section */}
          <GestureHandlerRootView>
            <BottomSheetModalProvider>
              <SearchingDriver modalRef={bottomSheetModalRef} />
            </BottomSheetModalProvider>
          </GestureHandlerRootView>
        </ImageBackground>
      </View>
    </ScreenWrapper>
  );
};

export default SearchingDrivers;
