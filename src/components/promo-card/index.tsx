import {BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';
import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {BottomSheetModalMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import {Icons} from '~assets/images';
import {Image} from 'react-native';
import {Button} from '~components';

// Component Props
type Props = {
  onPressClose: () => void;
  modalRef?: React.RefObject<BottomSheetModalMethods>;
  handleModalChange: (index: number) => void;
};

const PromoCard: React.FC<Props> = ({
  modalRef,
  onPressClose,
  handleModalChange,
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [error, setError] = useState(false);
  const handleActivateCode = () => {
    if (promoCode === '') {
      setError(true);
    } else {
      onPressClose();
      setError(false);
      // Proceed with the promo code application logic
    }
  };
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
          <View style={styles.modalContainer}>
            <View style={styles.row}>
              <Text style={styles.header}>Add promo</Text>
              <TouchableOpacity onPress={onPressClose}>
                <Image source={Icons.cross2} style={styles.crossIcon} />
              </TouchableOpacity>
            </View>
            <View
              style={[
                styles.inputContainer,
                error && styles.inputContainerError,
              ]}>
              <TextInput
                style={[styles.input, error && styles.inputError]}
                placeholder="Enter Promo Code"
                placeholderTextColor="#8A8A8E"
                value={promoCode}
                onChangeText={setPromoCode}
                onFocus={() => setError(false)} // Reset error on focus
              />
              {error && <Image source={Icons.info} style={styles.errorIcon} />}
            </View>

            {error && (
              <Text style={styles.errorText}>
                Invalid Code, Please recheck the code!
              </Text>
            )}

            <Button
              containerStyle={styles.confirmButton}
              onPress={handleActivateCode}
              title="Activate code"
            />
            <View style={styles.footer}>
              <Image source={Icons.percentage} style={styles.percentageIcon} />
              <Text style={styles.footerText}>
                Got a promo code? Flex it here and watch the price drop!
              </Text>
            </View>
          </View>
        </BottomSheetView>
      </BottomSheetModal>
    </>
  );
};

export default PromoCard;
