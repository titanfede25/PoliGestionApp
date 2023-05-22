import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React,{useState, useEffect} from 'react';

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "http://localhost:3001/47206175";
  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <View style={styles.container}>
      {loading ? (
      <Text>Loading...</Text>
      ) : (
    data.map((post) => {
      return (
          <View>
            <Text style={styles.title}>{post.longitudInicial} - {post.direccionFinal}</Text>
          </View>
        );
    })
    )}
    </View>
  );
  
  
  
  
  
  
  
  
  /*let lista
  fetch(`http://localhost:3001/47206175`)
    .then(res => res.json()) 
    .then(res => {
      res.Search.forEach(unidad => {
        lista.push(unidad)
        return (
          <View style={styles.container}>
            <ScrollView>
                <View key={unidad.IdRuta}>
                  <Text>{unidad.direccionInicial}</Text>
                </View>
            </ScrollView>
          </View>
        );
      })        
    })*/
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
});