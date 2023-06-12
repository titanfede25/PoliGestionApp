import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, TextInput } from 'react-native';
import React,{useState, useEffect} from 'react';
import "@fontsource/krona-one/400.css";


export default function App() {
  const [name,setName]=useState('shaun');
  const [age, setAge]=useState('30');
  return (
    <View style={styles.container}>
      <ScrollView>
      
      <Text>Ingrese su DNI:</Text>
      <TextInput 
      multiline
      keyboardType='numeric'
      style={styles.input}
      placeholder= 'DNI'
      onChangeText={(val) => setAge(val)}/>


      <Text>Ingrese su contraseña:</Text>
      <TextInput 
      multiline

      style={styles.input}
      placeholder= 'Contraseña'
      onChangeText={(val) => setName(val)}/>

      </ScrollView>
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

