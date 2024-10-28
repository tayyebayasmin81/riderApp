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
    fontSize: 20,
    color: AppColors.black,
    fontFamily: FontFamily.appFontBold,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    width: width(100),
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  image: {
    marginLeft: -15,
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title1: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seats: {
    fontSize: 12,
    color: '#666',
  },
  description: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
});
export default styles;
