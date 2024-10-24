import {StyleSheet} from 'react-native';
import {height, width} from '~utils';
import AppColors from '~utils/app-colors';
import {FontFamily} from '~utils/font-family';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  rideInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: width(3),
    marginBottom: width(2),
  },
  riderContainer: {
    backgroundColor: AppColors.white,
    width: width(94),
    alignSelf: 'center',
    paddingVertical: width(5),
    borderRadius: 20,
    shadowColor: AppColors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 0.5,
    marginBottom: height(13),
  },
  rideInfoItem: {
    width: width(43),
    padding: width(3),
    borderRadius: 16,
    backgroundColor: AppColors.lightGray,
    marginVertical: width(1.5),
    alignItems: 'center',
  },
  rideInfoTitle: {
    fontSize: 14,
    alignSelf: 'flex-start',
    fontFamily: FontFamily.appFontMedium,
    color: AppColors.gray,
  },
  rideInfoNumber: {
    marginTop: width(1),
    fontSize: 16,
    fontFamily: FontFamily.appFontMedium,
    color: AppColors.black,
    alignSelf: 'flex-start',
  },
  map: {
    width: width(100),
    height: height(90),
    justifyContent: 'flex-end',
  },
});
export default styles;
