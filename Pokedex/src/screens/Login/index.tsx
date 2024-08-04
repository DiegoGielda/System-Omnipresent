import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';
import { Button, Text, View } from "react-native";
import styles from "./styles";

const Login = () => {
  const navigation = useNavigation();

  return <>
    <SafeAreaView style={styles.viewEdge}>
      <Button
        title="Acessar Pokédex"
        onPress={() => { navigation.navigate("ListingPokemon") }}
      />
    </SafeAreaView>
  </>
};

export default Login;