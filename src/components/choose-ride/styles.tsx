import {StyleSheet} from 'react-native';
import {width} from '~utils';
import AppColors from '~utils/app-colors';
import {FontFamily} from '~utils/font-family';

const styles = StyleSheet.create({
  modalContainer: {
    paddingVertical: 5,
    paddingBottom: width(15),
  },

  bottomSheetModal: {
    borderRadius: 35,
  },
  handleIndicator: {
    backgroundColor: AppColors.gray10,
    width: width(12),
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',

    marginHorizontal: width(2),
  },
  row2: {
    height: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  belowIcon: {
    marginTop: -5,
    width: width(9),
    height: width(9),
  },
  person: {
    resizeMode: 'contain',
    width: width(2.5),
    marginRight: width(0.9),
    height: width(2.5),
  },
  title: {
    paddingHorizontal: 10,
    fontSize: width(4.8),
    color: AppColors.black,
    fontFamily: FontFamily.appFontBold,
  },
  itemContainer: {
    paddingHorizontal: width(2),
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: width(3),
    width: width(100),
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  carContainer: {
    marginRight: width(2),
    paddingHorizontal: width(2),
    borderColor: '#DADADA',
    borderWidth: 2,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
  },
  title1: {
    fontSize: width(3.5),
    lineHeight: 18,
    fontFamily: FontFamily.appFontBold,
  },
  seats: {
    fontSize: 12,
    color: '#8A8A8E',
  },
  description: {
    lineHeight: 13,
    fontSize: width(2.7),
    color: '#8A8A8E',
    marginTop: 5,
    fontFamily: FontFamily.appFontLight,
  },
});
export default styles;
