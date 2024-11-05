import {Platform, StyleSheet} from 'react-native';
import AppColors from '~utils/app-colors';
import {height, width} from '~utils';
import {FontFamily} from '~utils/font-family';
const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: width(80),
  },
  iconstyle: {
    marginLeft: width(70),
    width: width(10),
    height: width(10),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    alignSelf: 'center',
  },
  innerContainer: {
    flexDirection: 'row',
    width: width(91),
    borderRadius: width(2),
    paddingHorizontal: width(1.8),
    paddingTop: width(0.5),
    backgroundColor: AppColors.gray20,
  },
  inputStyle: {
    width: width(77),
    fontFamily: FontFamily.appFontRegular,
    color: AppColors.black,
    fontSize: width(3.5),
    justifyContent: 'center',
    height: Platform?.OS === 'ios' ? height(5.5) : height(5.8),
  },
  title: {
    left: width(1),
    marginBottom: width(1.5),
    fontFamily: FontFamily.appFontBold,
  },
});

export default styles;
