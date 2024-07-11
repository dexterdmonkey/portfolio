import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

interface Pokemon {
  name: string;
  url: string;
}

interface ApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

const PokemonListPage: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [nextUrl, setNextUrl] = useState<string | null>(null);
  const [prevUrl, setPrevUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPokemons = async (url: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get<ApiResponse>(url);
      setPokemonList(response.data.results);
      setNextUrl(response.data.next);
      setPrevUrl(response.data.previous);
    } catch (err) {
      setError("Failed to fetch Pokemon list");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemons("https://pokeapi.co/api/v2/pokemon/");
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Pokemon List</h1>
      {loading && <div className="text-center text-blue-500">Loading...</div>}
      {error && <div className="text-center text-red-500">{error}</div>}
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">No</th>
            <th className="py-2 px-4 border-b">Name</th>
          </tr>
        </thead>
        <tbody>
          {pokemonList.map((pokemon, index) => (
            <tr key={pokemon.name}>
              <td className="py-2 px-4 border-b text-center">
                <NavLink to={`/dashboard/pokemon/${pokemon.name}`}>
                  {index + 1}
                </NavLink>
              </td>
              <td className="py-2 px-4 border-b text-center">
                <NavLink to={`/dashboard/pokemon/${pokemon.name}`}>
                  {pokemon.name}
                </NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex content-end mt-4 gap-4 w-full">
        {prevUrl && (
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={() => fetchPokemons(prevUrl)}
            disabled={loading}
          >
            {loading ? "Loading..." : "Previous"}
          </button>
        )}
        {nextUrl && (
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={() => fetchPokemons(nextUrl)}
            disabled={loading}
          >
            {loading ? "Loading..." : "Next"}
          </button>
        )}
      </div>
    </div>
  );
};

export default PokemonListPage;
