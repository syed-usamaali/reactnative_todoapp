import React, {Component} from 'react';
import {Image, View, StyleSheet} from 'react-native';
import TextBox from '../components/TextBox';
import ButtonComponent from '../components/ButtonComponent';

class Login extends Component {
  state = {text: ''};

  render() {
    return (
      <View style={styles.viewStyle}>
        <Image
          style={styles.imageStyle}
          source={require('../images/todo.png')}
        />
        <TextBox inputText={'Name'} value={this.state.text} />
        <ButtonComponent buttonTitle={'Login'} />
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
  },
});

export default Login;
