import React from 'react';
import {Button, Text} from 'native-base';
import {StyleSheet, View} from 'react-native';

const ButtonComponent = ({onPress, label}) => {
  return (
    <View style={styles.viewStyle}>
      <Button style={styles.button} onPress={onPress}>
        <Text>{label}</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    width: '95%',
    marginTop: 20,
  },
  button: {
    height: 50,
    backgroundColor: '#4CD964',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ButtonComponent;
