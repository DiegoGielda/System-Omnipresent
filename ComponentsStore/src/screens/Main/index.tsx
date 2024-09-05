import React from "react";
import { Button, useColorScheme, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from "react-native-safe-area-context";

const Main = () => {
  const navigation = useNavigation();

  const colorScheme = useColorScheme();
  const themeTextStyle = colorScheme === 'light' ? "#d0d0c0" : "#242c40";

  return <>
    <SafeAreaView style={{ flex: 1, backgroundColor: themeTextStyle, }}>
      <Button
        color={"green"}
        title="Acessar Lista de UF"
        onPress={() => { navigation.navigate("UFList") }}
      />
    </SafeAreaView >
  </>
};

export default Main;