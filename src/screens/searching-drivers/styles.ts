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
    borderRadius: 100,
    width: width(21),
    height: width(20),
    resizeMode: 'contain',
  },
  carContainer2: {
    backgroundColor: AppColors.white,
    width: width(22),
    height: width(22),
    overflow: 'hidden',
    borderColor: AppColors.primary,
    borderWidth: 3,
    borderRadius: 100,
  },
  txt1: {
    color: AppColors.primary,
    fontFamily: FontFamily.appFontSemiBold,
    fontSize: width(3.7),
  },
  txt2: {
    color: '#ABA7A7',
    fontFamily: FontFamily.appFontMedium,
    fontSize: width(3.7),
  },
  carContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: width(9),
  },
});
export default styles;
