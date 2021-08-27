import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewTodo from "./NewTodo";
import Todo from "./Todo";

const Stack = createNativeStackNavigator();

export default function TodoScreen() {
  return (
    <Stack.Navigator initialRouteName="NEW_TODO">
      <Stack.Screen name="TODO" component={Todo} />
      <Stack.Screen name="NEW_TODO" component={NewTodo} />
    </Stack.Navigator>
  );
}
