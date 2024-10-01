import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 2000);
  }, []);

  return (
    <><View>
          <Image source={('assets\pheonix_logo.jpg')}/>
      </View><View style={styles.container}>
              <Text style={styles.text}>Pheonix Cafe</Text>
              <ActivityIndicator size="large" color="#0000ff" />
          </View></>

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
  },
});