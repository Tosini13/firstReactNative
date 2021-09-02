import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
} from "react-native";
import TodoForm from "./Form";
import TodoList from "./List";
import { TItem } from "../../models/Todo";
import { NavigationStackProp } from "react-navigation-stack";
import { TODO_ROUTES } from "./TodoScreen";

export interface TodoProps {
  navigation: NavigationStackProp;
}

const Todo: React.FC<TodoProps> = ({ navigation }) => {
  const [todos, setTodos] = useState<TItem[]>([
    {
      id: "123",
      title: "do sth",
    },
  ]);
  const addTodo = (title: string) => {
    setTodos([
      ...todos,
      {
        id: (todos.length * Math.random() * 1000).toString(), // TODO: uuid
        title,
      },
    ]);
  };

  const removeTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleGoNewToDo = () => navigation.navigate(TODO_ROUTES.NEW_TODO);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.main}>
          <Button title="Go to newset version" onPress={handleGoNewToDo} />
          <TodoForm addTodo={addTodo} />
          <TodoList items={todos} removeTodo={removeTodo} />
        </View>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Todo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  main: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
