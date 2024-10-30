import {BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';
import React, {useState} from 'react';
import {Image, Text, TextInput, View} from 'react-native';
import styles from './styles';
import {BottomSheetModalMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import {Icons} from '~assets/images';
import AppColors from '~utils/app-colors';
import {Button} from '~components';

// Component Props
type Props = {
  modalRef?: React.RefObject<BottomSheetModalMethods>;
  handleModalChange: (index: number) => void;
  onPressConfirm: () => void;
};

const AddCard: React.FC<Props> = ({
  modalRef,
  handleModalChange,
  onPressConfirm,
}) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');

  const [cardNumberError, setCardNumberError] = useState(false);
  const [expiryDateError, setExpiryDateError] = useState(false);
  const [cvvError, setCvvError] = useState(false);
  const [cardHolderNameError, setCardHolderNameError] = useState(false);

  const handleAddCard = () => {
    // Check if all fields are filled
    setCardNumberError(cardNumber === '');
    setExpiryDateError(expiryDate === '');
    setCvvError(cvv === '');
    setCardHolderNameError(cardHolderName === '');

    // If any error exists, don't proceed
    if (!cardNumber || !expiryDate || !cvv || !cardHolderName) {
      return;
    }

    // Call onPressConfirm if there are no errors
    onPressConfirm();
  };
  return (
    <>
      <BottomSheetModal
        backgroundStyle={styles.bottomSheetModal}
        handleIndicatorStyle={styles.handleIndicator}
        onChange={index => {
          handleModalChange(index);
        }}
        snapPoints={['90%']}
        ref={modalRef}>
        <BottomSheetView>
          <View style={styles.modalContainer}>
            <Text style={styles.header}>
              <Text style={styles.headerBold}>Heads up!</Text> To verify your
              account, we might charge a tiny amount—don’t worry, it’ll be
              refunded faster than your kid runs to recess!
            </Text>

            <Text style={styles.label}>Card number</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Enter card number"
                placeholderTextColor={AppColors.gray10}
                keyboardType="numeric"
                value={cardNumber}
                onChangeText={setCardNumber}
              />
              <Image source={Icons.cardIcon} style={styles.icon} />
            </View>
            {cardNumberError && (
              <Text style={styles.errorText}>Please provide a card number</Text>
            )}
            <View style={styles.row}>
              <View style={styles.halfInputContainer}>
                <Text style={styles.label}>Expiry date</Text>
                <View style={styles.halfInputContainer1}>
                  <TextInput
                    style={styles.input1}
                    placeholder="MM/YY"
                    keyboardType="numeric"
                    value={expiryDate}
                    placeholderTextColor={AppColors.gray}
                    onChangeText={setExpiryDate}
                  />
                </View>
                {expiryDateError && (
                  <Text style={styles.errorText}>
                    Please provide an expiry date
                  </Text>
                )}
              </View>
              <View style={styles.halfInputContainer}>
                <Text style={styles.label}>CVV</Text>
                <View style={styles.halfInputContainer1}>
                  <TextInput
                    style={styles.input1}
                    placeholder="Enter CVV"
                    keyboardType="numeric"
                    secureTextEntry
                    value={cvv}
                    onChangeText={setCvv}
                  />
                </View>
                {cvvError && (
                  <Text style={styles.errorText}>Please provide a CVV</Text>
                )}
              </View>
            </View>

            <Text style={styles.label}>Card holder name</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholderTextColor={AppColors.gray10}
                value={cardHolderName}
                onChangeText={setCardHolderName}
              />
            </View>
            {cardHolderNameError && (
              <Text style={styles.errorText}>
                Please provide a card holder name
              </Text>
            )}
            <View style={styles.cardIcons}>
              <Image source={Icons.card3} style={styles.icon} />
              <Image source={Icons.visa2} style={styles.icon2} />
              <Image source={Icons.american} style={styles.icon3} />
            </View>

            <Button
              containerStyle={styles.confirmButton}
              onPress={handleAddCard}
              title="Add card"
            />

            <View style={styles.row1}>
              <Image source={Icons.verify} style={styles.icon1} />
              <Text style={styles.footerText}>
                Your payment info is locked up safe and sound—like it’s in a
                digital vault!
              </Text>
            </View>
          </View>
        </BottomSheetView>
      </BottomSheetModal>
    </>
  );
};

export default AddCard;
