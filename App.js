import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useState } from 'react';
import Producto from './components/Producto';
export default function App() {
  const [carrito, setCarrito] = useState([]);
  const productos = [
    {
      id: 1, nombre: 'Laptop',
      precio: 2500000, descripcion: 'Para trabajo y estudio'
    },
    {
      id: 2, nombre: 'Mouse',
      precio: 80000, descripcion: 'Mouse inalámbrico'
    },
    {
      id: 3, nombre: 'Teclado',
      precio: 150000, descripcion: 'Teclado mecánico'
    },
  ];
  function agregarAlCarrito(producto) {
    setCarrito([...carrito, producto]);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tienda Virtual</Text>
      <ScrollView>
        {productos.map((producto) => (
          <Producto
            key={producto.id}
            producto={producto}
            onAgregar={agregarAlCarrito}
          />
        ))}
      </ScrollView>
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