import {StyleSheet} from 'react-native';
import {height, width} from '~utils';
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
    fontSize: width(4.5),
    color: AppColors.black,
    fontFamily: FontFamily.appFontBold,
  },
  subtitle: {
    fontSize: 10,
    color: AppColors.gray90,
    fontFamily: FontFamily.appFontSemiBold,
  },
  subtitle1: {
    fontSize: width(3.2),
    color: AppColors.gray90,
    fontFamily: FontFamily.appFontSemiBold,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: width(1.5),
  },
  textContainer: {width: width(48)},
  contactIcon: {
    width: width(11),
    borderRadius: width(100),
    height: width(11),
    marginRight: width(2),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    marginRight: width(0.5),
    marginTop: -3,
    backgroundColor: AppColors.primary,
    width: width(2),
    height: width(2),
    borderRadius: 100,
  },
  nameText: {
    color: AppColors.black,
    fontSize: 15,
    lineHeight: 17,
    fontFamily: FontFamily.appFontMedium,
  },
  button: {
    paddingVertical: width(1.3),
    width: width(28),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  selectButton: {
    borderWidth: 1,
    borderColor: AppColors.primary, // Green color for unselected button
  },
  inviteButton: {
    borderWidth: 1,
    borderColor: '#34C759', // Green color for unselected button
  },
  selectedButton: {
    backgroundColor: AppColors.primary, // Blue color for selected button
  },
  contactContainer: {
    height: height(45),
  },
  selectButtonText: {
    color: AppColors.primary,
  },
  selectButtonText2: {
    color: '#34C759',
  },
  selectedButtonText: {
    color: '#ffffff',
  },
  confirmButton: {
    width: width(92),
    marginBottom: width(3),
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
