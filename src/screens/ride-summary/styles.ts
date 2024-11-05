import {StyleSheet} from 'react-native';
import {height, width} from '~utils';
import AppColors from '~utils/app-colors';
import {FontFamily} from '~utils/font-family';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height(100),
    backgroundColor: AppColors.white,
  },
  locationContainer: {
    paddingLeft: 30,
    marginBottom: height(1),
  },

  locationRow: {
    marginBottom: 5,
  },
  locationText: {
    fontFamily: FontFamily.appFontSemiBold,
    fontSize: width(3.5),
    color: AppColors.primary,
  },
  seperator: {
    width: width(100),
    borderColor: AppColors.gray10,
    borderBottomWidth: 1,
  },
  iconProgress: {
    position: 'absolute',
    left: 0,
    resizeMode: 'contain',
    width: width(5),
    height: 120,
  },
  addressText: {
    fontSize: width(3.3),
    marginBottom: height(2),
    fontFamily: FontFamily.appFontSemiBold,
    color: AppColors.gray,
  },
  addressText1: {
    fontSize: width(3.3),
    fontFamily: FontFamily.appFontSemiBold,
    color: AppColors.black,
  },
  header: {
    fontSize: width(5),
    fontFamily: FontFamily.appFontSemiBold,
    textAlign: 'center',
    color: AppColors.black,
    marginTop: width(7),
  },
  subHeader: {
    fontSize: width(4),
    textAlign: 'center',
    marginTop: 5,
    color: AppColors.black,
    fontFamily: FontFamily.appFontBold,
  },
  thankYou: {
    fontSize: width(4),
    textAlign: 'center',
    marginBottom: height(1),
    color: AppColors.black,
    fontFamily: FontFamily.appFontBold,
  },
  brand: {color: AppColors.primary, fontFamily: FontFamily.appFontBold},
  date: {
    fontSize: 12,
    fontFamily: FontFamily.appFontRegular,
    textAlign: 'center',
    color: AppColors.gray,
    marginBottom: height(2),
  },
  tripDetails: {
    paddingHorizontal: width(4),
    paddingVertical: height(1),
    borderBottomWidth: 1,
    borderColor: 'lightgray',
  },
  sectionTitle: {
    fontSize: width(4.5),
    marginHorizontal: width(1),
    marginBottom: width(2),
    fontWeight: 'bold',
    color: AppColors.black,
  },

  circleIcon: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: AppColors.primary,
    marginRight: 10,
  },
  locationTextContainer: {marginLeft: 10},
  locationLabel: {fontSize: 12, color: AppColors.primary, fontWeight: 'bold'},
  locationName: {fontSize: 16, fontWeight: 'bold'},
  locationAddress: {fontSize: 14, color: 'gray'},
  driverInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width(5),
    paddingVertical: width(2),
    justifyContent: 'space-between',
  },
  driverImage: {width: 40, height: 40, borderRadius: 20, marginRight: 10},
  driverName: {
    fontSize: 16,
    fontFamily: FontFamily.appFontMedium,
    color: AppColors.black,
  },
  rating: {
    fontSize: 13,
    color: AppColors.primary,
    fontFamily: FontFamily.appFontSemiBold,
  },
  fareBreakdown: {
    marginHorizontal: width(4),
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    paddingVertical: 10,
  },
  fareItem: {
    marginHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: width(1),
  },
  fareText: {color: AppColors.black, fontFamily: FontFamily.appFontMedium},
  FareTxt2: {color: AppColors.black},
  promo: {color: '#4BC18E', fontFamily: FontFamily.appFontMedium},
  promotext: {color: AppColors.black},
  total: {color: AppColors.black, fontFamily: FontFamily.appFontMedium},
  confirmButton: {
    width: width(92),
    position: 'absolute',
    bottom: 0,
    marginVertical: width(5),
  },
  doneButton: {
    backgroundColor: AppColors.primary,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  doneText: {color: 'white', fontWeight: 'bold', fontSize: 16},
});
export default styles;
