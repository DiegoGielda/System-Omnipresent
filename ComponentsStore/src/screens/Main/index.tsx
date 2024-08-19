import React from "react";
import { Button, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

const Main = () => {
  const navigation = useNavigation();

  return <>
    <View>
      <Button
        title="Acessar Lista de UF"
        onPress={() => { navigation.navigate("UFList") }}
      />
    </View >
  </>
};

export default Main;