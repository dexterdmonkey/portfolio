import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
}

const PokemonDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPokemon = async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get<Pokemon>(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      setPokemon(response.data);
    } catch (err) {
      setError("Failed to fetch Pokemon details");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!id) {
      setError("ID not found");
      setLoading(false);
      return;
    }

    fetchPokemon(id);
  }, [id]);

  if (loading) {
    return <div className="text-center text-blue-500">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (!pokemon) {
    return (
      <div className="text-center text-red-500">No Pokemon data found</div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{pokemon.name}</h1>
      <p>
        <strong>ID:</strong> {pokemon.id}
      </p>
      <p>
        <strong>Base Experience:</strong> {pokemon.base_experience}
      </p>
      <p>
        <strong>Height:</strong> {pokemon.height}
      </p>
      <p>
        <strong>Default:</strong> {pokemon.is_default ? "Yes" : "No"}
      </p>
      <p>
        <strong>Order:</strong> {pokemon.order}
      </p>
      <p>
        <strong>Weight:</strong> {pokemon.weight}
      </p>
      <button
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
    </div>
  );
};

export default PokemonDetailPage;
