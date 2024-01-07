import {View, Text, StatusBar} from 'react-native';
import React, {FC} from 'react';
import styles from './styles';
import Animated from 'react-native-reanimated';
import {ParamListBase, RouteProp} from '@react-navigation/native';

interface props {
  route: RouteProp<ParamListBase>;
}

const UserProfile: FC<props> = ({route}) => {
  const {thumbnail, index, name, value}: any = route?.params;
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <Animated.Image source={{uri: thumbnail}} style={styles.image} />
    </View>
  );
};

export default UserProfile;
