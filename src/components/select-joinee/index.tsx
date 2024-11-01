import {BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';
import React, {useState} from 'react';
import {
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
import {Button} from '~components';
import {BottomSheetModalMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import {contactdata2} from '~utils/dummy-data';

// Component Props
type Props = {
  bottomSheetModalRef?: React.RefObject<BottomSheetModalMethods>;
  onPressConfirm: () => void;
};

const SelectJoinee: React.FC<Props> = ({
  bottomSheetModalRef,
  onPressConfirm,
}) => {
  const [listData, setListData] = useState(contactdata2);

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
      <View style={styles.textContainer}>
        <Text style={styles.nameText}>{item.name}</Text>
        {item?.isMember && (
          <View style={styles.row}>
            <View style={styles.dot} />
            <Text style={styles.subtitle}>Uzruc user</Text>
          </View>
        )}
      </View>
      <TouchableOpacity
        style={[
          styles.button,
          item.selected
            ? styles.selectedButton
            : !item?.isMember
            ? styles.inviteButton
            : styles.selectButton,
        ]}
        onPress={() => toggleSelect(item.id)}>
        {item?.isMember ? (
          <Text
            style={[
              styles.buttonText,
              item.selected
                ? styles.selectedButtonText
                : styles.selectButtonText,
            ]}>
            {item.selected ? 'Request sent' : 'Send request'}
          </Text>
        ) : (
          <Text
            style={[
              styles.buttonText,
              item.selected
                ? styles.selectedButtonText
                : styles.selectButtonText2,
            ]}>
            {item.selected ? 'Request sent' : 'Send Invite'}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
  return (
    <>
      <BottomSheetModal
        enablePanDownToClose={false}
        backgroundStyle={styles.bottomSheetModal}
        handleIndicatorStyle={styles.handleIndicator}
        ref={bottomSheetModalRef}
        snapPoints={['75%', '96%']} // Adjusting snap points
      >
        <BottomSheetView>
          {/* Modal Content */}
          <View style={styles.modalContainer}>
            <View>
              <Text style={styles.title}>
                Who’s Joining the{' '}
                <Text style={{color: AppColors.primary}}>Ride</Text>?
              </Text>
              <Text style={styles.subtitle}>
                Why ride solo? Bring their crews! Share the ride & the cost!
              </Text>
            </View>
            <View style={styles.searchContainer}>
              <Image source={Icons.search} style={styles.searchIcon} />
              <TextInput
                placeholderTextColor={AppColors.gray90}
                style={styles.searchInput}
                placeholder="Search Contacts"
              />
            </View>
            <Text style={styles.subtitle1}>12 contacts</Text>

            <ScrollView showsHorizontalScrollIndicator={false}>
              {listData.map(item => (
                <View key={item.id}>{renderItem({item})}</View>
              ))}
            </ScrollView>
            <Button
              containerStyle={styles.confirmButton}
              onPress={onPressConfirm}
              title="Continue"
            />
          </View>
        </BottomSheetView>
      </BottomSheetModal>
    </>
  );
};

export default SelectJoinee;
