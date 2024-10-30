import {StyleSheet} from 'react-native';
import {width} from '~utils';
import AppColors from '~utils/app-colors';
import {FontFamily} from '~utils/font-family';

const styles = StyleSheet.create({
  bottomSheetModal: {
    borderRadius: 35,
  },
  handleIndicator: {
    backgroundColor: AppColors.gray10,
    width: width(12),
  },
  title: {
    fontSize: 20,
    fontFamily: FontFamily.appFontBold,
    color: '#1a1a1a',
    marginBottom: 10,
  },
  message: {
    fontSize: 14,
    color: '#6c6c6c',
    textAlign: 'left',
    marginBottom: 12,
    fontFamily: FontFamily.appFontRegular,
  },
  confirmButton: {
    width: width(92),
    marginBottom: width(3),
  },
  container: {
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
});
export default styles;
