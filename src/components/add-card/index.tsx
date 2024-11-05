import {BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';
import React from 'react';
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
  const handleAddCard = () => {
    onPressConfirm();
  };

  const {control, handleSubmit, setValue} = useForm({
    mode: 'all',

    resolver: yupResolver(cardSchema),
  });

  const handleExpiryDateChange = (text: string) => {
    let cleaned = text.replace(/\D/g, '');
    let formatted = cleaned;
    if (cleaned.length >= 2) {
      formatted = `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}`;
    }
    if (formatted.length > 5) {
      formatted = formatted.slice(0, 5);
    }
    setValue('expiryDate', formatted);
  };

  return (
    <>
      <BottomSheetModal
        backgroundStyle={styles.bottomSheetModal}
        handleIndicatorStyle={styles.handleIndicator}
        onChange={index => {
          handleModalChange(index);
        }}
        enablePanDownToClose={false}
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
                control={control}
                title="Card number"
                name="cardnumber"
                onFocus={() => modalRef?.current?.expand()}
                placeholder="Enter card number"
                keyboardType="numeric"
              />
              <Image source={Icons.cardIcon} style={styles.icon} />
            </View>

            <View style={styles.row}>
              <View style={styles.halfInputContainer}>
                <Input
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
              <Image source={Icons.card3} style={styles.icon} />
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
