import {BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';
import React, {useEffect, useState} from 'react';
import {
  Keyboard,
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
import {Button} from '~components';
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
        onChange={handleSheetChanges}
        enablePanDownToClose={false}
        snapPoints={['60%', '75%', '96%']} // Adjusting snap points
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
                <Text style={styles.timeText}>Now</Text>
                <Image source={Icons.bottom} style={styles.bottomIcon} />
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
                  <TouchableOpacity onPress={() => handleHeartPress(index)}>
                    <Image
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
          containerStyle={styles.confirmButton}
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
      />
    </>
  );
};

export default BookRideModal;
