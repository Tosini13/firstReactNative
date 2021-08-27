import React from "react";
import { useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";

export interface FormProps {
  addTodo: (title: string) => void;
}

const TodoForm: React.FC<FormProps> = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const submit = () => {
    if (title.trim().length > 3) {
      addTodo(title);
      setTitle("");
    } else {
      Alert.alert("OOPS!", "Todo must be over 3 cars long", [
        {
          text: "Oks",
          onPress: () => console.log("closed"),
        },
      ]);
    }
  };

  return (
    <View style={style.view}>
      <TextInput
        placeholder="todo..."
        style={style.input}
        value={title}
        onChangeText={(value) => setTitle(value)}
      />
      <Button title="Add" onPress={submit} color="#268078" />
    </View>
  );
};

export default TodoForm;

const style = StyleSheet.create({
  view: {
    width: "100%",
    fontFamily: "nunito-bold",
  },
  input: {
    borderWidth: 1,
    borderRadius: 2,
    marginVertical: 10,
    borderStyle: "solid",
    padding: 5,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: "rgba(0,0,0,0.3)",
  },
  button: {
    borderRadius: 5,
    margin: 10,
    borderStyle: "solid",
    width: "100%",
  },
});
