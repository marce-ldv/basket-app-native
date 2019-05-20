import React from 'react';
import { connect } from 'react-redux';
import { register } from '../../redux/actions/user'
import {StyleSheet, View,ScrollView ,KeyboardAvoidingView,Text} from 'react-native';
import Button from '../Button'
import FormTextInput from '../FormTextInput';
import colors from '../../assets/color'
import strings from '../../assets/strings';
import Colors from '../../constants/Colors';


class Register extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        name: '',
        email: '',
        password: '',
        password_confirm:'',
        adress: '',
        errors: {}
    }
  }
  handleRegisterPress = () => {
      this.props.register(this.state,this.props.navigation);
  }

  handleEmailChange = (email) => {
    this.setState({ email: email });
  };

  handlePasswordChange = (password) => {
    this.setState({ password: password });
  };
  handlePasswordConfirmChange = (password_confirm) => {
    this.setState({ password_confirm: password_confirm });
  };
  handleAdressChange = (adress) => {
    this.setState({ adress: adress });
  };
  handleNameChange = (name) => {
    this.setState({ name: name });
  };

  render() {
    return (
    <ScrollView>
      
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Text style={styles.title}>Welcome to My Basket App</Text>
        <View style={styles.form}>
        <FormTextInput
            value={this.state.name}
           
            onChangeText={this.handleNameChange}
            placeholder={strings.NAME}
          />
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
           <FormTextInput
            value={this.state.password_confirm}
            secureTextEntry={true}
            password={true}
            onChangeText={this.handlePasswordConfirmChange}
            placeholder={strings.PASSWORD_PLACEHOLDER}
          />
          <FormTextInput
            value={this.state.adress}
           
            onChangeText={this.handleAdressChange}
            placeholder={strings.ADRESS}
          />
           
          <Button label={'Register'} onPress={this.handleRegisterPress} />
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


      export default connect(null,{ register })(Register);