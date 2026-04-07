import { Card } from "../components/Card";
import { Pagination } from "../components/Pagination";
import { useApi } from "../hooks/useApi";

export const Home = () => {
  const { character, loading } = useApi();

  return (
    <>
      <div className="flex flex-col w-full justify-center items-center ">
        <div>
          {loading ? (
            <p>Cargando...</p>
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
