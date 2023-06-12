import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import React,{useState, useEffect} from 'react';
import "@fontsource/krona-one/400.css";


export default function App() {
  let [password,setPassword]=useState('');
  let [DNI, setDNI]=useState('');
  const validar = (DNI, password)=>{
    
  }

  return (
    <View style={styles.container}>
      <ScrollView>
      
      <TextInput multiline keyboardType='numeric' style={styles.input} placeholder= 'DNI' onChangeText={(val) => setDNI(val)}/>
  
      <TextInput multiline style={styles.input} placeholder= 'Contraseña' onChangeText={(val) => setPassword(val)}/>

      <Button title ="Iniciar Sesión" color="black" onPress={()=>{validar(DNI, password)}}></Button>
      
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

