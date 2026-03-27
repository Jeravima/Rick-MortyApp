// import { useState, useEffect } from "react";

// export interface Personaje {
//   id: number;
//   name: string;
//   image: string;
//   gender: string;
//   species: string,
//   status:string
// }

// interface APIResponse {
//   results: Personaje[];
// }
// export const useApi = () => {
//   const [character, setCharacter] = useState<Personaje[]>([]);
//   const [nextPage, setNextPage] = useState<number>(1);
//   const [loading, setLoading] = useState(true);

//   const url = `https://rickandmortyapi.com/api/character?page=${nextPage}`;

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const respon = await fetch(url);
//         const data: APIResponse = await respon.json();
//         setCharacter(data.results);
//         setLoading(false);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getData();
//   }, [nextPage]);

//   const handleNexPage = () => {
//     setNextPage((prev) => prev + 1);
//   };

//   return {
//     character,
//     handleNexPage,
//     loading,

//   };
// };

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
  const [searchParams, setSearchParams] = useSearchParams();
   const currentPage = Number(searchParams.get("page") ?? "1");

  const [character, setCharacter] = useState<Personaje[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const respon = await fetch(
          `https://rickandmortyapi.com/api/character?page=${currentPage}`,
        );
        const data: APIResponse = await respon.json();
        setCharacter(data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [currentPage]);

  const handleNexPage = () => {
    setSearchParams({ page: String(currentPage + 1) });
  };

  return {
    character,
    handleNexPage,
    loading,
  };
};