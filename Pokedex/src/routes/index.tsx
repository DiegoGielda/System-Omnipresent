import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import ListingPokemon from "../screens/Pokemon/ListingPokemon";


export type RootStackParamList = {
  Login: undefined;
  ListingPokemon: undefined;
};

const queryClient = new QueryClient()
const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes = () => {
  return <>
    <QueryClientProvider client={queryClient}>
      <NavigationContainer >
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ListingPokemon" component={ListingPokemon} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  </>
};

export default Routes;