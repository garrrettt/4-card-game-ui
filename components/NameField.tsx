import { StyleSheet, TextInput, View } from "react-native";
import { useState } from 'react';

export default function NameField({ text, onChangeText }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TextInput 
          onChangeText={onChangeText} 
          value={text}
          style={styles.text} 
          placeholder={"Type your name to begin"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 35,
  },
  innerContainer: {
    alignSelf: "center",
    backgroundColor: "#EFEFEF",
    paddingHorizontal: 25,
    paddingVertical: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4, // for Android
    borderRadius: 5,
  },
  text: {
    textAlign: "center",
  }
});