import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';

import Login from '../components/UserScreen/Login/Login';
import Register from '../components/UserScreen/Register/Register';
const Stack = createStackNavigator();


const UserInfo = (props) => {
    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <Text>Name </Text>
                <View>
                    <Text> logo/image</Text>
                </View>
            </View>
        </View>
    )
}



const UserScreen = () => {

    return (
        <NavigationContainer
            independent={true}
        >
            <Stack.Navigator
                style={styles.container}
                initialRouteName='Login'
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="UserInfo" component={UserInfo} />
                <Stack.Screen name="Register" component={Register} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


const styles = StyleSheet.create({
    screen: {
        marginTop: 100,
        marginLeft: 15
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    login: {
        borderColor: 'black',
        borderWidth: 1,
        width: 100,
        borderRadius: 10
    },
    button: {
        borderColor: 'black',
        borderWidth: 1,
        width: 40,
        marginTop: 15,
        borderRadius: 10,
        alignItems: 'center'
    }
});


export default UserScreen;