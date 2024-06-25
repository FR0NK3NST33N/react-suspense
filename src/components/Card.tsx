import { useQuery } from "react-query";

type Pokemon = {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
};

const fetchPokemon = async (id: number): Promise<Pokemon> => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(
    (res) => res.json()
  );
  await new Promise((resolve) => setTimeout(resolve, 1000 * id));
  return res;
};

export const Card = ({ id }: { id: number }) => {
  const { data } = useQuery<Pokemon>(["pokemon", id], () => fetchPokemon(id), {
    suspense: true,
  });

  return (
    <div className="bg-slate-700 rounded-lg shadow-lg overflow-hidden w-64">
      <div className="relative">
        <img
          src={data?.sprites?.front_default}
          alt="Pokémon"
          width={300}
          height={300}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-2 right-2 bg-muted px-2 py-1 rounded-md text-xs text-muted-foreground">
          #00{data?.id}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-center mb-2">{data?.name}</h3>
      </div>
    </div>
  );
};
