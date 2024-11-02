import {StyleSheet} from 'react-native';
import {width} from '~utils';
import AppColors from '~utils/app-colors';
import {FontFamily} from '~utils/font-family';

const styles = StyleSheet.create({
  modalContainer: {
    paddingHorizontal: 16,
    paddingVertical: 5,
  },
  selectedIcon: {
    width: width(6),
    height: width(6),
  },
  bottomSheetModal: {
    borderRadius: 35,
  },
  icon: {
    width: width(9),
    height: width(9),
    resizeMode: 'contain',
  },
  icon2: {
    width: width(7),
    height: width(9),
    resizeMode: 'contain',
  },
  confirmButton: {
    width: width(92),
    marginBottom: width(3),
  },
  icon3: {
    width: width(8),
    height: width(9),
    resizeMode: 'contain',
  },
  icon1: {
    width: width(7),
    height: width(7),
    resizeMode: 'contain',
  },
  handleIndicator: {
    backgroundColor: AppColors.gray10,
    width: width(12),
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 12,
    color: AppColors.gray,
    fontFamily: FontFamily.appFontSemiBold,
    marginBottom: 20,
  },
  headerBold: {
    fontSize: 12,
    fontFamily: FontFamily.appFontSemiBold,
    color: AppColors.primary,
  },
  label: {
    fontSize: 13,
    color: '#000',
    marginTop: 10,
    marginBottom: 5,
    fontFamily: FontFamily.appFontBold,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: AppColors.gray20,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 5,
    color: AppColors.black,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    color: AppColors.black,
  },
  input1: {
    flex: 1,
    backgroundColor: AppColors.gray20,
    fontSize: 16,
    borderRadius: 15,
    color: AppColors.black,
  },
  input2: {
    color: AppColors.black,
    flex: 1,
    padding: 15,
    fontSize: 16,
  },
  input3: {
    backgroundColor: AppColors.gray20,
    borderRadius: 15,
    marginBottom: 5,
    borderWidth: 0.7,
    borderColor: AppColors.gray10,
    color: AppColors.black,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: width(20),
    justifyContent: 'space-between',
  },
  halfInputContainer: {
    width: '48%',
  },
  halfInputContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: AppColors.gray20,
    borderRadius: 8,
    paddingHorizontal: 10,
    color: AppColors.black,
  },
  cardIcons: {
    flexDirection: 'row',
    marginVertical: 20,
  },

  footerText: {
    width: width(82),
    fontSize: 10,
    color: 'gray',
    fontFamily: FontFamily.appFontSemiBold,
    marginTop: 20,
    textAlign: 'left',
  },
});
export default styles;
