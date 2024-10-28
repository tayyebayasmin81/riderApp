import {StyleSheet} from 'react-native';
import {width} from '~utils';
import AppColors from '~utils/app-colors';
import {FontFamily} from '~utils/font-family';

const styles = StyleSheet.create({
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
    fontSize: 19,
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
    fontSize: 15,
    fontFamily: FontFamily.appFontSemiBold,
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
    height: width(8),
    resizeMode: 'contain',
  },
  locationText: {
    fontFamily: FontFamily.appFontSemiBold,
    fontSize: 14,
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
    fontSize: 14,
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
    marginBottom: 18,
  },
  detailText: {
    color: AppColors.black,
    fontSize: 14,
    marginLeft: 8,
    fontFamily: FontFamily.appFontRegular,
  },
  detailTitle: {
    color: AppColors.gray,
    fontSize: 14,
    marginLeft: 2,
    marginBottom: width(6),
    fontFamily: FontFamily.appFontSemiBold,
  },
});
export default styles;
