import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image, Button, Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';

const { width, height } = Dimensions.get('window');

const CartScreen = ({ route, navigation }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const product = route.params?.product;
        if (product && !cart.some(item => item.id === product.id)) {
            setCart(prevCart => [...prevCart, product]);
        }
    }, [route.params?.product]);

    const placeOrder = () => {
        alert('Order placed successfully!');
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={cart}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.itmContainer}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.price}>$ {item.price.toFixed(2)}</Text>
                        <Button
                            title="View Details"
                            onPress={() => navigation.navigate('ProductDetails', { productId: item.id })}
                        />
                    </View>
                )}
                ListEmptyComponent={<Text>Your cart is empty</Text>}
            />
            <Button
                title="Place Order (COD)"
                onPress={placeOrder}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    itmContainer: {
        width: width * 0.9,
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: 'center',
    },
    image: {
        width: width * 0.5,
        height: height * 0.2,
        borderRadius: 10,
        marginBottom: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 14,
        color: 'gray',
        marginBottom: 10,
    },
});

export default CartScreen;
