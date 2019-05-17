import React from 'react';

import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { logIn } from '../../redux/actions/user'

class Login extends React.Component {
    constructor(props){
        super(props)
    }
    submit = (v) => {
        console.log('submitting form', v)
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Loginn</Text>

                <Field
                    name="username"
                    component={({ input }) => <TextInput {...input} />}
                />
                
                <TouchableOpacity onPress={this.props.handleSubmit( this.submit ) }>
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

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect( mapStateToProps, { logIn } )( reduxForm( { form: 'loginForm' } )(Login) );