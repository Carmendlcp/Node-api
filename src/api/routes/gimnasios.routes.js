const express = require("express");

const {
  getGym,
  postGym
} = require("../controllers/gimnasios.controllers");

const gymRoutes = express.Router();

gymRoutes.get("/", getGym);
gymRoutes.post("/", postGym);

module.exports = gymRoutes;
