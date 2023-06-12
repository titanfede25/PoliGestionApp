import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import React,{useState, useEffect} from 'react';
import "@fontsource/krona-one/400.css";


export default function ListadoInicial() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "http://localhost:3001/1";
  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.hoy}>Hoy, Lunes 24/4</Text>
      <View style={styles.logo}>
      <Image style={styles.logo} source={require('./assets/logo.PNG')}
      /><br></br>
      </View>
      
      {loading ? (<Text>Loading...</Text>) : (
        data.map((post) => {
          return (
            <View>
              
              <Text style={styles.hora}>{new Date(post.horaInicial).getHours()}:{new Date(post.horaInicial).getMinutes()} - {new Date(post.horaFinal).getHours()}:{new Date(post.horaFinal).getMinutes()}</Text>
              <div className='padre'>
              
              <Text style={styles.title}><View style={styles.SquareShape}></View>{post.direccionInicial}{'\n'} - {post.direccionFinal}</Text> 
              </div>
            </View>
          );
        })
      )}
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

