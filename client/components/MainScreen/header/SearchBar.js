import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';
import { connect, useSelector } from 'react-redux';


const SearchBar = (props) => {
    const [value, handleValue] = useState();
    const cartItems = useSelector(state => state.cartItems)

    return (
        <View style={styles.barsContainer}>
            <View style={styles.searchBar}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={text => handleValue(text)}
                    value={value}
                />
            </View>
            <View style={styles.nameContainer}>
                <Text style={{fontSize: 30, color: 'white'}}>asante</Text>
            </View>
            <TouchableOpacity 
            style={styles.shoppingCart}
            onPress={() => {
                props.screenNavigation.navigate('CartScreen');
            }}
            >
                <Text>{cartItems.length}</Text>
            </TouchableOpacity>
        </View>
    )
};

export default SearchBar;

const styles = StyleSheet.create({
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: '4%',
        borderRadius: 20,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowRadius: 6,
        shadowOpacity: 0.3,
        backgroundColor: '#f2f2f2',
        width: '50%'
    },
    textInput: {
        width: '70%',
        borderRadius: 10,
        marginLeft: 10
    },
    shoppingCart: {
        height: 30,
        width: 30,
        marginLeft: '5%',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '6%',
        backgroundColor: '#f2f2f2',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowRadius: 6,
        shadowOpacity: 0.3,
        backgroundColor: '#f2f2f2',
    },
    barsContainer: {
        // borderColor: 'black',
        // borderWidth: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        width: '80%',
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor: '#148FB6',
        paddingTop: 70,
        paddingBottom: 20
    },
    nameContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '4%'
    }
});
