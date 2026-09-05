import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useState } from 'react';
import Producto from './components/Producto';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from './screens/Inicio';
import DetalleProducto from './screens/DetalleProducto';
import Carrito from './screens/Carrito';
const Stack = createNativeStackNavigator();
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
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Inicio"
          component={Inicio}
          options={{
            title: 'Tienda Virtual'
            ,
          }}
        />
        <Stack.Screen
          name="DetalleProducto"
          component={DetalleProducto}
          options={{
            title: 'Detalle del producto'
            ,
          }}
        />
        <Stack.Screen
          name="Carrito"
          component={Carrito}
          options={{
            title: 'Mi carrito'
            ,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});