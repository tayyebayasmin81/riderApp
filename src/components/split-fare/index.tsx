import {BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';
import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {Button} from '~components';
import {BottomSheetModalMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import AppColors from '~utils/app-colors';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {width} from '~utils';
import {Icons} from '~assets/images';

// Component Props
type Props = {
  bottomSheetModalRef?: React.RefObject<BottomSheetModalMethods>;
  onPressConfirm: () => void;
  handleModalChange?: (index: number) => void;
};

const SplitFare: React.FC<Props> = ({
  bottomSheetModalRef,
  onPressConfirm,
  handleModalChange,
}) => {
  const [fare, setFare] = useState<'Half' | '25%' | 'Custom'>('Half');
  const [value, setValue] = useState([50]);
  const stops = [10, 25, 50, 75, 100];

  const onValuesChangeFinish = (values: number[]) => {
    const nearestStop = stops.reduce((prev, curr) =>
      Math.abs(curr - values[0]) < Math.abs(prev - values[0]) ? curr : prev,
    );
    setValue([nearestStop]);
  };
  return (
    <>
      <BottomSheetModal
        backgroundStyle={styles.bottomSheetModal}
        handleIndicatorStyle={styles.handleIndicator}
        enablePanDownToClose={false}
        ref={bottomSheetModalRef}
        onChange={handleModalChange}>
        <BottomSheetView>
          {/* Modal Content */}
          <View style={styles.modalContainer}>
            <View>
              <Text style={styles.title}>Split Fare</Text>
              <Text style={styles.subtitle}>
                Share the ride, split the fare! Slide and let the crew chip in!{' '}
              </Text>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() => setFare('Half')}
                style={[
                  styles.button,
                  {
                    backgroundColor:
                      fare === 'Half' ? AppColors.primary : AppColors.gray,
                  },
                ]}>
                <Text style={styles.buttonText}>Half</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setFare('25%');
                  setValue([25]);
                }}
                style={[
                  styles.button,
                  {
                    backgroundColor:
                      fare === '25%' ? AppColors.primary : AppColors.gray,
                  },
                ]}>
                <Text style={styles.buttonText}>25%</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setFare('Custom')}
                style={[
                  styles.button,
                  {
                    backgroundColor:
                      fare === 'Custom' ? AppColors.primary : AppColors.gray,
                  },
                ]}>
                <Text style={styles.buttonText}>Custom</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.sliderContainer}>
              <MultiSlider
                sliderLength={width(78)}
                values={value}
                onValuesChangeFinish={onValuesChangeFinish}
                min={10}
                max={100}
                step={1}
                markerStyle={styles.thumbStyle}
                selectedStyle={styles.selectedTrackStyle}
                trackStyle={styles.trackStyle}
              />
              <View style={styles.sliderMarkers}>
                {stops?.map((stop, index) => (
                  <Text key={index} style={styles.sliderMarker}>
                    {stop}%
                  </Text>
                ))}
              </View>
            </View>

            <Text style={styles.subtitle1}>
              Please note that each parent will be charged with AED 0.50 of
              split fee
            </Text>

            <Text style={styles.resultText}>
              <Image style={styles.icon} source={Icons.person} /> {'  '}Another
              Parent will share <Text style={styles.highlight}>{value}%</Text>{' '}
              of the total amount
            </Text>
          </View>
          <Button
            containerStyle={styles.confirmButton}
            onPress={onPressConfirm}
            title="Confirm Split"
          />
        </BottomSheetView>
      </BottomSheetModal>
    </>
  );
};

export default SplitFare;
