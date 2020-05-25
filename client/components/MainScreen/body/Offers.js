import React from 'react';;
import { View, StyleSheet, Text, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { FontAwesome } from '@expo/vector-icons';

const Offers = () => {
    return (
        <View style={styles.offerContainer}>
            <View style={styles.titleContainer}>
                <Text style={{ fontSize: 27, fontWeight: '500' }}>Product Offers</Text>
            </View>
            <View style={styles.imageContainer}>
                <View style={styles.offer}>
                    <Image
                        style={styles.image}
                        source={{ uri: 'https://www.topjordan2019.com/wp-content/uploads/2018/05/Off-White-x-Nike-Air-Huarache-Ultra-White.jpg' }}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    offer: {
        // borderColor: 'black',
        // borderWidth: 1,
        width: '80%',
        height: '70%',
        // shadowColor: 'black',
        // shadowOffset: {
        //     width: 0,
        //     height: 1
        // },
        // shadowOpacity: 0.6,
        // shadowRadius: 6,
        marginHorizontal: 15,
    },
    offerContainer: {
        width: wp('100%'),
        // alignItems: 'center',
        height: '35%',
        flexDirection: 'column',
        // justifyContent: 'center',
        // borderColor: 'green',
        // borderWidth: 1
    },
    image: {
        height: '100%',
        width: '100%',
        borderRadius: 15
    },
    imageContainer: {
        height: '100%',
        width: '100%',
        alignItems: 'center'
    },
    titleContainer: {
        marginLeft: 20,
        marginBottom: 10
    }
})


export default Offers;