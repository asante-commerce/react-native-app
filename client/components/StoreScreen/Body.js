import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


import PopularChoices from '../StoreScreen/Body/PopularChoices';
import Products from '../StoreScreen/Body/Products';
import dummyData from '../../../dummyData';

const Body = (props) => {
    return (
        <View style={styles.body}>
            <View style={styles.popularTitleContainer}>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: 'orange'}}>Popular Choices</Text>
            </View>
            <PopularChoices/>
            {dummyData.map((product, key) => (
                <Products 
                product={product} 
                key={key}
                addItemToCart={props.addItemToCart}
                />
            ))}

        </View>
    )
};

const styles = StyleSheet.create({
    body: {
        // borderColor: 'blue',
        // borderWidth: 1
    },
    popularTitleContainer: {
        marginLeft: '5%',
    }
});

export default Body;