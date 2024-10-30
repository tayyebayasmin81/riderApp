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
    fontSize: 17,
    fontFamily: FontFamily.appFontBold,
    marginBottom: 3,
    color: AppColors.black,
  },
  loader: {
    width: width(90),
    height: 5,
    borderRadius: 100,
  },
  driverInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: width(3),
  },
  driverImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: AppColors.primary,
    borderWidth: width(0.2),
  },
  driverDetails: {
    marginLeft: 10,
  },
  row1: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chatRow: {
    alignSelf: 'center',
    marginTop: 7,
    flexDirection: 'row',
    alignItems: 'center',
  },
  driverName: {
    color: AppColors.black,
    fontWeight: 'bold',
    fontSize: 16,
  },
  driverName2: {
    color: AppColors.black,
    fontFamily: FontFamily.appFontBold,
    fontSize: 12,
    marginVertical: width(3),
  },
  txt: {
    color: AppColors.black,
    fontFamily: FontFamily.appFontSemiBold,
    marginVertical: 6,
  },
  driverName3: {
    color: AppColors.gray,
    fontWeight: 'bold',
    fontSize: 10,
    marginBottom: 20,
  },
  driverRating: {
    marginTop: 2,
    marginLeft: 8,
    fontFamily: FontFamily.appFontMedium,
    color: 'gray',
    fontSize: 14,
  },
  carModel: {
    color: 'gray',
    fontSize: 14,
    fontFamily: FontFamily.appFontSemiBold,
  },
  plateNumberContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: AppColors.black,
  },
  plateNumber: {
    marginTop: 2,
    color: AppColors.black,
    fontFamily: FontFamily.appFontSemiBold,
  },
  farePaymentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  fareContainer: {
    width: width(45),
    backgroundColor: AppColors.gray20,
    padding: 8,
    borderRadius: 10,
  },
  seperator: {
    borderColor: AppColors.gray10,
    borderBottomWidth: 0.9,
  },
  label: {
    fontSize: 14,
    color: AppColors.black,
    fontFamily: FontFamily.appFontMedium,
  },
  fare: {
    fontSize: 16,
    fontFamily: FontFamily.appFontSemiBold,
    color: AppColors.gray,
  },
  paymentContainer: {
    padding: 8,
    width: width(45),
    borderRadius: 10,
    backgroundColor: AppColors.gray20,
  },
  paymentMethod: {
    fontSize: 16,
    fontFamily: FontFamily.appFontSemiBold,
    color: AppColors.gray,
  },
  childDetailsHeader: {
    fontSize: 18,
    fontFamily: FontFamily.appFontSemiBold,
    marginBottom: 10,
    color: AppColors.black,
  },
  childDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  childImage: {
    tintColor: AppColors.primary,
    resizeMode: 'contain',
    width: 12,
    height: 12,
  },
  childName: {
    fontSize: 16,
    color: AppColors.black,
    fontFamily: FontFamily.appFontSemiBold,
  },
  childIcon: {
    width: 50,
    height: 50,
  },
  viewMore: {
    color: AppColors.primary,
    marginLeft: 6,
  },
  actionButton: {
    paddingVertical: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    flexDirection: 'row',
    borderBottomColor: '#E0E0E0',
  },
  actionButtonCancel: {
    paddingVertical: 19,
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  messageDriver: {
    fontFamily: FontFamily.appFontMedium,
    color: AppColors.primary,
    marginLeft: width(3),
  },
  cancelRide: {
    color: 'red',
    fontFamily: FontFamily.appFontMedium,
    marginLeft: width(3),
  },
  callDriver: {
    color: '#4C4C50',
    fontFamily: FontFamily.appFontMedium,
    marginLeft: width(3),
  },
  needHelp: {
    fontFamily: FontFamily.appFontMedium,
    color: '#4C4C50',
    marginLeft: width(3),
  },
  icon: {
    marginTop: -5,
    width: width(6),
    height: width(6),
  },
  iconbtm: {
    width: width(8),
    height: width(8),
  },
  btmTxt: {
    marginLeft: 8,
    color: AppColors.primary,
    fontFamily: FontFamily.appFontSemiBold,
  },
  greenConatiner: {
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: '#4BC18E',
    borderWidth: 0.5,
    padding: 10,
    width: width(60),
    alignSelf: 'center',
    marginVertical: width(5),
    borderRadius: 30,
    justifyContent: 'center',
  },
  redConatiner: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#FE3434',
    padding: 10,
    width: width(90),
    alignSelf: 'center',
    marginVertical: width(5),
    borderRadius: 30,
    justifyContent: 'center',
  },
  txt2: {
    fontFamily: FontFamily.appFontSemiBold,
    fontSize: 11,
    color: AppColors.white,
  },
  txt3: {
    fontFamily: FontFamily.appFontSemiBold,
    fontSize: 10,
    color: AppColors.primary,
  },
  txt4: {
    fontFamily: FontFamily.appFontSemiBold,
    fontSize: 10,
    color: '#FF6A6D',
  },
  btmTxt2: {
    marginLeft: 8,
    color: '#4BC18E',
    fontFamily: FontFamily.appFontSemiBold,
  },

  mainRow: {
    paddingVertical: 6,
    paddingHorizontal: width(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainRow2: {
    paddingVertical: 6,
    paddingHorizontal: width(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconbtm2: {
    width: width(6),
    resizeMode: 'contain',
    height: width(6),
  },
  icon1: {
    marginTop: -5,
    width: width(5),
    height: width(5),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  detailTitle1: {
    color: AppColors.gray,
    fontSize: 10,
    marginLeft: 2,
    fontFamily: FontFamily.appFontSemiBold,
  },
  detailTitle2: {
    color: '#4BC18E',
    fontSize: 11,
    marginLeft: 2,
    fontFamily: FontFamily.appFontSemiBold,
  },
});
export default styles;
