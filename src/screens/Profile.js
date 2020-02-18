import React, {Component} from 'react';
import {View, Button, Text} from 'native-base';
import {StyleSheet} from 'react-native';
import Header from '../components/Header';

class Profile extends Component {
  render() {
    return (
      <View>
        <Header headerText={'Hello Ali!'} />
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
