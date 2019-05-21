import axios from 'axios'; 
import jwt_decode from 'jwt-decode'; 
import { GET_ERRORS,SET_CURRENT_USER,CLEAR} from './type';
import { SecureStore } from 'expo';

export const logIn =  ( user,history ) =>    dispatch => {
  
   axios.post('http://192.168.11.85:3000/user/login',{

        email:user.email,
        password:user.password
        
    }).then(result => {

        const token  = result.data.data ;
        SecureStore.setItemAsync('user', token);
        const decoded = jwt_decode(token);
        dispatch(setCurrentUser(decoded));

    }).catch(err =>{
      
        console.log(err);
        console.log("ERROR");
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data.errors
        }); 
    })
}

export const restoreLogin = (history,path1,path2 = '/home') => (dispatch) => {

  if( loggedIn() ){

      const profile = getProfile(); 
      dispatch(setCurrentUser(profile));
      history.push(path2);

    } else {
      history.push(path1);
  }
}

export const setCurrentUser = decoded => {
  return {
      type: SET_CURRENT_USER,
      payload: decoded
  }
}

export const validateToken = (history) => {
  if(loggedIn){

    history.push('/home');
  }
}

export const getToken = async () =>{
  
    let token = await SecureStore.getItemAsync('user');
    return token;
}

export const getProfile = _ => {
    const token = getToken();
    const profile = jwt_decode(token);

    return profile;
}

export const loggedIn = () => {
    try{
        const token = getToken();
        if(token === null)
          return false; 
        else
          return true;
      }
      catch(err){
        return false;
      }
}

export const register = ( newUser,history ) => dispatch => {
        return axios.post('http://192.168.11.46:3000/user/signup',{
        name:newUser.name,  
        email:newUser.email,
        password:newUser.password,
        password_confirm:newUser.password_confirm,
        adress:newUser.adress
    }).then(result => {
        history.navigate('Login');
    }).catch(err =>{
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
    });
    })

}
export const logoutUser = (history) => dispatch => {
  SecureStore.deleteItemAsync('user');

  dispatch({type:CLEAR})
  dispatch(setCurrentUser({}));
  history.navigate('Login')

}