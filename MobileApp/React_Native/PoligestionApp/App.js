import React from 'react';
import LogIn from './logIn';
import ListadoInicial from './ListadoInicial';
import Preview from './preview';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();
export default function App() {
return (
  <NavigationContainer>
   <Stack.Navigator screenOptions={{ headerShown: false }}>
     <Stack.Screen name="Home"   component={LogIn} />
     <Stack.Screen name="ListadoInicial" component={ListadoInicial} />
     <Stack.Screen name="Preview" component={Preview} />
   </Stack.Navigator>
 </NavigationContainer>
);
}