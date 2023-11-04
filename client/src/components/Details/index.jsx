import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios /*(`https://rickandmortyapi.com/api/character/${id}`)*/(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div>
      <h1>Detail</h1>
      <h2>{character.name} </h2>
      <h3>{character.status}</h3>
      <h3>{character.species}</h3>
      <h3>{character.gender}</h3>
        {character.origen &&  <h3>{character.origen.name}</h3> }
      <h3>{character.origen?.name}</h3>
      <img src={character.image} alt={character.name} />
      
    </div>
  );
};

export default Detail;
 