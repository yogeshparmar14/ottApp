import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Image } from 'react-native';

const CustomInput = (props) => {
  const [text, setText] = useState('');

  return (
    <View style={styles.inputContainer}>
      <View style={styles.placeholderContainer}>
        {props?.search ?
          <Image source={require('../assets/icons/search-normal.png')} style={styles.search}></Image>
          :
          <Text style={styles.placeholder}>{text === '' ? props?.placeholder : ''}</Text>
        }

      </View>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={(newText) => {
          setText(newText)
          props.onChangeText(newText)
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
    width: 323,
    height: 59, // Adjust as needed
  },
  placeholderContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  placeholder: {
    position: 'absolute',
    top: 18, // Adjust as needed
    left: 20, // Adjust as needed
    color: "rgba(255, 255, 255, 0.15)",
  },
  search: {
    position: 'absolute',
    top: 18, // Adjust as needed
    left: 270, // Adjust as needed
    // color: "rgba(255, 255, 255, 0.15)",
    width: 25,
    height: 25
  },
  input: {
    width: '100%',
    height: '100%',
    paddingLeft: 10, // Adjust as needed
    borderWidth: 1, // Add border styles as needed
    borderColor: '#fff', // Add border color as needed
    borderRadius: 20,
    color: '#fff'
  },

});

export default CustomInput;
