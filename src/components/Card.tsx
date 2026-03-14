
interface CardProps{
    id: number 
    name: string
    gender: string
    image: string
}

export const Card = ({id, name,gender,image}:CardProps) => {
  return (
    <div key={id} className="bg-white shadow-2xl p-3">
        <img src={image} alt={name} loading="lazy" />
        <h2 className="font-bold text-xl">{name}</h2>
        <p>Gender: {gender}</p>
    </div>
  )
}
