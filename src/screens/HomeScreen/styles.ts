import {StyleSheet} from 'react-native';
import ScreenRatio from '../../components/constants/ScreenRatio';
import {RFValue} from 'react-native-responsive-fontsize';
import colors from '../../components/constants/colors';

const styles = StyleSheet.create({
  container: {
    height: ScreenRatio.height,
    width: ScreenRatio.width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: RFValue(30),
    color: colors.black,
    width: ScreenRatio.width,
    textAlign: 'center',
    margin: ScreenRatio.width / 5,
  },
  buttonContainer: {
    marginTop: ScreenRatio.height / 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: ScreenRatio.height / 20,
    width: ScreenRatio.width,
  },
  button: {
    height: ScreenRatio.height / 20,
    width: ScreenRatio.width / 3,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.black,
  },
  lable: {
    fontSize: RFValue(12),
    color: colors.white,
  },
});

export default styles;
