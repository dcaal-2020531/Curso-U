import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');


const ProductDetailsScreen = (route, navigation) => {
    const {product} = route.params;
    retur (
        <View style>
            <Image source={{uri: product.image}} style={styles.image}/>
            <Text style={ styles.name}>{product.name}</Text>
            <Text style={ styles.price}>$ {product.price.toFixed(2)}</Text>
            <Button
                title="Add to Cart"
                onPress={() => navigation.navigation.navigate('Cart', { product })}
            />
        </View>
    )


};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
        alignItems: 'center',

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
        borderRadius: 10,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#333',
        textAlign: 'center',
    },
    name:{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#000',
        textAlign: 'center',
    },
    price:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#000',
        textAlign: 'center',
    },
});

export default ProductDetailsScreen; 