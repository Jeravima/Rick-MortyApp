import { useState } from "react";
import { useSearchParams } from "react-router";

export const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
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
      setSearchParams({ page: "1", name: inputValue.trim() });
    } else {
      setSearchParams({ page: "1" });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-sm rounded-xl p-2 border "
          placeholder="Escribe un nombre..."
          onChange={handleChange}
          value={inputValue}
        />
      </form>
    </div>
  );
};
