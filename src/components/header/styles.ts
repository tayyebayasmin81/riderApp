import {StyleSheet} from 'react-native';
import {width} from '~utils';
import AppColors from '~utils/app-colors';
import {FontFamily} from '~utils/font-family';

export default StyleSheet.create({
  topBar: {
    backgroundColor: AppColors.primary,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 35,
    justifyContent: 'space-between',
  },
  titleContainer: {
    height: width(10),
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1,
  },
  titleText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: FontFamily.appFontRegular,
  },
  subtitleText: {
    width: width(60),
    color: '#fff',
    fontSize: 13,
  },
  backButton: {
    paddingRight: 10,
  },
  icon: {
    width: width(7),
    height: width(7),
  },
});
