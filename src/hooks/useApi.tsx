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

// import { useState, useEffect } from "react";
// import { useSearchParams } from "react-router";

// export interface Personaje {
//   id: number;
//   name: string;
//   image: string;
//   gender: string;
//   species: string;
//   status: string;
// }

// interface APIResponse {
//   results: Personaje[];
//   info?: {
//     count: number;
//     pages: number;
//     next: string | null;
//     prev: string | null;
//   };
// }

// export const useApi = () => {
//   const [searchParams] = useSearchParams();
//   const currentPage = Number(searchParams.get("page") ?? "1");
//   const name = searchParams.get("name");

//   const [character, setCharacter] = useState<Personaje[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null); // ✅ Nuevo estado

//   useEffect(() => {
//     let url = `https://rickandmortyapi.com/api/character?page=${currentPage}`;

//     if (name) {
//       url += `&name=${name}`;
//     }

//     const getData = async () => {
//       try {
//         setLoading(true);
//         setError(null); // ✅ Resetea el error al iniciar

//         const response = await fetch(url);

//         // ✅ Maneja errores HTTP

//         const data: APIResponse = await response.json();

//         // ✅ Maneja resultados vacíos (por si acaso)
//         if (!data.results || data.results.length === 0) {
//           setError("No hay resultados disponibles");
//           setCharacter([]);
//           return;
//         }

//         setCharacter(data.results);
//       } catch (error) {
//         console.error("Error fetching data:", error);

//         // ✅ Distingue entre error de red y error de la API
//         if (error instanceof Error) {
//           setError(error.message);
//         } else {
//           setError("Error de conexión. Verifica tu internet.");
//         }
//         setCharacter([]); // ✅ Limpia en caso de error
//       } finally {
//         setLoading(false); // ✅ Siempre actualiza loading
//       }
//     };

//     getData();
//   }, [currentPage, name]);

//   return {
//     character,
//     loading,
//     error, // ✅ Retorna el error
//   };
// };
