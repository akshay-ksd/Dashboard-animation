import {View, Text, Image, Pressable} from 'react-native';
import React, {FC} from 'react';
import styles from './styles';
import {RFValue} from 'react-native-responsive-fontsize';
import {Avatar} from 'react-native-paper';
import Animated, {ZoomIn} from 'react-native-reanimated';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

interface props {
  item: any;
  index: number;
}
const SingleUser: FC<props> = ({item, index}) => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const goToScreen = () => {
    navigation.navigate('UserProfile', {
      thumbnail: item?.picture.large,
      index: index,
    });
  };
  return (
    <Pressable style={styles.Container} onPress={() => goToScreen()}>
      <View style={styles.rowWrapper}>
        <Animated.Image
          source={{uri: item?.picture.thumbnail}}
          style={styles.image}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.name}>
            {item.name.title + ' ' + item?.name?.first + ' ' + item?.name.last}
          </Text>
          <Text style={styles.email}>{item?.email}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default SingleUser;
