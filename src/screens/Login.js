import React, {Component} from 'react';
import {
  Image,
  View,
  StyleSheet,
  AsyncStorage,
  ToastAndroid,
} from 'react-native';
import TextBox from '../components/TextBox';
import ButtonComponent from '../components/ButtonComponent';

class Login extends Component {
  state = {text: ''};

  onButtonPress = async () => {
    if (this.state.text === '') {
      ToastAndroid.show('Please input your name', ToastAndroid.CENTER);
    } else {
      try {
        await AsyncStorage.setItem('name', this.state.text).then(
          this.props.navigation.navigate('Profile'),
        );
      } catch (error) {
        alert(error);
      }
    }
  };

  render() {
    return (
      <View style={styles.viewStyle}>
        <Image
          style={styles.imageStyle}
          source={require('../images/todo.png')}
        />
        <TextBox
          inputText="Name"
          value={this.state.text}
          onChangeText={text => this.setState({text})}
        />
        <ButtonComponent
          label="Login"
          onPress={this.onButtonPress.bind(this)}></ButtonComponent>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageStyle: {
    width: 200,
    height: 200,
  },
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#ffffff',
  },
});

export default Login;
