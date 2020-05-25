import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Header = (props) => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: 'https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/55365cd73787b2187a1f0790/portada.jpg' }}
                />
                 <View style={styles.titleContainer}>
                <Text style={{ fontSize: 35, fontWeight: 'bold' }}>Store Name</Text>
                <View style={{ justifyContent: 'center', marginLeft: 20 }}>
                    <Text>Talento Local/ Verified</Text>
                </View>
            </View>
            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    imageContainer: {
        height: '90%',
        // borderColor: 'black',
        // borderWidth: 1,
        marginTop: '3%',
        marginHorizontal: 10,
        // borderRadius: 10
    },
    headerContainer: {
        // borderWidth: 1,
        // borderColor: 'red',
        height: hp('35%'),
        marginBottom: 60
    },
    image: {
        height: '100%',
        width: '100%',
        borderRadius: 15
    },
    test: {
        height: 100,
        width: wp('30%'),
        borderColor: 'green',
        borderWidth: 1,
        zIndex: 100,
        marginTop: '-30%',
        backgroundColor: 'white'
    },
    button: {
        // borderColor: 'black',
        // borderWidth: 1,
        height: 40,
        width: 50,
        position: 'absolute',
        zIndex: 100,
        marginLeft: 10,
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    titleContainer: {
        marginLeft: wp('4%'),
        marginTop: wp('2%')
    }
});

export default Header;