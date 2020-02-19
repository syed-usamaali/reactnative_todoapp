import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const TextBox = props => {
  return (
    <TextInput
      style={styles.inputStyle}
      placeholder={props.inputText}
      onChangeText={props.onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    borderColor: '#d6d4cb',
    borderRadius: 5,
    width: '95%',
    fontSize: 16,
    paddingHorizontal: 10,
    marginTop: 100,
  },
});

export default TextBox;
