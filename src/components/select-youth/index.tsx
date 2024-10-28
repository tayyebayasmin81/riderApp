import {BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';
import React, {useState} from 'react';
import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';
import AppColors from '~utils/app-colors';
import styles from './styles';
import {Image} from 'react-native';
import {Icons} from '~assets/images';
import {Button} from '~components';
import {BottomSheetModalMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import {contactdata} from '~utils/dummy-data';

// Component Props
type Props = {
  bottomSheetModalRef?: React.RefObject<BottomSheetModalMethods>;
  onPressConfirm: () => void;
};

const SelectYouth: React.FC<Props> = ({
  bottomSheetModalRef,
  onPressConfirm,
}) => {
  const [listData, setListData] = useState(contactdata);

  const toggleSelect = (id: string) => {
    setListData(prevData =>
      prevData.map(item =>
        item.id === id ? {...item, selected: !item.selected} : item,
      ),
    );
  };

  const renderItem = ({item}: {item: any}) => (
    <View style={styles.itemContainer}>
      <Image source={Icons.contact} style={styles.contactIcon} />
      <Text style={styles.nameText}>{item.name}</Text>
      <TouchableOpacity
        style={[
          styles.button,
          item.selected ? styles.selectedButton : styles.selectButton,
        ]}
        onPress={() => toggleSelect(item.id)}>
        <Text
          style={[
            styles.buttonText,
            item.selected ? styles.selectedButtonText : styles.selectButtonText,
          ]}>
          {item.selected ? 'Selected' : 'Select'}
        </Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <>
      <BottomSheetModal
        backgroundStyle={styles.bottomSheetModal}
        handleIndicatorStyle={styles.handleIndicator}
        ref={bottomSheetModalRef}
        snapPoints={['75%', '96%']} // Adjusting snap points
      >
        <BottomSheetView>
          {/* Modal Content */}
          <View style={styles.modalContainer}>
            <View>
              <Text style={styles.title}>Select Youth</Text>
              <Text style={styles.subtitle}>
                Select the youth you want to for the ride
              </Text>
            </View>
            <View style={styles.searchContainer}>
              <Image source={Icons.search} style={styles.searchIcon} />
              <TextInput
                placeholderTextColor={AppColors.gray90}
                style={styles.searchInput}
                placeholder="Search"
              />
            </View>
            <FlatList
              data={listData}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
            <Text style={styles.addTxt}>+ Add new Uzros </Text>
            <Button
              containerStyle={styles.confirmButton}
              onPress={onPressConfirm}
              title="Confirm"
            />
          </View>
        </BottomSheetView>
      </BottomSheetModal>
    </>
  );
};

export default SelectYouth;
