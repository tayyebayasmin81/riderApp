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
    width: width(7),
    height: width(7),
    resizeMode: 'contain',
  },
  handleIndicator: {
    backgroundColor: AppColors.gray10,
    width: width(12),
  },
  container: {
    padding: 20,
  },
  title: {
    color: AppColors.gray,
    fontSize: 16,
    fontFamily: FontFamily.appFontSemiBold,
    marginBottom: 7,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionText: {
    flex: 1,
    color: AppColors.gray,
    fontFamily: FontFamily.appFontMedium,
    marginLeft: 10,
    fontSize: 14,
  },
  optionText1: {
    flex: 1,
    color: AppColors.primary,
    fontFamily: FontFamily.appFontMedium,
    marginLeft: 10,
    fontSize: 14,
  },
  addCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  Circle: {
    width: width(5.5),
    height: width(5.5),
    borderColor: AppColors.primary,
    borderWidth: width(0.4),
    borderRadius: width(100),
  },
  addCardText: {
    marginLeft: 10,
    fontSize: 16,
    fontFamily: FontFamily.appFontMedium,
    color: AppColors.primary,
  },
  plus: {fontSize: 28, color: AppColors.primary, marginTop: -7},
});
export default styles;
