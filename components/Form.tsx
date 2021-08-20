import React from "react";
import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export interface FormProps {
  addTodo: (title: string) => void;
}

const TodoForm: React.FC<FormProps> = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const submit = () => {
    if (title.trim() === "") return;
    addTodo(title);
    setTitle("");
  };

  return (
    <>
      <TextInput
        placeholder="todo..."
        style={style.input}
        value={title}
        onChangeText={(value) => setTitle(value)}
      />
      <Button title="Add" onPress={submit} />
    </>
  );
};

export default TodoForm;

const style = StyleSheet.create({
  view: {
    width: "100%",
  },
  input: {
    borderWidth: 1,
    borderRadius: 2,
    marginVertical: 10,
    borderStyle: "solid",
    padding: 5,
  },
  button: {
    borderRadius: 5,
    margin: 10,
    borderStyle: "solid",
    width: "100%",
  },
});
