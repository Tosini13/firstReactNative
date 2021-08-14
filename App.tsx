import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>("");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button title="Add" onPress={() => setCount(count + 1)} />
        <Button title="remove" onPress={() => setCount(count - 1)} />
      </View>
      <Text style={styles.button}>Result: {count}</Text>
      <View style={styles.header}>
        <Text>Enter:</Text>
        <TextInput
          multiline
          keyboardType="numeric"
          placeholder="type.."
          style={styles.input}
          onChangeText={(text) => setText(text)}
        />
        <Text style={styles.button}>Text: {text}</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "pink",
    padding: 20,
    width: "100%",
  },
  button: {
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "white",
    padding: 5,
    borderColor: "black",
  },
});
