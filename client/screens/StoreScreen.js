import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import store from '../../store';
import add from '../../actions/index';

import Header from '../components/StoreScreen/Header';
import Body from '../components/StoreScreen/Body';
import SearchBar from '../components/MainScreen/header/SearchBar';
import Footer from '../components/StoreScreen/Footer.js';


const StoreScreen = (props) => {

    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cartItems)

    return (
        <View style={styles.screen}>
            <View style={styles.searchContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        props.navigation.navigate('MainScreen')
                    }}
                >
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View>
                    <Header screenNavigation={props.navigation} />
                    <Body
                        screenNavigation={props.navigation}
                    />
                </View>
            </ScrollView>
            <Footer
                screenNavigation={props.navigation}
            />
        </View>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product })
    }
};
export default StoreScreen;

// export default StoreScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: hp('7%'),
    },
    titleContainer: {
        marginLeft: wp('5%'),
        flexDirection: 'row',
        marginBottom: 10
    },
    button: {
        borderColor: 'black',
        borderWidth: 1,
        height: 20,
        width: 50,
        // position: 'absolute',
        // zIndex: 100,
        marginLeft: 15,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowRadius: 6,
        shadowOpacity: 0.1
    },
    searchContainer: {
        flexDirection: 'row'
    }
});


