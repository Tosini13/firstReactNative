import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import TodoForm from "./components/Form";
import Header from "./components/Header";
import TodoList from "./components/List";
import { TItem } from "./models/Todo";

export default function App() {
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

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.main}>
        <TodoForm addTodo={addTodo} />
        <TodoList items={todos} removeTodo={removeTodo} />
      </View>
      {/* <View style={styles.head}>
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
      </View>
      <List /> */}
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
  head: {
    width: "100%",
  },
  header: {
    backgroundColor: "pink",
    padding: 20,
    width: "100%",
  },
  main: {
    paddingHorizontal: 10,
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

const List = () => {
  const [people, setPeople] = useState([
    { name: "Giaccomo", id: "1" },
    { name: "Jacob", id: "2" },
    { name: "James", id: "3" },
    { name: "Jim", id: "4" },
    { name: "Jacovos", id: "5" },
    { name: "Leo", id: "6" },
    { name: "Cristiano", id: "7" },
    { name: "Memphis", id: "8" },
    { name: "Ney", id: "9" },
  ]);

  const pressed = (id: string) => {
    console.log("id", id);
    setPeople(() => people.filter((person) => person.id !== id));
  };

  return (
    <View style={stylesList.listContainer}>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item: person }) => (
          <TouchableOpacity onPress={() => pressed(person.id)}>
            <Text style={stylesList.listItem}>{person.name}</Text>
          </TouchableOpacity>
        )}
      />

      {/* <ScrollView>
        {people.map((person) => {
          return (
            <Text style={stylesList.listItem} key={person.key}>
              {person.name}
            </Text>
          );
        })}
      </ScrollView> */}
    </View>
  );
};

const stylesList = StyleSheet.create({
  listContainer: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
  },
  listItem: {
    backgroundColor: "pink",
    marginTop: 40,
    padding: 5,
    paddingHorizontal: 20,
    fontSize: 30,
    marginHorizontal: 2,
    borderRadius: 5,
  },
});
