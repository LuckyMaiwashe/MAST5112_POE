import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Header from '../Components/header';
import AddMenuItems from '../Components/AddMenuItems';
import MenuItem from '../Components/MenuItem';

export default function MainScreen() {
    const [menuItems, setMenuItems] = useState([]);

    const pressHandler = (key) => {
        setMenuItems((prevMenuItems) => {
            return prevMenuItems.filter(menuItem => menuItem.key != key);
        });
    };

    const submitHandler = (picture, dishName, description, price) => {
        setMenuItems((prevMenuItems) => {
            return [
                ...prevMenuItems,
                {
                    picture: picture,  
                    dishName: dishName,
                    description: description,
                    price: price,
                    key: Math.random().toString(),
                },
            ];
        });
    };

    return (
        <View style={styles.container}>
            <Header />
            <AddMenuItems submitHandler={submitHandler} />
            <FlatList
                data={menuItems}
                renderItem={({ item }) => (
                    <MenuItem item={item} pressHandler={pressHandler} />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
});
