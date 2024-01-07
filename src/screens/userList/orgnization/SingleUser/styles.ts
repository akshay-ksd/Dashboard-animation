import {StyleSheet} from 'react-native';
import ScreenRatio from '../../../../components/constants/ScreenRatio';
import colors from '../../../../components/constants/colors';
import {RFValue} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  Container: {
    // height: ScreenRatio.height / 8,
    width: ScreenRatio.width,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    backgroundColor: colors.bgColor,
  },
  rowWrapper: {
    flex: 1,
    width: ScreenRatio.width / 1.1,
    borderWidth: 1,
    borderColor: 'rgba(56,56,56,0.3)',
    borderRadius: 10,
    elevation: 10,
    backgroundColor: colors.white,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 20,
    shadowOffset: {height: 10, width: 10},
    shadowColor: '#d2d2d2',
    shadowOpacity: 1,
    justifyContent: 'space-between',
  },
  rightContainer: {
    width: ScreenRatio.width / 2,
  },
  name: {
    fontWeight: 'bold',
    fontSize: RFValue(12),
    color: colors.black,
  },
  email: {
    fontSize: RFValue(12),
    color: colors.blue,
    fontStyle: 'italic',
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 80,
  },
});

export default styles;
