import {StyleSheet} from 'react-native';
import {height, width} from '~utils';
import AppColors from '~utils/app-colors';
import {FontFamily} from '~utils/font-family';

const styles = StyleSheet.create({
  datePickerModalContainer: {
    flex: 1,
    justifyContent: 'flex-end', // Position at the bottom of the screen
    backgroundColor: 'rgba(0, 0, 0, 0)', // Adds a dimmed background overlay
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: width(90),
  },
  datePickerContent: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width(100),
    alignSelf: 'center',
    height: height(45),
    backgroundColor: AppColors.white,
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
    width: '45%',
  },
  title1: {
    fontSize: width(4.4),
    color: AppColors.black,
    fontFamily: FontFamily.appFontBold,
    alignSelf: 'flex-start',
    marginLeft: width(3),
  },
  title: {
    fontSize: width(3),
    color: AppColors.black,
    fontFamily: FontFamily.appFontSemiBold,
  },
  selectedIcon: {
    marginRight: width(3),
    width: width(6),
    height: width(6),
  },
  Circle: {
    marginRight: width(3),
    width: width(5.5),
    height: width(5.5),
    borderColor: AppColors.primary,
    borderWidth: width(0.4),
    borderRadius: width(100),
  },
  row2: {
    flexDirection: 'row',
    width: width(85),
  },
  row1: {
    width: width(8),
  },
  frequencyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 10,
    width: width(100),
    paddingHorizontal: width(5),
  },
  frequencyButton: {
    flex: 1,
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 5,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
  },
  confirmButton: {
    width: width(92),
    marginVertical: width(5),
    zIndex: 100,
  },
  daysContainer: {
    width: width(100),
    flexDirection: 'row',
    alignSelf: 'center',
    paddingHorizontal: width(5),
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  dayCircle: {
    width: width(12),
    alignSelf: 'center',
    height: width(12),
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  selectedDayCircle: {
    backgroundColor: AppColors.primary,
  },
  dayText: {
    color: AppColors.gray90,
    fontSize: 14,
    fontFamily: FontFamily.appFontSemiBold,
  },
  selectedDayText: {
    color: '#fff',
  },
  continueButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    paddingHorizontal: 16,
    paddingVertical: 5,
  },

  bottomSheetModal: {
    borderRadius: 35,
  },
  handleIndicator: {
    backgroundColor: AppColors.gray10,
    width: width(12),
  },
  timeButton: {
    backgroundColor: '#f1f1f1',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  timeText: {
    color: AppColors.black,
    fontSize: 17,
    fontFamily: FontFamily.appFontBold,
  },
  frequencyText: {
    fontSize: 16,
    color: '#000',
  },
  selectedFrequencyText: {
    color: '#fff',
  },
  selectedFrequencyButton: {
    backgroundColor: '#007bff',
  },
  dayPickerContent: {
    paddingVertical: width(3),
    alignItems: 'center',
    justifyContent: 'center',
    width: width(100),
    alignSelf: 'center',
    height: height(41),
    backgroundColor: AppColors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 7,
    elevation: 10,
  },
});
export default styles;
