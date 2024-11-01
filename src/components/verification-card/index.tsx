import {BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';
import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {Button} from '~components';
import {BottomSheetModalMethods} from '@gorhom/bottom-sheet/lib/typescript/types';

// Component Props
type Props = {
  onPressConfirm: () => void;
  modalRef?: React.RefObject<BottomSheetModalMethods>;
  handleModalChange: (index: number) => void;
};

const VerificationCard: React.FC<Props> = ({
  modalRef,
  onPressConfirm,
  handleModalChange,
}) => {
  return (
    <>
      <BottomSheetModal
        backgroundStyle={styles.bottomSheetModal}
        handleIndicatorStyle={styles.handleIndicator}
        onChange={handleModalChange}
        enablePanDownToClose={false}
        ref={modalRef}>
        <BottomSheetView>
          {/* Modal Content */}
          <View style={styles.container}>
            <Text style={styles.title}>Verification required</Text>
            <Text style={styles.message}>
              You’ll receive a notification from your bank—be it SMS, email, or
              app notification.
            </Text>
            <Text style={styles.message}>
              To verify your card ownership, a small charge may apply, which
              will be promptly refunded!
            </Text>

            <Button
              containerStyle={styles.confirmButton}
              onPress={onPressConfirm}
              title="Continue"
            />
          </View>
        </BottomSheetView>
      </BottomSheetModal>
    </>
  );
};

export default VerificationCard;
