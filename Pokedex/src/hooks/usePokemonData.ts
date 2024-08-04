import { useQuery } from "@tanstack/react-query";
import { apiPokemon } from "../apis/apiPokemon";

const usePokemonData = () => {
  const query = useQuery({
    queryKey: ['searchPokemonAll'],
    queryFn: () => apiPokemon.getPokemonAll(),
  });

  return query;
};

export default usePokemonData;