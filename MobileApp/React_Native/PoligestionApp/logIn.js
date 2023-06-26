import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import React,{useState, useEffect} from 'react';
import "@fontsource/krona-one/400.css";


export default function LogIn({navigation}) {
    let [password, setPassword] = useState('');
    let [DNI, setDNI]           = useState('');
    let [data, setData]         = useState([]);
    let [ERROR, setERROR]       = useState('');
    let url1 = "http://localhost:3001/getPoli/" + DNI + "/" + password;  
    useEffect(() => {}, []);

    const validar = ()=>{
        fetch(url1)
        .then((resp) => resp.json())
        .then((json) => {
            setData(json); console.log(json);
            if(!json.idPolicia){
                console.log("no funco");
            }
            else{
                setERROR("");
                navigation.navigate('Preview',{json: json});
            }    
        })
        .catch((error) => ERROR = setERROR("Ingreso inválido"))
    }

    return (
        <ScrollView Style={styles.container}>

        <Text>{ERROR}</Text>

        <Text>Ingrese su DNI: {DNI}</Text>

        <TextInput multiline keyboardType='numeric' style={styles.input} placeholder= 'DNI' onChangeText={(val) => setDNI(val)}/>

        <Text>Ingrese su contraseña: {password}</Text>
    
        <TextInput multiline style={styles.input} placeholder= 'Contraseña' onChangeText={(val) => setPassword(val)}/>
  
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
      width: '200px'
    },
    input:{
      borderWidth: 1,
      borderColor:'#777',
      padding: 8,
      margin: 10,
      width:200,
    }
  })