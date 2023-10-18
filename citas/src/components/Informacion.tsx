import React from 'react';
import { Pressable, SafeAreaView, Text, View, StyleSheet } from 'react-native';
import { formatearFecha } from '../helpers';

const Informacion = (props: any) => {
    const { paciente, setModalPaciente, setPaciente } = props;

  return (
    <SafeAreaView
        style={styles.contenedor}
    >

        <Text style={styles.titulo}>Información {' '}
            <Text style={styles.tituloBold}>Paciente</Text>
        </Text>

        <View>
            <Pressable
                style={styles.btnCerrar}
                onLongPress={() => {
                    setModalPaciente(false);
                    setPaciente({});
                    }}>
                <Text style={styles.btnCerrarTexto}>X Cerrar</Text>
            </Pressable>
        </View>

        <View
            style={styles.contenido}
        >
            <View style={styles.campo}>
                <Text style={styles.label}>Nombre:</Text>
                <Text style={styles.valor}>{paciente.paceinte}</Text>
            </View>

            <View style={styles.campo}>
                <Text style={styles.label}>Propietario:</Text>
                <Text style={styles.valor}>{paciente.propietario}</Text>
            </View>

            <View style={styles.campo}>
                <Text style={styles.label}>Email:</Text>
                <Text style={styles.valor}>{paciente.email}</Text>
            </View>

            <View style={styles.campo}>
                <Text style={styles.label}>Teléfono:</Text>
                <Text style={styles.valor}>{paciente.telefono}</Text>
            </View>

            <View style={styles.campo}>
                <Text style={styles.label}>Fecha Alta:</Text>
                <Text style={styles.valor}>{formatearFecha(paciente.fecha)}</Text>
            </View>

            <View style={styles.campo}>
                <Text style={styles.label}>Sintomas:</Text>
                <Text style={styles.valor}>{paciente.sintomas}</Text>
            </View>
        </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: '#f5930B',
        flex: 1,
    },
    titulo: {
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 30,
        color: '#fff',
    },
    tituloBold: {
        fontWeight: '900',
    },
    btnCerrar: {
        marginVertical: 30,
        backgroundColor: '#e06900',
        marginHorizontal: 30,
        padding: 15,
        borderRadius: 10,
    },
    btnCerrarTexto: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 16,
        textTransform: 'uppercase',
    },
    contenido: {
        backgroundColor: '#fff',
        marginHorizontal: 30,
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

    },
    campo: {
        marginBottom: 10,
    },
    label: {
        textTransform: 'uppercase',
        color: '#374151',
        fontWeight: '600',
        marginBottom: 3,
        fontSize: 12,
    },
    valor: {
        fontWeight: '700',
        fontSize: 22,
        color: '#334155',
    },
});

export default Informacion;
