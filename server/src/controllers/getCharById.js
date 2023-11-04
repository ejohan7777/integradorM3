const axios = require("axios");

exports.getCharById = (res, id) => {

    //HACEMOS PETICION A LA APPI:
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response)=>{
    
        const ch = response.data;

        
            return{
                id,
                name: ch.name,
                gender: ch.gender,
                species: ch.species,
                origin: ch.origin.name,
                image: ch.image,
                status: ch.status 
            };
    })
    .then((response)=>{
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify(response));    
    })
    .catch((reason)=>{
        res.writeHead(500, {"Content-Type:": "text/plain"});
        res.end(reason.response.data.error)
    })
    
}
