import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import React,{useState, useEffect} from 'react';
import "@fontsource/krona-one/400.css";


export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "http://localhost:3001";
  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.PNG')}/>
	<img src="./assets/logo.PNG">
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    padding:0, 
	margin:0,  
  },
  padre:{
    width:"80%  ",
  }, 
  SquareShape: { 
    width: 60,
    height: 60,
    backgroundColor: '#0076C5',
    float: 'left'
  },
  
});

