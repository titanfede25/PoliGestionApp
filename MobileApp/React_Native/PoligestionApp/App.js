import { ScrollView, StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import React,{useState, useEffect} from 'react';
import "@fontsource/krona-one/400.css";
import LogIn from './logIn';

import ListadoInicial from './listadoInicial';
import Preview from './preview';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();
export default function App() {
return (

   <NavigationContainer>
   <Stack.Navigator>
     <Stack.Screen name="Home"   component={LogIn} />
     <Stack.Screen name="ListadoInicial" component={ListadoInicial} />
     <Stack.Screen name="Preview" component={Preview} />
   </Stack.Navigator>
 </NavigationContainer>
);
}