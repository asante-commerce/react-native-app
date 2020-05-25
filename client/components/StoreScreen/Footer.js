import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { connect, useSelector } from 'react-redux';

const Footer = (props) => {
    const cartItems = useSelector(state => state.cartItems)
    return (
        <View style={styles.footer}>
            <TouchableOpacity 
                onPress={() => {props.screenNavigation.navigate('CartScreen')}}
            >
                <View>
                    <Text>{cartItems.length}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.checkoutButton}>
                <View>
                    <Text>CheckOut</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
};

const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}
export default Footer;

const styles = StyleSheet.create({
    footer: {
        height: '12%',
        shadowColor: 'black',
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        backgroundColor: 'white',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    checkoutButton: {
        borderColor: 'black',
        borderWidth: 1,
        height: '40%',
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    }
});

