import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Header = props => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#4CD964',
    height: 100,
  },
  textStyle: {
    color: '#FFF',
    fontSize: 36,
    paddingLeft: 20,
    paddingTop: 40,
  },
});

export default Header;
