import {BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';
import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import {BottomSheetModalMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import {Icons} from '~assets/images';
import {FontFamily} from '~utils/font-family';
import {width} from '~utils';

// Component Props
type Props = {
  onPressConfirm: () => void;
  onPressChange: () => void;
  modalRef?: React.RefObject<BottomSheetModalMethods>;
  handleModalChange: (index: number) => void;
  onPressPromo: () => void;
};

const VisaCard: React.FC<Props> = ({
  modalRef,
  onPressConfirm,
  onPressChange,
  handleModalChange,
  onPressPromo,
}) => {
  const [index, setIndex] = useState(0);
  const screenHeight = Dimensions.get('screen').height;

  return (
    <>
      <BottomSheetModal
        backgroundStyle={styles.bottomSheetModal}
        handleIndicatorStyle={styles.handleIndicator}
        onChange={(index: number) => {
          setIndex(index);
          handleModalChange(index);
        }}
        snapPoints={['60%']}
        enablePanDownToClose={false}
        ref={modalRef}>
        <BottomSheetView>
          {/* Modal Content */}
          <View style={styles.modalContainer}>
            <View style={styles.row}>
              <View style={styles.cardDetails}>
                <Image source={Icons.visa} style={styles.visaIcon} />
                <Text style={styles.cardText}>****7811</Text>
                <TouchableOpacity onPress={onPressChange}>
                  <Text style={styles.changeText}>Change</Text>
                </TouchableOpacity>
              </View>
              <View>
                <View style={styles.row1}>
                  <Text style={styles.changeText}>View offers</Text>
                  <Image source={Icons.up} style={styles.upIcon} />
                </View>

                <TouchableOpacity style={styles.row1} onPress={onPressPromo}>
                  <Image
                    source={Icons.token}
                    style={styles.tokenIcon}
                    resizeMode="contain"
                  />
                  <Text style={styles.promoCodeText}>PROMO CODE</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.line} />
            {index === 1 && (
              <>
                <Text style={styles.sectionTitle}>Order summary</Text>
                <View style={styles.orderSummary}>
                  <View style={styles.row}>
                    <Text style={styles.label}>Total</Text>
                    <Text style={styles.value2}>AED 60-90</Text>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.label}>Platform Fee</Text>
                    <Text style={[styles.value, styles.free]}>FREE</Text>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.label}>Discount</Text>
                    <Text style={[styles.value, styles.discount]}>
                      -AED 3.25
                    </Text>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.label}>Grand Total</Text>
                    <Text
                      style={[
                        styles.value,
                        {fontFamily: FontFamily.appFontBold},
                      ]}>
                      AED 60-87
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={[
                    styles.button,
                    {marginVertical: screenHeight > 850 ? width(7) : width(12)},
                  ]}
                  onPress={onPressConfirm}>
                  <ImageBackground source={Icons.btn} style={styles.icon}>
                    <Text style={styles.buttonText}>Hayya!</Text>
                  </ImageBackground>
                </TouchableOpacity>
              </>
            )}
            {index !== 1 && (
              <View
                style={[
                  styles.row2,
                  {marginBottom: screenHeight > 850 ? width(4) : width(12)},
                ]}>
                <View>
                  <Text style={styles.value}>AED 60-90</Text>
                  <Text style={styles.changeText1}>View breakdown</Text>
                </View>
                <TouchableOpacity
                  style={styles.button1}
                  onPress={onPressConfirm}>
                  <ImageBackground source={Icons.btn} style={styles.icon}>
                    <Text style={styles.buttonText}>Hayya!</Text>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </BottomSheetView>
      </BottomSheetModal>
    </>
  );
};

export default VisaCard;
