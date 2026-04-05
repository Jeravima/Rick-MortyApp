import { useNavigate } from "react-router";

interface CardProps {
  id: number;
  name: string;
  image: string;
}

export const Card = ({ id, name, image }: CardProps) => {
  const navigate = useNavigate();

  const handleDetails = () => {
    navigate(`/character/${id}`);
  };
  return (
    <div
      key={id}
      className="bg-white shadow-2xl w-full sm:w-70 hover:scale-105 transition cursor-pointer"
      onClick={handleDetails}
    >
      <img src={image} alt={name} loading="lazy" className="w-full" />
      <div className="p-1">
        <h2 className="font-bold text-xl">{name}</h2>
      </div>
    </div>
  );
};
