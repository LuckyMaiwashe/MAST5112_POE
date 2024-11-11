import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CheckoutScreen = ({ route, navigation }) => {
  const { totalCost, cart } = route.params; 
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [orderSuccess, setOrderSuccess] = useState(false);

  const handleOrderSubmit = () => {
    if (name && phone) {
      setOrderSuccess(true);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Order More" onPress={() => navigation.goBack()} style={styles.orderMoreButton} />
      
      {!orderSuccess ? (
        <>
          <Text style={styles.header}>Phoenix Cafe Checkout</Text>
          <Text style={styles.totalCost}>Your Total: ${totalCost.toFixed(2)}</Text>

          <TextInput
            style={styles.input}
            placeholder="Your Name"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Your Phone Number"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
          
          <Button title="Submit Order" onPress={handleOrderSubmit} />
        </>
      ) : (
        <View style={styles.successMessageContainer}>
          <Text style={styles.successMessage}>✔ Thank you for placing an order with Phoenix Cafe!</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  orderMoreButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  totalCost: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    width: '80%',
  },
  successMessageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  successMessage: {
    fontSize: 18,
    color: 'green',
    textAlign: 'center',
  },
});

export default CheckoutScreen;
