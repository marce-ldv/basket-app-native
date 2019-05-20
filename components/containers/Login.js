import React from 'react';
import {StyleSheet, View,ScrollView ,KeyboardAvoidingView,Text} from 'react-native';
import Button from '../Button'
import FormTextInput from '../FormTextInput';
import colors from '../../assets/color'
import strings from '../../assets/strings';
import Colors from '../../constants/Colors';
import { connect } from 'react-redux';
import { logIn } from '../../redux/actions/user'

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          email: '',
          password: '',
          errors: {}
      }
    }
    handleLoginPress = () => {
        this.props.logIn(this.state,null);
    }

    handleEmailChange = (email) => {
        this.setState({ email: email });
      };
    
      handlePasswordChange = (password) => {
        this.setState({ password: password });
      };
    
    render() {
        
        
       
        
        return (
            <ScrollView>
      
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Text style={styles.title}>Welcome to My Basket App</Text>
        <View style={styles.form}>
       
          <FormTextInput
            value={this.state.email}
            onChangeText={this.handleEmailChange}
            placeholder={strings.EMAIL_PLACEHOLDER}
            autoCorrect={false}
            keyboardType="email-address"
          />
          <FormTextInput
            value={this.state.password}
           
            onChangeText={this.handlePasswordChange}
            placeholder={strings.PASSWORD_PLACEHOLDER}
            secureTextEntry={true}
            password={true}
          />
           
          <Button label={'Log In'} onPress={this.handleLoginPress} />
        </View>
      </KeyboardAvoidingView>
      </ScrollView>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.WHITE,
      alignItems: "center",
      justifyContent: "space-between"
    },
    logo: {
      flex: 1,
      width: "100%",
      resizeMode: "contain",
      alignSelf: "center"
    },
    form: {
      flex: 1,
      justifyContent: "center",
      width: "80%"
    },
    title:{
      justifyContent:"center",
      alignItems: "center",
      color:colors.BLACK
    }
  });

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

 export default connect( mapStateToProps, { logIn } )( Login )

