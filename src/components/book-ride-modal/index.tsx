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
import {Button, CustomBackdrop, DatePickerModal} from '~components';
import {BottomSheetModalMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import {formatDate} from '~utils/methods';

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
  const [confirmdate, setConfirmDate] = useState(new Date());

  const [open, setOpen] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [repeatDays, setRepeatDays] = useState<string[]>([]);
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
              <View>
                <TouchableOpacity
                  style={styles.row}
                  onPress={() => setOpen(true)}>
                  <Image source={Icons.calender} style={styles.calenderIcon} />
                  <View>
                    <Text style={styles.timeText}>
                      {formatDate(confirmdate)}
                    </Text>
                  </View>
                  {formatDate(confirmdate) === 'Now' && (
                    <Image source={Icons.bottom} style={styles.bottomIcon} />
                  )}
                  {formatDate(confirmdate) !== 'Now' && isRepeat && (
                    <Image
                      source={Icons.repeat}
                      style={styles.calenderIcon}
                      tintColor={AppColors.primary}
                    />
                  )}
                </TouchableOpacity>
                {isRepeat && (
                  <Text style={styles.repeatText}>
                    Repeat: Every {repeatDays.join(', ')}
                  </Text>
                )}
              </View>
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
            <DatePickerModal
              open={open}
              onClose={() => setOpen(false)}
              onPressConfirm={date => {
                setConfirmDate(date);
              }}
              onPressRepeat={(selectedDays: string[]) => {
                setIsRepeat(true);
                setRepeatDays(selectedDays);
              }}
              isRepeat={isRepeat}
            />
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
    </>
  );
};

export default BookRideModal;
