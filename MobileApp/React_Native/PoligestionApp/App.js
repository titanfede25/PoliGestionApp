import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import React,{useState, useEffect} from 'react';
import "@fontsource/krona-one/400.css";
import LogIn from './ComponenteLogIn';

export default function App() {
return (
  <View style={styles.container}>
    <LogIn></LogIn>
  </View>
  
);


}
const styles = StyleSheet.create({
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