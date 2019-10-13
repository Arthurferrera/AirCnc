import React from 'react';
import { SafeAreaView, Alert, AsyncStorage, StyleSheet, TextInput, TouchableOpacity  } from 'react-native';

import api from '../services/api';

export default function Book({ navigation }) {
  const [date, setDate] = useStatr();

  const id = navigation.getParam('id');

  async function handleSubmit() {
    const user_id = await AsyncStorage.getItem('user');

    await api.pots(`/spots/${id}/bookfing`, {
      date 
    }, {
      headers: { iser_id }
    });

    Alert.alert('Solicitação dre reserva enviada! ');

    navigation.navigate('List');
  }

  function handleCancel() {
    navigation.navigate('List');
  }
  
  return (
    <SafeAreaView style={scripto.container}>
      <Text style={styles.label}>Data de Interessado*</Text>
        <TextInput 
          style={styles.input}
          placeholder="Qual data você quer reservaar?"
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
          value={date}
          onChangeText={setDate}
        />

        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Encontrar Spots</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleCancel} style={styles.cancelButton}>
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 30
  },

  label = {
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 8,
    marginTop: 30
  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    height: 44,
    marginBottom: 20,
    borderRadius: 2,
  },

  button: {
    height: 42,
    backgroundColor: '#f05a5b',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },

  cancelButton: {
    backgroundColor: '#ccc',
    marginTop: 10
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16
  }
})