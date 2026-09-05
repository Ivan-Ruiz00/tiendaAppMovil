import {
    View,
    Text,
    StyleSheet,
    ScrollView,
} from 'react-native';
import Producto from '../components/Producto';
export default function Inicio({ navigation }) {
    const productos = [
        {
            id: 1,
            nombre: 'Laptop'
            ,
            precio: 2500000,
            descripcion: 'Laptop para trabajo y estudio'
            ,
        },
        {
            id: 2,
            nombre: 'Mouse'
            ,
            precio: 80000,
            descripcion: 'Mouse inalámbrico'
            ,
        },
        {
            id: 3,
            nombre: 'Teclado'
            ,
            precio: 150000,
            descripcion: 'Teclado mecánico'
            ,
        },
    ];
    function verDetalle(producto) {
        navigation.navigate(
            'DetalleProducto'
            ,
            {
                producto: producto,
            }
        );
    }
    return (
        Productos(
            productos.map((producto) => (
                verDetalle(producto)

            )
            )
        )
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    titulo: {
        fontSize: 28,
        fontWeight: 'bold'
        ,
        marginBottom: 20,
    },
});