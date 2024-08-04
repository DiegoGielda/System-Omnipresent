import api from ".";
import IPokemon from "../interfaces/IPokemon";

const getPokemonAll = async (): Promise<IPokemon[]> => {
  const response = await api.get(`/pokemon`);
  
  return response.data.results;
};

export const apiPokemon = {
  getPokemonAll,
};
