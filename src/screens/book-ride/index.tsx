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
  AddCard,
  BookRideModal,
  ChangeCard,
  ChooseRide,
  DayPickerBottomSheet,
  Header,
  PromoCard,
  SecretWord,
  SelectJoinee,
  SelectYouth,
  SplitFare,
  VerifyCard,
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
  const [isChangeCardOpen, setChangeCardOpen] = useState(false);
  const [isAddCardOpen, setAddCardOpen] = useState(false);
  const [verifyCardOpen, setVerifyCardOpen] = useState(false);
  const [promoCardOpen, setPromoCardOpen] = useState(false);

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
  const handleChangeCardModal = (index: number) => {
    setChangeCardOpen(index >= 0);
  };
  const handleAddCardModal = (index: number) => {
    setAddCardOpen(index >= 0);
  };
  const handleVerifyCardModal = (index: number) => {
    setVerifyCardOpen(index >= 0);
  };
  const handlePromoCardModal = (index: number) => {
    setPromoCardOpen(index >= 0);
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
  const changeCardModalRef = useRef<BottomSheetModal>(null);
  const addCardModalRef = useRef<BottomSheetModal>(null);
  const verifyCardModalRef = useRef<BottomSheetModal>(null);
  const PromoCodeModalRef = useRef<BottomSheetModal>(null);

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
      scrollType="none"
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
                  onPressConfirm={() => {
                    bottomSheetModalRef?.current?.close();
                    repeatTripsModalRef?.current?.close();
                    secretWordModalRef?.current?.present();
                  }}
                />
              </BottomSheetModalProvider>
            </GestureHandlerRootView>
            <BottomSheetModalProvider>
              {(isModalOpen ||
                isSplitModalOpen ||
                isChooseRideModalOpen ||
                isVisaModalOpen ||
                isChangeCardOpen ||
                isChangeCardOpen ||
                isAddCardOpen ||
                verifyCardOpen) && (
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
                  visaModalRef?.current?.close();
                  navigation.navigate(ScreenNames.PROGRESS);
                }}
                onPressPromo={() => {
                  PromoCodeModalRef?.current?.present();
                }}
                modalRef={visaModalRef}
                handleModalChange={handleVisaModal}
                onPressChange={() => {
                  visaModalRef?.current?.close();
                  changeCardModalRef?.current?.present();
                }}
              />
              <PromoCard
                onPressConfirm={() => {
                  PromoCodeModalRef?.current?.close();
                }}
                modalRef={PromoCodeModalRef}
                handleModalChange={handlePromoCardModal}
              />
              <ChangeCard
                onPressConfirm={() => {}}
                modalRef={changeCardModalRef}
                handleModalChange={handleChangeCardModal}
                onPressAddCard={() => {
                  changeCardModalRef?.current?.close();
                  addCardModalRef?.current?.present();
                }}
              />
              <AddCard
                onPressConfirm={() => {
                  addCardModalRef?.current?.close();
                  verifyCardModalRef?.current?.present();
                }}
                modalRef={addCardModalRef}
                handleModalChange={handleAddCardModal}
              />
              <VerifyCard
                onPressConfirm={() => {
                  verifyCardModalRef?.current?.close();
                  navigation.replace(ScreenNames.VERIFYING);
                }}
                modalRef={verifyCardModalRef}
                handleModalChange={handleVerifyCardModal}
              />
            </BottomSheetModalProvider>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default BookRide;
