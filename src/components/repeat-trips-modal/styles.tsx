import {StyleSheet} from 'react-native';
import {width} from '~utils';
import AppColors from '~utils/app-colors';
import {FontFamily} from '~utils/font-family';

const styles = StyleSheet.create({
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
    width: 45,
    alignSelf: 'center',
    height: 45,
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
  title: {
    fontSize: 20,
    color: AppColors.black,
    fontFamily: FontFamily.appFontBold,
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
});
export default styles;
