import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import Inicio from './screens/Inicio';
import DetalleProducto from './screens/DetalleProducto';
import Carrito from './screens/Carrito';

const Stack = createNativeStackNavigator();

export default function App() {
  const [carrito, setCarrito] = useState([]);

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