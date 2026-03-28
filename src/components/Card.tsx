import { useNavigate } from "react-router";

interface CardProps {
  id: number;
  name: string;
  gender: string;
  image: string;
}

export const Card = ({ id, name, gender, image }: CardProps) => {
  const navigate = useNavigate();

  const handleDetails = () => {
    navigate(`/characterdetails/${id}`);
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
        <p>Gender: {gender}</p>
      </div>
    </div>
  );
};
