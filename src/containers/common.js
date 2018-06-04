import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from "../style/";

const TitledInput = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {

  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label.toUpperCase()}</Text>
      <TextInput
        autoCorrect={false}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        style={inputStyle}
        autoCapitalize="none"
      />
    </View>
  );
};


export { TitledInput };
