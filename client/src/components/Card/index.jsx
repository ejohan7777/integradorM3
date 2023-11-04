import container from './styles.module.css';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { addFav, removeFav } from '../../redux/actions';


export default function Card(props) {
   const dispatch = useDispatch();
   const myFavorites = useSelector((state)=> state.myFavorites);
   //Uso useLocation con parthname para quitar la "x" de la carta cuando esta en favoritos
   const { pathname } = useLocation();
   // // //
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
       if(isFav){
         setIsFav(false);
         dispatch(removeFav(id));
       }else{
         setIsFav(true);
         dispatch(addFav({name, image, onClose}));
       }
   }

   useEffect(()=>{
      myFavorites?.forEach((fav)=>{
         if (fav.id === id){
            setIsFav(true);
         }
      });
   },[myFavorites]); 

   const { onClose, name, status, species, gender, origin, image, id} = props;

   return (

  

      <div className={container.container}>


      {// Fragmento de codigo pegado del readme REDUX-REACT I
         isFav ? (
            <button onClick={handleFavorite}>❤️</button>
         ) : (
            <button onClick={handleFavorite}>🤍</button>
         )
      }

      {
         pathname !== '/favorites'
         ?
          <button className={container.button} onClick={()=> onClose(id)}>X</button>
         : ""

      } 
       

        
         <Link to={`/detail/${id}`} >
          <h3 className={container.titulo}>{name}</h3>
         </Link>
     
         <h2>{status} </h2>
         <h2>{species} </h2> 
         <h2>{gender} </h2>
         <h2 className={container.origin}>{origin} </h2>
         <img className={container.imagen} src={image} alt='' />
         </div>
   );
}
