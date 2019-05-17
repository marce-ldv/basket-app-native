import React from 'react';
import Login from './components/containers/Login';
import {
  StyleSheet,
  View,
  Platform
} from 'react-native';
// import { Provider } from 'react-redux';
// import store from './redux/store/store';

export default class App extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Login />
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
});
