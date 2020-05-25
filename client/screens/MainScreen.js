import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import axios from 'axios';
import { Provider } from 'react-redux';
import store from '../../store';

import Header from '../components/MainScreen/Header.js';
import Body from '../components/MainScreen/Body.js';
import SearchBar from '../components/MainScreen/header/SearchBar'


const MainScreen = (props) => {
    const [trendingStores, setTrendingStores] = useState([]);
    // console.log('hell');
    // console.log(props)
    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:3005/mainInfoData'
        })
            .then(response => {
                setTrendingStores(response.data.rows)
            })
            .catch(e => console.log('error maininfo'))
    }, [])

    return (
            <View style={styles.screenContainer}>
                <SearchBar
                    screenNavigation={props.navigation}
                />
                <ScrollView>
                    <View style={styles.screen}>
                        <Header
                            trendingStores={trendingStores}
                            screenNavigation={props.navigation}
                        />
                        <Body
                            trendingStores={trendingStores}
                            screenNavigation={props.navigation}
                        />
                    </View>
                </ScrollView>
            </View>
    )
}


export default MainScreen;


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
    },
    screenContainer: {
        backgroundColor: '#F8F8FF'
    }

});
