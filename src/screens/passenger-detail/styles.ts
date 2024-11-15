import {StyleSheet} from 'react-native';
import {height, width} from '~utils';
import AppColors from '~utils/app-colors';
import {FontFamily} from '~utils/font-family';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: AppColors.white,
  },
  container2: {
    padding: width(5),
  },
  headerTitle: {
    alignItems: 'center',
    marginLeft: -23,
  },
  profileContainer: {
    width: width(28),
    height: width(28),
    borderRadius: 60,
    padding: 4, // Adjust padding for the border width
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  PlusContainer: {
    position: 'absolute',
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    borderRadius: 100,
    right: 0,
    bottom: 5,
  },
  PlusIcon: {
    width: 20,
    alignSelf: 'center',
    backgroundColor: AppColors.white,
    height: 20,
    borderRadius: 100,
    alignItems: 'center',
  },
  profileImage: {
    width: width(25),
    height: width(25),
    borderRadius: 55,
  },
  profileIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#007BFF',
    borderRadius: 12,
    padding: 5,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    color: AppColors.primary,
    fontSize: 23,
    lineHeight: 23,
    fontWeight: 'bold',
  },
  infoText: {
    textAlign: 'center',
    color: '#797979',
    fontFamily: FontFamily.appFontSemiBold,
    marginBottom: 20,
    marginVertical: 15,
    paddingHorizontal: 20,
    fontSize: width(2.2),
  },
  blurView: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  date: {
    fontSize: width(3.2),
    color: AppColors.black,
    fontFamily: FontFamily.appFontRegular,
  },
  label: {
    fontFamily: FontFamily.appFontSemiBold,
    color: AppColors.black,
    marginVertical: 5,
    fontSize: width(3.5),
  },
  UzrucTxt: {
    textAlign: 'center',
    color: AppColors.primary,
    marginBottom: 20,
    marginVertical: 15,
    paddingHorizontal: 20,
    fontSize: 10,
    fontFamily: FontFamily.appFontBold,
  },
  input: {
    borderRadius: 8,
    width: width(90),
    padding: 10,
    marginBottom: 10,
    color: AppColors.black,
    backgroundColor: AppColors.gray30,
    fontSize: 14,
  },
  dateInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    width: '100%',
    padding: 10,
    marginBottom: 10,
    backgroundColor: AppColors.gray30,
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  selectedIcon: {
    marginRight: width(3),
    width: width(6),
    height: width(6),
  },
  calendarIcon: {
    marginLeft: 'auto',
    width: width(7),
    height: width(7),
    tintColor: AppColors.gray,
  },
  genderLabel: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  genderContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  genderOption: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginHorizontal: 10,
  },
  selectedGenderOption: {
    backgroundColor: '#007BFF',
  },
  genderText: {
    color: '#333',
    fontSize: 14,
    fontFamily: FontFamily.appFontMedium,
    marginLeft: width(2),
    marginRight: width(10),
  },
  selectedGenderText: {
    color: '#fff',
    fontSize: 16,
  },
  Circle: {
    marginRight: width(3),
    width: width(5.5),
    height: width(5.5),
    borderColor: AppColors.primary,
    borderWidth: width(0.4),
    borderRadius: width(100),
  },
  flash: {
    marginTop: width(10),
    borderRadius: width(4),
    width: width(90),
    alignSelf: 'center',
  },
  addConfirm: {marginBottom: width(5)},
  datePickerModalContainer: {
    flex: 1,
    justifyContent: 'flex-end', // Position at the bottom of the screen
    backgroundColor: 'rgba(0, 0, 0, 0)', // Adds a dimmed background overlay
  },
  datePickerContent: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width(100),
    alignSelf: 'center',
    height: height(41), // Adjust height as desired
    backgroundColor: AppColors.white,
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // Shadow properties for iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 7,
    // Elevation for Android
    elevation: 10,
  },
  confirmButton1: {
    marginHorizontal: width(2),
    marginTop: 15,
    alignSelf: 'center',
    width: '43%',
  },
  title1: {
    fontSize: width(4.4),
    color: AppColors.black,
    fontFamily: FontFamily.appFontBold,
  },
});
export default styles;
