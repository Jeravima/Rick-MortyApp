import { useEffect, useState } from "react";
import { Card } from "./components/Card";

interface Personaje {
  id: number;
  name: string;
  image: string;
  gender: string;
}

interface APIResponse {

  results: Personaje[];
}

export const RickApp = () => {
  const [character, setCharacter] = useState<Personaje[]>([]);
  const [nextPage, setNextPage] = useState<number>(1)
  const [loading, setLoading] = useState(true)

  const url = `https://rickandmortyapi.com/api/character?page=${nextPage}`;

  useEffect(() => {
    const getData = async () => {
      try {
        const respon = await fetch(url);
        const data: APIResponse = await respon.json();
        setCharacter(data.results);
        setLoading(false)
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [nextPage]);

 const handleNexPage = () =>{
    setNextPage((prev)=> prev +1)
 }



  return (
    <>
      <div className="flex flex-col m-5 justify-center items-center ">
        <h1 className="text-4xl font-bold mb-10">Rick and Morty App</h1>
        <button
          className="bg-blue-400 cursor-pointer hover:bg-blue-500 rounded font-semibold text-black p-2"
          onClick={handleNexPage}
        >
          Next
        </button>

        <div>
          {loading ? (
            <p>Cargando...</p>
          ) : (
            <div className="flex  gap-4 flex-wrap justify-center">
              {character.map((person) => (
                <div key={person.id}>
                  <Card
                    id={person.id}
                    image={person.image}
                    name={person.name}
                    gender={person.gender}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
