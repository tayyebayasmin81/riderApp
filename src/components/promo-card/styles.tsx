import {StyleSheet} from 'react-native';
import {height, width} from '~utils';
import AppColors from '~utils/app-colors';
import {FontFamily} from '~utils/font-family';

const styles = StyleSheet.create({
  modalContainer: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    height: height(80),
  },
  row: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  bottomSheetModal: {
    borderRadius: 35,
  },
  handleIndicator: {
    backgroundColor: AppColors.gray10,
    width: width(12),
  },

  header: {
    color: AppColors.black,
    fontSize: 24,
    fontFamily: FontFamily.appFontBold,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#8A8A8E',
    borderWidth: 1,
    borderRadius: width(60),
    paddingHorizontal: 10,
    marginTop: width(7),
  },
  inputContainerError: {
    borderColor: 'red',
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    paddingBottom: 10,
    fontFamily: FontFamily.appFontBold,
    color: '#333',
  },
  inputError: {
    borderRadius: width(90),
    color: 'black',
  },
  errorIcon: {
    width: width(5),
    height: width(5),
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
    marginTop: 2,
    fontFamily: FontFamily.appFontRegular,
    marginLeft: width(2),
  },
  confirmButton: {
    width: width(87),
    marginTop: width(25),
    marginBottom: width(3),
  },
  footer: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  percentageIcon: {
    width: width(5),
    height: width(5),
  },
  crossIcon: {
    width: width(9),
    height: width(9),
  },
  footerText: {
    marginLeft: 5,
    fontSize: 10,
    color: '#8A8A8E',
    fontFamily: FontFamily.appFontBold,
    textAlign: 'center',
  },
});
export default styles;
