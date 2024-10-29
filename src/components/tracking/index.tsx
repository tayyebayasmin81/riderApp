import {BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {BottomSheetModalMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import {Icons} from '~assets/images';
import {Image} from 'react-native';
import AppColors from '~utils/app-colors';

// Component Props
type Props = {
  modalRef?: React.RefObject<BottomSheetModalMethods>;
};

const RideTrack: React.FC<Props> = ({modalRef}) => {
  return (
    <>
      <BottomSheetModal
        backgroundStyle={styles.bottomSheetModal}
        handleIndicatorStyle={styles.handleIndicator}
        ref={modalRef}>
        <BottomSheetView>
          {/* Modal Content */}
          <View style={styles.modalContainer}>
            <View style={styles.row}>
              <Text style={styles.title}>
                Your <Text style={{color: AppColors.primary}}>Uz’er</Text> On
                the Way!
              </Text>
              <Text style={styles.detailTitle1}>5 min away</Text>
            </View>
            <Image source={Icons.loader2} style={styles.loader} />
            <View style={styles.driverInfo}>
              <Image source={Icons.child} style={styles.driverImage} />
              <View style={styles.driverDetails}>
                <Text style={styles.driverName}>Jenny Wilson</Text>
                <Text style={styles.driverRating}>4.8★</Text>
                <Text style={styles.carModel}>Lexus</Text>
              </View>
              <View style={styles.plateNumberContainer}>
                <Text style={styles.plateNumber}>DXB-L3245</Text>
              </View>
            </View>

            {/* Fare and Payment Section */}
            <View style={styles.farePaymentContainer}>
              <View style={styles.fareContainer}>
                <Text style={styles.label}>Fare</Text>
                <Text style={styles.fare}>AED 60.25-70.67</Text>
              </View>
              <View style={styles.paymentContainer}>
                <Text style={styles.label}>Payment</Text>
                <Text style={styles.paymentMethod}>Apple Pay</Text>
              </View>
            </View>

            {/* Child's Details Section */}
            <Text style={styles.childDetailsHeader}>Child’s Details</Text>
            <View style={styles.childDetails}>
              <Image source={Icons.women} style={styles.childImage} />
              <View style={styles.childInfo}>
                <Text style={styles.childName}>Monika Jones</Text>
                <Text style={styles.viewMore}>View More</Text>
              </View>
            </View>

            {/* Action Buttons */}
            <TouchableOpacity style={styles.actionButton}>
              <Image source={Icons.chat} style={styles.icon} />
              <Text style={styles.messageDriver}>Send a message to Driver</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButtonCancel}>
              <Image source={Icons.cross} style={styles.icon} />
              <Text style={styles.cancelRide}>Cancel Ride</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
              <Image source={Icons.microphone} style={styles.icon} />
              <Text style={styles.callDriver}>Call the Driver</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
              <Image source={Icons.phone} style={styles.icon} />
              <Text style={styles.needHelp}>Need our help?</Text>
            </TouchableOpacity>
          </View>
        </BottomSheetView>
      </BottomSheetModal>
    </>
  );
};

export default RideTrack;
