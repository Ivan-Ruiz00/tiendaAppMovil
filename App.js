import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import Inicio from './screens/Inicio';
import DetalleProducto from './screens/DetalleProducto';
import Carrito from './screens/Carrito';

const Stack = createNativeStackNavigator();

export default function App() {
  const [carrito, setCarrito] = useState([]);

  const productos = [
    {
      id: 1,
      nombre: 'Laptop',
      precio: 2500000,
      descripcion: 'Para trabajo y estudio',
    },
    {
      id: 2,
      nombre: 'Mouse',
      precio: 80000,
      descripcion: 'Mouse inalámbrico',
    },
    {
      id: 3,
      nombre: 'Teclado',
      precio: 150000,
      descripcion: 'Teclado mecánico',
    },
  ];

  function agregarAlCarrito(producto) {
    setCarrito((prev) => [...prev, producto]);
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio">
          {(props) => (
            <Inicio
              {...props}
              productos={productos}
              carrito={carrito}
              agregarAlCarrito={agregarAlCarrito}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="DetalleProducto">
          {(props) => (
            <DetalleProducto
              {...props}
              carrito={carrito}
              agregarAlCarrito={agregarAlCarrito}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="Carrito">
          {(props) => <Carrito {...props} carrito={carrito} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}