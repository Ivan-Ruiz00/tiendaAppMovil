import {
    View,
    Text,
    StyleSheet,
    Pressable,
} from 'react-native';
export default function DetalleProducto({ route, navigation, agregarAlCarrito }) {
    const { producto } = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.nombre}>{producto.nombre}</Text>
            <Text style={styles.descripcion}>{producto.descripcion}</Text>
            <Text style={styles.precio}>${producto.precio}</Text>

            <Pressable
                style={styles.boton}
                onPress={() => {
                    agregarAlCarrito(producto);
                    navigation.navigate('Carrito');
                }}
            >
                <Text style={styles.textoBoton}>Agregar al carrito</Text>
            </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    nombre: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    descripcion: {
        fontSize: 18,
        marginBottom: 15,
    },
    precio: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    boton: {
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        backgroundColor: '#222',
    },
    textoBoton: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});