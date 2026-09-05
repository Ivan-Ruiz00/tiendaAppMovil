import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Producto from '../components/Producto';

export default function Inicio({ navigation, productos, agregarAlCarrito }) {
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
            onAgregar={() => {
              agregarAlCarrito(producto);
              navigation.navigate('Carrito');
            }}
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