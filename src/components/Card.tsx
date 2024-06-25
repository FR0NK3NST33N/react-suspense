import { gql, useQuery, useSuspenseQuery } from "@apollo/client";

type Pokemon = {
  id: number;
  name: string;
  pokemon_v2_pokemonsprites: {
    sprites: {
      front_default: string;
    };
  }[];
};

const query = gql`
  query GetPokemon($id: Int!) {
    pokemon_v2_pokemon(where: { id: { _eq: $id } }) {
      id
      name
      pokemon_v2_pokemonsprites(limit: 1) {
        sprites
      }
    }
  }
`;

export const Card = ({ id }: { id: number }) => {
  const { data } = useQuery<{ pokemon_v2_pokemon: Pokemon[] }>(query, {
    variables: { id },
  });

  return (
    <div className="bg-slate-700 rounded-lg shadow-lg overflow-hidden w-64">
      <div className="relative">
        <img
          src={
            data?.pokemon_v2_pokemon[0].pokemon_v2_pokemonsprites[0].sprites
              .front_default
          }
          alt="Pokémon"
          width={300}
          height={300}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-2 right-2 bg-muted px-2 py-1 rounded-md text-xs text-muted-foreground">
          #00{data?.pokemon_v2_pokemon[0].id}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-center mb-2">
          {data?.pokemon_v2_pokemon[0].name}
        </h3>
      </div>
    </div>
  );
};
