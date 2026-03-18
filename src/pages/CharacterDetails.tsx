import { useEffect, useState } from "react"
import { Personaje } from "../hooks/useApi"
import { useParams } from "react-router"


export const CharacterDetails = () => {
    const {id } = useParams()

    const [character, setCharacter] = useState<Personaje | null>(null)

   useEffect(() => {
     fetch(`https://rickandmortyapi.com/api/character/${id}`)
       .then((res) => res.json())
       .then((data) => setCharacter(data));
     
   }, [id])
   
  return (
    <>
    <div>
        <img src={character?.image} alt={character?.name} />
        <h2>{character?.name}</h2>
        <p>{character?.species}</p>
        <p>{character?.status}</p>
        <p>{character?.gender}</p>
    </div>
    {}
    
    
    </>
  )
}
