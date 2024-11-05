import {BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';
import React, {useState} from 'react';
import {
  Dimensions,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AppColors from '~utils/app-colors';
import styles from './styles';
import {Image} from 'react-native';
import {Icons} from '~assets/images';
import {locations, tabs} from '~utils/dummy-data';
import {Button, CustomBackdrop} from '~components';
import {BottomSheetModalMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import DatePicker from 'react-native-date-picker';

// Component Props
type Props = {
  onPressConfirm: () => void;
  handleSheetChanges: (index: number) => void;
  sheetIndex: number;
  bottomSheetModalRef?: React.RefObject<BottomSheetModalMethods>;
  title?: string;
};

const BookRideModal: React.FC<Props> = ({
  title,
  bottomSheetModalRef,
  handleSheetChanges,
  sheetIndex,
  onPressConfirm,
}) => {
  const [selectedTab, setSelectedTab] = useState('Schools');
  const [selectedHeartIndices, setSelectedHeartIndices] = useState<number[]>(
    [],
  );
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const screenHeight = Dimensions.get('screen').height;

  const handleHeartPress = (index: number) => {
    // Check if the index is already selected
    if (selectedHeartIndices.includes(index)) {
      // If selected, remove it
      setSelectedHeartIndices(prev =>
        prev.filter(heartIndex => heartIndex !== index),
      );
    } else {
      // If not selected, add it
      setSelectedHeartIndices(prev => [...prev, index]);
    }
  };

  const handleTabPress = (tab: string) => {
    setSelectedTab(tab);
  };
  const formatDate = (date: Date) => {
    const now = new Date();

    // Check if it's within the current minute (to show "Now")
    if (Math.abs(now.getTime() - date.getTime()) < 60000) {
      return 'Now';
    }

    // Check if the date is today
    const isToday =
      date.getDate() === now.getDate() &&
      date.getMonth() === now.getMonth() &&
      date.getFullYear() === now.getFullYear();

    if (isToday) {
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const formattedTime = `${hours % 12 || 12}:${
        minutes < 10 ? '0' + minutes : minutes
      } ${ampm}`;
      return `Today, ${formattedTime}`;
    } else {
      // Format as "06 Nov, 1:20 PM"
      const day = date.getDate();
      const month = date.toLocaleString('default', {month: 'short'});
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const formattedTime = `${hours % 12 || 12}:${
        minutes < 10 ? '0' + minutes : minutes
      } ${ampm}`;
      return `${day} ${month}, ${formattedTime}`;
    }
  };

  return (
    <>
      <BottomSheetModal
        backgroundStyle={styles.bottomSheetModal}
        handleIndicatorStyle={styles.handleIndicator}
        ref={bottomSheetModalRef}
        backdropComponent={() => (
          <CustomBackdrop bottomSheetModalRef={bottomSheetModalRef!} />
        )}
        onChange={handleSheetChanges}
        onDismiss={() => console.log('hi')}
        snapPoints={['60%', '75%', '90%']} // Adjusting snap points
      >
        <BottomSheetView>
          {/* Modal Content */}
          <View style={styles.modalContainer}>
            <View style={styles.inputRow}>
              <Text style={styles.title}>{title}</Text>
              <TouchableOpacity
                style={styles.row}
                onPress={() => setOpen(true)}>
                <Image source={Icons.calender} style={styles.calenderIcon} />
                <Text style={styles.timeText}>{formatDate(date)}</Text>
                {formatDate(date) === 'Now' && (
                  <Image source={Icons.bottom} style={styles.bottomIcon} />
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.searchContainer}>
              <Image source={Icons.search} style={styles.searchIcon} />
              <TextInput
                placeholderTextColor={AppColors.gray90}
                style={styles.searchInput}
                placeholder="Enter your destination"
                onFocus={() => bottomSheetModalRef?.current?.expand()}
                onSubmitEditing={() => bottomSheetModalRef?.current?.collapse()}
              />
            </View>
            {/* Tab options like Schools, Universities, etc */}
            <ScrollView
              horizontal
              style={styles.rowFlatlist}
              contentContainerStyle={styles.tabsContainer}
              showsHorizontalScrollIndicator={false}>
              {tabs.map(item => (
                <TouchableOpacity
                  key={item}
                  activeOpacity={1}
                  onPress={() => handleTabPress(item)}>
                  <Text
                    style={[
                      styles.tabItem,
                      {
                        color:
                          selectedTab === item
                            ? AppColors.primary
                            : AppColors.gray90,
                      },
                    ]}>
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>

            {/* List of locations */}
            <ScrollView contentContainerStyle={styles.locationList}>
              {locations.map((item, index) => (
                <View key={index.toString()} style={styles.locationItem}>
                  <Image source={Icons.location} style={styles.searchIcon} />
                  <View>
                    <Text style={styles.locationTitle} numberOfLines={1}>
                      {item.location}
                    </Text>
                    <Text style={styles.locationSubtext} numberOfLines={1}>
                      {item.street}
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => handleHeartPress(index)}
                    style={styles.heart}>
                    <Image
                      resizeMode="contain"
                      source={Icons.heart}
                      style={[
                        styles.heartIcon,
                        {
                          tintColor: selectedHeartIndices.includes(index)
                            ? AppColors.primary
                            : AppColors.gray,
                        },
                      ]}
                    />
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
            {/* Confirm Pickup Button */}
          </View>
        </BottomSheetView>
      </BottomSheetModal>
      {sheetIndex !== -1 && (
        <Button
          containerStyle={[
            styles.confirmButton,
            // eslint-disable-next-line react-native/no-inline-styles
            {bottom: screenHeight < 850 ? '7%' : '1%'},
          ]}
          onPress={onPressConfirm}
          title={`Confirm ${title}`}
        />
      )}

      <DatePicker
        modal
        mode="datetime"
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
        theme="light"
        buttonColor="black"
      />
    </>
  );
};

export default BookRideModal;
