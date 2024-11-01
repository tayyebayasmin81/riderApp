import {BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {BottomSheetModalMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import {Button} from '~components';
import LinearGradient from 'react-native-linear-gradient';

// Component Props
type Props = {
  onPressConfirm: () => void;
  onPressGoBack: () => void;
  modalRef: React.RefObject<BottomSheetModalMethods>;
  handleModalChange: (index: number) => void;
};

const AddPhotoReminder: React.FC<Props> = ({
  modalRef,
  onPressConfirm,
  onPressGoBack,
  handleModalChange,
}) => {
  return (
    <>
      <BottomSheetModal
        backgroundStyle={styles.bottomSheetModal}
        handleIndicatorStyle={styles.handleIndicator}
        ref={modalRef}
        enablePanDownToClose={false}
        onChange={handleModalChange}>
        <BottomSheetView>
          {/* Modal Content */}
          <View style={styles.modalContainer}>
            <Text style={styles.title}>Add Photo Reminder</Text>
          </View>
          <Text style={styles.infoText}>
            Adding a photo helps drivers identify your child.
            <Text style={styles.infoHlTxt}> You can proceed without it, </Text>
            but we recommend adding one for safety.
          </Text>
          {/* Continue Button */}
          <Button
            containerStyle={styles.confirmButton}
            onPress={onPressConfirm}
            title="Continue"
          />
          <LinearGradient colors={['#FF6A6D', '#D95053']} style={styles.goBack}>
            <TouchableOpacity onPress={onPressGoBack}>
              <Text style={styles.goBackTxt}>Go Back</Text>
            </TouchableOpacity>
          </LinearGradient>
        </BottomSheetView>
      </BottomSheetModal>
    </>
  );
};

export default AddPhotoReminder;
