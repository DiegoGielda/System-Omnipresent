import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "../screens/Main";
import UFList from "../screens/UFList";

export type RootStackParamList = {
  Main: undefined;
  UFList: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes = () => {
  return <>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="UFList" component={UFList} />
      </Stack.Navigator>
    </NavigationContainer>
  </>
};

export default Routes;