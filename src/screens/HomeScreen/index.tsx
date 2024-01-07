import {View, Text, StyleSheet, Alert} from 'react-native';
import React, {useState} from 'react';
import ReactIcon from '../../assets/svg/react.svg';
import styles from './styles';
import Buttons from 'react-native-custom-buttons';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
} from 'react-native-reanimated';
import {RFValue} from 'react-native-responsive-fontsize';
const HomeScreen = () => {
  //hooks
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const progress = useSharedValue(0.5); //reanimated Intial Progress Set

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: progress.value,
        },
      ],
    };
  }); //reAnimated Animated Style Set

  //animation Redring Function
  React.useEffect(() => {
    progress.value = withRepeat(withSpring(2), 3, true);
  }, []);

  //   //navigate to  User List
  const gotListView = async () => {
    navigation.navigate('UserList');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle} numberOfLines={2}>
        WELCOME TO REACT NATIVE ATOM
      </Text>
      <Animated.View style={rStyle}>
        <ReactIcon height={RFValue(100)} width={RFValue(100)} />
      </Animated.View>
      <View style={styles.buttonContainer}>
        <Buttons
          containerStyles={styles.button}
          onPress={() => gotListView()}
          type={'vector Icon'}
          fontFamily="AntDesign"
          iconName="user"
          iconcolor="white"
          iconSize={20}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
