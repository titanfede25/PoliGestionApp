import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import React,{useState, useEffect} from 'react';
import "@fontsource/krona-one/400.css";

export default function LogIn() {
    let [password,setPassword]=useState('');
    let [DNI, setDNI]=useState('');
    let [data, setData] = useState([]);
    let [loading, setLoading] = useState(true);
    let url = "http://localhost:3001/policia/" + DNI + "/" + password
      console.log(url)
  

    useEffect(() => {
        }, []);

    const validar = ()=>{
        fetch(url)
        .then((resp) => resp.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));


      {loading ? (<Text>Loading...</Text>) : (
        data.map((post) => {
          if(!data.nombre){
            alert("Ingreso inválido, intente de nuevo")
            console.log("no funco")
          }
          else{
            console.log("funco")
            navigation.navigate('ListadoInicial',{post})
          }
        })      
      )}
    }
  
    return (
        <ScrollView>
        
        <TextInput multiline keyboardType='numeric' style={styles.input} placeholder= 'DNI' onChangeText={(val) => setDNI(val)}/>
    
        <TextInput multiline style={styles.input} placeholder= 'Contraseña' onChangeText={(val) => setPassword(val)}/>
  
        <Text>dni: {DNI}, password: {password}</Text>
  
        <Button title ="Iniciar Sesión" color="black" onPress={()=>{validar()}}></Button>
        
        </ScrollView>

      
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