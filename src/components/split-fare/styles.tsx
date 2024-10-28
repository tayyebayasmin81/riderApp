import {StyleSheet} from 'react-native';
import {width} from '~utils';
import AppColors from '~utils/app-colors';
import {FontFamily} from '~utils/font-family';

const styles = StyleSheet.create({
  modalContainer: {
    paddingHorizontal: 16,
    paddingVertical: 5,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  bottomSheetModal: {
    borderRadius: 35,
  },
  handleIndicator: {
    backgroundColor: AppColors.gray10,
    width: width(12),
  },
  buttonText: {
    color: AppColors.white,
    fontFamily: FontFamily.appFontRegular,
  },
  title: {
    fontSize: 20,
    color: AppColors.black,
    fontFamily: FontFamily.appFontBold,
  },
  subtitle: {
    fontSize: 10,
    color: AppColors.gray90,
    fontFamily: FontFamily.appFontSemiBold,
  },
  subtitle1: {
    fontSize: 8,
    textAlign: 'center',
    color: AppColors.gray90,
    fontFamily: FontFamily.appFontSemiBold,
  },

  button: {
    paddingVertical: 8,
    width: width(28),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },

  confirmButton: {
    width: width(92),
    marginTop: width(12),
    marginBottom: width(3),
    zIndex: 100,
  },
  bottomIcon: {
    width: width(4),
    height: width(4),
    marginLeft: width(1.2),
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  button1: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  buttonText1: {
    fontSize: 16,
    color: '#fff',
  },
  sliderContainer: {
    width: width(90),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 20,
    borderColor: AppColors.gray90,
    borderWidth: width(0.3),
    borderRadius: width(25),
    marginBottom: width(8),
  },
  trackStyle: {
    height: 8, // Adjust height for thicker track
    borderRadius: 6,
    backgroundColor: AppColors.gray10,
  },
  selectedTrackStyle: {
    backgroundColor: AppColors.primary, // Selected track color
  },
  thumbStyle: {
    height: 20,
    width: 20,
    marginTop: width(1.5),
    backgroundColor: '#1E90FF',
    borderRadius: 12.5,
  },
  sliderMarkers: {
    width: '100%',
    flexDirection: 'row',
    marginTop: -10,
    marginLeft: 10,
    justifyContent: 'space-between',
  },
  sliderMarker: {
    fontFamily: FontFamily.appFontMedium,
    color: AppColors.gray90,
    fontSize: 10,
  },

  resultText: {
    fontSize: 11,
    padding: 10,
    fontFamily: FontFamily.appFontSemiBold,
    color: AppColors.gray90,
  },
  icon: {
    fontSize: 15,
  },
  highlight: {
    fontSize: 12,
    fontFamily: FontFamily.appFontBold,
    color: AppColors.primary,
  },
});
export default styles;
