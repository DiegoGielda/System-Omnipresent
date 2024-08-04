import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Text } from "react-native";
import styles from "./styles";
import usePokemonData from "../../../hooks/usePokemonData";
import IPokemon from "../../../interfaces/IPokemon";

const ListingPokemon = () => {

  const { data: dataPokemonAll } = usePokemonData();

  const renderItemPokemonAll = ({ item }: { item: IPokemon }) => {
    return <>
      <Text>{item.name}</Text>
    </>
  };

  return <>
    <SafeAreaView style={styles.viewEdge}>
      <Text style={styles.textTitle}>Pokédex</Text>
      <FlatList
        data={dataPokemonAll}
        renderItem={renderItemPokemonAll}
      />

    </SafeAreaView>
  </>
};

export default ListingPokemon;