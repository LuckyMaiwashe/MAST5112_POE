
import React from 'react';
import { View, Text, FlatList, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CartPage({ route }) {
  const { cart, setCart } = route.params;  
  const navigation = useNavigation();

  const totalCost = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  
  const removeItemFromCart = (itemKey) => {
    setCart((prevCart) => prevCart.filter((item) => item.key !== itemKey)); 
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Cart</Text>
      <Text style={styles.totalItems}>Total Items: {totalItems}</Text>
      <Text style={styles.totalCost}>Total Cost: ${totalCost.toFixed(2)}</Text>

      <FlatList
        data={cart}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Text style={styles.dishName}>{item.dishName}</Text>
            <Text>Quantity: {item.quantity}</Text>
            <Text>Price: ${item.price}</Text>
            
            <TouchableOpacity onPress={() => removeItemFromCart(item.key)} style={styles.removeButton}>
              <Text style={styles.removeButtonText}>Remove Item</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.key}
      />

      <Button
        title="Proceed to Checkout"
        onPress={() => navigation.navigate('CheckoutScreen', { totalCost, cart })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  backButton: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#3498db',
    borderRadius: 5,
  },
  backButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  totalItems: {
    fontSize: 18,
    marginBottom: 10,
  },
  totalCost: {
    fontSize: 18,
    marginBottom: 20,
  },
  cartItem: {
    backgroundColor: '#f8f8f8',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  dishName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  removeButton: {
    marginTop: 10,
    backgroundColor: '#e74c3c',
    paddingVertical: 5,
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
