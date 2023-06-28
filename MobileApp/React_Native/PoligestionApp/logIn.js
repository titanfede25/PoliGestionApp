import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import React,{useState, useEffect} from 'react';
import "@fontsource/krona-one/400.css";


export default function LogIn({navigation}) {
    let [password, setPassword] = useState('1234');
    let [DNI, setDNI]           = useState('47206175');
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
        <View style={styles.container}>

        <ScrollView >


        <Text style={styles.Text}>{ERROR}</Text>

        <Text style={styles.Text}>Ingrese su DNI:</Text>

        <TextInput style={styles.TextInput} multiline keyboardType='numeric'  placeholder="DNI"    placeholderTextColor="#6C7076" onChangeText={(val) => setDNI(val)}/>

        <Text style={styles.Text}>Ingrese su contraseña:</Text>
    
        <TextInput  style={styles.TextInput}  multiline  placeholder="Contraseña" placeholderTextColor="#6C7076" onChangeText={(val) => setPassword(val)}/><br/>
  
        <TouchableOpacity title ="Iniciar Sesión" onPress={()=>{validar()}}><Text style={styles.button}>Iniciar Sesion</Text></TouchableOpacity>



        </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#012245',
    },
    TextInput:{
      borderWidth: 1,
      width: '300px',
      alignSelf: 'center',
      padding: 8,
      margin: 10,
      border: '1px solid black',
      backgroundColor: '#C0C8D1',
      borderColor:'#777',
      borderRadius: '2em',
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
    Text:{
    alignSelf: 'center',
    width: '300px',
    maxWidth: '100%',
    fontSize: 15,
    fontFamily: "Krona One",
    fontWeight: "bold",
    color: 'white',
    },
  })
