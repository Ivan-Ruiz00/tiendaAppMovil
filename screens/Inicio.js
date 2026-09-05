import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Producto from '../components/Producto';

export default function Inicio({ navigation }) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('https://api.tienda.com/productos')
      .then((res) => res.json())
      .then((data) => setProductos(data));
  }, []);

  function verDetalle(producto) {
    navigation.navigate('DetalleProducto', { producto });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tienda Virtual</Text>
      <ScrollView>
        {productos.map((producto) => (
          <Producto
            key={producto.id}
            producto={producto}
            onVerDetalle={verDetalle}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});