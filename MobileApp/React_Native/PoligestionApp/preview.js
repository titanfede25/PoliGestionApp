import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import React,{useState, useEffect} from 'react';
import "@fontsource/krona-one/400.css";


export default function Preview({route, navigation}) {
  const { json } = route.params;
  let date = new Date();
    let result;

    if (json.rutas.length > 0) 
      result = (
        <View style={styles.container}>
         <Text style={styles.titulo}  onPress={()=>{navigation.navigate('ListadoInicial',{json: json});}}>Hoy, {json.dia} {date.getDate()}/{date.getMonth()+1}</Text>
         
         <Text style={styles.detalles}>Detalles:</Text>
         <Text style={styles.textito}>Empezar en:</Text> 
         <Text style={styles.textito}>{json.rutas[0].direccionInicial}</Text>
         <Text style={styles.textito}>Horario: {new Date(json.rutas[0].horaInicial.replace('Z','')).getHours()}:{new Date (json.rutas[0].horaInicial.replace('Z','')).getMinutes()}-{new Date (json.rutas[json.rutas.length-1].horaFinal.replace('Z','')).getHours()}:{new Date (json.rutas[json.rutas.length-1].horaFinal.replace('Z','')).getMinutes()}</Text><br/>  
         <TouchableOpacity title ="Iniciar Sesión"><Text style={styles.button} >Ir Mapa</Text></TouchableOpacity>
         </View>
        );
    else
    result = (
      <View style={styles.container}>
       <Text style={styles.titulo}  onPress={()=>{navigation.navigate('ListadoInicial',{json: json});}}>Hoy, {json.dia} {date.getDate()}/{date.getMonth()+1}</Text>
       
       <Text style={styles.detalles}>NO HAY DATOS:</Text>
     
       </View>
      );

    return result;
}


const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#012245',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input:{
      borderWidth: 1,
      borderColor:'#777',
      padding: 8,
      margin: 10,
      width:200,
    },
    titulo:{
    textAlign: 'center',
    fontSize: 60,
    fontFamily: "Krona One",
    fontWeight: "bold",
    color: "#a6dced",
    width: "100%",
    float: 'right', 
    paddingTop:0,
    paddingHorizontal:0,
    textDecorationLine: 'underline',
    },
    detalles:{
      fontSize: 40,
      textAlign: 'center',
      color:'white',
      width:'100%',
      fontWeight: 'bold',
      justifyContent: 'center',
      textDecorationLine: 'underline',
    },
    textito:{
      fontSize: 20,
      textAlign: 'center',
      color:'white',
      fontWeight: 'bold',
    },
    button:{
      width: '300px',
      maxWidth: '200%',
      height: '50px',
      alignSelf: 'center',  
      justifyContent: 'center',
      backgroundColor: '#0076C5',
      borderColor: '#0076C5',
      borderRadius: '2em',
      boxShadow: '0 2px 4px #005b98',
      color: 'white',
      textAlign: 'center',
      fontFamily: "Krona One",
  },
  })
