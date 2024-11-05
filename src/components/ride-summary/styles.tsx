import {StyleSheet} from 'react-native';
import {width} from '~utils';
import AppColors from '~utils/app-colors';
import {FontFamily} from '~utils/font-family';

const styles = StyleSheet.create({
  modalContainer: {
    paddingHorizontal: 22,
    paddingVertical: 5,
  },
  bottomSheetModal: {
    borderRadius: 35,
  },
  handleIndicator: {
    backgroundColor: AppColors.gray10,
    width: width(12),
  },

  confirmButton: {
    marginVertical: width(8),
    width: width(92),
  },
  star: {
    width: width(9),
    height: width(9),
    marginHorizontal: width(2),
  },
  title: {
    fontSize: width(5.2),
    fontFamily: FontFamily.appFontSemiBold,
    marginBottom: 10,
    color: AppColors.black,
  },
  subtitle: {
    alignSelf: 'center',
    fontSize: width(4),
    textAlign: 'center',
    fontFamily: FontFamily.appFontMedium,
    color: AppColors.black,
    marginBottom: 20,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  tagsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  tagButton: {
    paddingVertical: width(2),
    paddingHorizontal: width(2),
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  selectedTagButton: {
    backgroundColor: '#E0E0E0',
  },
  tagText: {
    fontFamily: FontFamily.appFontSemiBold,
    fontSize: 13,
    color: '#333',
  },
  commentBox: {
    color: AppColors.black,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    backgroundColor: '#F9F9F9',
    textAlignVertical: 'top',
    height: 150,
    marginBottom: 40,
  },
  submitButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default styles;
