import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { TItem } from "../../models/Todo";
import { MaterialIcons } from "@expo/vector-icons";
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
            <View style={style.item}>
              <MaterialIcons name="delete" size={20} color={"#333"} />
              <Text style={style.itemText}>{item.title}</Text>
            </View>
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
    flexDirection: "row",
    alignItems: "center",
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
  itemText: {
    marginLeft: 20,
    fontFamily: "nunito-regular",
  },
});
