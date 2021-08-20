import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { TItem } from "../models/Todo";

export interface ListProps {
  items: TItem[];
  removeTodo: (id: string) => void;
}

const TodoList: React.FC<ListProps> = ({ items, removeTodo }) => {
  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => removeTodo(item.id)}>
            <Text style={style.item}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default TodoList;

const style = StyleSheet.create({
  containerView: {
    flex: 1,
  },
  item: {
    textAlign: "center",
    minWidth: "100%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "rgba(50,50,50, 0.4)",
    borderRadius: 5,
  },
});
