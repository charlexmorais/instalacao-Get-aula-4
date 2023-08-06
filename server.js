const express = require("express");
const app = express();

app.use(express.json()); // Middleware para fazer o parsing do corpo da requisição como JSON

// Rota para buscar usuários
app.get("/usuarios", (req, res) => {
  const responseObject1 = {
    titulo: "JSON X XML",
    resumo: "o duelo de dois modelos de representacao de informacoes",
    ano: 2012,
    genero: "aventura, acao, ficicao",
  };

  const responseObject2 = {
    titulo: "JSON JAMES",
    resumo: "A HISTORIA DE UMA LENDA DO VELHO OESTE",
    ano: 2012,
    genero: ["WESTERN"],
  };

  res.json([responseObject1, responseObject2]);
});



app.listen(3000, () => {
  console.log("SERVER RUN:3000");
});

