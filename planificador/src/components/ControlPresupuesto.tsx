import React, { useState, useEffect } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { globalStyles } from '../styles';
import { formatearCantidad } from '../helpers';

function ControlPresupuesto(props: any): JSX.Element {

    const {
        presupuesto,
        gastos,
    } = props;

    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);

    useEffect(() => {
        const totalGastado = gastos.reduce((total: number, gasto: any) => Number(gasto.cantidad) + total, 0);
        const totalDiponible = presupuesto - totalGastado;
        setDisponible(totalDiponible);
        setGastado(totalGastado);
    }, [gastos, presupuesto]);

  return (
    <View style={styles.contenedor}>
        <View style={styles.centrarGrafica}>
            <Image
                style={styles.image}
                source={ require('../img/grafico.jpg') }/>
        </View>
        <View style={styles.contenedorTexto}>
            <Text style={styles.valor}>
                <Text style={styles.label}>Presupuesto: {' '}</Text>
                {formatearCantidad(presupuesto)}
            </Text>
            <Text style={styles.valor}>
                <Text style={styles.label}>Disponible: {' '}</Text>
                {formatearCantidad(disponible)}
            </Text>
            <Text style={styles.valor}>
                <Text style={styles.label}>Gastado: {' '}</Text>
                {formatearCantidad(gastado)}
            </Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    contenedor: {
        ...globalStyles.contenedor,
    },
    centrarGrafica: {
        alignItems: 'center',
    },
    image: {
        width: 250,
        height: 250,
    },
    contenedorTexto: {
        marginTop: 50,
    },
    valor: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 10,
    },
    label: {
        fontWeight: '700',
        color: '#3b82f6',
    }
});

export default ControlPresupuesto;
