const express = require("express");
const dotenv = require("dotenv")
dotenv.config()

const {connect} = require("./src/utils/db")

const deportesRoutes = require("./src/api/routes/deportes.routes")
const gimnasiosteRoutes = require("./src/api/routes/gimnasios.routes")
const PORT = process.env.PORT;

const app = express();

connect();

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/deportes", deportesRoutes)
app.use("/gimnasios", gimnasiosteRoutes)

app.listen(PORT, () =>
  console.log(`escuchando en el puerto http://localhost:${PORT}`)
);
