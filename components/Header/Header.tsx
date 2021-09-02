import React from "react";
import { StyleSheet, Text, View } from "react-native";

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.headerText}>HEADER</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
  },
});
