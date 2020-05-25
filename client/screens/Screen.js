import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, AntDesign, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

import MainScreen from './MainScreen.js'
import StoreScreen from './StoreScreen';
import UserScreen from './UserScreen';
import ExploreScreen from './ExploreScreen';
import CartScreen from './CartScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const HomeTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'MainScreen') {
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline';
                    } else if (route.name === 'ExploreScreen') {
                        iconName = focused ? 'ios-list-box' : 'ios-list';
                    } else if (route.name === 'UserScreen') {
                        iconName = focused ? 'ios-list-box' : 'ios-list';
                    }

                    // You can return any component that you like here!
                    return <Ionicons 
                    name={iconName} 
                    size={size} color={color} 
                    style={{height: 35, marginTop: 25}}/>;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'white',
                inactiveTintColor: 'white',
                showLabel: false,
                style: {
                    backgroundColor: '#148FB6',
                    // position: 'absolute',
                    left: 0,
                    bottom: 0,
                    right: 0,
                    // borderTopRightRadius: 20,
                    // borderTopLeftRadius: 20,
                    paddingTop: 15,
                    shadowColor: 'black',
                    shadowOffset: {
                        width: 0,
                        height: 1
                    },
                    shadowOpacity: 0.3,
                    shadowRadius: 6,
                    // borderRadius: 30,
                    height: '8.5%',
                }
            }}
                >
                <Tab.Screen
                    name="MainScreen"
                    component={MainScreen}
                />
                <Tab.Screen name="ExploreScreen" component={ExploreScreen} />
                <Tab.Screen name="UserScreen" component={UserScreen} />
        </Tab.Navigator >
    );
}

export default function App() {
    return (
        (
            <NavigationContainer
                independent={true}
            >
                <Stack.Navigator
                    style={styles.container}
                    initialRouteName='MainScreen'
                    screenOptions={{ headerShown: false }}
                >
                    <Stack.Screen name="MainScreen" component={HomeTabs} />
                    <Stack.Screen name="StoreScreen" component={StoreScreen} />
                    <Stack.Screen name="CartScreen" component={CartScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    screenContainer: {
        flex: 1
    }
});


