import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';


import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../../../actions';


const Products = (props) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cartItems)
    return (
        <View style={styles.productContainer}>
            <View style={styles.product}>
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => dispatch(addToCart(props.product))}
                >
                    <View>
                        <Text>{props.product.name}</Text>
                        <Text>{props.product.price}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.deleteButton}
                >
                    <View>
                        <Text>DELETE</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default Products;

const styles = StyleSheet.create({
    product: {
        height: 100,
        width: '90%',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row'
    },
    productContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        // borderColor: 'black',
        // borderWidth: 1
    },
    addButton: {
        borderColor: 'black',
        borderWidth: 1,
        height: '50%',
        width: '25%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    deleteButton: {
        borderColor: 'black',
        borderWidth: 1,
        width: '25%',
        height: '40%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

