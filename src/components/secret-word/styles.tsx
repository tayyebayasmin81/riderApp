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
    marginRight: width(1),
    fontSize: width(5),
    color: AppColors.black,
    fontFamily: FontFamily.appFontBold,
  },
  subtitle: {
    fontSize: 9,
    color: AppColors.gray90,
    fontFamily: FontFamily.appFontSemiBold,
  },

  confirmButton: {
    marginVertical: width(2),
    width: width(92),
    marginBottom: width(3),
    zIndex: 100,
  },
  row: {
    flexDirection: 'row',
  },
  withoutBtn: {
    marginVertical: width(2),
    width: width(92),
    marginBottom: width(3),
    zIndex: 100,
    backgroundColor: '#A2A2A7',
  },

  searchContainer: {
    backgroundColor: AppColors.gray20,
    width: width(90),
    paddingHorizontal: 12,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: width(5),
    marginBottom: width(15),
  },

  searchInput: {
    height: width(12),
    color: AppColors.black,
    width: width(75),
    fontFamily: FontFamily.appFontRegular,
  },
});
export default styles;
