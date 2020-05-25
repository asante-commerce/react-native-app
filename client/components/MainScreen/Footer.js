import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Footer = () => {
    return (
        <View style={styles.footer}>
            <TouchableOpacity style={styles.footerBox}>
            <Image
                style={styles.footerImages} 
                source={{uri: `${'https://png.pngtree.com/png-clipart/20190516/original/pngtree-home-icon-simple--symbol-png-image_3566359.jpg'}`}}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerBox}></TouchableOpacity>
            <TouchableOpacity style={styles.footerBox}>
                <Image
                style={styles.footerImages} 
                source={{uri: `${'https://cdn0.iconfinder.com/data/icons/ecommerce-57/100/Ecommerce_RTE-03-512.png'}`}}/>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    footer: {
        borderWidth: 1,
        borderColor: 'black',
        height: hp('10%'),
        width: wp('100%'),
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    footerBox: {
        height: '100%',
        width: '33%',
        borderColor: 'black',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    footerImages: {
        height: 30,
        width: 30
    }
});

export default Footer;