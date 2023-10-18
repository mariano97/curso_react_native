import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Gasto from './Gasto';

const ListadoGastos = (props: any) => {

    const { gastos } = props;

  return (
    <View style={styles.contenedor}>
        <Text  style={styles.titulo}>Gastos</Text>

        { gastos.length === 0 ?
            (<Text style={styles.noGastos}>No hay Gastos</Text>) :
            gastos.map((gasto: any) => {
                return (<Gasto
                    key={gasto.id}
                    gasto={gasto}
                />);
            })
        }

    </View>
  );
};

const styles = StyleSheet.create({
    contenedor: {
        marginTop: 70,
        marginBottom: 100,
    },
    titulo: {
        color: '#64748b',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: '700',
        marginTop: 20,
    },
    noGastos: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 20,
    },
});

export default ListadoGastos;
