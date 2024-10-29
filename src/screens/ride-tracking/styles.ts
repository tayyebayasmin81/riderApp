import {StyleSheet} from 'react-native';
import {height, width} from '~utils';
import AppColors from '~utils/app-colors';
import {FontFamily} from '~utils/font-family';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height(100),
  },

  map: {
    width: width(100),
    height: height(100),
  },

  car: {
    width: width(20),
    height: height(12),
    resizeMode: 'contain',
  },
  txt1: {
    color: AppColors.primary,
    fontFamily: FontFamily.appFontSemiBold,
    fontSize: 16,
  },
  txt2: {
    color: AppColors.gray,
    fontFamily: FontFamily.appFontSemiBold,
    fontSize: 16,
  },
  carContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: width(9),
  },
});
export default styles;
