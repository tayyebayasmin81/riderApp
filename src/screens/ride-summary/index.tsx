import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useRef, useState} from 'react';
import {View} from 'react-native';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import styles from './styles';
import AppColors from '~utils/app-colors';
import {RiderSummary} from '~components';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BlurView} from '@react-native-community/blur';

const Account = ({navigation}: NativeStackScreenProps<any>) => {
  const modalRef = useRef<BottomSheetModal>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalChange = (index: number) => {
    setIsModalOpen(index >= 0);
  };

  useEffect(() => {
    modalRef?.current?.present();
  }, [navigation]);
  return (
    <ScreenWrapper statusBarColor={AppColors.primary} scrollType="keyboard">
      <View style={styles.container}>
        {isModalOpen && (
          <BlurView blurType="light" blurAmount={8} style={styles.blurView} />
        )}
        <GestureHandlerRootView>
          <BottomSheetModalProvider>
            <RiderSummary
              modalRef={modalRef}
              onPressConfirm={() => {}}
              handleModalChange={handleModalChange}
            />
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </View>
    </ScreenWrapper>
  );
};

export default Account;
