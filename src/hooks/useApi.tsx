import { useState, useEffect } from "react";

interface Personaje {
  id: number;
  name: string;
  image: string;
  gender: string;
}

interface APIResponse {
  results: Personaje[];
}
export const useApi = () => {
  const [character, setCharacter] = useState<Personaje[]>([]);
  const [nextPage, setNextPage] = useState<number>(1);
  const [loading, setLoading] = useState(true);

  const url = `https://rickandmortyapi.com/api/character?page=${nextPage}`;

  useEffect(() => {
    const getData = async () => {
      try {
        const respon = await fetch(url);
        const data: APIResponse = await respon.json();
        setCharacter(data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [nextPage]);

  const handleNexPage = () => {
    setNextPage((prev) => prev + 1);
  };

  return {
    character,
    handleNexPage,
    loading,
  };
};
