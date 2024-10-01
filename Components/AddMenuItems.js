import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

export default function AddMenuItems({ submitHandler }) {
    const [dishName, setDishName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    return (
        <View style={styles.container}>
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
            <Button
                onPress={() => submitHandler(dishName, description, price)}
                title="Add Item"
            />
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
