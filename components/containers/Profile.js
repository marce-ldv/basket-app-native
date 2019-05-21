import React from 'react'; 
import {StyleSheet, View,Text } from 'react-native'; 
import { connect } from 'react-redux'; 
import { logoutUser } from '../../redux/actions/user'
import Button from '../Button';
import colors from '../../assets/color';
import strings from '../../assets/strings';

class Profile extends React.Component { 

    render(){
        console.log(this.props.auth)
        return(<View style={styles.container}>
                    <Text style={styles.title}>Usuario:</Text>
                    <Text style={styles.items}>{this.props.auth.user.email}</Text>
                    <Text style={styles.items}>{this.props.auth.user.adress}</Text>
                    <Button label={'Log Out'} onPress={()=>this.props.logoutUser(this.props.navigation)} />
               </View>)
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.WHITE,
      alignItems: "center",
      marginLeft:'6%'
    },
    title:{
      justifyContent:"center",
      alignItems: "center",
      color:colors.BLACK,
      fontSize:20
    },
    items:{
        margin:'5%',
        fontSize:25,
        color:colors.TORCH_RED
    }
  });
const mapStateToProps = (state) => ({
    auth: state.auth
})
export default connect(mapStateToProps,{ logoutUser })(Profile)