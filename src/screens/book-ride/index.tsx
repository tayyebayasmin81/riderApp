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
import {
  BookRideModal,
  ChooseRide,
  DayPickerBottomSheet,
  Header,
  SecretWord,
  SelectJoinee,
  SelectYouth,
  SplitFare,
  VisaCard,
} from '~components';
import {Icons} from '~assets/images';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BlurView} from '@react-native-community/blur';

const BookRide = ({navigation, route}: NativeStackScreenProps<any>) => {
  const selection = route?.params?.selection;
  const [sheetIndex, setSheetIndex] = useState(0);
  const [selectedTitle, setSelecteditle] = useState('Destination');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSplitModalOpen, setIsSplitModalOpen] = useState(false);
  const [isChooseRideModalOpen, setChooseRideModalOpen] = useState(false);
  const [isVisaModalOpen, setVisaModalOpen] = useState(false);

  const handleModalChange = (index: number) => {
    setIsModalOpen(index >= 0);
  };
  const handleSplitModalChange = (index: number) => {
    setIsSplitModalOpen(index >= 0);
  };
  const handleChooseRideModal = (index: number) => {
    setChooseRideModalOpen(index >= 0);
  };
  const handleVisaModal = (index: number) => {
    setVisaModalOpen(index >= 0);
  };
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const repeatTripsModalRef = useRef<BottomSheetModal>(null);
  const selectYouthModalRef = useRef<BottomSheetModal>(null);
  const secretWordModalRef = useRef<BottomSheetModal>(null);
  const selectJoineeModalRef = useRef<BottomSheetModal>(null);
  const splitFareModalRef = useRef<BottomSheetModal>(null);
  const chooseRideModalRef = useRef<BottomSheetModal>(null);
  const visaModalRef = useRef<BottomSheetModal>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    setSheetIndex(index);
    console.log('handleSheetChanges', index);
  }, []);

  // Automatically open the modal when the component mounts
  useEffect(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  useEffect(() => {
    if (selection) {
      selectYouthModalRef?.current?.present();
    }
  }, [selection]);

  return (
    <ScreenWrapper
      statusBarColor={AppColors.primary}
      scrollType="keyboard"
      translucent>
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
            {sheetIndex === 0 && selectedTitle !== 'Pickup' && (
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
                  bottomSheetModalRef={bottomSheetModalRef}
                  handleSheetChanges={handleSheetChanges}
                  sheetIndex={sheetIndex}
                  title={selectedTitle}
                  onPressConfirm={() => {
                    if (selectedTitle === 'Destination') {
                      setSelecteditle('Pickup');
                    } else {
                      bottomSheetModalRef.current?.close();
                      navigation.navigate(ScreenNames.PASSENGER_DETAIL);
                    }
                  }}
                />
                <DayPickerBottomSheet
                  onPressConfirm={() => repeatTripsModalRef?.current?.close()}
                  repeatTripsModalRef={repeatTripsModalRef}
                />
                <SelectYouth
                  bottomSheetModalRef={selectYouthModalRef}
                  onPressConfirm={() => secretWordModalRef?.current?.present()}
                />
              </BottomSheetModalProvider>
            </GestureHandlerRootView>
            <BottomSheetModalProvider>
              {(isModalOpen ||
                isSplitModalOpen ||
                isChooseRideModalOpen ||
                isVisaModalOpen) && (
                <BlurView
                  blurType="light"
                  blurAmount={8}
                  style={styles.blurView}
                />
              )}
              <SecretWord
                handleModalChange={handleModalChange}
                onPressConfirm={() => {
                  selectYouthModalRef?.current?.close();
                  selectJoineeModalRef?.current?.present();
                }}
                modalRef={secretWordModalRef}
              />
              <SelectJoinee
                onPressConfirm={() => {
                  selectJoineeModalRef?.current?.close();
                  splitFareModalRef?.current?.present();
                }}
                bottomSheetModalRef={selectJoineeModalRef}
              />
              <SplitFare
                onPressConfirm={() => {
                  splitFareModalRef?.current?.close();
                  chooseRideModalRef?.current?.present();
                }}
                bottomSheetModalRef={splitFareModalRef}
                handleModalChange={handleSplitModalChange}
              />
              <ChooseRide
                onPressConfirm={() => {
                  chooseRideModalRef?.current?.close();
                  visaModalRef?.current?.present();
                }}
                bottomSheetModalRef={chooseRideModalRef}
                handleModalChange={handleChooseRideModal}
              />
              <VisaCard
                onPressConfirm={() => {
                  navigation.navigate(ScreenNames.PROGRESS);
                  visaModalRef?.current?.close();
                  navigation.navigate(ScreenNames.PROGRESS);
                }}
                modalRef={visaModalRef}
                handleModalChange={handleVisaModal}
              />
            </BottomSheetModalProvider>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default BookRide;
