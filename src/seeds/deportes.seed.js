const mongoose = require("mongoose");

const Deportes = require("../api/models/deportes.model");

const DB_URL= process.env.DB_URL
const arrayDeportes = [
  {
    nombre: "Fútbol",
    intensidad: "Alta",
    material: "Balón",
    lugar: "Campo de fútbol",
  },
  {
    nombre: "Natación",
    intensidad: "Moderada",
    material: "Traje de baño, gafas",
    lugar: "Piscina",
  },
  {
    nombre: "Ciclismo",
    intensidad: "Moderada",
    material: "Bicicleta",
    lugar: "Carretera o pista de ciclismo",
  },
  {
    nombre: "Tenis",
    intensidad: "Moderada",
    material: "Raqueta, pelotas",
    lugar: "Pista de tenis",
  },
  {
    nombre: "Baloncesto",
    intensidad: "Alta",
    material: "Balón",
    lugar: "Cancha de baloncesto",
  },
  {
    nombre: "Yoga",
    intensidad: "Baja",
    material: "Tapete de yoga",
    lugar: "Estudio de yoga o en casa",
  },
  {
    nombre: "Escalada",
    intensidad: "Alta",
    material: "Arnés, cuerdas, mosquetones",
    lugar: "Pared de escalada o rocas",
  },
  {
    nombre: "Golf",
    intensidad: "Baja",
    material: "Palos de golf, pelotas",
    lugar: "Campo de golf",
  },
  {
    nombre: "Atletismo",
    intensidad: "Variable",
    material: "Depende del evento (zapatillas, vallas, etc.)",
    lugar: "Pista de atletismo",
  },
  {
    nombre: "Paddleboarding",
    intensidad: "Moderada",
    material: "Tabla de paddle, remo",
    lugar: "Agua tranquila (mar, lago, río)",
  },
];

mongoose
  .connect(DB_URL)
  .then(async () => {
    const allDeportes = await Deportes.find();
    if (allDeportes.length > 0) {
      await Deportes.collection.drop();
      console.log("Deportes borradas");
    }
  })
  .catch((error) => console.log("error borrando deportes", error))
  .then(async () => {
    const deportesMap = arrayDeportes.map((deportes) => new Deportes(deportes));
    await Deportes.insertMany(deportesMap);
    console.log("Deportes insertados correctamente");
  })
  .catch((error) => console.log("error insertando deportes", error))
  .finally(() => mongoose.disconnect());
