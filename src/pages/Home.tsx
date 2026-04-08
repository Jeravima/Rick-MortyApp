import { Card } from "../components/Card";
import { Pagination } from "../components/Pagination";
import { useApi } from "../hooks/useApi";

export const Home = () => {
  const { character, loading ,error} = useApi();

  if(error){
    return (
      <div className="text-center p-4">
        <p className="text-red-500 font-semibold">{error}</p>
        <p className="text-gray-500 text-sm mt-2">
          Intenta con otro nombre o verifica tu búsqueda
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col w-full justify-center items-center ">
        <div>
          {loading ? (
            <p>Cargando personajes...</p>
          ) : (
            <div className="flex  gap-y-8 gap-x-4 flex-wrap justify-center">
              {character.map((person) => (
                <div key={person.id}>
                  <Card
                    id={person.id}
                    image={person.image}
                    name={person.name}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <Pagination />
      </div>
    </>
  );
};
