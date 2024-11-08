import {useState} from 'react';
import {Modal, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import styles from './styles';
import {Button} from '~components';
import LinearGradient from 'react-native-linear-gradient';
import FlashMessage, {showMessage} from 'react-native-flash-message';

type Props = {
  onClose: () => void;
  open: boolean;
  onPressConfirm: (date: Date) => void;
  isRepeat?: boolean;
  onPressRepeat: (selectedDays: string[]) => void;
};
const DatePickerModal: React.FC<Props> = ({
  open,
  onClose,
  onPressConfirm,
  isRepeat,
  onPressRepeat,
}) => {
  const [date, setDate] = useState(new Date());
  const [isRepeatShow, setIsRepeatShow] = useState(false);

  const [selectedFrequency, setSelectedFrequency] = useState('Weekly');
  const [selectedDays, setSelectedDays] = useState<string[]>([]);

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
    <Modal
      visible={open}
      transparent
      animationType="slide"
      onRequestClose={onClose}>
      {!isRepeatShow ? (
        <View style={styles.datePickerModalContainer}>
          <View style={styles.datePickerContent}>
            <Text style={styles.title1}>Select Date & Time</Text>

            <DatePicker
              modal={false}
              mode="datetime"
              date={date}
              onDateChange={setDate}
              theme="light"
              minimumDate={new Date()}
            />

            <Button
              title="Confirm Date & Time"
              onPress={() => {
                if (isRepeat) {
                  setIsRepeatShow(true);
                } else {
                  onClose();
                }
                onPressConfirm(date);
              }}
              containerStyle={styles.confirmButton1}
            />
            <LinearGradient
              colors={['#34C560', '#235B43']}
              style={styles.repeat}>
              <TouchableOpacity onPress={() => setIsRepeatShow(true)}>
                <Text style={styles.repeatTxt}>Confirm & Repeat this Trip</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      ) : (
        <View style={styles.datePickerModalContainer}>
          <View style={styles.dayPickerContent}>
            <Text style={styles.title1}>Select Days</Text>

            {/* Frequency Selectors */}
            <View style={styles.frequencyContainer}>
              <TouchableOpacity
                style={[
                  styles.frequencyButton,
                  selectedFrequency === 'Daily' &&
                    styles.selectedFrequencyButton,
                ]}
                onPress={() => setSelectedFrequency('Daily')}>
                <Text
                  style={[
                    styles.frequencyText,
                    selectedFrequency === 'Daily' &&
                      styles.selectedFrequencyText,
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
            {selectedFrequency === 'Weekly' ? (
              <ScrollView
                horizontal
                contentContainerStyle={styles.daysContainer}
                showsHorizontalScrollIndicator={false}>
                {daysOfWeek.map(item => (
                  <View key={item}>{renderDay({item})}</View>
                ))}
              </ScrollView>
            ) : (
              <View style={styles.daysContainerEmpty} />
            )}

            {/* Continue Button */}
            <Button
              containerStyle={styles.confirmButton}
              onPress={() => {
                if (selectedFrequency === 'Daily') {
                  onPressRepeat([]);
                  onClose();
                  setIsRepeatShow(false);
                } else {
                  if (selectedDays?.length === 0) {
                    showMessage({
                      type: 'danger',
                      duration: 2000,
                      message: 'Select at least one day to repeat weekly',
                    });
                  } else {
                    setIsRepeatShow(false);
                    onPressRepeat(selectedDays);
                    onClose();
                  }
                }
              }}
              title="Confirm"
            />
          </View>
        </View>
      )}
      <FlashMessage position="top" style={styles.flash} />
    </Modal>
  );
};

export default DatePickerModal;
