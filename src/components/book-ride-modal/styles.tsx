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
  title: {
    fontSize: 22,
    color: AppColors.black,
    fontFamily: FontFamily.appFontBold,
  },
  timeButton: {
    backgroundColor: '#f1f1f1',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  timeText: {
    color: AppColors.black,
    fontSize: 17,
    fontFamily: FontFamily.appFontBold,
  },

  tabsContainer: {
    width: width(90),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowFlatlist: {
    borderBottomColor: AppColors.primary,
    borderBottomWidth: width(0.5),
  },
  tabItem: {
    fontSize: 12,
    fontFamily: FontFamily.appFontBold,
    color: AppColors.gray90,
  },
  locationList: {
    marginTop: 13,
    marginBottom: width(17),
  },
  locationItem: {
    width: width(93),
    flexDirection: 'row',
    marginBottom: 15,
  },
  locationTitle: {
    fontSize: 16,
    fontFamily: FontFamily.appFontBold,
    color: AppColors.black,
    width: width(82),
    lineHeight: 16,
    fontWeight: '700',
  },
  locationSubtext: {
    lineHeight: 13,
    fontFamily: FontFamily.appFontMedium,
    fontSize: 10.5,
    color: '#8A8A8E',
  },
  confirmButton: {
    width: width(92),
    position: 'absolute',
    bottom: 0,
    marginBottom: width(3),
    zIndex: 100,
  },
  bottomIcon: {
    width: width(4),
    height: width(4),
    marginLeft: width(1.2),
    resizeMode: 'contain',
  },
  calenderIcon: {
    width: width(7),
    height: width(7),
    marginRight: width(1),
    resizeMode: 'contain',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    backgroundColor: AppColors.gray20,
    width: width(90),
    paddingHorizontal: 12,
    borderRadius: 15,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    width: width(4),
    height: width(4),
    marginRight: width(2),
    resizeMode: 'contain',
  },
  heartIcon: {
    marginLeft: -5,
    width: width(5),
    height: width(5),
    resizeMode: 'contain',
  },
  searchInput: {
    height: width(10),
    color: AppColors.black,
    width: width(75),
  },
});
export default styles;
