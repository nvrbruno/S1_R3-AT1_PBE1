//Importar o módulo do Express para usar suas funcionalidades 
const express = require("express")

//Cria uma instância do Express, que representa o aplicativo web
const app = express();

const PORT = 8081;

app.listen(
    PORT, ()=> {
        console.log(`Servidor de usuário rodando na porta localhost ${PORT}!`);
    }
);

