import React, { useState, useEffect } from 'react'; 
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function MainMenu({ route }) {
  const [menuItems, setMenuItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [sortOption, setSortOption] = useState(null);
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState([]);  
  const navigation = useNavigation();

  useEffect(() => {
    if (route.params?.menuItems) {
      setMenuItems(route.params.menuItems);
      setFilteredItems(route.params.menuItems);
    }
  }, [route.params?.menuItems]);

  // Add item to cart
  const addToCart = (item) => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex(cartItem => cartItem.key === item.key);
      if (itemIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[itemIndex].quantity += 1;
        return updatedCart;
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  // Handle search
  const handleSearch = (text) => {
    setSearch(text);
    if (text) {
      const filtered = menuItems.filter((item) =>
        item.dishName.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredItems(filtered);
    } else {
      setFilteredItems(menuItems);
    }
  };

  // Sort menu items
  const handleSort = (option) => {
    setSortOption(option);
    let sortedItems = [...filteredItems];
    if (option === 'price') {
      sortedItems.sort((a, b) => a.price - b.price);
    } else if (option === 'name') {
      sortedItems.sort((a, b) => a.dishName.localeCompare(b.dishName));
    }
    setFilteredItems(sortedItems);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search for dishes..."
        value={search}
        onChangeText={handleSearch}
      />

      <View style={styles.sortContainer}>
        <TouchableOpacity onPress={() => handleSort('price')} style={styles1.button}>
          <Text style={styles.sortButtonText}>Sort by Price</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSort('name')} style={styles1.button}>
          <Text style={styles1.text}>Sort by Name</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredItems}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text style={styles.dishName}>{item.dishName}</Text>
            <Text>{item.description}</Text>
            <Text>Price: ${item.price}</Text>
            <TouchableOpacity onPress={() => addToCart(item)} style={styles1.button}>
              <Text style={styles1.text}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.key}
        numColumns={2} 
      />

      <Button
        title={`Go to Cart (${cart.reduce((acc, item) => acc + item.quantity, 0)})`}
        onPress={() => navigation.navigate('CartPage', { cart, setCart })}  
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
  sortContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  sortButton: {
    backgroundColor: '#3498db',
    padding: 8,
    borderRadius: 5,
  },
  sortButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  menuItem: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 15,
    margin: 5,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  dishName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  addToCartButton: {
    marginTop: 10,
    backgroundColor: '#27ae60',
    paddingVertical: 5,
    borderRadius: 5,
  },
  addToCartText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
const styles1 = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#27ae60',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

