import React from 'react';
import { View, Button, StyleSheet, Text, TextInput } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Page</Text>
      <View>
        <TextInput 
          placeholder='Username' 
          style={styles.input}
        />
        <TextInput 
          placeholder='Password' 
          secureTextEntry 
          style={styles.input}
        />
        <View style={styles.buttonContainer}>
          <Button 
            title="Login" 
            onPress={() => navigation.replace('Main')} 
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: 250,
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
  },
  buttonContainer: {
    marginTop: 20,
    width: 250, 
  }
});




