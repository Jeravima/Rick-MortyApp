import { Card } from "../components/Card";
import banner from "../assets/rick_morty_banner.webp";
import { useApi } from "../hooks/useApi";

export const Home = () => {
  const { character, handleNexPage, loading } = useApi();

  return (
    <>
      <div className="flex flex-col  justify-center items-center ">
        <img src={banner} alt="banner" className="min-h-10 w-full" />

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
            <div className="flex  gap-y-8 gap-x-4 flex-wrap justify-center">
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
