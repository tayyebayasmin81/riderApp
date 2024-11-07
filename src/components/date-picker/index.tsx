import {useState} from 'react';
import {Modal, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import styles from './styles';
import {Button} from '~components';
import {Icons} from '~assets/images';
import {Image} from 'react-native';

type Props = {
  onClose: () => void;
  open: boolean;
  onPressConfirm: (date: Date) => void;
};
const DatePickerModal: React.FC<Props> = ({open, onClose, onPressConfirm}) => {
  const [date, setDate] = useState(new Date());
  const [isRepeat, setIsRepeat] = useState(false);
  const [isRepeatShow, setIsRepeatShow] = useState(false);

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
            />
            <View style={styles.row2}>
              <TouchableOpacity
                onPress={() => setIsRepeat(!isRepeat)}
                style={styles.row1}>
                {isRepeat ? (
                  <Image source={Icons.selected} style={styles.selectedIcon} />
                ) : (
                  <View style={styles.Circle} />
                )}
              </TouchableOpacity>
              <Text style={styles.title}>Do you want to repeat this trip?</Text>
            </View>
            <View style={styles.row}>
              <Button
                title="Cancel"
                onPress={onClose}
                containerStyle={styles.confirmButton1}
              />
              <Button
                title="Confirm"
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
            </View>
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
            <ScrollView
              horizontal
              contentContainerStyle={styles.daysContainer}
              showsHorizontalScrollIndicator={false}>
              {daysOfWeek.map(item => (
                <View key={item}>{renderDay({item})}</View>
              ))}
            </ScrollView>

            {/* Continue Button */}
            <Button
              containerStyle={styles.confirmButton}
              onPress={() => {
                onClose();
                setIsRepeat(false);
                setIsRepeatShow(false);
              }}
              title="Confirm"
            />
          </View>
        </View>
      )}
    </Modal>
  );
};

export default DatePickerModal;
