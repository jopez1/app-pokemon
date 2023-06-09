const pokemonRouter = require("express").Router();
const { Pokemon, Type } = require("../db");
const { validate } = require("uuid");
const { getPokemonTypesFromDb } = require("../utils/helpers");
const getPokemonData = require("../controllers/getPokemonData");
const getPokemonById = require("../controllers/getPokemonById");
const getPokemonByName = require("../controllers/getPokemonByName");

pokemonRouter.post("/", async (req, res) => {
  try {
    const { name, image, hp, attack, defense, speed, height, weight, types } =
      req.body;

    // find type ids on db
    const filteredDbTypes = (await Type.findAll()).filter((type) =>
      types.includes(type.name)
    );
    const typeIds = filteredDbTypes.map((type) => type.id);
    console.log(typeIds);

    // association
    if (!typeIds.length)
      throw Error(`La tabla de tipos debe inicializarse antes que la tabla de Pokémon.`);

    const newPokemon = await Pokemon.create({
      name,
      image,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
    });
    await newPokemon.addTypes(typeIds);

    res.status(200).json({ ...newPokemon.dataValues, types: types });
  } catch (error) {
    res.status(404).json(error.message);
  }
});
pokemonRouter.get("/", async (req, res) => {
  let { name } = req.query;
  try {
    // no query
    if (!name) {
      const allPokemons = await getPokemonData();
      return res.status(200).json(allPokemons);
    }
    // query
    const pokemon = await getPokemonByName(name);
    if (!pokemon) throw Error(`No hay algun pokemon con el nombre "${name}".`);
    return res.status(200).json(pokemon);
  } catch (error) {
    res.status(404).send(error.message);
  }
});
pokemonRouter.get("/:idPokemon", async (req, res) => {
  const { idPokemon } = req.params;
  try {
    // first i have to validate the UUID
    if (validate(idPokemon)) {
      // in db?
      const pokemonInDb = await Pokemon.findByPk(idPokemon);

      if (pokemonInDb) {
        const pokemonTypes = await getPokemonTypesFromDb(pokemonInDb);
        console.log(pokemonTypes);
        return res
          .status(200)
          .json({ ...pokemonInDb.dataValues, types: pokemonTypes });
      }
    }
    if (!parseInt(idPokemon)) throw Error(`ID debe ser un número entero o un UUID.`);
    // in api?
    const pokemonInApi = await getPokemonById(idPokemon);
    if (!pokemonInApi)
      throw Error(`El pokemon con ID ${idPokemon} no existe.`);
    return res.status(200).json(pokemonInApi);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = pokemonRouter;
