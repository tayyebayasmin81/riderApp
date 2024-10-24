import {StyleSheet} from 'react-native';
import AppColors from '~utils/app-colors';
import {width, height} from '~utils';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width(7),
    backgroundColor: AppColors.primary,
    height: height(6),
    width: width(85),
    alignSelf: 'center',
  },
});
export default styles;
