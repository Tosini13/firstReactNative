import React from "react";
import { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import TodoScreen from "./components/Todo/TodoScreen";

const Stack = createNativeStackNavigator();

const loadFonts = () =>
  Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito/Nunito-Bold.ttf"),
  });

const Tab = createBottomTabNavigator();
export default function App() {
  const [fetching, setFetching] = useState(true);

  if (fetching) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setFetching(false)}
        onError={() => console.error("ERR")}
      />
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="HOME">
        <Tab.Screen
          name="HOME"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Entypo name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="TODO_SCREEN"
          component={TodoScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Entypo name="list" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
