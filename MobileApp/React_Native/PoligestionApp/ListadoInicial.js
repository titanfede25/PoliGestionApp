import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React,{useState, useEffect} from 'react';
import "@fontsource/krona-one/400.css";


export default function ListadoInicial({route, navigation}) {
  const { json } = route.params;
  const goBack = () => {
    navigation.goBack();
  };//no funciona, agregar        <Button title="Volver" onPress={goBack}/> en scrollview

  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.hoy}>Hoy, Lunes 24/4</Text>
        <View style={styles.logo}>
          <Image style={styles.logo} source={require('./assets/logo.PNG')}/><br></br>
        </View>   
      {json.rutas.map((post) => {
        let horasInicial    = new Date(post.horaInicial.replace('Z','')).getHours();
        if (horasInicial < 10){
          horasInicial = "0" + horasInicial;
        }
        let minutosInicial  = new Date(post.horaInicial.replace('Z','')).getMinutes();
        if (minutosInicial < 10){
          minutosInicial = "0" + minutosInicial;
        }
        let horasFinal      = new Date(post.horaFinal.replace('Z','')).getHours();
        if (horasFinal < 10){
          horasFinal = "0" + horasFinal;
        }
        let minutosFinal    = new Date(post.horaFinal.replace('Z','')).getMinutes();
        if (minutosFinal < 10){
          minutosFinal = "0" + minutosFinal;
        }
        let IdRuta="id" + post.IdRuta;

        return (
          <View key={IdRuta}>
            <Text style={styles.hora}>{horasInicial}:{minutosInicial} - {horasFinal}:{minutosFinal} hs</Text>
            <div className='padre'>
            <Text style={styles.title}><View style={styles.SquareShape}></View>{post.direccionInicial}{'\n'} - {post.direccionFinal}</Text> 
            </div>
          </View>
        );
      })}
      <TouchableOpacity title ="volver" onPress={()=>navigation.goBack()}><Text style={styles.button} >Volver</Text></TouchableOpacity>
      </ScrollView>
   </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#012245',
  },

  hora:{
    fontSize:30,
    fontFamily: "Krona One",
    color: "white",
  },

  title: {
    fontSize: 15,
    fontFamily: "Krona One",
    fontWeight: "bold",
    color: "white",
    width: "100%",
    float: 'right',
    backgroundColor: '#6B7E93', 
    paddingTop:0,
    paddingHorizontal:0, 
  },
  padre:{
    width:"80%  ",
  }, 
  SquareShape: { 
    width: 60,
    height: 60,
    paddingTop:0,
    paddingHorizontal:0,
    backgroundColor: '#0076C5',
    float: 'left'
  },
  logo: {
    width: "90%",
    height: "90%",
  },
  hoy: {
    fontSize: 15,
    fontFamily: "Krona One",
    fontWeight: "bold",
    color: "#a6dced",
    width: "100%",
    float: 'right', 
    paddingTop:0,
    paddingHorizontal:0, 
  },
  
});

