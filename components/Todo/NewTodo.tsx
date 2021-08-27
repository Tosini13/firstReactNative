import React from "react";
import { Button, Text, View } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";

export interface NewTodoProps {
  navigation: NavigationStackProp;
}

const NewTodo: React.FC<NewTodoProps> = ({ navigation }) => {
  return (
    <View>
      <Button title="Go to TODO" onPress={() => navigation.navigate("TODO")} />
      <Text>New TODO</Text>
    </View>
  );
};

export default NewTodo;
