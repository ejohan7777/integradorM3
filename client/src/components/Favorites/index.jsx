import { useSelector } from "react-redux";
import Card from "../Card";

const Favorites = () => {
    const { myFavorites } = useSelector((state)=> state);
    return(
        <div>
            {
                myFavorites?.map((favorite)=>{
                    return(
                        <Card
                            key={favorite.id}
                            id={favorite.id}
                            name={favorite.name}
                            image={favorite.image}
                        />
                    )
                })
            }
           
        </div>
    )
}

export default Favorites;