import React from "react";
import { Text, View } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";

export interface NewTodoProps {
  navigation: NavigationStackProp;
}

const NewTodo: React.FC<NewTodoProps> = ({ navigation }) => {
  return (
    <View>
      <Text>New TODO</Text>
    </View>
  );
};

export default NewTodo;
