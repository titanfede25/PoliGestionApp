import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  let lista
  fetch(`http://localhost:3001/47206175`)
    .then(res => res.json()) 
    .then(res => {
        res.Search.forEach(unidad => {
            lista.push(unidad)
        })
    })
  return (
    <View style={styles.container}>
      <ScrollView>
        {lista.map((item)=> {
        return (
          <View key={item.IdRuta}>
            <Text>{item.direccionInicial}</Text>
          </View>
        )
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#012245',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
