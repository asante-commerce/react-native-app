import React, {useState} from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import axios from 'axios';

const Login = (props) => {
    var screens = false;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const createTwoButtonAlert = () =>
    Alert.alert(
      "Invalid Information",
      "Retry",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );



    const handlePress = (data) => {
        axios({
            method: 'post',
            url: 'http://localhost:3005/user/login',
            data: data
        })
            .then(data => {
                if (data.data === 'true') {
                    props.navigation('UserInfo')
                } else {
                    createTwoButtonAlert();
                }
            })
            .catch(e => createTwoButtonAlert())
    }
    return (
        <View style={styles.screen}>
            <Text style={{ fontSize: 50 }}>Login</Text>
            <View >
                <Text>username</Text>
                <TextInput
                    autoCapitalize='none'
                    style={styles.login}
                    placeholder='Username'
                    onChangeText={text => setUsername(text)}
                />
                <Text>password</Text>
                <TextInput
                    autoCapitalize='none'
                    style={styles.login}
                    placeholder='Password'
                    onChangeText={text => setPassword(text)}
                    secureTextEntry={true}
                />
                <TouchableOpacity
                    onPress={() => handlePress({
                        username: username,
                        password: password
                    })}
                    style={styles.button}
                >
                    <Text>go!</Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 20, flexDirection: 'row' }}>
                <Text>Dont have an account?</Text>
                <TouchableOpacity
                onPress={() => {
                    props.navigation.navigate('Register')
                }}
                >
                    <Text style={{ color: 'blue' }}> Register!</Text>
                    </TouchableOpacity>
            </View>
        </View>
    )
};


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


export default Login;

