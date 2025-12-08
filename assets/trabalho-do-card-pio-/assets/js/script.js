//============servidor funcionando=======================
const express = require('express');
const app = express();
const port = 3000;

// Rota principal
app.get('/', (req, res) => {
    res.send("servidor rodando");
});

//============rota da PokeAPI=============================
app.get('/tipo/:nomeTipo', async (req, res) => {
    try {
        const tipo = req.params.nomeTipo;

        // 1. pegar todos os pokémons desse tipo
        const response = await fetch(`https://pokeapi.co/api/v2/type/${tipo}`);
        const data = await response.json();

        // 2. pegar apenas 12
        const primeiros12 = data.pokemon.slice(0, 12);

        // 3. buscar detalhes de cada pokémon
        const detalhes = await Promise.all(
            primeiros12.map(async (p) => {
                const respPokemon = await fetch(p.pokemon.url);
                const dadosPokemon = await respPokemon.json();

                return {
                    id: dadosPokemon.id,
                    nome: dadosPokemon.name,
                    imagem: dadosPokemon.sprites.front_default,
                    tipos: dadosPokemon.types.map(t => t.type.name),
					peso: dadosPokemon.weight,
					altura: dadosPokemon.height,
					ataque: dadosPokemon.stats[1].base_stat,
                    defesa: dadosPokemon.stats[2].base_stat
                };
            })
        );

        res.json(detalhes);

    } catch (error) {
        res.status(500).send("Erro ao buscar pokémons do tipo");
    }
});

//=========================================================


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
