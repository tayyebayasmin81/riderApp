import {StyleSheet} from 'react-native';
import {width} from '~utils';
import AppColors from '~utils/app-colors';
import {FontFamily} from '~utils/font-family';

const styles = StyleSheet.create({
  modalContainer: {
    paddingHorizontal: 16,
    paddingVertical: 5,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  bottomSheetModal: {
    borderRadius: 35,
  },
  handleIndicator: {
    backgroundColor: AppColors.gray10,
    width: width(12),
  },
  buttonText: {
    fontFamily: FontFamily.appFontRegular,
  },
  title: {
    fontSize: 20,
    color: AppColors.black,
    fontFamily: FontFamily.appFontBold,
  },
  subtitle: {
    fontSize: 11,
    color: '#797979',
    fontFamily: FontFamily.appFontSemiBold,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  contactIcon: {
    width: width(13),
    borderRadius: width(100),
    height: width(13),
    marginRight: width(2),
  },
  addTxt: {
    color: AppColors.primary,
    alignSelf: 'center',
    fontFamily: FontFamily.appFontMedium,
    marginTop: width(8),
  },
  nameText: {
    color: AppColors.black,
    flex: 1,
    fontSize: 15,
    fontFamily: FontFamily.appFontMedium,
  },
  button: {
    paddingVertical: 8,
    width: width(23),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  selectButton: {
    borderWidth: 1,
    borderColor: AppColors.primary, // Green color for unselected button
  },
  selectedButton: {
    backgroundColor: AppColors.primary, // Blue color for selected button
  },
  selectButtonText: {
    color: AppColors.primary,
  },
  selectedButtonText: {
    color: '#ffffff',
  },
  confirmButton: {
    width: width(92),
    marginTop: width(18),
    marginBottom: width(3),
    zIndex: 100,
  },
  bottomIcon: {
    width: width(4),
    height: width(4),
    marginLeft: width(1.2),
    resizeMode: 'contain',
  },

  searchContainer: {
    backgroundColor: AppColors.gray20,
    width: width(90),
    paddingHorizontal: 12,
    borderRadius: 15,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: width(3),
  },
  searchIcon: {
    width: width(5),
    height: width(5),
    marginRight: width(2),
    marginTop: -5,
    resizeMode: 'contain',
  },

  searchInput: {
    height: width(12),
    color: AppColors.black,
    width: width(75),
    fontFamily: FontFamily.appFontSemiBold,
  },
});
export default styles;
