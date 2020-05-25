import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const PopularChoices = (props) => {
    return (
        <View style={styles.popularContainer}>
            <ScrollView horizontal={true}>
                <View style={styles.popularChoice}>
                    <Image
                        style={styles.image}
                        source={{ uri: 'https://www.nippon.com/es/ncommon/contents/japan-data/170454/170454.jpg' }}
                    />
                    <View style={styles.popularDescription}>
                        {/* <Text style={{fontWeight: 'bold', fontSize: 17}}>Name</Text> */}
                    </View>
                </View >
                <View style={styles.popularChoice}>
                    <Image
                        style={styles.image}
                        source={{ uri: 'https://www.zenu.com.co/wp-content/uploads/2019/07/pizza-carnes-zenu-recetas-1200x900.jpg' }}
                    />
                </View>
                <View style={styles.popularChoice}>
                    <Image
                        style={styles.image}
                        source={{ uri: 'https://natashaskitchen.com/wp-content/uploads/2019/02/Greek-Salad.jpg' }}
                    />
                </View>
                <View style={styles.popularChoice}>
                    <Image
                        style={styles.image}
                        source={{ uri: 'https://natashaskitchen.com/wp-content/uploads/2019/04/Best-Burger-5-600x900.jpg' }}
                    />
                </View>
            </ScrollView >
        </View>
    )
};

const styles = StyleSheet.create({
    popularChoice: {
        width: wp('35%'),
        height: '60%',
        // borderColor: 'green',
        // borderWidth: 1,
        marginLeft: 15,
        borderRadius: 10,
        backgroundColor: 'white',
        marginTop: '2%',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        flexDirection: 'column'
    },
    popularContainer: {
        // borderColor: 'black',
        // borderWidth: 1,
        height: 110
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10
    },
    popularDescription: {
        marginTop: 7,
        marginLeft: 3
    }
});

export default PopularChoices;