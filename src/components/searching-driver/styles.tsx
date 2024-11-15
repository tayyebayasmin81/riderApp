import {StyleSheet} from 'react-native';
import {width} from '~utils';
import AppColors from '~utils/app-colors';
import {FontFamily} from '~utils/font-family';

const styles = StyleSheet.create({
  modalContainer: {
    paddingHorizontal: 16,
    paddingVertical: 5,
    marginBottom: width(12),
  },
  bottomSheetModal: {
    borderRadius: 35,
  },
  handleIndicator: {
    backgroundColor: AppColors.gray10,
    width: width(12),
  },
  title: {
    fontSize: width(4.3),
    fontFamily: FontFamily.appFontBold,
    marginBottom: 3,
    color: AppColors.black,
  },
  loader: {
    width: width(90),
    height: 5,
    borderRadius: 100,
  },
  dateContainer: {
    paddingBottom: 2,
  },
  date: {
    marginTop: width(3),
    color: AppColors.black,
    fontSize: width(3.2),
    fontFamily: FontFamily.appFontBold,
  },
  locationContainer: {
    paddingLeft: 30,
    marginBottom: 16,
  },

  locationRow: {
    marginBottom: 5,
  },
  icon: {
    marginRight: 8,
    width: width(12),
    height: width(7.5),
    resizeMode: 'contain',
  },
  locationText: {
    fontFamily: FontFamily.appFontMedium,
    fontSize: width(3),
    color: AppColors.gray,
  },
  iconProgress: {
    position: 'absolute',
    left: 0,
    resizeMode: 'contain',
    width: width(5),
    height: 90,
  },
  addressText: {
    fontSize: width(3),
    marginBottom: 11,
    fontFamily: FontFamily.appFontSemiBold,
    color: '#000',
  },
  detailsContainer: {
    backgroundColor: '#f9f9f9',
    padding: 12,
    borderRadius: 8,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: width(3),
  },
  detailText: {
    color: AppColors.black,
    fontSize: width(3),
    marginLeft: 8,
    fontFamily: FontFamily.appFontMedium,
  },
  detailTitle: {
    color: AppColors.gray,
    fontSize: width(3.6),
    marginLeft: 2,
    marginBottom: width(2),
    fontFamily: FontFamily.appFontSemiBold,
  },
});
export default styles;
