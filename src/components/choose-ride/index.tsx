import {BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';
import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {BottomSheetModalMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import {rideOptions} from '~utils/dummy-data';
import {Image} from 'react-native';
import {Icons} from '~assets/images';
import CustomBackdrop from '~components/backdrop';

// Component Props
type Props = {
  bottomSheetModalRef?: React.RefObject<BottomSheetModalMethods>;
  onPressConfirm: () => void;
  handleModalChange?: (index: number) => void;
  onPressBack: () => void;
};

const ChooseRide: React.FC<Props> = ({
  bottomSheetModalRef,
  onPressConfirm,
  handleModalChange,
  onPressBack,
}) => {
  // eslint-disable-next-line react/no-unstable-nested-components
  const RideOptionItem = ({
    title,
    seats,
    description,
    color,
    index,
  }: {
    title: string;
    seats: number;
    description?: string;
    color: string;
    index: number;
  }) => (
    <TouchableOpacity
      style={[
        styles.itemContainer,
        // eslint-disable-next-line react-native/no-inline-styles
        {borderBottomWidth: index === rideOptions?.length - 1 ? 0 : 1},
      ]}
      onPress={() => onPressConfirm()}>
      <View style={styles.carContainer}>
        <Image source={Icons.car} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.title1, {color}]}>{title}</Text>
        <View style={styles.row2}>
          <Image source={Icons.person} style={styles.person} />
          <Text style={styles.seats}>{seats}</Text>
        </View>
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
        backdropComponent={() => (
          <CustomBackdrop bottomSheetModalRef={bottomSheetModalRef!} />
        )}
        onChange={handleModalChange}>
        <BottomSheetView>
          {/* Modal Content */}
          <View style={styles.modalContainer}>
            <View style={styles.row}>
              <TouchableOpacity onPress={() => onPressBack()}>
                <Image
                  source={Icons.below}
                  style={styles.belowIcon}
                  resizeMode="contain"
                  tintColor="#C0BCBC"
                />
              </TouchableOpacity>
              <Text style={styles.title}>Choose your ride</Text>
            </View>
            <ScrollView>
              {rideOptions.map((item, index) => (
                <RideOptionItem
                  key={item.id}
                  title={item.title}
                  seats={item.seats}
                  description={item.description}
                  color={item.color}
                  index={index}
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
