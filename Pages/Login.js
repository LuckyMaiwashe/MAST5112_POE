import React from 'react';
import { View, Button, StyleSheet, Text, TextInput } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
   <View style={styles.container}>
      <Text style={styles.title}>Login Page</Text>
      <View>
        <TextInput placeholder='Username'/>
         <TextInput placeholder='Password'/>
        <Button title="Login" onPress={() => navigation.replace('Main')} />
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
  TextInput: {
    borderColor: '#000',
    margin: 30,
    paddingBottom: 20,

  },
  Button: {
    width:50,
  }
});



