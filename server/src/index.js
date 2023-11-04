//importar http
const http = require("http");
const PORT = 3001;
//const characters = require("./utils/data");

const {getCharById} = require("./controllers/getCharById.js")

//crear servidor
http.createServer(

//levantar servidor: 
    // ¡para hacer esto debes crear una callback!
(req, res)=>{
        //CREAR MIDDLEWARE
        res.setHeader("Access-Control-Allow-Origin", "*");
    
        const {url} =req;
        /*if(url.includes("/rickandmorty/character")){
            const id = Number(url.split("/").pop());
            const character = characters.find((char)=> char.id === id);

            res.writeHead(200, { "Content-Type": "application/json"});
            res.end(JSON.stringify(character));
        }
        */

        if(url.includes("/rickandmorty/character")){
            let urlArray= url.split("/"); //['rickandmorty', 'character', '5']
            let id = Number(urlArray.pop());
            getCharById(res, id)
        }

//por fuera del parentesis para levantar el server coloca el listen y el puerto: 
})
.listen(PORT, "localhost");