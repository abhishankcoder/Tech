

import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screens/Login';
// import Login from './Screens/Login';
import Signin from './Screens/Signin';
import Lost from './Screens/Lost';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
      <Stack.Screen options={{ headerShown: false }} name="Signin" component={Signin} />
      <Stack.Screen options={{ headerShown: false }} name="Lost" component={Lost} />






      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
