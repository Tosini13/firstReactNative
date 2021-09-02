import React from "react";
import NewTodo from "./NewTodo";
import Todo from "./Todo";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";

export enum TODO_ROUTES {
  "NEW_TODO" = "NEW_TODO",
  "TODO" = "TODO",
}

const BottomTab = createBottomTabNavigator();

export default function TodoScreen() {
  return (
    <BottomTab.Navigator initialRouteName={TODO_ROUTES.NEW_TODO}>
      <BottomTab.Screen
        name={TODO_ROUTES.TODO}
        component={Todo}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="list" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name={TODO_ROUTES.NEW_TODO}
        component={NewTodo}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="new" size={size} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
