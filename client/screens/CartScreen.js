import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

import { connect, useSelector } from 'react-redux';
import Products from '../components/CartScreen/Products';

const CartScreen = (props) => {
    const cartItems = useSelector(state => state.cartItems)
    return (
        <View>
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => {
                    props.navigation.navigate('MainScreen');
                }}
            >

            </TouchableOpacity>
            <View>
                {cartItems.length > 0
                    ? <Products products={cartItems}/>
                    : <Text>No items in your Cart</Text>
                }
            </View>
        </View>
    )
};

export default CartScreen;


const styles = StyleSheet.create({
    backButton: {
        height: 100,
        width: 100,
        borderColor: 'black',
        borderWidth: 1
    },
    items: {
        width: 50,
        height: 50,
        borderColor: 'black',
        borderWidth: 1
    }
});
