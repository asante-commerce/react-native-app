import React from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput, Text } from 'react-native';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            username: '',
            email: '',
            password1: '',
            password2: ''
        }
    }
    render() {
        return (
            <View style={styles.screen}>
                <TouchableOpacity
                    style={styles.cancelButton}
                    onPress={() => {
                        this.props.navigation.navigate('Login')
                    }}
                >
                    <Text style={{ fontSize: 12 }}>back</Text>
                </TouchableOpacity>
                <View style={styles.titleContainer}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Register</Text>
                </View>
                <View style={styles.form}>
                    <View style={styles.nameContainer}>
                        <Text>Name</Text>
                    </View>
                    <TextInput
                        placeholder='Name'
                        style={styles.input}
                    />
                    <View style={styles.nameContainer}>
                        <Text>username</Text>
                    </View>
                    <TextInput
                        placeholder='Username'
                        style={styles.input}
                    />
                    <View style={styles.nameContainer}>
                        <Text>email</Text>
                    </View>
                    <TextInput
                        placeholder='email'
                        style={styles.input}
                    />
                    <View style={styles.nameContainer}>
                        <Text>Password</Text>
                    </View>
                    <TextInput
                        placeholder='password'
                        style={styles.input}
                    />
                    <View style={styles.nameContainer}>
                        <Text>Re-enter Password</Text>
                    </View>
                    <TextInput
                        placeholder='repeat-password'
                        style={styles.input}
                    />

                </View>
                    <View style={{alignItems: 'center'}}>
                        <TouchableOpacity style={styles.createButton}>
                            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Create Account</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        marginTop: '14%',
    },
    cancelButton: {
        height: 30,
        marginLeft: 20,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: 40
    },
    form: {
        // borderColor: 'black',
        // borderWidth: 1,
        // alignItems: 'center',
        marginLeft: '9%'
    },
    input: {
        borderColor: 'grey',
        borderWidth: 1,
        marginBottom: 20,
        width: '88%',
        borderRadius: 20,
        height: 40,
        paddingLeft: 15
    },
    titleContainer: {
        // alignItems: 'center',
        marginBottom: 30,
        marginLeft: '8%',
        marginTop: 20
    },
    createButton: {
        marginTop: 20,
        // borderColor: 'black',
        // borderWidth: 1,
        width: '80%',
        height: 45,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DF3838'
    },
    nameContainer: {
        marginBottom: 8
    }
});

export default Register;