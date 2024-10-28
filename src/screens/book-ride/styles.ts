import {StyleSheet} from 'react-native';
import {height, width} from '~utils';
import AppColors from '~utils/app-colors';
import {FontFamily} from '~utils/font-family';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  headerTitle: {
    alignItems: 'center',
  },
  map: {
    width: width(100),
    height: height(93),
    justifyContent: 'flex-end',
  },
  rowRepeatButton: {
    zIndex: 100,
    width: width(40),
    borderRadius: width(5),
    alignItems: 'center',
    justifyContent: 'center',
    padding: width(3),
    backgroundColor: AppColors.white,
    flexDirection: 'row',
    bottom: '50%',
    left: '3%',
    position: 'absolute',
    marginTop: width(90),
  },
  blurView: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  repeatTripsTxt: {
    marginLeft: width(1),
    color: '#4BC18E',
    fontFamily: FontFamily.appFontSemiBold,
  },
  changesIcon: {
    width: width(7),
    height: width(7),
    marginRight: width(1),
    resizeMode: 'contain',
  },
});
export default styles;
