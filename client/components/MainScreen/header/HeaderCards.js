import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons, AntDesign, MaterialCommunityIcons, Octicons, FontAwesome } from '@expo/vector-icons';

const HeaderCards = (props) => {
    return (
        <View style={styles.cards}>
            <TouchableOpacity
                style={styles.cardContainer}
                onPress={() => {
                    props.screenNavigation.navigate('StoreScreen');
                }}
            >
                    <Image
                        style={styles.cardImage}
                        source={{ uri: `${props.card.img}` }}
                    />
                <View>
                    <View style={styles.storeNameContainer}>
                        <View style={styles.storeName}>
                        <Text style={{fontWeight: 'bold'}}>{props.card.name}</Text>

                        </View>
                        <Octicons name="verified" size={15} color="#148FB6" />
                    </View>
                    <View style={styles.descriptionContainer}>
                        <Text style={{fontSize: 13, color: 'grey'}}>{props.card.description}</Text>
                    </View>
                    <View style={styles.ratingDescription}>
                    <FontAwesome name="star" size={16} color="#FFD100" />
                    <View style={styles.ratingContainer}>
                        <Text>4.5</Text>
                    </View>
                        <View style={styles.delivery}>
                            <Text style={{fontSize: 12, color: 'white'}}>Free Delivery</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    headerCards: {
        borderColor: 'blue',
        borderWidth: 1,
        height: '100%',
        width: '100%',
        // shadowColor: 'black',
        // shadowOffset: {
        //     width: 0,
        //     height: 1
        // },
        // shadowRadius: 6,
        // shadowOpacity: 0.3
    },
    cardDescription: {
        // borderColor: 'black',
        // borderWidth: 1,
        marginTop: 15,
        height: '10%',
        marginLeft: '6%'
    },
    cardImage: {
        height: '100%',
        width: '100%',
        borderRadius: 15
    },
    cardContainer: {
        height: '70%',
        // shadowColor: 'black',
        // shadowOffset: {
        //     width: 0,
        //     height: 1
        // },
        // shadowRadius: 6,
        // shadowOpacity: 0.3,
        backgroundColor: 'white',
        // borderColor: 'red',
        // borderWidth: 1,
        width: '100%',
        borderRadius: 15
    },
    cards: {
        marginLeft: 15,
        flexDirection: 'row',
        paddingTop: '1%',
        // borderColor: 'black',
        // borderWidth: 1,
        width: wp('44%')
    },
    ratingDescription: {
        flexDirection: 'row',
        marginTop: 5,
        marginLeft: 5
        // borderColor: 'green',
        // borderWidth: 1
    },
    storeNameContainer: {
        marginTop: 10,
        marginLeft: 5,
        flexDirection: 'row'
    },
    descriptionContainer: {
        marginLeft: 5,
        marginTop: 2
    },
    delivery: {
        // borderColor: 'black',
        // borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#E05151',
        width: '60%',
        alignItems: 'center',
        marginLeft: '8%'
    },
    ratingContainer: {
        marginLeft: 8
    },
    storeName: {
        marginRight: 10
    }
});

export default HeaderCards;