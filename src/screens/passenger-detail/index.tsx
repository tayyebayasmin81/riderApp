import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useRef, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
  Alert,
} from 'react-native';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import {ScreenNames} from '~routes';
import styles from './styles';
import AppColors from '~utils/app-colors';
import DatePicker from 'react-native-date-picker';
import {AddPhotoReminder, Button, Header} from '~components';
import {Icons} from '~assets/images';
import ImagePicker from 'react-native-image-crop-picker';
import LinearGradient from 'react-native-linear-gradient';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {BlurView} from '@react-native-community/blur';

const sixYearsAgo = new Date();
sixYearsAgo.setFullYear(sixYearsAgo.getFullYear() - 6);

const PassengerDetail = ({navigation}: NativeStackScreenProps<any>) => {
  const modalRef = useRef<BottomSheetModal>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalChange = (index: number) => {
    setIsModalOpen(index >= 0);
  };
  const [name, setName] = useState('');
  const [date, setDate] = useState<Date | null>(null);
  const [gender, setGender] = useState('Boy');
  const [isDatePickerOpen, setDatePickerOpen] = useState(false);
  const [profileImage, setProfileImage] = useState<any>(null);

  const handleImagePicker = () => {
    ImagePicker.openPicker({
      cropping: true,
      mediaType: 'photo',
      compressImageQuality: 0.1,
      height: 400,
      width: 400,
      includeBase64: true,
    }).then((img: {size: number} | null) => {
      console.log(img);

      if (img!?.size / 1000000 <= 1) {
        setProfileImage(img);
      } else {
        Alert.alert('Image size cannot exceed 1MB');
      }
    });
  };

  return (
    <ScreenWrapper
      statusBarColor={AppColors.primary}
      scrollType="none"
      translucent>
      <Header
        title={'Add Details'}
        showBackButton
        showNotificationIcon={false}
        titleStyle={styles.headerTitle}
        onBackPress={() =>
          navigation.navigate(ScreenNames.BOOK_RIDE, {isDashboard: true})
        }
      />
      <View style={styles.container}>
        <View style={styles.container2}>
          <LinearGradient
            colors={[AppColors.primary, AppColors.primary, '#192f6a']}
            style={styles.profileContainer}>
            {profileImage ? (
              <Image
                source={{uri: profileImage.path}}
                style={styles.profileImage}
              />
            ) : (
              <Image source={Icons.child} style={styles.profileImage} />
            )}
            <LinearGradient
              colors={[AppColors.primary, AppColors.primary, '#192f6a']}
              style={styles.PlusContainer}>
              <TouchableOpacity
                style={styles.PlusIcon}
                onPress={handleImagePicker}>
                <Text style={styles.iconText}>+</Text>
              </TouchableOpacity>
            </LinearGradient>
          </LinearGradient>
          <Text style={styles.infoText}>
            The safety of your youth is our top priority. Snap a pic of your
            youth so we can spot them when it’s time to roll with
            <Text style={styles.UzrucTxt}> Uzruc!</Text>
          </Text>
          <Text style={styles.label}>Name</Text>
          <TextInput
            placeholder="Name or Nickname"
            value={name}
            placeholderTextColor={AppColors.gray90}
            onChangeText={setName}
            style={styles.input}
          />
          <Text style={styles.label}>Date Of Birth</Text>

          <TouchableOpacity
            onPress={() => setDatePickerOpen(true)}
            style={styles.dateInput}>
            <Text style={styles.date}>
              {date !== null ? date?.toDateString() : ''}
            </Text>
            <Image source={Icons.calender} style={styles.calendarIcon} />
          </TouchableOpacity>

          <Text style={styles.label}>Gender</Text>
          <View style={styles.genderContainer}>
            <TouchableOpacity
              onPress={() => setGender('Boy')}
              style={styles.row}>
              {gender === 'Boy' ? (
                <Image source={Icons.selected} style={styles.selectedIcon} />
              ) : (
                <View style={styles.Circle} />
              )}
              <Text style={styles.genderText}>Boy</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setGender('Girl')}
              style={styles.row}>
              {gender === 'Girl' ? (
                <Image source={Icons.selected} style={styles.selectedIcon} />
              ) : (
                <View style={styles.Circle} />
              )}
              <Text style={styles.genderText}>Girl</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Button
          onPress={() => modalRef?.current?.present()}
          title="Add"
          containerStyle={styles.addConfirm}
        />
        <BottomSheetModalProvider>
          {isModalOpen && (
            <BlurView blurType="light" blurAmount={8} style={styles.blurView} />
          )}
          <AddPhotoReminder
            onPressConfirm={() => {
              navigation.navigate(ScreenNames.BOOK_RIDE, {selection: true});
            }}
            modalRef={modalRef}
            onPressGoBack={() => {
              modalRef?.current?.close();
            }}
            handleModalChange={handleModalChange}
          />
        </BottomSheetModalProvider>
        {/* Date Picker Modal */}
        <DatePicker
          modal
          theme="light"
          open={isDatePickerOpen}
          date={date ?? new Date()}
          onConfirm={(date: Date) => {
            setDatePickerOpen(false);
            setDate(date);
          }}
          maximumDate={sixYearsAgo}
          buttonColor="black"
          onCancel={() => setDatePickerOpen(false)}
          mode="date"
        />
      </View>
    </ScreenWrapper>
  );
};

export default PassengerDetail;
