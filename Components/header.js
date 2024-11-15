import { StyleSheet, Text, View, Button,} from 'react-native';

export default function Header() {
    return(
        <View style = {styles.container}>
            <Button 
            title="Back" 
            onPress={() => navigation.replace('Login')} 
            />
            <Text>Owners Screen</Text>
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