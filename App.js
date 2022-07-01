import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import LogIn from './Screen/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgetPassword from './Screen/ForgetPassword';
import Register from './Screen/Register';
import Home from './Screen/Home';
import Search from './Screen/Search';
import FoodDetails from './Screen/FoodDetails';
import OrderConfirmation from './Screen/OrderConfirmation';



const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="Log In" component={LogIn} />
        <Stack.Screen options={{headerShown:false}} name="Forget Password" component={ForgetPassword} />
        <Stack.Screen options={{headerShown:false}} name="Create new account" component={Register} />
        <Stack.Screen options={{headerShown:false}} name="Home" component={Home} />
        <Stack.Screen options={{headerShown:false}} name="Search" component={Search} />
        <Stack.Screen options={{headerShown:false}} name="Food Details" component={FoodDetails} />
        <Stack.Screen options={{headerShown:false}} name="Order Confirmation" component={OrderConfirmation} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});