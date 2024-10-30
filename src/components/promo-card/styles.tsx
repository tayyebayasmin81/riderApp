import {StyleSheet} from 'react-native';
import {width} from '~utils';
import AppColors from '~utils/app-colors';
import {FontFamily} from '~utils/font-family';

const styles = StyleSheet.create({
  modalContainer: {
    paddingHorizontal: 16,
    paddingVertical: 5,
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
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: width(60),
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  inputContainerError: {
    borderColor: 'red',
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    fontFamily: FontFamily.appFontBold,
    color: '#333',
  },
  inputError: {
    borderRadius: width(90),
    color: 'red',
  },
  errorIcon: {
    width: width(5),
    height: width(5),
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  confirmButton: {
    width: width(92),
    marginTop: width(25),
    marginBottom: width(3),
  },
  footer: {
    marginTop: 30,
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
    fontSize: 11,
    color: '#666',
    fontFamily: FontFamily.appFontSemiBold,
    textAlign: 'center',
  },
});
export default styles;
