import React from "react";
import { StatusBar, useColorScheme } from "react-native";
import Routes from "./src/routes";

export default function App() {
  const theme = useColorScheme() === 'light' ? "dark-content" : "light-content";

  return <>
    <StatusBar
      barStyle={theme}
      translucent={true}
      backgroundColor={"transparent"}
    />
    <Routes />
  </>
};
