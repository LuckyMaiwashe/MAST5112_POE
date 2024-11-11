import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Alert, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function AddMenuItems({ submitHandler }) {
  const [picture, setPicture] = useState('');
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing:   
 true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled)   
 {
      setPicture(result.uri);
    }
  };

  const handleAddItem = () => {
    const parsedPrice = parseFloat(price);
    
    if (isNaN(parsedPrice) || parsedPrice <= 0) {
      Alert.alert('Error', 'Please enter a valid price.');
      return;
    }

    submitHandler(picture, dishName, description, parsedPrice.toFixed(2));


    setPicture('');
    setDishName('');
    setDescription('');
    setPrice('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Picture URL (optional)"
        onChangeText={(url) => setPicture(url)}
        value={picture}
      />
      <Button title="Pick an image" onPress={pickImage} />

      {picture && (
        <View>
          {picture.startsWith('http') ? (
            <Image source={{ uri: picture }} style={{ width: 200, height: 200 }} />
          ) : (
            <Image source={{ uri: picture }} style={{ width: 200, height: 200 }} />
          )}
        </View>
      )}

      <TextInput
        style={styles.input}
        placeholder="Dish Name"
        onChangeText={setDishName}
        value={dishName}
      />
      <TextInput
        style={styles.input}
        placeholder="Dish Description"
        onChangeText={setDescription}
        value={description}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        keyboardType="numeric"
        onChangeText={setPrice}
        value={price}
      />
      <Button onPress={handleAddItem} title="Add Item" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    marginBottom: 10,
    paddingVertical: 5,
    paddingHorizontal: 8,
  },
});
