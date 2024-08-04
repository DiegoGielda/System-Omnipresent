import React from "react";
import Routes from "./src/routes";
import { StatusBar } from "expo-status-bar";
import { useFonts } from 'expo-font';

export default function App() {

  const [fontsLoaded] = useFonts({
    'Pokemon': require('./assets/fonts/Pokemon.ttf'),
  });

  if (!fontsLoaded) {
    return undefined;
  }

  return <>
    <StatusBar style="auto" />
    <Routes />
  </>
};