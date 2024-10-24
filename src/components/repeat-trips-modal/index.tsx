import {BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';
import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {BottomSheetModalMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import {Button} from '~components';

// Component Props
type Props = {
  onPressConfirm: () => void;
  repeatTripsModalRef: React.RefObject<BottomSheetModalMethods>;
};

const RepeatTripsModal: React.FC<Props> = ({
  repeatTripsModalRef,
  onPressConfirm,
}) => {
  const [selectedFrequency, setSelectedFrequency] = useState('Weekly');
  const [selectedDays, setSelectedDays] = useState<string[]>(['Mon']);

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const handleDayToggle = (day: string) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter(d => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  const renderDay = ({item}: {item: string}) => (
    <TouchableOpacity
      style={[
        styles.dayCircle,
        selectedDays.includes(item) && styles.selectedDayCircle,
      ]}
      onPress={() => handleDayToggle(item)}>
      <Text
        style={[
          styles.dayText,
          selectedDays.includes(item) && styles.selectedDayText,
        ]}>
        {item}
      </Text>
    </TouchableOpacity>
  );
  return (
    <>
      <BottomSheetModal
        backgroundStyle={styles.bottomSheetModal}
        handleIndicatorStyle={styles.handleIndicator}
        ref={repeatTripsModalRef}>
        <BottomSheetView>
          {/* Modal Content */}
          <View style={styles.modalContainer}>
            <Text style={styles.title}>Select Days</Text>
          </View>
          {/* Frequency Selectors */}
          <View style={styles.frequencyContainer}>
            <TouchableOpacity
              style={[
                styles.frequencyButton,
                selectedFrequency === 'Daily' && styles.selectedFrequencyButton,
              ]}
              onPress={() => setSelectedFrequency('Daily')}>
              <Text
                style={[
                  styles.frequencyText,
                  selectedFrequency === 'Daily' && styles.selectedFrequencyText,
                ]}>
                Daily
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.frequencyButton,
                selectedFrequency === 'Weekly' &&
                  styles.selectedFrequencyButton,
              ]}
              onPress={() => setSelectedFrequency('Weekly')}>
              <Text
                style={[
                  styles.frequencyText,
                  selectedFrequency === 'Weekly' &&
                    styles.selectedFrequencyText,
                ]}>
                Weekly
              </Text>
            </TouchableOpacity>
          </View>

          {/* Days of the Week */}
          <FlatList
            data={daysOfWeek}
            horizontal
            renderItem={renderDay}
            keyExtractor={item => item}
            contentContainerStyle={styles.daysContainer}
            showsHorizontalScrollIndicator={false}
          />

          {/* Continue Button */}
          <Button
            containerStyle={styles.confirmButton}
            onPress={onPressConfirm}
            title="Confirm"
          />
        </BottomSheetView>
      </BottomSheetModal>
    </>
  );
};

export default RepeatTripsModal;
