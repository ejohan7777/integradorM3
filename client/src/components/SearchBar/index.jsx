import React, { useState } from "react";

export default function SearchBar({onSearch}) {
   //const { onSearch } = props;

const [id, setId] = useState("");   

const handleChange =(e) =>{
   setId(e.target.value);


}

   return (
      <div style={{
      
         height: 80,
         display: 'flex',
         justifyContent: 'end',
         alignItems: 'center',
         }}>
         <input
         type='search' 
         value={id}
         onChange={handleChange}

         style={{
            height:40,
            width: 250,
            borderRadius: 10,
            marginRight:20,
         
         }} />
         <button onClick={() => { onSearch(id); setId(''); }}
         style={{
            height:40,
            width:100,
            borderRadius: 10,
         }}>Agregar</button> 
         <button 
         style={{
            height:40,
            width:100,
            borderRadius: 10,
         }}>Aletorio</button>
      </div>
   );
}
