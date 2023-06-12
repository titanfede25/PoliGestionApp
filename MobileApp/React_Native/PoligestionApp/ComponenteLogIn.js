import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import React,{useState, useEffect} from 'react';
import "@fontsource/krona-one/400.css";

export default function LogIn() {
    let [password,setPassword]=useState('');
    let [DNI, setDNI]=useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    let url = "http://localhost:3001/policia/";
    url = url + DNI + "/" + password
  

    useEffect(() => {
        }, []);

    const validar = (DNI, password)=>{

        fetch(url)
        .then((resp) => resp.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));


      {loading ? (<Text>Loading...</Text>) : (
        data.map((post) => {
          if(!data.nombre){
            alert("Ingreso inválido, intente de nuevo")
          }
          else{
            navigation.navigate('ListadoInicial',{post})
          }
        })      
      )}
    }
  
    return (
        <ScrollView>
        
        <TextInput multiline keyboardType='numeric' style={styles.input} placeholder= 'DNI' onChangeText={(val) => setDNI(val)}/>
    
        <TextInput multiline style={styles.input} placeholder= 'Contraseña' onChangeText={(val) => setPassword(val)}/>
  
        <Text>dni: {DNI}, passoword: {password}</Text>
  
        <Button title ="Iniciar Sesión" color="black" onPress={()=>{validar(DNI, password)}}></Button>
        
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