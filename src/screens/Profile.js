import React, {Component} from 'react';
import {View, Button, Text} from 'native-base';
import {StyleSheet, AsyncStorage} from 'react-native';
import Header from '../components/Header';

class Profile extends Component {
  componentWillMount() {
    const value = AsyncStorage.getItem('name');
    console.log(value);
  }

  render() {
    return (
      <View>
        <Header headerText={'Hello'} />
        <View style={styles.viewStyle}>
          <Button style={styles.button} bordered danger>
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
});

export default Profile;
