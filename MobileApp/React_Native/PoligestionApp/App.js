import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import React,{useState, useEffect} from 'react';

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
      {loading ? (<Text>Loading...</Text>) : (
        data.map((post) => {
          return (
            <View>
              <Text style={styles.title}>{post.direccionInicial} - {post.direccionFinal}</Text>
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    width: "50%",

  },
});