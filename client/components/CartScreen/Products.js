import React from 'react';
import { View, StyleSheet, ScrollView, Text, Button, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { connect, useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../../actions';

const Products = (props) => {
    const dispatch = useDispatch();

    const renderProducts = (products) => {
        return products.map((item, index) => {
            return (
                <View key={index} style={styles.products}>
                    <Button
                        title={item.name}
                    />
                    <Button 
                    onPress={() => {
                        dispatch(removeFromCart(item))
                    }}
                     title="Delete"
                    />
                </View>
            )
        })
    }
    return (
        <View style={styles.productContainer}>
            {renderProducts(props.products)}
        </View>
    )
};

export default Products;

const styles = StyleSheet.create({
    products: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1,
        height: 80,
        width: '80%'
    },
    productContainer: {
        alignItems: 'center'
    }
});
