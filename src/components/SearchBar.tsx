import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";

export const SearchBar = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name") ?? "";
  const [inputValue, setInputValue] = useState(name);

  //Fn para llenar el inputValue con el value
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
       navigate(`/?page=1&name=${inputValue.trim()}`);
    } else {
      navigate('/?page=1')
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-50 rounded-xl p-2 border dark:bg-gray-100 dark:text-black "
          placeholder="Escribe un nombre..."
          onChange={handleChange}
          value={inputValue}
        />

        <button className="rounded-lg w-20 h-9 ml-5 hover:bg-green-500 cursor-pointer p-1 bg-green-400 text-black" onClick={handleSubmit}>Buscar</button>
      </form>
    </div>
  );
};
