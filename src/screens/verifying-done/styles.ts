import {StyleSheet} from 'react-native';
import {width} from '~utils';
import AppColors from '~utils/app-colors';
import {FontFamily} from '~utils/font-family';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    paddingVertical: 40,
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  backIcon: {
    width: 24,
    height: 24,
    marginTop: width(5),
  },
  cardContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  cardImagePlaceholder: {
    width: 120,
    height: 80,
    backgroundColor: '#377DFF',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: FontFamily.appFontBold,
    color: '#1a1a1a',
    marginTop: 30,
    textAlign: 'center',
  },
  icon: {
    marginTop: width(50),
    alignSelf: 'center',
    resizeMode: 'contain',
    width: width(40),
    height: width(30),
  },
  cardInfo: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  cardBrandIcon: {
    width: 30,
    height: 20,
    marginRight: 8,
  },
  cardNumber: {
    fontSize: 16,
    color: '#6c6c6c',
  },
  securityText: {
    marginTop: 10,
    fontSize: 11.5,
    color: '#6c6c6c',
    textAlign: 'center',
    fontFamily: FontFamily.appFontMedium,
  },
  confirmButton: {
    width: width(92),
    marginBottom: width(3),
  },
});
export default styles;