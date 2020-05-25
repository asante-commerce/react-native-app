import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import SearchBar from './header/SearchBar.js';
import HeaderCards from './header/HeaderCards';
import Categories from '../MainScreen/header/Categories';

const Header = (props) => {
    return (
        <View style={styles.header}>
            <ScrollView horizontal={true}>
                <Categories />
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        // borderWidth: 1,
        // borderColor: 'pink',
        height: hp('10%'),
        width: wp('100%')
        // backgroundColor: '#F34A4A'
    },
    cardsContainer: {
        flexDirection: 'row',
        // borderColor: 'blue',
        // borderWidth: 1,
        height: '87%'
    },
    titleContainer: {
        marginLeft: '5%',
        height: '10%',
        //         borderWidth: 1,
        // borderColor: 'black',
    }
});

export default Header;