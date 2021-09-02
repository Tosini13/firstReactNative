import React from "react";
import { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Entypo } from "@expo/vector-icons";
import TodoScreen from "./components/Todo/TodoScreen";
import Header from "./components/Header/Header";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const loadFonts = () =>
  Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito/Nunito-Bold.ttf"),
  });

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
      <Drawer.Navigator initialRouteName="HOME">
        <Drawer.Screen
          name="HOME"
          component={Home}
          options={{
            headerTitle: () => <Header />,
            drawerIcon: ({ color, size }) => (
              <Entypo name="home" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="TODO_SCREEN"
          component={TodoScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Entypo name="list" size={size} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
