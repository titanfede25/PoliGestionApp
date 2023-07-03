import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React,{useState, useEffect} from 'react';
import "@fontsource/krona-one/400.css";


export default function ListadoInicial({route, navigation}) {
  const { json } = route.params;
  let date = new Date();

  return (
    <View style={styles.container}><br></br>
      <ScrollView>
        
      <Image style={styles.logo} source={require('./assets/logo.PNG')}/><br></br>  
      <TouchableOpacity style={styles.hoy}>Hoy, {json.dia} {date.getDate()}/{date.getMonth()+1}</TouchableOpacity> <br></br>  
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
              <View style={styles.contenedorLista}>
              <View style={styles.SquareShape}></View>
              <Text style={styles.title}>{post.direccionInicial}{'\n'} - {post.direccionFinal}</Text> 
            </View><br></br>
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
    textShadowColor: 'black',
    textShadowOffset: {width: -1.5, height: -1},
    textShadowOffset: {width: 1.5, height: 1},
  },

  title: {
    fontSize: "100%",
    fontFamily: "Krona One",
    fontWeight: "bold",
    color: "white",
    width: "100%",
    alignItems:'flex-end',
    backgroundColor: '#6B7E93', 
    paddingTop:0,
    paddingHorizontal:0, 
  },
  padre:{
    width:"80%  ",
  }, 
  SquareShape: { 
    width: "60px",
    height: "auto",
    paddingTop:0,
    alignItems:'flex-start',
    paddingHorizontal:0,
    backgroundColor: '#0076C5',
  },
  logo: {
    alignSelf: 'center',  
    resizeMode:'contain',
    justifyContent: 'center',
    width: "200px",
    height: "200px",
  },
  hoy: {
    fontSize: "200%",
    fontFamily: "Krona One",
    fontWeight: "bold",
    color: "#0076C5",
    textAlign: 'center',
    width: "100%",
    float: 'right', 
    paddingTop:0,
    paddingHorizontal:0,
    textShadowColor: 'black',
    textShadowOffset: {width: -1.5, height: -1},
    textShadowOffset: {width: 1.5, height: 1},
    
  },
  contenedorLista:{
    flexDirection: 'row',
  }
  
});


