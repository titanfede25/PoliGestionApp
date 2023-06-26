//import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import React,{useState, useEffect} from 'react';
import "@fontsource/krona-one/400.css";
import LogIn from './logIn';
import Preview from './preview';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();
console.log(LogIn);



export default function App() {

return (
  /*<View style={styles.container}>
    <LogIn></LogIn>
  </View> 
*/
   <NavigationContainer>
   <Stack.Navigator>
     <Stack.Screen name="Home"   component={LogIn} />
     <Stack.Screen name="Preview" component={Preview} />
   </Stack.Navigator>
 </NavigationContainer>

  
);


}
/*const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderWidth: 1,
    borderColor:'#777',
    padding: 8,
    margin: 10,
    width:200,
  }
})
*/