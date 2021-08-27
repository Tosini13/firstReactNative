import React from "react";
import { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import Navigator from "./routes/homeStack";

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

  return <Navigator />;
}
