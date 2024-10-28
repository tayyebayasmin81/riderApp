import {BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';
import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {BottomSheetModalMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import {Icons} from '~assets/images';
import {Image} from 'react-native';

// Component Props
type Props = {
  modalRef?: React.RefObject<BottomSheetModalMethods>;
};

const SearchingDriver: React.FC<Props> = ({modalRef}) => {
  return (
    <>
      <BottomSheetModal
        backgroundStyle={styles.bottomSheetModal}
        handleIndicatorStyle={styles.handleIndicator}
        ref={modalRef}>
        <BottomSheetView>
          {/* Modal Content */}
          <View style={styles.modalContainer}>
            <Text style={styles.title}>Booking Initiated</Text>
            <Image source={Icons.loader2} style={styles.loader} />
            <View style={styles.dateContainer}>
              <Text style={styles.date}>07 September, 2024</Text>
            </View>
            <View style={styles.locationContainer}>
              <Image source={Icons.orderProgress} style={styles.iconProgress} />
              <View style={styles.locationRow}>
                <Text style={styles.locationText}>Pickup</Text>
                <Text style={styles.addressText}>
                  8500 Main st, Houston, TX
                </Text>
              </View>
              <View style={styles.locationRow}>
                <Text style={styles.locationText}>Drop Off</Text>
                <Text style={styles.addressText}>
                  8500 Main st, Houston, TX
                </Text>
              </View>
            </View>
            <View style={styles.detailsContainer}>
              <Text style={styles.detailTitle}>Booking Details</Text>
              <View style={styles.detailRow}>
                <Image source={Icons.visa} style={styles.icon} />
                <Text style={styles.detailText}>Card payment</Text>
              </View>
              <View style={styles.detailRow}>
                <Image source={Icons.man} style={styles.icon} />

                <Text style={styles.detailText}>3 Passengers</Text>
              </View>
              <View style={styles.detailRow}>
                <Image source={Icons.car} style={styles.icon} />

                <Text style={[styles.detailText, {color: 'blue'}]}>
                  Eco-Friendly
                </Text>
              </View>
            </View>
          </View>
        </BottomSheetView>
      </BottomSheetModal>
    </>
  );
};

export default SearchingDriver;
