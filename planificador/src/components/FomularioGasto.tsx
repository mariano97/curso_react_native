import React, { useState } from 'react';
import { SafeAreaView, Text, View, TextInput, StyleSheet, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { globalStyles } from '../styles';

function FomularioGasto(props: any): JSX.Element {
    const { 
        setModal,
        handleGasto,
    } = props;

    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [categoria, setCategoria] = useState('');

  return (
    <SafeAreaView style={styles.contenedor}>
        <View>
            <Pressable
                onLongPress={() => setModal(false)}
                style={[styles.btn, styles.btnCancelar]}
            >
                <Text style={styles.btnCancelarTexto}>Cancelar</Text>
            </Pressable>
        </View>

        <View style={styles.formulario}>
            <Text style={styles.titulo}>Nuevo Gasto</Text>
            <View style={styles.campo}>
                <Text style={styles.label}>Nombre Gasto</Text>
                <TextInput
                    value={nombre}
                    onChangeText={setNombre}
                    style={styles.input}
                    placeholder="Nombre del gasto ej. Comida"
                />
            </View>
            <View style={styles.campo}>
                <Text style={styles.label}>Cantidad Gasto</Text>
                <TextInput
                    value={cantidad}
                    onChangeText={setCantidad}
                    style={styles.input}
                    keyboardType="numeric"
                    placeholder="cantidad del gasto ej. 300"
                />
            </View>
            <View style={styles.campo}>
                <Text style={styles.label}>Categoría Gasto</Text>
                <Picker 
                    selectedValue={categoria}
                    onValueChange={(itemValue) => {
                        setCategoria(itemValue);
                    }}
                >
                    <Picker.Item
                        label="-- Seleccione --" value=""
                    />
                    <Picker.Item
                        label="Ahorro" value="ahorro"
                    />
                    <Picker.Item
                        label="Comida" value="comida"
                    />
                    <Picker.Item
                        label="Casa" value="casa"
                    />
                    <Picker.Item
                        label="Gastos Varios" value="gastos"
                    />
                    <Picker.Item
                        label="Ocio" value="ocio"
                    />
                    <Picker.Item
                        label="Salud" value="salud"
                    />
                    <Picker.Item
                        label="Suscripciones" value="suscripciones"
                    />
                </Picker>
            </View>

            <Pressable 
                onPress={() => handleGasto({ nombre, cantidad, categoria})}
                style={[styles.btn, styles.submitBtn]}>
                <Text style={styles.submitBtnTexto}>Agregar Gasto</Text>
            </Pressable>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: '#1e40af',
        flex: 1,
    },
    btn: {
        padding: 10,
        borderRadius: 10,
    },
    btnCancelar: {
        backgroundColor: '#db2777',
        marginTop: 30,
        marginHorizontal: 10,
    },
    btnCancelarTexto: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
    formulario: {
        ...globalStyles.contenedor,
    },
    titulo: {
        textAlign: 'center',
        fontSize: 28,
        marginBottom: 30,
        color: '#64748B',
    },
    campo: {
        marginVertical: 10,
    },
    label: {
        color: '#64748B',
        textTransform: 'uppercase',
        fontSize: 16,
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: '#f5f5f5',
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
    },
    submitBtn: {
        backgroundColor: '#3b82f6',
        marginTop: 20,
    },
    submitBtnTexto: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
});

export default FomularioGasto;
