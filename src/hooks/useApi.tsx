import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";

export interface Personaje {
  id: number;
  name: string;
  image: string;
  gender: string;
  species: string;
  status: string;
}

interface APIResponse {
  results: Personaje[];
}

export const useApi = () => {
  const [searchParams] = useSearchParams();

  const [error, setError] = useState<string | null>(null);

  const currentPage = Number(searchParams.get("page") ?? "1");
  const name = searchParams.get("name");

  const [character, setCharacter] = useState<Personaje[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let url = `https://rickandmortyapi.com/api/character?page=${currentPage}`;

    if (name) {
      url += `&name=${name}`;
    }

    const getData = async () => {

      try {
        const response = await fetch(url);

        if (!response.ok) {
          if (response.status === 404) {
            setError("No se encontraron personajes con ese nombre");
            setCharacter([]); 
            return;
          }
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        setLoading(true);

        const data: APIResponse = await response.json();

        setCharacter(data.results);
        
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [currentPage, name]);

  return {
    character,
    loading,
    error,
  };
};
