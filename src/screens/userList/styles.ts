import {StatusBar, StyleSheet} from 'react-native';
import ScreenRatio from '../../components/constants/ScreenRatio';

const styles = StyleSheet.create({
  container: {
    height: ScreenRatio.height,
    width: ScreenRatio.width,
    marginTop: StatusBar.currentHeight,
  },
  emptyText: {
    color: '#d2d2d2',
    fontSize: 12,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
export default styles;
