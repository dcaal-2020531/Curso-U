import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');

const products = [
    { id: '1', name: 'Product 1', price: 10.99, image: 'https://picsum.photos/200/300/?random' },
    { id: '2', name: 'Product 2', price: 12.99, image: 'https://picsum.photos/200/300/?random'},
    { id: '3', name: 'Product 3', price: 15.99, image: 'https://picsum.photos/200/300/?random'},
]

const HomeScreen = (navigation) => {
    retur (
        <View style={styles.container}>
            <FlatList
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <View style={ styles.itemsContainer}>
                    <Image source={{uri: item.image}} style={styles.image}/>
                    <Text style={ styles.name}>{item.name}</Text>
                    <Text style={ styles.price}>$ {item.price.toFixed(2)}</Text>
                    <img src={item.image} alt={item.name} style={ styles.itemsContainer} />

                    <Button
                        title="View Details"
                        onPress={() => navigation.navigation.navigate('ProductDetails', { productId: item.id })}
                    />
                </View>
                
              
            )}
            />
        </View>
    )


};


const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10
    },
    itemsContainer:{
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 10,
            height: 2,
        },
        shadowOpacity: 0.25,

    },
    image:{
        width: width*0.9,
        height: width*0.5,
        marginBottom: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 10,
            height: 2,
        },
        shadowOpacity: 0.25,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#333',
        textAlign: 'center',
    },
});

export default HomeScreen;