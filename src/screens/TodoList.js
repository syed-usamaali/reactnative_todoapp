import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../components/Header';

class TodoList extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Header headerText="Todo" />
        <Text>List Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#FFF',
    height: '100%',
  },
});

export default TodoList;
