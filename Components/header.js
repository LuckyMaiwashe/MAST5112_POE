import { StyleSheet, Text, View, } from 'react-native';

export default function Header() {
    return(
        <View style = {styles.container}>
            <Text>Main Menu</Text>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        height:40,
        backgroundColor: 'aliceblue',
        justifyContent:'center',
        marginBottom: 10,
        width: 100,
        textAlign:'center',
    },
    
})