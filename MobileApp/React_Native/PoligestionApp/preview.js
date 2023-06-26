import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import React,{useState, useEffect} from 'react';
import "@fontsource/krona-one/400.css";


export default function Preview({route, navigation}) {
  const { json } = route.params;
  let date = new Date();
    return (
    <View>
     <Text onPress={()=>{navigation.navigate('ListadoInicial',{json: json});}}>Hoy, {json.dia} {date.getDate()}/{date.getMonth()+1}</Text>
     <Text>Empezar en:</Text> 
     <Text>{json.rutas[0].direccionInicial}</Text>
     <Text>Horario: {/*hora (*/json.rutas[0].horaInicial/*)*/}-{json.rutas[0].horaFinal}</Text>
     </View>
    );
}

/*export function hora (hora){
  if (hora.getHours() < 10){
    let modified = "0" + hora.getHours()
    return modified
  } 
  else{
    return hora.getHours()
  }
}*/

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