import {StyleSheet} from 'react-native';
import ScreenRatio from '../../components/constants/ScreenRatio';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  image: {
    height: ScreenRatio.height / 2,
    width: ScreenRatio.width,
  },
});
export default styles;
