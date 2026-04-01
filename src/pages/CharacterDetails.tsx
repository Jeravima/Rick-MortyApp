import { useEffect, useState } from "react";
import { Personaje } from "../hooks/useApi";
import { useParams } from "react-router";

export const CharacterDetails = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState<Personaje | null>(null);
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => setCharacter(data));
    setLoading(false);
  }, [id]);

  return (
    <>
      <div className="flex justify-center ">
        {loading ? (
          <p>Cargando...</p>
        ) : (
          <div className="flex flex-col items-center  max-w-xl rounded-lg shadow-lg overflow-hidden sm:flex-row justify-center mt-10">
            <img
              src={character?.image}
              alt={character?.name}
              className="w-full sm:w-1/2 object-cover "
            />
            <div className="w-full  p-2 sm:p-4 ">
              <h2 className="font-extrabold text-3xl">{character?.name}</h2>
              <p>Especie: {character?.species}</p>
              <p>Estado: {character?.status}</p>
              <p>Genero: {character?.gender}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
