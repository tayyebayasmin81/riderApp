import {BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';
import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {BottomSheetModalMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import {rideOptions} from '~utils/dummy-data';
import {Image} from 'react-native';
import {Icons} from '~assets/images';

// Component Props
type Props = {
  bottomSheetModalRef?: React.RefObject<BottomSheetModalMethods>;
  onPressConfirm: () => void;
  handleModalChange?: (index: number) => void;
};

const ChooseRide: React.FC<Props> = ({
  bottomSheetModalRef,
  onPressConfirm,
  handleModalChange,
}) => {
  // eslint-disable-next-line react/no-unstable-nested-components
  const RideOptionItem = ({
    title,
    seats,
    description,
    color,
  }: {
    title: string;
    seats: number;
    description?: string;
    color: string;
  }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => onPressConfirm()}>
      <View>
        <Image source={Icons.car} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.title1, {color}]}>{title}</Text>
        <Text style={styles.seats}>👤 {seats}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <>
      <BottomSheetModal
        backgroundStyle={styles.bottomSheetModal}
        handleIndicatorStyle={styles.handleIndicator}
        ref={bottomSheetModalRef}
        onChange={handleModalChange}>
        <BottomSheetView>
          {/* Modal Content */}
          <View style={styles.modalContainer}>
            <Text style={styles.title}>Choose your ride</Text>
            <ScrollView>
              {rideOptions.map(item => (
                <RideOptionItem
                  key={item.id}
                  title={item.title}
                  seats={item.seats}
                  description={item.description}
                  color={item.color}
                />
              ))}
            </ScrollView>
          </View>
        </BottomSheetView>
      </BottomSheetModal>
    </>
  );
};

export default ChooseRide;
