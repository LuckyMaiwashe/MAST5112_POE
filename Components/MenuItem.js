import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

export default function MenuItem({ item, pressHandler }) {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.item}>
                <Image 
                    source={{ uri: item.picture }} 
                    style={styles.image} 
                />
                <Text style={styles.title}>{item.dishName}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.price}>R{item.price}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 15,
        marginTop: 15,
        borderColor: 'maroon',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#f8f8f8',
    },
    image: {
        width: 65,
        height: 65,
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        color: '#555',
        marginTop: 5,
    },
    price: {
        fontSize: 16,
        color: '#333',
        marginTop: 10,
    },
});
