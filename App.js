import React from 'react';
import Main from './components/Main';
import {
  StyleSheet,
  View,
  Platform,
  Text
} from 'react-native';
// import { Provider } from 'react-redux';
// import store from './redux/store/store';

export default class App extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Main />
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
