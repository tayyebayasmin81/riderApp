/* eslint-disable react-hooks/exhaustive-deps */
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useCallback, useRef, useEffect, useState, Suspense} from 'react';
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
import {Icons} from '~assets/images';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {BlurView} from '@react-native-community/blur';

// Lazy-loaded components
const AddCard = React.lazy(() => import('~components/add-card'));
const BookRideModal = React.lazy(() => import('~components/book-ride-modal'));
const ChangeCard = React.lazy(() => import('~components/change-card'));
const ChooseRide = React.lazy(() => import('~components//choose-ride'));
const DayPickerBottomSheet = React.lazy(
  () => import('~components/repeat-trips-modal'),
);
const Header = React.lazy(() => import('~components/header'));
const PromoCard = React.lazy(() => import('~components/promo-card'));
const SecretWord = React.lazy(() => import('~components/secret-word'));
const SelectJoinee = React.lazy(() => import('~components/select-joinee'));
const SelectYouth = React.lazy(() => import('~components/select-youth'));
const SplitFare = React.lazy(() => import('~components/split-fare'));
const VerifyCard = React.lazy(() => import('~components/verification-card'));
const VisaCard = React.lazy(() => import('~components/visa-card'));

const BookRide = ({navigation, route}: NativeStackScreenProps<any>) => {
  const selection = route?.params?.selection;

  const [sheetIndex, setSheetIndex] = useState(-1);
  const [selectedTitle, setSelectedTitle] = useState('Destination');

  // Modal States
  const modalStates = {
    isModalOpen: useState(false),
    isSplitModalOpen: useState(false),
    isChooseRideModalOpen: useState(false),
    isVisaModalOpen: useState(false),
    isChangeCardOpen: useState(false),
    isAddCardOpen: useState(false),
    verifyCardOpen: useState(false),
    promoCardOpen: useState(false),
    selectYouthOpen: useState(false),
    selectJoinee: useState(false),
  };

  const toggleModal = (
    setter: React.Dispatch<React.SetStateAction<boolean>>,
    index: number,
  ) => {
    setter(index >= 0);
  };

  // References

  const modalRefs = {
    bottomSheetModalRef: useRef<BottomSheetModal>(null),
    repeatTripsModalRef: useRef<BottomSheetModal>(null),
    selectYouthModalRef: useRef<BottomSheetModal>(null),
    secretWordModalRef: useRef<BottomSheetModal>(null),
    selectJoineeModalRef: useRef<BottomSheetModal>(null),
    splitFareModalRef: useRef<BottomSheetModal>(null),
    chooseRideModalRef: useRef<BottomSheetModal>(null),
    visaModalRef: useRef<BottomSheetModal>(null),
    changeCardModalRef: useRef<BottomSheetModal>(null),
    addCardModalRef: useRef<BottomSheetModal>(null),
    verifyCardModalRef: useRef<BottomSheetModal>(null),
    PromoCodeModalRef: useRef<BottomSheetModal>(null),
  };
  const [selectYouth, setSelectYouth] = useState(false);

  const handleSheetChanges = useCallback((index: number) => {
    setSheetIndex(index);
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      const {isDashboard} = route.params || {};
      if (isDashboard) {
        setTimeout(() => {
          modalRefs?.bottomSheetModalRef.current?.present();
        }, 200);
      }
    });

    return unsubscribe;
  }, [modalRefs?.bottomSheetModalRef, navigation, route.params]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      const {showVisaCard} = route.params || {};
      if (showVisaCard) {
        setTimeout(() => {
          modalRefs.selectJoineeModalRef.current?.close();
          modalRefs.splitFareModalRef.current?.close();
          modalRefs?.chooseRideModalRef.current?.present();
          modalRefs?.visaModalRef.current?.present();
        }, 200);
      }
    });

    return unsubscribe;
  }, [modalRefs?.visaModalRef, navigation, route.params]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      const {showChangeCard} = route.params || {};
      if (showChangeCard) {
        setTimeout(() => {
          modalRefs.selectJoineeModalRef.current?.close();
          modalRefs.splitFareModalRef.current?.close();
          modalRefs?.chooseRideModalRef.current?.present();
          modalRefs.changeCardModalRef.current?.present();
        }, 200);
      }
    });

    return unsubscribe;
  }, [modalRefs?.changeCardModalRef, navigation, route.params]);

  useEffect(() => {
    if (selection) {
      setSelectYouth(true);
      modalRefs.selectYouthModalRef.current?.present();
    }
  }, [modalRefs.selectYouthModalRef, selection]);

  return (
    <ScreenWrapper
      statusBarColor={AppColors.primary}
      scrollType="none"
      translucent>
      <View style={styles.container}>
        <Suspense fallback={<Text>{''}</Text>}>
          <Header
            title="Location"
            showBackButton
            showNotificationIcon={false}
            showHistoryIcon
            titleStyle={styles.headerTitle}
            onBackPress={() => {
              if (modalStates?.verifyCardOpen[0]) {
                modalRefs?.verifyCardModalRef?.current?.close();
              } else if (modalStates?.selectJoinee[0]) {
                modalRefs?.selectJoineeModalRef?.current?.close();
              } else if (modalStates?.isSplitModalOpen[0]) {
                modalRefs?.splitFareModalRef?.current?.close();
              } else if (sheetIndex !== -1) {
                navigation.goBack();
              } else if (modalStates?.isModalOpen[0]) {
                setSelectYouth(true);
                modalRefs?.secretWordModalRef?.current?.close();
              } else if (modalStates?.selectJoinee[0]) {
                modalRefs?.selectJoineeModalRef?.current?.close();
              } else if (modalStates?.isChooseRideModalOpen[0]) {
                modalRefs?.chooseRideModalRef?.current?.close();
              } else if (modalStates?.isVisaModalOpen[0]) {
                modalRefs?.visaModalRef?.current?.close();
              } else if (modalStates?.promoCardOpen[0]) {
                modalRefs?.PromoCodeModalRef?.current?.close();
                modalRefs?.visaModalRef?.current?.present();
              } else if (modalStates?.isChangeCardOpen[0]) {
                modalRefs?.changeCardModalRef?.current?.close();
                modalRefs?.splitFareModalRef?.current?.close();
              } else if (modalStates?.isAddCardOpen[0]) {
                modalRefs?.addCardModalRef?.current?.close();
                modalRefs?.changeCardModalRef?.current?.present();
              } else if (selectYouth) {
                navigation?.replace(ScreenNames.PASSENGER_DETAIL);
              }
            }}
          />
          <TouchableOpacity activeOpacity={1}>
            <ImageBackground source={Icons.map} style={styles.map}>
              <BottomSheetModalProvider>
                {sheetIndex !== -1 && selectedTitle !== 'Pickup' && (
                  <TouchableOpacity
                    style={styles.rowRepeatButton}
                    onPress={() => {
                      modalRefs?.bottomSheetModalRef?.current?.close();
                      modalRefs?.repeatTripsModalRef?.current?.present();
                    }}>
                    <Image source={Icons.changes} style={styles.changesIcon} />
                    <Text style={styles.repeatTripsTxt}>Repeat Trips</Text>
                  </TouchableOpacity>
                )}

                <BookRideModal
                  bottomSheetModalRef={modalRefs?.bottomSheetModalRef}
                  handleSheetChanges={handleSheetChanges}
                  sheetIndex={sheetIndex}
                  title={selectedTitle}
                  onPressConfirm={() => {
                    setSelectedTitle(
                      selectedTitle === 'Destination'
                        ? 'Pickup'
                        : 'Destination',
                    );
                    if (selectedTitle !== 'Destination') {
                      modalRefs?.bottomSheetModalRef.current?.close();
                      navigation.navigate(ScreenNames.PASSENGER_DETAIL);
                    }
                  }}
                />
                <DayPickerBottomSheet
                  repeatTripsModalRef={modalRefs.repeatTripsModalRef}
                  onPressConfirm={() =>
                    modalRefs.repeatTripsModalRef.current?.close()
                  }
                />
                <SelectYouth
                  onPressAddUsers={() =>
                    navigation.navigate(ScreenNames.PASSENGER_DETAIL)
                  }
                  bottomSheetModalRef={modalRefs.selectYouthModalRef}
                  onPressConfirm={() => {
                    setSelectYouth(false);
                    modalRefs.secretWordModalRef.current?.present();
                  }}
                />
              </BottomSheetModalProvider>
              <BottomSheetModalProvider>
                {Object.values(modalStates).some(([state]) => state) && (
                  <BlurView
                    blurType="light"
                    blurAmount={8}
                    style={styles.blurView}
                  />
                )}
                {/* Lazy-loaded Modals */}
                <SecretWord
                  modalRef={modalRefs.secretWordModalRef}
                  handleModalChange={index => {
                    toggleModal(modalStates.isModalOpen[1], index);
                  }}
                  onPressConfirm={() => {
                    modalRefs.selectYouthModalRef.current?.close();
                    modalRefs.secretWordModalRef.current?.close();
                    modalRefs.selectJoineeModalRef.current?.present();
                  }}
                  onPressNo={() => {
                    modalRefs.selectYouthModalRef.current?.close();
                    modalRefs.secretWordModalRef.current?.close();
                    modalRefs.chooseRideModalRef.current?.present();
                  }}
                />
                <SelectJoinee
                  handleModalChange={index =>
                    toggleModal(modalStates.selectJoinee[1], index)
                  }
                  bottomSheetModalRef={modalRefs.selectJoineeModalRef}
                  onPressConfirm={() => {
                    modalRefs.selectJoineeModalRef.current?.close();
                    modalRefs.splitFareModalRef.current?.present();
                  }}
                />
                <SplitFare
                  bottomSheetModalRef={modalRefs.splitFareModalRef}
                  handleModalChange={index =>
                    toggleModal(modalStates.isSplitModalOpen[1], index)
                  }
                  onPressConfirm={() => {
                    modalRefs.splitFareModalRef.current?.close();
                    modalRefs.chooseRideModalRef.current?.present();
                  }}
                />
                <ChooseRide
                  bottomSheetModalRef={modalRefs.chooseRideModalRef}
                  handleModalChange={index =>
                    toggleModal(modalStates.isChooseRideModalOpen[1], index)
                  }
                  onPressConfirm={() => {
                    modalStates.isChooseRideModalOpen[1](false);
                    modalRefs.visaModalRef.current?.present();
                  }}
                  onPressBack={() => {
                    modalRefs?.chooseRideModalRef?.current?.close();
                    modalRefs?.secretWordModalRef?.current?.present();
                  }}
                />

                <PromoCard
                  modalRef={modalRefs.PromoCodeModalRef}
                  handleModalChange={index => {
                    toggleModal(modalStates.promoCardOpen[1], index);
                    if (index === -1) {
                      modalRefs?.visaModalRef?.current?.present();
                    }
                  }}
                  onPressClose={() => {
                    modalRefs.PromoCodeModalRef.current?.close();
                    modalRefs?.visaModalRef?.current?.present();
                  }}
                />
              </BottomSheetModalProvider>
              <BottomSheetModalProvider>
                {(modalStates?.isVisaModalOpen[0] ||
                  modalStates?.isChangeCardOpen[0]) && (
                  <BlurView
                    blurType="light"
                    blurAmount={8}
                    style={styles.blurView}
                  />
                )}
                <VisaCard
                  modalRef={modalRefs.visaModalRef}
                  handleModalChange={index =>
                    toggleModal(modalStates.isVisaModalOpen[1], index)
                  }
                  onPressConfirm={() => {
                    modalRefs.visaModalRef.current?.close();
                    modalRefs.chooseRideModalRef.current?.close();
                    navigation.navigate(ScreenNames.PROGRESS);
                  }}
                  onPressPromo={() => {
                    modalRefs?.visaModalRef?.current?.close();
                    modalRefs.PromoCodeModalRef.current?.present();
                  }}
                  onPressChange={() => {
                    modalRefs.visaModalRef.current?.close();
                    modalRefs.changeCardModalRef.current?.present();
                  }}
                />
                <ChangeCard
                  modalRef={modalRefs.changeCardModalRef}
                  handleModalChange={index =>
                    toggleModal(modalStates.isChangeCardOpen[1], index)
                  }
                  onPressAddCard={() => {
                    modalRefs?.visaModalRef?.current?.close();
                    modalRefs.chooseRideModalRef.current?.close();
                    modalRefs.changeCardModalRef.current?.close();
                    modalRefs.splitFareModalRef.current?.close();
                    modalRefs.addCardModalRef.current?.present();
                  }}
                  onPressConfirm={() => {}}
                />

                <AddCard
                  modalRef={modalRefs.addCardModalRef}
                  handleModalChange={index => {
                    modalRefs?.splitFareModalRef?.current?.close();
                    toggleModal(modalStates.isAddCardOpen[1], index);
                  }}
                  onPressConfirm={() => {
                    modalRefs.splitFareModalRef.current?.close();
                    modalRefs.verifyCardModalRef.current?.present();
                  }}
                />
              </BottomSheetModalProvider>
              <BottomSheetModalProvider>
                {modalStates?.verifyCardOpen[0] && (
                  <BlurView
                    blurType="light"
                    blurAmount={8}
                    style={styles.blurView}
                  />
                )}
                <VerifyCard
                  modalRef={modalRefs.verifyCardModalRef}
                  handleModalChange={index =>
                    toggleModal(modalStates.verifyCardOpen[1], index)
                  }
                  onPressConfirm={() => {
                    modalRefs.verifyCardModalRef.current?.close();
                    navigation.navigate(ScreenNames.VERIFYING);
                  }}
                />
              </BottomSheetModalProvider>
            </ImageBackground>
          </TouchableOpacity>
        </Suspense>
      </View>
    </ScreenWrapper>
  );
};

export default BookRide;
