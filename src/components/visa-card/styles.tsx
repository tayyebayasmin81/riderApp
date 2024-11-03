import {StyleSheet} from 'react-native';
import {height, width} from '~utils';
import AppColors from '~utils/app-colors';
import {FontFamily} from '~utils/font-family';

const styles = StyleSheet.create({
  modalContainer: {
    paddingVertical: 5,
  },
  bottomSheetModal: {
    borderRadius: 35,
  },
  handleIndicator: {
    backgroundColor: AppColors.gray10,
    width: width(12),
  },
  cardDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginHorizontal: width(3),
  },
  cardText: {
    fontSize: 16,
    color: AppColors.gray,
    fontWeight: 'bold',
    marginLeft: width(1),
  },
  changeText: {
    color: '#007AFF',
    fontSize: 10,
    marginLeft: 6,
    fontFamily: FontFamily.appFontMedium,
  },
  changeText1: {
    color: 'red',
    fontSize: 8,
    marginRight: width(2),
    fontFamily: FontFamily.appFontMedium,
  },

  visaIcon: {
    width: width(16),
    height: width(16),
    resizeMode: 'contain',
  },
  tokenIcon: {
    width: width(6),
    height: width(6),
    marginTop: -20,
    resizeMode: 'contain',
  },
  upIcon: {
    width: width(3),
    height: width(3),
    marginLeft: width(1),
    resizeMode: 'contain',
  },
  promoCodeText: {
    color: '#D1D1D3',
    textAlign: 'right',
    marginBottom: 20,
    fontSize: 14,
    marginLeft: width(1),
    fontFamily: FontFamily.appFontSemiBold,
  },
  orderSummary: {
    backgroundColor: '#FAFAFA',
    padding: 15,
    marginHorizontal: width(2),
    borderRadius: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    marginLeft: width(4),
    fontSize: 18,
    color: AppColors.black,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  row1: {
    marginRight: width(6),
    alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  row2: {
    width: width(90),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  label: {
    fontSize: 14,
    color: AppColors.gray,
    fontFamily: FontFamily.appFontSemiBold,
  },

  value: {
    fontSize: 15,
    color: '#000',
    lineHeight: 18,
    fontFamily: FontFamily.appFontBold,
  },
  value2: {
    fontSize: 15,
    color: '#000',
    lineHeight: 18,
    fontFamily: FontFamily.appFontSemiBold,
  },
  free: {
    color: '#02D624',
    fontFamily: FontFamily.appFontBold,
  },
  discount: {
    fontFamily: FontFamily.appFontSemiBold,
    color: AppColors.primary,
  },
  button: {
    width: width(90),
    marginTop: 10,
    alignSelf: 'center',
    marginBottom: width(5),
    borderRadius: 25,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  button1: {
    width: width(65),
    marginTop: 10,
    alignSelf: 'center',
    marginBottom: width(5),
    borderRadius: 25,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  icon: {
    height: height(6),
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: FontFamily.appFontSemiBold,
  },
  line: {
    marginBottom: width(5),
    width: width(100),
    borderBottomColor: AppColors.gray10,
    alignSelf: 'center',
    borderBottomWidth: width(0.3),
  },
});
export default styles;
