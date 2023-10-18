import React from 'react';
import {Text, StyleSheet, SafeAreaView} from 'react-native';

function Header(): JSX.Element {
  return (
    <SafeAreaView >
      <Text style={styles.texto}>Planificador de {'  '} Gastos</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    texto: {
        textAlign: 'center',
        fontSize: 30,
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        paddingTop: 20,
    },
});

export default Header;
