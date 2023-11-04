import Card from '../Card';
import container from './styles.module.css';

export default function Cards(props) {
   const { characters, onClose } = props; //Characters es un arreglo.
   return( 
    <div className={container.container}>
      {console.log(characters)}
      {characters.map((character) => {
         return( 
      <Card 
      id={character.id}
      key={character.id}
      name={character.name}
      status={character.status} 
      species={character.species}
      gender={character.gender}
      origin={character.origin.name}
      image={character.image}
      onClose={onClose} 
      />
      );
   })}
   </div>
 );
}
