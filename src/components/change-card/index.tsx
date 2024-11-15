import {BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';
import React, {useState} from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {BottomSheetModalMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import {Icons} from '~assets/images';
import {width} from '~utils';
import {CustomBackdrop} from '~components';

// Component Props
type Props = {
  onPressConfirm: () => void;
  modalRef?: React.RefObject<BottomSheetModalMethods>;
  handleModalChange: (index: number) => void;
  onPressAddCard: () => void;
};

const ChangeCard: React.FC<Props> = ({
  modalRef,
  onPressAddCard,
  handleModalChange,
}) => {
  const [selectedMethod, setSelectedMethod] = useState('card');
  const screenHeight = Dimensions.get('screen').height;

  return (
    <>
      <BottomSheetModal
        backgroundStyle={styles.bottomSheetModal}
        handleIndicatorStyle={styles.handleIndicator}
        onChange={index => {
          handleModalChange(index);
        }}
        backdropComponent={() => (
          <CustomBackdrop bottomSheetModalRef={modalRef!} />
        )}
        ref={modalRef}>
        <BottomSheetView>
          <View style={styles.container}>
            <Text style={styles.title}>Payment methods</Text>

            {/* Card Payment Option */}
            <TouchableOpacity
              style={styles.option}
              onPress={() => setSelectedMethod('card')}>
              <Image source={Icons.card2} style={styles.icon} />
              <Text style={styles.optionText1}>****7891</Text>
              {selectedMethod === 'card' ? (
                <Image source={Icons.selected} style={styles.selectedIcon} />
              ) : (
                <View style={styles.Circle} />
              )}
            </TouchableOpacity>

            {/* Apple Pay Option */}
            <TouchableOpacity
              style={styles.option}
              onPress={() => setSelectedMethod('applePay')}>
              <Image source={Icons.applepay} style={styles.icon} />
              <Text style={styles.optionText}>Apple Pay</Text>
              {selectedMethod === 'applePay' ? (
                <Image source={Icons.selected} style={styles.selectedIcon} />
              ) : (
                <View style={styles.Circle} />
              )}
            </TouchableOpacity>

            {/* Add New Card Option */}
            <TouchableOpacity
              style={[
                styles.addCard,
                {marginBottom: screenHeight > 850 ? width(3) : width(7)},
              ]}
              onPress={onPressAddCard}>
              <Text style={styles.plus}>+ </Text>
              <Text style={styles.addCardText}>Add new card</Text>
            </TouchableOpacity>
          </View>
        </BottomSheetView>
      </BottomSheetModal>
    </>
  );
};

export default ChangeCard;
