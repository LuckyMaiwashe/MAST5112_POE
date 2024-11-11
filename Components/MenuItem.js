import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

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

export function MenuList({ menuItems, pressHandler }) {
    return (
        <View style={styles.container}>
            {menuItems.map(item => (
                <MenuItem key={item.key} item={item} pressHandler={pressHandler} />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap', 
        justifyContent: 'space-between', 
        paddingHorizontal: 10, 
    },
    item: {
        padding: 10, 
        marginVertical: 10,
        marginHorizontal: 5,
        borderColor: 'maroon',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#f8f8f8',
        width: screenWidth / 2 - 30, 
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 65,
        height: 65,
        marginBottom: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    description: {
        fontSize: 12,
        color: '#555',
        textAlign: 'center',
    },
    price: {
        fontSize: 14,
        color: '#333',
        marginTop: 5,
        textAlign: 'center',
    },
});

