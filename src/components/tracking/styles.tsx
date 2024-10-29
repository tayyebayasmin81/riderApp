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
  driverInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  driverImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: AppColors.primary,
    borderWidth: width(0.2),
  },
  driverDetails: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
  },
  driverName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  driverRating: {
    color: 'gray',
    fontSize: 14,
  },
  carModel: {
    color: 'gray',
    fontSize: 14,
  },
  plateNumberContainer: {
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  plateNumber: {
    fontWeight: 'bold',
  },
  farePaymentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  fareContainer: {
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    color: 'gray',
  },
  fare: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  paymentContainer: {
    alignItems: 'center',
  },
  paymentMethod: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  childDetailsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  childDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  childImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  childInfo: {
    marginLeft: 10,
  },
  childName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  viewMore: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  actionButton: {
    paddingVertical: 12,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  actionButtonCancel: {
    paddingVertical: 12,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  messageDriver: {
    color: 'blue',
  },
  cancelRide: {
    color: 'red',
  },
  callDriver: {
    color: 'black',
  },
  needHelp: {
    color: 'black',
  },
  icon: {
    width: width(6),
    height: width(6),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  detailTitle1: {
    color: AppColors.gray,
    fontSize: 12,
    marginLeft: 2,
    fontFamily: FontFamily.appFontSemiBold,
  },
});
export default styles;
