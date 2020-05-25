import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import SearchBar from '../components/MainScreen/header/SearchBar';

const ExploreScreen = () => {
    return (
        <View style={styles.screen}>
            <SearchBar />
        </View>
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
});


export default ExploreScreen;