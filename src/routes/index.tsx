import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import UserList from '../screens/userList';
import UserProfile from '../screens/userPorfile';
import TabRouter from './tab-routes';
const Stack = createStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="TabRouter" component={TabRouter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
