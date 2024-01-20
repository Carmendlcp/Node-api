const express = require("express");

const {
  getDeportes,
  postDeportes,
  putDeportes,
  deleteDeportes,
} = require("../controllers/deportes.controllers");

const deportesRoutes = express.Router();

deportesRoutes.get("/", getDeportes);
deportesRoutes.post("/", postDeportes);
deportesRoutes.put("/:id", putDeportes);
deportesRoutes.delete("/:id", deleteDeportes);
module.exports = deportesRoutes;
