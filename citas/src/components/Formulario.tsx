import React, { useState, useEffect } from 'react';
import { Modal, SafeAreaView, StyleSheet, Text, TextInput, View, ScrollView, Pressable, Alert } from 'react-native';
import DatePicker from 'react-native-date-picker';

const Formulario = (props: any) => {
    const { modalVisible, pacientes, cerrarModal, setPacientes, setPaciente: setPacienteApp, paciente: pacienteObj } = props;

    const [id, setId] = useState('');
    const [paceinte, setPaciente] = useState('');
    const [propietario, setPropietario] = useState('');
    const [emailPropietario, setEmailPropietario] = useState('');
    const [telefonoPropietario, setTelefonoPropietario] = useState('');
    const [fechaAlta, setFechaAlta] = useState(new Date());
    const [sintomas, setSintomas] = useState('');

    useEffect(() => {
        if (Object.keys(pacienteObj).length > 0) {
            setId(pacienteObj.id);
            setPaciente(pacienteObj.paceinte);
            setPropietario(pacienteObj.propietario);
            setEmailPropietario(pacienteObj.email);
            setTelefonoPropietario(pacienteObj.telefono);
            setFechaAlta(new Date(pacienteObj.fecha));
            setSintomas(pacienteObj.sintomas);
        }
    }, [pacienteObj]);

    const handleCita = () => {
        // Validar Antes de agregar un registro
        if ([paceinte, propietario, emailPropietario, fechaAlta, sintomas].includes('')) {
            Alert.alert(
                'Error',
                'Todos los campos son obligatorios',
            );
            return;
        }
        // Revisar si es nuevo o editar
        const nuevoPaciente = {
            paceinte,
            propietario,
            email: emailPropietario,
            telefono: telefonoPropietario,
            fecha: fechaAlta,
            sintomas,
        };
        if (id) {
            nuevoPaciente.id = id;
            const pacientesActualizados = pacientes
                .map((pacienteState: { id: any; }) => pacienteState.id === nuevoPaciente.id ? nuevoPaciente : pacienteState);
            setPacientes(pacientesActualizados);
        } else {
            nuevoPaciente.id = Date.now();
            setPacientes([...pacientes, nuevoPaciente]);
        }

        cerrarModal();

        resetearStates();
    };

    const resetearStates = () => {
        if (id) {
            setPacienteApp({});
        }
        setId('');
        setPaciente('');
        setPropietario('');
        setTelefonoPropietario('');
        setEmailPropietario('');
        setFechaAlta(new Date());
        setSintomas('');
    };

    return (
        <Modal animationType="slide" visible={modalVisible}>
            <SafeAreaView style={styles.contenido}>
                <ScrollView>
                    <Text style={styles.titulo}>{pacienteObj.id ? 'Editar' : 'Nueva'} {''}
                        <Text style={styles.tituloBold}>Cita</Text>
                    </Text>

                    <Pressable
                        onLongPress={() => {
                            cerrarModal();
                            resetearStates();
                        }}
                        android_ripple={{color: '#f59e0b'}}
                        style={styles.btnCancelar}>
                        <Text style={styles.btnCancelarTexto}>X Cancelar</Text>
                    </Pressable>

                    <View style={styles.campo}>
                        <Text style={styles.label}>
                            Nombre Paciente
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Nombre paciente"
                            placeholderTextColor={'#666'}
                            value={paceinte}
                            onChangeText={setPaciente}
                        />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>
                            Nombre Propietario
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Nombre propietario"
                            placeholderTextColor={'#666'}
                            value={propietario}
                            onChangeText={setPropietario}
                        />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>
                            Email Propietario
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Email Propietario"
                            placeholderTextColor={'#666'}
                            keyboardType="email-address"
                            value={emailPropietario}
                            onChangeText={setEmailPropietario}
                        />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>
                            Teléfono Propietario
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Teléfono Propietario"
                            placeholderTextColor={'#666'}
                            keyboardType="number-pad"
                            value={telefonoPropietario}
                            onChangeText={setTelefonoPropietario}
                            maxLength={10}
                        />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>
                            Fecha Alta
                        </Text>
                        <View style={styles.fechaContenedor}>
                            <DatePicker
                                date={fechaAlta}
                                locale="es"
                                mode="date"
                                textColor={'#666'}
                                onDateChange={ (date)=> setFechaAlta(date) }
                            />
                        </View>
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>
                            Sintomas
                        </Text>
                        <TextInput
                            style={[styles.input, styles.sintomasInput]}
                            placeholder="Sintomas paciente"
                            placeholderTextColor={'#666'}
                            value={sintomas}
                            onChangeText={setSintomas}
                            multiline={true}
                            numberOfLines={4}
                        />
                    </View>
                    <Pressable
                        onPress={handleCita}
                        style={styles.btnNuevaCita}>
                        <Text style={styles.btnNuevaCitaTexto}>{pacienteObj.id ? 'Editar' : 'Agregar'} Paciente</Text>
                    </Pressable>
                </ScrollView>
            </SafeAreaView>
        </Modal>
    );
};

const styles = StyleSheet.create({
    contenido: {
        backgroundColor: '#6d28d9',
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
    btnCancelar: {
        marginVertical: 30,
        backgroundColor: '#5827a4',
        marginHorizontal: 30,
        padding: 15,
        borderRadius: 10,
    },
    btnCancelarTexto: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 16,
        textTransform: 'uppercase',
    },
    campo: {
        marginTop: 10,
        marginHorizontal: 30,
    },
    label: {
        color: '#fff',
        marginBottom: 10,
        marginTop: 15,
        fontSize: 20,
        fontWeight: '600',
    },
    input: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        color: '#000',
    },
    sintomasInput: {
        height: 100,
    },
    fechaContenedor: {
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    btnNuevaCita: {
        marginVertical: 50,
        backgroundColor: '#f59e0b',
        paddingVertical: 15,
        marginHorizontal: 30,
        borderRadius: 10,
    },
    btnNuevaCitaTexto: {
        textAlign: 'center',
        color: '#5827a4',
        textTransform: 'uppercase',
        fontWeight: '900',
        fontSize: 16,
    },
});

export default Formulario;
