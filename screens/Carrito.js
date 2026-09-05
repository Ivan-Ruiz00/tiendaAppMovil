import { View, Text, StyleSheet } from 'react-native';

export default function Carrito({ carrito }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Carrito</Text>
            {carrito.length === 0 ? (
                <Text style={styles.texto}>Tu carrito está vacío.</Text>
            ) : (
                carrito.map((item, index) => (
                    <Text key={`${item.id}-${index}`} style={styles.texto}>
                        {item.nombre} - ${item.precio}
                    </Text>
                ))
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    texto: {
        fontSize: 18,
        marginTop: 15,
    },
});