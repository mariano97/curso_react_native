/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet, Pressable, FlatList, Alert, Modal} from 'react-native';
import Formulario from './src/components/Formulario';
import Paciente from './src/components/Paciente';
import Informacion from './src/components/Informacion';

const App = () => {
  // Los Hooks se colocan en la parte superior
  const [modalVisible, setModalVisible] = useState(false);
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});
  const [modalPaciente, setModalPaciente] = useState(false);

  const pacienteEditar = (id: any) => {
    const pacienteEditarTemp = pacientes.filter(paciente => paciente.id === id);
    setPaciente(pacienteEditarTemp[0]);
  };

  const pacienteEliminar = (id: any) => {
    Alert.alert(
      '¿Deseas eliminar este paciente?',
      'Un paciente eliminado no se puede recuperar',
      [
        { text: 'Cancelar'},
        { text: 'Si, eliminar', onPress: () => {
          const pacientesActualizados = pacientes.filter(pacientesState => pacientesState.id !== id);
          setPacientes(pacientesActualizados);
        } },
      ]
    );
  };

  const cerrarModal = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>
        Administrador de Citas{' '}
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>

      <Pressable onPress={() => setModalVisible(!modalVisible)} style={styles.btnNuevaCita}>
        <Text style={styles.btnTextoNuevaCita}>Nueva Cita</Text>
      </Pressable>

      {
        pacientes.length === 0 ? 
        <Text style={styles.noPaciente}>No hay Pacientes aún</Text> : 
        <FlatList
          style={styles.listado}
          data={pacientes}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => {
            return (
              <Paciente
                item={item}
                setModalVisible={setModalVisible}
                setPaciente={setPaciente}
                pacienteEditar={pacienteEditar}
                pacienteEliminar={pacienteEliminar}
                setModalPaciente={setModalPaciente}
              />
            );
          }}
        />
        }

      { modalVisible && (
          <Formulario
            pacientes={pacientes}
            cerrarModal={cerrarModal}
            setPacientes={setPacientes}
            paciente ={paciente}
            setPaciente={setPaciente}
          />
        )
      }

      <Modal visible={modalPaciente} animationType='slide'>
        <Informacion
          paciente={paciente}
          setModalPaciente={setModalPaciente}
          setPaciente={setPaciente}
        />
      </Modal>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f4f6',
    flex: 1,
    paddingTop: 15,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600',
  },
  tituloBold: {
    fontWeight: '900',
    color: '#6D28D9',
  },
  btnNuevaCita: {
    backgroundColor: '#6d26d9',
    padding: 15,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  btnTextoNuevaCita: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  noPaciente: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
  },
  listado: {
    marginTop: 50,
    marginHorizontal: 30,
  },
});

export default App;
