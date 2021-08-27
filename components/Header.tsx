import React from "react";
import { View, StyleSheet, Text } from "react-native";

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <View style={style.container}>
      <Text style={style.text}>TODO APP</Text>
    </View>
  );
};

export default Header;

const style = StyleSheet.create({
  container: {
    backgroundColor: "#268078",
    paddingTop: 40,
    paddingBottom: 10,
  },
  text: {
    textAlign: "center",
    color: "white",
    fontFamily: "nunito-bold",
  },
});
