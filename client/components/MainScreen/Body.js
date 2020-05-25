import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Offers from './body/Offers';
import HeaderCards from '../MainScreen/header/HeaderCards';

const Body = (props) => {

    return (
        <View style={styles.body}>
            <View style={styles.titleContainer}>
                <Text style={{ fontSize: 27, fontWeight: '500' }}>Trending Stores</Text>
            </View>
            <View style={styles.cardsContainer}>
                <ScrollView horizontal={true}>
                    {props.trendingStores.map((store, key) => (
                        <HeaderCards
                        card={store}
                        key={key}
                        screenNavigation={props.screenNavigation}
                        />
                    ))}
                </ScrollView>
            </View>
            <Offers/>
        </View>
    )
};

const styles = StyleSheet.create({
    body: {
        // borderWidth: 1,
        // borderColor: 'red',
        height: hp('65%'),
        width: wp('100%'),
        // backgroundColor: '#011A27'
    },
    cardsContainer: {
        height: '57%'
    },
    titleContainer: {
        marginLeft: 15,
        marginTop: '1%',
        height: '7%'
    }
});

export default Body;