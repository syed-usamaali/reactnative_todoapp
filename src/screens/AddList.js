import React, {Component} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Header from '../components/Header';

class AddList extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Header headerText="Add" />
        <View style={styles.viewStyle}>
          <TextInput
            style={styles.textInputStyle}
            placeholder="What do you want to do?"
            multiline={true}
            textAlignVertical={'top'}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#FFF',
    height: '100%',
  },
  viewStyle: {
    marginHorizontal: 18,
    marginTop: 20,
  },
  textInputStyle: {
    borderWidth: 1,
    borderColor: '#d6d4cb',
    borderRadius: 5,
    fontSize: 16,
    paddingHorizontal: 10,
    height: 125,
  },
});

export default AddList;
