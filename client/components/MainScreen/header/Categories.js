import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Categories = (props) => {
    return (
        <View style={styles.categories}>
            <View style={styles.categoryContainer}>
                <View style={styles.category}>

                </View>
                <Text style={{fontSize: 12}}>Clothing</Text>
            </View>
            <View style={styles.categoryContainer}>
                <View style={styles.category}>

                </View>
                <Text style={{fontSize: 12}}>Health</Text>
            </View>
            <View style={styles.categoryContainer}>
                <View style={styles.category}>

                </View>
                <Text style={{fontSize: 12}}>Home</Text>
            </View>
            <View style={styles.categoryContainer}>
                <View style={styles.category}>

                </View>
                <Text style={{fontSize: 12}}>Pets</Text>
            </View>
            <View style={styles.categoryContainer}>
                <View style={styles.category}>

                </View>
                <Text style={{fontSize: 12}}>Technology</Text>
            </View>
        </View>
    )
};

export default Categories;

const styles = StyleSheet.create({
    categoryContainer: {
        // borderColor: 'black',
        // borderWidth: 1,
        width: 75,
        alignItems: 'center',
        // justifyContent: 'center'
    },
    categories: {
        flexDirection: 'row',
        height: '100%',
    },
    category: {
        borderColor: 'black',
        borderWidth: 1,
        height: '60%',
        width: '65%',
        borderRadius: 40,
        marginTop: 9,
        marginBottom: 4
    }
});
