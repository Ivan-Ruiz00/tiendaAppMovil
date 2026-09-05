import { View, Text, StyleSheet, Pressable } from 'react-native';
export default function Producto({ producto, onAgregar }) {
    return (
        <View style={styles.card}>
            <Text style={styles.nombre}>{producto.nombre}</Text>
            <Text style={styles.descripcion}>{producto.descripcion}</Text>
            <Text style={styles.precio}>${producto.precio}</Text>
            <Pressable
                style={styles.boton}
                onPress={() => onAgregar(producto)}
            >
                <Text style={styles.textoBoton}>Agregar al carrito</Text>
            </Pressable>
        </View>
    );
}