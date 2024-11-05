import {StyleSheet} from 'react-native';
import {height, width} from '~utils';
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
    marginTop: width(2),
    width: width(10),
    height: width(12),
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
    marginTop: width(3),
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
    fontSize: width(3),
    color: AppColors.gray,
    fontFamily: FontFamily.appFontSemiBold,
    marginBottom: height(0.8),
  },
  headerBold: {
    fontSize: width(3),
    fontFamily: FontFamily.appFontSemiBold,
    color: AppColors.primary,
  },
  label: {
    fontSize: width(3.3),
    color: '#000',
    marginTop: width(1),
    marginBottom: height(0.5),
    fontFamily: FontFamily.appFontBold,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: width(2),
    fontSize: width(3.6),
    color: AppColors.black,
  },
  input1: {
    padding: width(2),
    flex: 1,
    backgroundColor: AppColors.gray20,
    fontSize: width(3.6),
    borderRadius: 15,
    color: AppColors.black,
  },
  input2: {
    padding: width(2),
    color: AppColors.black,
    flex: 1,
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
    fontSize: width(3),
    marginBottom: width(2),
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
    paddingHorizontal: width(3),
    color: AppColors.black,
  },
  cardIcons: {
    flexDirection: 'row',
    marginVertical: width(4),
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
