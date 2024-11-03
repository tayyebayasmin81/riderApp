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
import {GestureHandlerRootView} from 'react-native-gesture-handler';
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
const VerifyCard = React.lazy(() => import('~components/visa-card'));
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
    if (selection) {
      modalRefs.selectYouthModalRef.current?.present();
    }
  }, [modalRefs.selectYouthModalRef, selection]);

  return (
    <ScreenWrapper
      statusBarColor={AppColors.primary}
      scrollType="none"
      translucent>
      <View style={styles.container}>
        <Suspense fallback={<Text>Loading...</Text>}>
          <Header
            title="Location"
            showBackButton
            showNotificationIcon={false}
            showHistoryIcon
            titleStyle={styles.headerTitle}
            onBackPress={() => navigation.navigate(ScreenNames.BOTTOM_TABS)}
          />
          <TouchableOpacity activeOpacity={1}>
            <ImageBackground source={Icons.map} style={styles.map}>
              <GestureHandlerRootView>
                <BottomSheetModalProvider>
                  {sheetIndex !== -1 && selectedTitle !== 'Pickup' && (
                    <TouchableOpacity
                      style={styles.rowRepeatButton}
                      onPress={() => {
                        modalRefs?.bottomSheetModalRef?.current?.close();
                        modalRefs?.repeatTripsModalRef?.current?.present();
                      }}>
                      <Image
                        source={Icons.changes}
                        style={styles.changesIcon}
                      />
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
                      modalRefs.selectYouthModalRef.current?.close();
                      modalRefs.secretWordModalRef.current?.present();
                    }}
                  />
                </BottomSheetModalProvider>
              </GestureHandlerRootView>
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
                  handleModalChange={index =>
                    toggleModal(modalStates.isModalOpen[1], index)
                  }
                  onPressConfirm={() => {
                    modalRefs.secretWordModalRef.current?.close();
                    modalRefs.selectJoineeModalRef.current?.present();
                  }}
                  onPressNo={() => {
                    modalRefs.secretWordModalRef.current?.close();
                    modalRefs.chooseRideModalRef.current?.present();
                  }}
                />
                <SelectJoinee
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
                    modalRefs.chooseRideModalRef.current?.close();
                    modalRefs.visaModalRef.current?.present();
                  }}
                  onPressBack={() => {
                    modalRefs?.chooseRideModalRef?.current?.close();
                    modalRefs?.secretWordModalRef?.current?.present();
                  }}
                />
                <VisaCard
                  modalRef={modalRefs.visaModalRef}
                  handleModalChange={index =>
                    toggleModal(modalStates.isVisaModalOpen[1], index)
                  }
                  onPressConfirm={() => {
                    modalRefs.visaModalRef.current?.close();
                    navigation.navigate(ScreenNames.PROGRESS);
                  }}
                  onPressPromo={() =>
                    modalRefs.PromoCodeModalRef.current?.present()
                  }
                  onPressChange={() => {
                    modalRefs.visaModalRef.current?.close();
                    modalRefs.changeCardModalRef.current?.present();
                  }}
                />
                <PromoCard
                  modalRef={modalRefs.PromoCodeModalRef}
                  handleModalChange={index =>
                    toggleModal(modalStates.promoCardOpen[1], index)
                  }
                  onPressClose={() => {
                    modalRefs.PromoCodeModalRef.current?.close();
                    modalRefs?.visaModalRef?.current?.present();
                  }}
                />
                <ChangeCard
                  modalRef={modalRefs.changeCardModalRef}
                  handleModalChange={index =>
                    toggleModal(modalStates.isChangeCardOpen[1], index)
                  }
                  onPressAddCard={() => {
                    modalRefs.changeCardModalRef.current?.close();
                    modalRefs.addCardModalRef.current?.present();
                  }}
                  onPressConfirm={() => {}}
                />
                <AddCard
                  modalRef={modalRefs.addCardModalRef}
                  handleModalChange={index =>
                    toggleModal(modalStates.isAddCardOpen[1], index)
                  }
                  onPressConfirm={() => {
                    modalRefs.addCardModalRef.current?.close();
                    modalRefs.verifyCardModalRef.current?.present();
                  }}
                />
                <VerifyCard
                  modalRef={modalRefs.verifyCardModalRef}
                  handleModalChange={index =>
                    toggleModal(modalStates.verifyCardOpen[1], index)
                  }
                  onPressConfirm={() => {
                    modalRefs.verifyCardModalRef.current?.close();
                    navigation.replace(ScreenNames.VERIFYING);
                  }}
                  onPressChange={() => {}}
                  onPressPromo={() => {}}
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
