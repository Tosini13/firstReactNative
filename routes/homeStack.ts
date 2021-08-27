import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../components/Home/Home";
import Todo from "../components/Todo/Todo";

const screens = {
  Todo: {
    screen: Todo,
  },
  Home: {
    screen: Home,
  },
};

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);
