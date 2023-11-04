import React from 'react';
import SearchBar from '../SearchBar';
import { Link } from 'react-router-dom';

const Nav = ({onSearch}) => {
  return (
    <div>
         <SearchBar
         //onSearch={(characterID) => window.alert(characterID)}
          onSearch ={onSearch} />
          <Link to={'/home'}> 
          <button>Home</button>
          </Link>
          <Link to={'/about'} > 
          <button>About</button>
          </Link>
          <Link to={'/favorites'} > 
          <button>Favorites</button>
          </Link>
          
    </div>
  )
}

export default Nav;