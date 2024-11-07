import {BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';
import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';
import {BottomSheetModalMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import {Icons} from '~assets/images';
import {Button, Input} from '~components';
import {useForm} from 'react-hook-form';
import {cardSchema} from '~utils/card-schema';
import {yupResolver} from '@hookform/resolvers/yup';
import {width} from '~utils';
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
  const [cardIcon, setCardIcon] = useState(Icons.cardIcon);

  const handleAddCard = () => {
    onPressConfirm();
  };

  const {control, handleSubmit, setValue} = useForm({
    mode: 'all',

    resolver: yupResolver(cardSchema),
  });

  const handleExpiryDateChange = (text: string) => {
    // Remove non-digit characters
    let cleaned = text.replace(/\D/g, '');

    // Format the expiry date as "MM/YY" progressively
    let formatted = cleaned;
    if (cleaned.length > 2) {
      formatted = `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}`;
    } else if (cleaned.length > 0) {
      formatted = cleaned;
    }

    setValue('expiryDate', formatted);
  };

  // Function to handle card icon update based on card number
  const handleCardNumberChange = (text: string) => {
    setValue('cardnumber', text);

    if (/^4/.test(text)) {
      setCardIcon(Icons.visa2); // Visa cards start with '4'
    } else if (/^5[1-5]/.test(text)) {
      setCardIcon(Icons.cardIcon); // MasterCard cards start with '51' to '55'
    } else if (/^3[47]/.test(text)) {
      setCardIcon(Icons.american); // American Express cards start with '34' or '37'
    } else {
      setCardIcon(null); // Default icon
    }
  };
  return (
    <>
      <BottomSheetModal
        backgroundStyle={styles.bottomSheetModal}
        handleIndicatorStyle={styles.handleIndicator}
        onChange={index => {
          handleModalChange(index);
        }}
        snapPoints={['98%']}
        ref={modalRef}>
        <BottomSheetView>
          <View style={styles.modalContainer}>
            <Text style={styles.header}>
              <Text style={styles.headerBold}>Heads up!</Text> To verify your
              account, we might charge a tiny amount—don’t worry, it’ll be
              refunded faster than your kid runs to recess!
            </Text>

            <View style={styles.inputContainer}>
              <Input
                maxlength={16}
                control={control}
                title="Card number"
                name="cardnumber"
                onFocus={() => modalRef?.current?.expand()}
                placeholder="Enter card number"
                keyboardType="numeric"
                onChangeTextCustom={handleCardNumberChange}
              />
              {cardIcon !== null && (
                <Image source={cardIcon} style={styles.icon} />
              )}
            </View>

            <View style={styles.row}>
              <View style={styles.halfInputContainer}>
                <Input
                  maxlength={5}
                  control={control}
                  title="Expiry date"
                  name="expiryDate"
                  onFocus={() => modalRef?.current?.expand()}
                  placeholder="MM/YY"
                  onChangeTextCustom={handleExpiryDateChange}
                  keyboardType="numeric"
                  innerContainerStyle={{width: width(45)}}
                  containerStyle={{width: width(45)}}
                />
              </View>
              <View style={styles.halfInputContainer}>
                <Input
                  control={control}
                  title="CVV"
                  name="cvv"
                  maxlength={4}
                  onFocus={() => modalRef?.current?.expand()}
                  keyboardType="numeric"
                  innerContainerStyle={{width: width(45)}}
                  containerStyle={{width: width(45)}}
                />
              </View>
            </View>

            <View style={styles.inputContainer}>
              <Input
                control={control}
                title="Card Holder Name"
                name="cardHolderName"
                onFocus={() => modalRef?.current?.expand()}
                keyboardType="default"
              />
            </View>

            <View style={styles.cardIcons}>
              <Image source={Icons.card3} style={styles.iconMaster} />
              <Image source={Icons.visa2} style={styles.icon2} />
              <Image source={Icons.american} style={styles.icon3} />
            </View>

            <Button
              containerStyle={styles.confirmButton}
              onPress={handleSubmit(handleAddCard)}
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
