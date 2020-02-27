import React, {Component} from 'react';
import {View, Button, Text} from 'native-base';
import {StyleSheet, AsyncStorage} from 'react-native';
import Header from '../components/Header';

class Profile extends Component {
  state = {storedValue: ''};

  clearAsyncStorage = async () => {
    AsyncStorage.clear();
    this.props.navigation.navigate('Login');
  };

  componentDidMount = async () => {
    try {
      const value = await AsyncStorage.getItem('name');
      this.setState({storedValue: value});
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return (
      <View style={styles.containerStyle}>
        <Header headerText={'Hello!' + ' ' + this.state.storedValue} />
        <View style={styles.viewStyle}>
          <Button
            onPress={this.clearAsyncStorage}
            style={styles.button}
            bordered
            danger>
            <Text>Logout</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewStyle: {
    height: '80%',
    justifyContent: 'flex-end',
    alignItems: 'stretch',
  },
  containerStyle: {
    height: '100%',
    backgroundColor: '#ffffff',
  },
});

export default Profile;
