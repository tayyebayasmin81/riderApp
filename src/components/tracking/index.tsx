import {BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';
import React, {useEffect, useState} from 'react';
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
  const [arrive, setIsArrive] = useState(false);
  const [booked, setIsBooked] = useState(false);

  const [index, setIndex] = useState<number>();

  useEffect(() => {
    setTimeout(() => {
      setIsArrive(true);
    }, 6000);
    setTimeout(() => {
      setIsArrive(false);
      setIsBooked(true);
    }, 12000);
  }, []);
  return (
    <>
      <BottomSheetModal
        backgroundStyle={styles.bottomSheetModal}
        handleIndicatorStyle={styles.handleIndicator}
        ref={modalRef}
        snapPoints={['40%']}
        onChange={index => setIndex(index)}>
        <BottomSheetView>
          {/* Modal Content */}
          {!booked ? (
            <View style={styles.modalContainer}>
              <View style={styles.row}>
                <Text style={styles.title}>
                  Your{' '}
                  <Text style={{color: AppColors.primary}}>
                    {arrive ? 'Child' : 'Uz’er'}
                  </Text>{' '}
                  On the Way!
                </Text>
                {!arrive ? (
                  <Text style={styles.detailTitle1}>5 min away</Text>
                ) : (
                  <Text style={styles.detailTitle2}>Arriving by 03:24 PM</Text>
                )}
              </View>
              {!arrive ? (
                <Image source={Icons.loader2} style={styles.loader} />
              ) : (
                <Image source={Icons.loader3} style={styles.loader} />
              )}
              <View style={styles.driverInfo}>
                <View style={styles.row2}>
                  <Image source={Icons.child} style={styles.driverImage} />
                  <View style={styles.driverDetails}>
                    <View style={styles.row1}>
                      <Text style={styles.driverName}>Jenny Wilson</Text>
                      <Text style={styles.driverRating}>4.8★</Text>
                    </View>
                    <Text style={styles.carModel}>Lexus</Text>
                  </View>
                </View>
                <View style={styles.plateNumberContainer}>
                  <Text style={styles.plateNumber}>DXB-L3245</Text>
                </View>
              </View>
              <View style={styles.seperator} />
              {index === 0 && (
                <>
                  <View style={styles.mainRow}>
                    <View style={styles.row2}>
                      <Image source={Icons.chat} style={styles.iconbtm} />
                      <Text style={styles.btmTxt}>Chat</Text>
                    </View>
                    <View style={styles.row2}>
                      <Image source={Icons.share} style={styles.iconbtm2} />
                      <Text style={styles.btmTxt}>Share Details</Text>
                    </View>
                  </View>

                  <View style={styles.seperator} />
                  <Text style={styles.driverName2}>
                    We’ve authorized AED 60.12 from you
                  </Text>
                  <Text style={styles.driverName3}>
                    When the ride’s done, we’ll take what we need for the final
                    fare and send the  rest back—like taking the last slice of
                    pizza but leaving you the crust!😛
                  </Text>
                </>
              )}

              {index === 1 && (
                <>
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
                    <View>
                      <Text style={styles.childName}>Monika Jones</Text>
                      <View style={styles.row2}>
                        <Image
                          source={Icons.bottom}
                          style={styles.childImage}
                        />
                        <Text style={styles.viewMore}>View More</Text>
                      </View>
                    </View>
                    <Image source={Icons.women} style={styles.childIcon} />
                  </View>

                  {/* Action Buttons */}
                  <TouchableOpacity style={styles.actionButton}>
                    <Image source={Icons.chat} style={styles.icon} />
                    <Text style={styles.messageDriver}>
                      Send a message to Driver
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.actionButtonCancel}>
                    <Image source={Icons.cross} style={styles.icon1} />
                    <Text style={styles.cancelRide}>Cancel Ride</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.actionButton}>
                    <Image source={Icons.phone} style={styles.icon} />
                    <Text style={styles.callDriver}>Call the Driver</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.actionButton}>
                    <Image source={Icons.microphone} style={styles.icon} />
                    <Text style={styles.needHelp}>Need our help?</Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
          ) : (
            <View style={styles.modalContainer}>
              <View>
                <Text style={styles.txt}>
                  Your ride has been booked successfully
                </Text>
                <Image
                  source={Icons.loader3}
                  style={styles.loader}
                  tintColor="#FF6A6D"
                />
                <View style={styles.greenConatiner}>
                  <Image source={Icons.Clock1} style={styles.icon} />
                  <Text style={styles.btmTxt2}>Waiting to assign driver</Text>
                </View>
                <View style={styles.chatRow}>
                  <Image source={Icons.chat} style={styles.iconbtm} />
                  <Text style={styles.btmTxt}>Chat</Text>
                </View>
              </View>
              <View style={styles.redConatiner}>
                <Text style={styles.txt2}>
                  Hang Tight! We’ll Notify You When a Driver is Assigned
                </Text>
              </View>
              <View style={styles.mainRow2}>
                <Text style={styles.txt3}>Schedule Later</Text>
                <Text style={styles.txt4}>Cancel this ride</Text>
              </View>
            </View>
          )}
        </BottomSheetView>
      </BottomSheetModal>
    </>
  );
};

export default RideTrack;
