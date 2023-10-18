import React, { useState } from 'react';
import {Alert, StyleSheet, View, Pressable, Image, Modal, Text, ScrollView} from 'react-native';
import Header from './src/components/Header';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';
import ControlPresupuesto from './src/components/ControlPresupuesto';
import FomularioGasto from './src/components/FomularioGasto';
import ListadoGastos from './src/components/ListadoGastos';
import { generarId } from './src/helpers';

function App(): JSX.Element {

  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [presupuesto, setPresupuesto] = useState(0);
  const [gastos, setGastos] = useState([]);
  const [modal, setModal] = useState(false);

  function handleNuevoPresupuesto(presupuesto: string) {
    if (Number(presupuesto) > 0) {
      setIsValidPresupuesto(true);
    } else {
      Alert.alert('Error', 'El presupuesto no puede ser 0 ó menor', [{ text: 'OK' }]);
    }
  }

  const handleGasto = (gasto: any) => {
    if (Object.values(gasto).includes('')) {
      Alert.alert('Error', 'Todos los campos son obligatorios', [{ text: 'OK'}]);
      return;
    }

    gasto.id = generarId();
    setGastos([...gastos, gasto]);
    setModal(!modal);
  };

  return (
    <View style={styles.contenedor}>
      <ScrollView>
        <View style={styles.header}>
          <Header />
          { isValidPresupuesto ?
            (<ControlPresupuesto
              presupuesto={presupuesto}
              gastos={gastos}
            />) :
            (<NuevoPresupuesto
              presupuesto={presupuesto}
              setPresupuesto={setPresupuesto}
              handleNuevoPresupuesto={handleNuevoPresupuesto}
            />)
          }
        </View>

        { isValidPresupuesto && (
          <ListadoGastos
            gastos={gastos}
          />
        )}

      </ScrollView>

      {modal && (
        <Modal
          animationType="slide"
          visible={modal}
          onRequestClose={() => {
            setModal(!modal);
          }}
        >
          <FomularioGasto
            setModal={setModal}
            handleGasto={handleGasto}
          />
        </Modal>
      )}

      { isValidPresupuesto && (
        <Pressable
          onPress={() => setModal(!modal)}
        >
          <Image
            style={styles.image}
            source={ require('./src/img/nuevo-gasto.png') }
          />
        </Pressable>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  header: {
    backgroundColor: '#3b82f6',
    minHeight: 420,
  },
  image: {
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 30,
    right: 20,
  },
});

export default App;
