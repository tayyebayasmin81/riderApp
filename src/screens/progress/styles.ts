import {StyleSheet} from 'react-native';
import {height, width} from '~utils';
import AppColors from '~utils/app-colors';
import {FontFamily} from '~utils/font-family';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height(100),
    alignItems: 'center',
    backgroundColor: AppColors.white,
    justifyContent: 'center',
  },
  txt1: {
    color: AppColors.gray,
    fontFamily: FontFamily.appFontMedium,
    fontSize: 22,
    marginBottom: width(7),
  },
  txt2: {
    color: AppColors.gray,
    fontSize: 11.5,
    fontStyle: 'italic',
    fontWeight: '600',
    alignSelf: 'center',
    marginTop: width(7),
    marginHorizontal: width(2),
    marginBottom: width(5),
  },
  icon: {
    width: width(16),
    height: width(16),
    position: 'absolute',
    left: 48,
    right: 0,
    top: 50,
    bottom: 0,
  },
  loader: {
    alignItems: 'center',
    width: width(40),
    height: width(40),
  },
});
export default styles;
