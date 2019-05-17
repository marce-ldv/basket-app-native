import React from 'react';

import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
// import { Field } from 'redux-form';
import { connect } from 'react-redux';
// import { logIn } from '../../redux/actions/user'

export default class Login extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Login</Text>
                
                <TouchableOpacity>
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        borderColor: '#000'
    }
});
/*
const mapStateToProps = state => ({

});

export default connect( mapStateToProps, LogIn )( Login )
*/