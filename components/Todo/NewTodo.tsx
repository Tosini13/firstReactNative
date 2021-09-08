import { gql, useQuery } from "@apollo/client";
import React from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";

type MISSIONS_RESULT_QUERY = {
  launchesPast: Array<{
    id: string;
    mission_name: string;
    rocket: {
      rocket_name: string;
    };
    ships: Array<{
      name: string;
      id: string;
    }>;
  }>;
};

const GET_MISSIONS_QUERY = gql`
  query {
    launchesPast(limit: 2) {
      id
      mission_name
      rocket {
        rocket_name
      }
      ships {
        name
        id
      }
    }
  }
`;

export interface NewTodoProps {
  navigation: NavigationStackProp;
}

const NewTodo: React.FC<NewTodoProps> = ({ navigation }) => {
  const { loading, data, error } =
    useQuery<MISSIONS_RESULT_QUERY>(GET_MISSIONS_QUERY);
  console.log("loading", loading);
  console.log("data", data);
  console.log("error", error);
  console.log("result", data?.launchesPast);

  if (loading) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>New TODO</Text>
      <FlatList
        data={data?.launchesPast}
        renderItem={({ item: mission }) => (
          <View key={mission.id}>
            <Text style={style.itemText}>{mission.mission_name}</Text>
            <Text>{mission.rocket.rocket_name}</Text>
            <FlatList
              data={mission.ships}
              renderItem={({ item: ship }) => (
                <View key={ship.id}>
                  <Text>{ship.name}</Text>
                </View>
              )}
            />
          </View>
        )}
      />
    </View>
  );
};

export default NewTodo;

const style = StyleSheet.create({
  itemText: {
    marginLeft: 20,
    fontFamily: "nunito-regular",
  },
});
