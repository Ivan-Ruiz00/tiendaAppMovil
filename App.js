import { View, Text, StyleSheet } from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Mi tienda virtual</Text>
      <Text style={styles.subtitulo}>
        Bienvenido a nuestra tienda
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
    ,
    alignItems: 'center'
    ,
    padding: 20,
  },
});