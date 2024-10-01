import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 2000);

    
      return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
    <Image source={require('../assets/pheonix_logo.jpg')} style={styles.logo} />
      <Text style={styles.text}>Pheonix Cafe</Text>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20, 
  },
  logo: {
    width: 150, 
    height: 150,
    resizeMode: 'contain', 
  },
});
