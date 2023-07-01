import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import React,{useState, useEffect} from 'react';
import "@fontsource/krona-one/400.css";


export default function Preview({route, navigation}) {
  const { json } = route.params;
  console.log(json);
  let date = new Date();
  let result;
  let horasInicial    = new Date(json.rutas[0].horaInicial.replace('Z','')).getHours();
  if (horasInicial < 10){
    horasInicial = "0" + horasInicial;
  }
  let minutosInicial  = new Date(json.rutas[0].horaInicial.replace('Z','')).getMinutes();
  if (minutosInicial < 10){
    minutosInicial = "0" + minutosInicial;
  }
  let horasFinal      = new Date(json.rutas[json.rutas.length-1].horaFinal.replace('Z','')).getHours();
  if (horasFinal < 10){
    horasFinal = "0" + horasFinal;
  }
  let minutosFinal    = new Date(json.rutas[json.rutas.length-1].horaFinal.replace('Z','')).getMinutes();
  if (minutosFinal < 10){
    minutosFinal = "0" + minutosFinal;
  }

  if (json.rutas.length > 0){
    result = (
      <View style={styles.container}>
        
        <Text style={styles.Puntito}>.</Text>
        <Text style={styles.Puntito}>.</Text>
        <Image style={styles.logo} source={require('./assets/logo.PNG')}/>
        <Text style={styles.Puntito}>.</Text>
        <Text style={styles.Puntito}>.</Text>
        <Text style={styles.Puntito}>.</Text>


        
        <Text style={styles.titulo}  onPress={()=>{navigation.navigate('ListadoInicial',{json: json});}}>Hoy, {json.dia} {date.getDate()}/{date.getMonth()+1}</Text>
        <Text style={styles.Puntito}>.</Text>
        <Text style={styles.detalles}>Detalles:</Text>
        <Text style={styles.Puntito}>.</Text>
        <Text style={styles.textito}>Empezar en:</Text> 
        <Text style={styles.textito}>{json.rutas[0].direccionInicial}</Text>
        <Text style={styles.textito}>Horario: {horasInicial}:{minutosInicial} - {horasFinal}:{minutosFinal} hs</Text><br/>  
        <TouchableOpacity title ="mapa"><Text style={[styles.button, styles.textoboton]} >Ir Mapa</Text></TouchableOpacity>
      </View>
    );
  }
  else{
    result = (
      <View style={styles.container}>
        <Text style={styles.titulo}>Hoy, {json.dia} {date.getDate()}/{date.getMonth()+1}</Text>
        <Text style={styles.detalles}>NO HAY DATOS</Text>
      </View>
    );
  }
  return result;
}


const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#012245',
      width:'100vw',
      height:'100vh',
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
    fontSize: '30px',
    fontFamily: "Krona One",
    fontWeight: "bold",
    color: "#0076C5",
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
  },
  textoboton:{
    width: '250px',
    maxWidth: '300%',
    height: '100%',
    color: 'white',
    textAlign: 'center',
    fontFamily: "Krona One",
    fontSize:'150%',
  },
  logo: {
    alignSelf: 'center',  
    resizeMode:'contain',
    justifyContent: 'center',
    width: "200px",
    height: "200px",

  },
  LogoPadre:{
    width: "90%",
    height: "90%",
  },
  Puntito:{
    color:"#012245",
  }
  })

