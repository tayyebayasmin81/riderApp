import {StyleSheet} from 'react-native';
import {width} from '~utils';
import AppColors from '~utils/app-colors';
import {FontFamily} from '~utils/font-family';

const styles = StyleSheet.create({
  confirmButton: {
    width: width(92),
    marginVertical: width(5),
    zIndex: 100,
  },
  goBack: {
    alignSelf: 'center',
    height: 50,
    borderRadius: width(100),
    width: width(92),
    marginBottom: width(8),
    zIndex: 100,
    justifyContent: 'center',
  },
  goBackTxt: {
    fontSize: 16,
    color: AppColors.white,
    fontFamily: FontFamily.appFontSemiBold,
    textAlign: 'center',
  },
  infoHlTxt: {
    textAlign: 'center',
    color: '#34C560',
    marginBottom: 20,
    marginVertical: 15,
    paddingHorizontal: 20,
    fontSize: 11.5,
    fontFamily: FontFamily.appFontMedium,
  },
  infoText: {
    textAlign: 'center',
    color: '#555759',
    fontFamily: FontFamily.appFontSemiBold,
    marginBottom: 20,
    marginVertical: 15,
    paddingHorizontal: 20,
    fontSize: 12,
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
});
export default styles;
