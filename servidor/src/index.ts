import express from "express";

const app = express();
const PORT = 3000

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Servidor ativo na porta ${PORT}`);
});

app.get("/", (req, res) => {
    res.send("Olá, Mundo!");
});