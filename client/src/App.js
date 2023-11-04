import './App.css';
import Cards from './components/Cards';
import SearchBar from './components/SearchBar';
//import characters from './data.js';
import Nav from './components/Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About';
import Detail from './components/Details';
import Form from './components/Form';
import Favorites from './components/Favorites';

function App() {

   const [characters, setCharacters] = useState([]);
   const { pathname } = useLocation();
   console.log("path", pathname);
   const navigate = useNavigate();

   const [access, setAccess] = useState(false)
   //FAKE DB
   const email = 'na@mail.com'
   const password = 'hola1234'

   const login = (userData)=>{
      if (userData.email === email && userData.password === password){
         setAccess(true)
         navigate('/home')
      }else{
         alert("Usuario o contraseña incorrectos")
      }
   }

   const onSearch = async (id) => {

      //
      const find = characters.find((character) => character.id === +id);
      console.log('find', find);
      if (find) return window.alert("¡Este personaje ya fue agregado!");


   try{
      const response = await axios (`http://localhost:3001/rickandmorty/character/${id}`);  //(`https://rickandmortyapi.com/api/character/${id}`);
      const data = response.data;

      if(data.name){
         setCharacters([...characters, data])
      }else {
         window.alert("¡No hay personajes en este id!");
      }

   } catch (error){
      console.log('error en api ', error);
   }
    
   };

   const onClose = (id)=> {

   const response = characters.filter((character) => character.id !== id);
   setCharacters(response);
   }

   //no permite que el usuario vea nada sin haberse logueado primero
   useEffect(()=>{
      !access && navigate ("/");
   }, [access]);

   const random = (id) => {
      const randomId = Math.floor(Math.random() * 825) + 1;
      onSearch(randomId);
   }

   return (
      <div className='App'>
       {pathname !== '/' && <Nav onSearch={onSearch} />}
        {/*<Cards
         characters={characters}
         onClose={onClose}
         />*/}
         <Routes>
         <Route path='/favorites' element={ <Favorites/> } />
         <Route path='/' element={ <Form login={login} /> } />
            <Route path='/home' 
               element={
                  <Cards characters={characters} onClose={onClose}/>
               }
            />
             <Route path='/about' element={ <About/> } />
             <Route path='/detail/:id' element={ <Detail/> } />
             <Route path='*' element={ <h1>404 Not Fount </h1> } />
         </Routes>
      </div>
   );
}

export default App;
